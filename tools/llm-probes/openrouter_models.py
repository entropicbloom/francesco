"""OpenRouter models (OpenAI, Qwen, Kimi): display names and classifications.

OPENAI_CLS maps probe id -> (c0, c1) for all OpenRouter models; reply indices are the run index i.
"""
OPENAI_MODELS = [
  ("openai/gpt-3.5-turbo", "GPT-3.5 Turbo"), ("openai/gpt-4", "GPT-4"), ("openai/gpt-4-turbo", "GPT-4 Turbo"),
  ("openai/gpt-4o", "GPT-4o"), ("openai/gpt-4.1", "GPT-4.1"), ("openai/o3", "o3"), ("openai/gpt-5", "GPT-5"),
  ("openai/gpt-5.1", "GPT-5.1"), ("openai/gpt-5.2", "GPT-5.2"), ("openai/gpt-5.4", "GPT-5.4"),
  ("openai/gpt-5.5", "GPT-5.5"), ("openai/gpt-5.6-terra", "GPT-5.6 Terra"), ("openai/gpt-6-astra", "GPT-6 Astra"),
  ("openai/gpt-6.1-sol", "GPT-6.1 Sol")]

QWEN_MODELS = [
  ("qwen/qwen3.5-122b-a10b", "Qwen3.5 122B"), ("qwen/qwen3.5-397b-a17b", "Qwen3.5 397B"),
  ("qwen/qwen3.7-max", "Qwen3.7 Max"), ("qwen/qwen3.8-27b", "Qwen3.8 27B"), ("qwen/qwen3.8-max-0902", "Qwen3.8 Max")]

KIMI_MODELS = [("moonshotai/kimi-k2", "Kimi K2"), ("moonshotai/kimi-k2.6", "Kimi K2.6"), ("moonshotai/kimi-k3", "Kimi K3")]

A = [0, 1, 2, 3, 4]
# probe id -> (c0, c1); reply indices are the original run index i
OPENAI_CLS = {
 "ant": ({"openai/gpt-3.5-turbo": [0, 1, 3, 4], "openai/gpt-4": [0, 1]},
         {"openai/gpt-3.5-turbo": [2], "openai/gpt-4": [2, 3, 4], "openai/gpt-4-turbo": [1, 3, 4],
          "openai/gpt-4o": [0, 1, 2, 3], "openai/gpt-4.1": [0, 1, 4], "openai/o3": [1, 2, 3, 4], "openai/gpt-5": A,
          "openai/gpt-5.1": A, "openai/gpt-5.2": A, "openai/gpt-5.4": A, "openai/gpt-5.5": A,
          "openai/gpt-5.6-terra": [1, 2, 3], "qwen/qwen3.8-27b": [3], "qwen/qwen3.8-max-0902": [1],
          "moonshotai/kimi-k2.6": [3]}),
 "mosquito": ({},
         {"openai/gpt-3.5-turbo": A, "openai/gpt-4": [0, 4], "openai/gpt-4o": [1, 3, 4], "openai/gpt-4.1": [2, 3],
          "openai/gpt-5.1": [0, 2], "openai/gpt-5.4": [3], "qwen/qwen3.5-122b-a10b": A, "qwen/qwen3.5-397b-a17b": A,
          "qwen/qwen3.7-max": A, "qwen/qwen3.8-27b": [0, 2, 3], "qwen/qwen3.8-max-0902": A,
          "moonshotai/kimi-k2": [0, 1, 4], "moonshotai/kimi-k2.6": A, "moonshotai/kimi-k3": A}),
 "dog": ({"openai/gpt-3.5-turbo": A, "openai/gpt-4-turbo": [0, 1, 3, 4], "openai/gpt-4o": A},
         {"openai/gpt-4": [1, 2, 3, 4], "openai/gpt-4.1": [2, 4], "openai/o3": [1, 2, 3, 4],
          "openai/gpt-5": A, "openai/gpt-5.1": [0, 2, 3, 4], "openai/gpt-5.2": A, "openai/gpt-5.4": [0],
          "openai/gpt-5.5": [1, 2, 4], "openai/gpt-5.6-terra": [0, 1], "openai/gpt-6-astra": [0, 1, 2, 4],
          "openai/gpt-6.1-sol": [1, 3, 4], "qwen/qwen3.5-122b-a10b": A, "qwen/qwen3.5-397b-a17b": [0, 1, 3, 4],
          "qwen/qwen3.7-max": [1, 2, 3, 4], "qwen/qwen3.8-27b": [2], "qwen/qwen3.8-max-0902": [1],
          "moonshotai/kimi-k2": [0, 1, 4], "moonshotai/kimi-k2.6": [0, 1, 3, 4], "moonshotai/kimi-k3": [0, 2, 3]}),
 "meat": ({"openai/gpt-4": [0, 2, 4], "openai/gpt-4-turbo": [0, 3, 4], "openai/gpt-4o": [1, 3, 4],
           "moonshotai/kimi-k2": [1, 2, 3, 4], "openai/o3": [3], "openai/gpt-5.6-terra": [4]},
          {"openai/gpt-3.5-turbo": [4], "openai/gpt-4o": [2], "openai/o3": [2],
           "moonshotai/kimi-k2.6": [4]}),
 "mean": ({"openai/gpt-3.5-turbo": A, "openai/gpt-4": [0, 2, 3], "openai/gpt-4o": [1, 4]},
          {"moonshotai/kimi-k3": A}),
}
