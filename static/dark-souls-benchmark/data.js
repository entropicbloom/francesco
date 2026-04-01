const DASHBOARD_DATA = {
  "setId": "dark-souls-1",
  "setName": "Dark Souls Fact Recall",
  "setDescription": "LLM fact recall benchmark for Dark Souls game knowledge",
  "generated": "February 13, 2026",
  "modelCount": 13,
  "models": [
    {
      "name": "kimi-k2.5",
      "params": "1T",
      "type": "MoE",
      "license": "open",
      "reasoning": false,
      "score": 96.0,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": 1,
      "paramsActive": "32B"
    },
    {
      "name": "claude-opus-4-5",
      "params": "?",
      "type": "unknown",
      "license": "proprietary",
      "reasoning": "off",
      "score": 93.1,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": null
    },
    {
      "name": "gpt-5.1",
      "params": "?",
      "type": "unknown",
      "license": "proprietary",
      "reasoning": "off",
      "score": 91.4,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": null
    },
    {
      "name": "gpt-4-turbo",
      "params": "?",
      "type": "MoE",
      "license": "proprietary",
      "reasoning": "off",
      "score": 88.6,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": null
    },
    {
      "name": "mistral-small-3.2",
      "params": "24B",
      "type": "Dense",
      "license": "open",
      "reasoning": false,
      "score": 76.0,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": 2
    },
    {
      "name": "devstral-2",
      "params": "123B",
      "type": "Dense",
      "license": "open",
      "reasoning": false,
      "score": 63.4,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": 3
    },
    {
      "name": "mistral-large-3",
      "params": "675B",
      "type": "MoE",
      "license": "open",
      "reasoning": false,
      "score": 53.7,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": 4,
      "paramsActive": "41B"
    },
    {
      "name": "llama-4-maverick",
      "params": "400B",
      "type": "MoE",
      "license": "open",
      "reasoning": false,
      "score": 47.4,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": 5,
      "paramsActive": "17B"
    },
    {
      "name": "gpt-oss-120b",
      "params": "117B",
      "type": "MoE",
      "license": "open",
      "reasoning": "low",
      "score": 46.9,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": 6,
      "paramsActive": "5.1B"
    },
    {
      "name": "llama-4-scout",
      "params": "109B",
      "type": "MoE",
      "license": "open",
      "reasoning": false,
      "score": 37.7,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": 7,
      "paramsActive": "17B"
    },
    {
      "name": "qwen3-235b-a22b",
      "params": "235B",
      "type": "MoE",
      "license": "open",
      "reasoning": true,
      "score": 35.4,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": 8,
      "paramsActive": "22B"
    },
    {
      "name": "gpt-oss-20b",
      "params": "21B",
      "type": "MoE",
      "license": "open",
      "reasoning": "low",
      "score": 29.1,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": 9,
      "paramsActive": "3.6B"
    },
    {
      "name": "ministral-14b",
      "params": "14B",
      "type": "Dense",
      "license": "open",
      "reasoning": false,
      "score": 22.9,
      "criticalPassed": 0,
      "criticalTotal": 0,
      "questionsAnswered": 35,
      "questionsTotal": 35,
      "coverage": 100.0,
      "rank": 10
    }
  ],
  "categoryNames": [
    "Bosses",
    "Areas & Map Layout",
    "NPCs & Questlines",
    "Items & Weapons",
    "Lore",
    "Mechanics & Covenants"
  ],
  "categories": [
    {
      "name": "kimi-k2.5",
      "Bosses": 93,
      "Areas & Map Layout": 97,
      "NPCs & Questlines": 97,
      "Items & Weapons": 94,
      "Lore": 100,
      "Mechanics & Covenants": 95
    },
    {
      "name": "claude-opus-4-5",
      "Bosses": 87,
      "Areas & Map Layout": 90,
      "NPCs & Questlines": 94,
      "Items & Weapons": 97,
      "Lore": 100,
      "Mechanics & Covenants": 90
    },
    {
      "name": "gpt-5.1",
      "Bosses": 87,
      "Areas & Map Layout": 97,
      "NPCs & Questlines": 86,
      "Items & Weapons": 89,
      "Lore": 100,
      "Mechanics & Covenants": 95
    },
    {
      "name": "gpt-4-turbo",
      "Bosses": 80,
      "Areas & Map Layout": 100,
      "NPCs & Questlines": 86,
      "Items & Weapons": 89,
      "Lore": 92,
      "Mechanics & Covenants": 85
    },
    {
      "name": "mistral-small-3.2",
      "Bosses": 50,
      "Areas & Map Layout": 37,
      "NPCs & Questlines": 91,
      "Items & Weapons": 89,
      "Lore": 100,
      "Mechanics & Covenants": 95
    },
    {
      "name": "devstral-2",
      "Bosses": 67,
      "Areas & Map Layout": 53,
      "NPCs & Questlines": 54,
      "Items & Weapons": 57,
      "Lore": 92,
      "Mechanics & Covenants": 65
    },
    {
      "name": "mistral-large-3",
      "Bosses": 57,
      "Areas & Map Layout": 47,
      "NPCs & Questlines": 51,
      "Items & Weapons": 29,
      "Lore": 92,
      "Mechanics & Covenants": 60
    },
    {
      "name": "llama-4-maverick",
      "Bosses": 43,
      "Areas & Map Layout": 43,
      "NPCs & Questlines": 34,
      "Items & Weapons": 34,
      "Lore": 84,
      "Mechanics & Covenants": 60
    },
    {
      "name": "gpt-oss-120b",
      "Bosses": 40,
      "Areas & Map Layout": 37,
      "NPCs & Questlines": 31,
      "Items & Weapons": 40,
      "Lore": 88,
      "Mechanics & Covenants": 60
    },
    {
      "name": "llama-4-scout",
      "Bosses": 40,
      "Areas & Map Layout": 30,
      "NPCs & Questlines": 29,
      "Items & Weapons": 26,
      "Lore": 64,
      "Mechanics & Covenants": 50
    },
    {
      "name": "qwen3-235b-a22b",
      "Bosses": 30,
      "Areas & Map Layout": 37,
      "NPCs & Questlines": 29,
      "Items & Weapons": 26,
      "Lore": 60,
      "Mechanics & Covenants": 40
    },
    {
      "name": "gpt-oss-20b",
      "Bosses": 20,
      "Areas & Map Layout": 33,
      "NPCs & Questlines": 29,
      "Items & Weapons": 26,
      "Lore": 40,
      "Mechanics & Covenants": 30
    },
    {
      "name": "ministral-14b",
      "Bosses": 20,
      "Areas & Map Layout": 30,
      "NPCs & Questlines": 20,
      "Items & Weapons": 23,
      "Lore": 24,
      "Mechanics & Covenants": 20
    }
  ],
  "criticalQuestions": [],
  "critical": [
    {
      "name": "kimi-k2.5"
    },
    {
      "name": "claude-opus-4-5"
    },
    {
      "name": "gpt-5.1"
    },
    {
      "name": "gpt-4-turbo"
    },
    {
      "name": "mistral-small-3.2"
    },
    {
      "name": "devstral-2"
    },
    {
      "name": "mistral-large-3"
    },
    {
      "name": "llama-4-maverick"
    },
    {
      "name": "gpt-oss-120b"
    },
    {
      "name": "llama-4-scout"
    },
    {
      "name": "qwen3-235b-a22b"
    },
    {
      "name": "gpt-oss-20b"
    },
    {
      "name": "ministral-14b"
    }
  ],
  "exampleQuestions": [
    {
      "id": "B1.1",
      "category": "Bosses",
      "difficulty": "easy",
      "question": "What is the name of the very first boss you encounter in Dark Souls 1?",
      "answer": "Asylum Demon"
    },
    {
      "id": "A2.2",
      "category": "Areas & Map Layout",
      "difficulty": "medium",
      "question": "What two conditions must be met to open the gate to Sen's Fortress in Dark Souls 1?",
      "answer": "Ring the Bell of Awakening in the Undead Parish (above the Bell Gargoyles), Ring the Bell of Awakening in Quelaag's Domain (below Blighttown, after defeating Chaos Witch Quelaag)"
    },
    {
      "id": "N3.2",
      "category": "NPCs & Questlines",
      "difficulty": "hard",
      "question": "What specific steps must the player take to save Solaire of Astora from going mad in Lost Izalith in Dark Souls 1?",
      "answer": "The player must join the Chaos Servant covenant and reach Rank 2 by offering 30 humanity to the Fair Lady. This opens a shortcut door in the Demon Ruins. The player must go through the shortcut and kill the red-eyed Chaos Bug (which drops the Sunlight Maggot) before Solaire reaches it. If the bug is killed before Solaire encounters it, he survives and can be summoned for the final boss."
    },
    {
      "id": "I4.1",
      "category": "Items & Weapons",
      "difficulty": "easy",
      "question": "How is the Drake Sword obtained in Dark Souls 1?",
      "answer": "The Drake Sword is obtained by cutting the tail of the Hellkite Wyvern (the red dragon) on the Undead Burg bridge. The most common method is to stand under the bridge and shoot the tail with arrows until it is severed."
    },
    {
      "id": "L5.2",
      "category": "Lore",
      "difficulty": "medium",
      "question": "What happened when the Witch of Izalith attempted to recreate the First Flame in Dark Souls 1?",
      "answer": "Her attempt to recreate the First Flame went catastrophically wrong. She created the Chaos Flame instead, which transformed her into the Bed of Chaos. This event gave birth to all demons in the Dark Souls world and corrupted the land of Izalith."
    },
    {
      "id": "M6.2",
      "category": "Mechanics & Covenants",
      "difficulty": "hard",
      "question": "Name at least six of the nine covenants available in Dark Souls 1.",
      "answer": "Warrior of Sunlight, Darkwraith, Forest Hunter (Forest Hunters), Blade of the Darkmoon, Chaos Servant, Way of White, Princess's Guard, Gravelord Servant, Path of the Dragon"
    }
  ]
};
