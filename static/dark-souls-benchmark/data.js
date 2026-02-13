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
      "id": "B1.2",
      "category": "Bosses",
      "difficulty": "medium",
      "question": "In Dark Souls 1, which four bosses hold Lord Souls that must be collected to fill the Lordvessel?",
      "answer": "Gravelord Nito, Seath the Scaleless, The Bed of Chaos, Four Kings"
    },
    {
      "id": "A2.2",
      "category": "Areas & Map Layout",
      "difficulty": "medium",
      "question": "What two conditions must be met to open the gate to Sen's Fortress in Dark Souls 1?",
      "answer": "Ring the Bell of Awakening in the Undead Parish (above the Bell Gargoyles), Ring the Bell of Awakening in Quelaag's Domain (below Blighttown, after defeating Chaos Witch Quelaag)"
    },
    {
      "id": "N3.3",
      "category": "NPCs & Questlines",
      "difficulty": "medium",
      "question": "In Dark Souls 1, what happens after Knight Lautrec of Carim is freed from his cell in the Undead Parish and both Bells of Awakening have been rung?",
      "answer": "After being freed, Lautrec moves to Firelink Shrine. Once both Bells of Awakening are rung, he kills Anastacia, the Firekeeper of Firelink Shrine. This disables the Firelink bonfire and the player must invade Lautrec's world in Anor Londo to recover her soul and restore the bonfire."
    },
    {
      "id": "I4.2",
      "category": "Items & Weapons",
      "difficulty": "medium",
      "question": "List all four types of Black Knight weapons in Dark Souls 1.",
      "answer": "Black Knight Sword, Black Knight Greatsword, Black Knight Halberd, Black Knight Greataxe"
    },
    {
      "id": "L5.2",
      "category": "Lore",
      "difficulty": "medium",
      "question": "What happened when the Witch of Izalith attempted to recreate the First Flame in Dark Souls 1?",
      "answer": "Her attempt to recreate the First Flame went catastrophically wrong. She created the Chaos Flame instead, which transformed her into the Bed of Chaos. This event gave birth to all demons in the Dark Souls world and corrupted the land of Izalith."
    },
    {
      "id": "M6.1",
      "category": "Mechanics & Covenants",
      "difficulty": "medium",
      "question": "What does 'kindling' a bonfire do in Dark Souls 1, and what item allows further kindling beyond the default?",
      "answer": "Kindling a bonfire increases the number of Estus Flask charges the player receives when resting at that bonfire, from the default 5 to 10. The Rite of Kindling (obtained from Pinwheel) allows further kindling in two additional steps: to 15 and then to 20. Each kindling costs 1 Humanity."
    }
  ]
};
