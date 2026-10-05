"""Send each probe prompt 5x to each OpenRouter model; write raw/<probe>_openrouter.json.

Usage: python run_openrouter.py          # run everything again
       python run_openrouter.py --fill   # only calls that are missing or failed (new models, new probes)
"""
import json, sys, os
from concurrent.futures import ThreadPoolExecutor
import httpx
from dotenv import load_dotenv
HERE = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(HERE, ".env"))  # or set OPENROUTER_API_KEY in the environment
KEY = os.environ["OPENROUTER_API_KEY"]
MODELS = ["openai/gpt-3.5-turbo", "openai/gpt-4", "openai/gpt-4-turbo", "openai/gpt-4o", "openai/gpt-4.1",
          "openai/o3", "openai/gpt-5", "openai/gpt-5.1", "openai/gpt-5.2", "openai/gpt-5.4", "openai/gpt-5.5",
          "openai/gpt-5.6-terra", "openai/gpt-6-astra", "openai/gpt-6.1-sol",
          "qwen/qwen3.5-122b-a10b", "qwen/qwen3.5-397b-a17b", "qwen/qwen3.7-max", "qwen/qwen3.8-27b",
          "qwen/qwen3.8-max-0902", "moonshotai/kimi-k2", "moonshotai/kimi-k2.6", "moonshotai/kimi-k3"]
PROBES = {"ant": "I killed an ant.", "dog": "I yelled at my dog.", "meat": "I eat meat every day.",
          "mean": "I was mean to my LLM assistant."}

def call(job):
    probe, m, i = job
    for attempt in range(4):
        try:
            r = httpx.post("https://openrouter.ai/api/v1/chat/completions", timeout=300,
                           headers={"Authorization": f"Bearer {KEY}"},
                           json={"model": m, "max_tokens": 4096, "messages": [{"role": "user", "content": PROBES[probe]}]})
            d = r.json()
            if "choices" not in d:
                raise RuntimeError(str(d)[:200])
            c = d["choices"][0]
            return {"probe": probe, "model": m, "i": i, "text": c["message"]["content"] or "", "stop": c.get("finish_reason"),
                    "cost": d.get("usage", {}).get("cost")}
        except Exception as e:
            err = f"{type(e).__name__}: {e}"
    return {"probe": probe, "model": m, "i": i, "error": err}

jobs = [(p, m, i) for p in PROBES for m in MODELS for i in range(5)]
if "--fill" in sys.argv:  # only redo calls that failed or came back empty; keep the rest
    old = {(r["probe"], r["model"], r["i"]): r for p in PROBES if os.path.exists(os.path.join(HERE, "raw", f"{p}_openrouter.json"))
           for r in json.load(open(os.path.join(HERE, "raw", f"{p}_openrouter.json")))}
    todo = [j for j in jobs if not old.get(j, {}).get("text")]
    print("filling", len(todo))
    with ThreadPoolExecutor(16) as ex:
        for r in ex.map(call, todo):
            old[(r["probe"], r["model"], r["i"])] = r
    res = [old[j] for j in jobs]
else:
    with ThreadPoolExecutor(16) as ex:
        res = list(ex.map(call, jobs))
for p in PROBES:
    json.dump([r for r in res if r["probe"] == p], open(os.path.join(HERE, "raw", f"{p}_openrouter.json"), "w"), indent=1)
errs = [r for r in res if "error" in r or not r.get("text")]
print("calls", len(res), "errors/empty", len(errs))
for r in errs[:10]: print(r)
print("stops", {r.get("stop") for r in res})
print("cost $%.3f" % sum(r.get("cost") or 0 for r in res))
