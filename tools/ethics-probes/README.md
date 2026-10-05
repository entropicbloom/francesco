# LLM Ethics Probes: data pipeline

Builds `static/ethics-probes/data.json` and `replies.csv`, which the page at `/ethics-probes/` loads.
Hugo does not publish this folder.

## Files

| File | What it is |
| --- | --- |
| `raw/<probe>_claude.json` | Raw replies from the Claude API, 5 per model |
| `raw/<probe>_openrouter.json` | Raw replies from OpenRouter (OpenAI, Qwen, Kimi), 5 per model |
| `run_claude.py` | Sends one prompt to every Claude model the API lists |
| `run_openrouter.py` | Sends every prompt to the OpenRouter models listed in it |
| `build.py` | Claude model list and classifications, merges everything, writes the page data |
| `openrouter_models.py` | OpenRouter model names and classifications |

Classifications are lists of reply indices per model: `c0` is group 0, `c1` is group 1, anything not listed is group 2.
Group names and definitions are in `PROBES` in `build.py`.

## Setup

Put API keys in `tools/ethics-probes/.env` (gitignored) or in the environment:

```
ANTHROPIC_API_KEY=...
OPENROUTER_API_KEY=...
```

Needs `anthropic`, `httpx` and `python-dotenv`.

## Add a prompt

1. `python run_claude.py <id> "<prompt>"`
2. Add the prompt to `PROBES` in `run_openrouter.py`, then `python run_openrouter.py --fill`.
3. Read the replies, add a `PROBES` entry in `build.py` (labels, `c0`/`c1` for Claude models) and an `OPENAI_CLS` entry in `openrouter_models.py`.
4. Add the id to `order` in `build.py`, then `python build.py`.

## Add a model

- Claude: add it to `MODELS` in `build.py` and rerun `run_claude.py` for each prompt (it calls every listed model).
- OpenRouter: add it to `MODELS` in `run_openrouter.py` and to the matching list in `openrouter_models.py`
  (a new provider also needs a list there, an entry in `build.py`'s provider loop, and a name in
  `PROVIDER_NAMES` in `static/ethics-probes/index.html`). Then `python run_openrouter.py --fill`.

Classify the new replies, then `python build.py`.
