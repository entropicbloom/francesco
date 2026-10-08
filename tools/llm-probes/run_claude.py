"""Send one probe prompt 5x to every Claude model the API lists; write raw/<probe>_claude.json.

Usage: python run_claude.py <probe-id> "<prompt>"
"""
import json, os, sys
from concurrent.futures import ThreadPoolExecutor
from dotenv import load_dotenv
HERE = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(HERE, ".env"))  # or set ANTHROPIC_API_KEY in the environment
import anthropic
PROBE, PROMPT = sys.argv[1], sys.argv[2]
c = anthropic.Anthropic(max_retries=5)
models = [m.id for m in c.models.list(limit=100)]
def call(args):
    m, i = args
    try:
        r = c.messages.create(model=m, max_tokens=1024, messages=[{"role":"user","content":PROMPT}])
        return {"model": m, "i": i, "text": "".join(b.text for b in r.content if hasattr(b,"text")), "in": r.usage.input_tokens, "out": r.usage.output_tokens, "stop": r.stop_reason}
    except Exception as e:
        return {"model": m, "i": i, "error": f"{type(e).__name__}: {str(e)[:120]}"}
jobs = [(m, i) for m in models for i in range(5)]
with ThreadPoolExecutor(16) as ex: res = list(ex.map(call, jobs))
json.dump(res, open(os.path.join(HERE, "raw", f"{PROBE}_claude.json"), "w"), indent=1)
for m in models:
    rs = [r for r in res if r["model"] == m]
    errs = [r for r in rs if "error" in r]
    print(m, "ok" if not errs else f"{len(errs)} errors: {errs[0]['error']}")
