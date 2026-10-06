// Comprehensive D&D Classes Data Module
// Complete mechanical dossiers and vector graphics for all 14 official character classes.
// Pure browser-safe data module with zero external dependencies.

export const dndClasses = [
  {
    "name": "Barbarian",
    "slug": "barbarian",
    "ruleset": "Core 5e",
    "roleCategory": "Frontline Tank & Berserker",
    "synopsis": "A fierce warrior of primal instinct who enters a supernatural battle rage to shrug off fatal wounds and cleave through foes. Barbarians excel in the thick of melee combat, turning raw fury into unmatched physical fortitude.",
    "hitDie": "d12",
    "primaryAbility": "Strength",
    "saves": "Strength & Constitution",
    "armorProficiencies": "Light armor, medium armor, shields",
    "weaponProficiencies": "Simple weapons, martial weapons",
    "signatureFeatures": [
      "Rage",
      "Unarmored Defense",
      "Reckless Attack",
      "Danger Sense",
      "Extra Attack",
      "Fast Movement",
      "Feral Instinct"
    ],
    "subclasses": [
      {
        "name": "Path of the Berserker",
        "summary": "Channels unbridled fury into additional frenzy attacks while resisting charm and fear."
      },
      {
        "name": "Path of the Totem Warrior",
        "summary": "Bonds with spiritual beasts such as the bear, eagle, or wolf for supernatural resilience."
      },
      {
        "name": "Path of the Zealot",
        "summary": "Infuses strikes with divine wrath and refuses death even when reduced to zero hit points."
      },
      {
        "name": "Path of Wild Magic",
        "summary": "Unleashes unpredictable chaotic magic surges each time battle rage ignites."
      }
    ],
    "playstyleScores": {
      "offense": 5,
      "defense": 5,
      "utility": 1,
      "support": 2,
      "complexity": 1
    },
    "bestAncestries": [
      {
        "label": "Half-Orc",
        "slug": "half-orc-name-generator"
      },
      {
        "label": "Dwarf",
        "slug": "dwarf-name-generator"
      },
      {
        "label": "Orc",
        "slug": "orc-name-generator"
      }
    ],
    "playerPersona": "Players who love charging headfirst into danger, rolling massive damage dice, and refusing to fall in battle.",
    "themeColor": "#dc2626",
    "accentColor": "#991b1b",
    "nameGeneratorUrl": "/half-orc-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Barbarian crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#7f1d1d\" fill-opacity=\"0.25\" stroke=\"#dc2626\" stroke-width=\"1.5\"/>\n  <path d=\"M14 10 L34 38 M34 10 L14 38\" stroke=\"#991b1b\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M10 14 C14 8 20 8 22 14 C20 18 16 18 10 14 Z\" fill=\"#ef4444\" stroke=\"#fca5a5\" stroke-width=\"1\"/>\n  <path d=\"M38 14 C34 8 28 8 26 14 C28 18 32 18 38 14 Z\" fill=\"#ef4444\" stroke=\"#fca5a5\" stroke-width=\"1\"/>\n  <circle cx=\"24\" cy=\"24\" r=\"5\" fill=\"#dc2626\" stroke=\"#fecaca\" stroke-width=\"1\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Barbarian character portrait\">\n  <defs>\n    <radialGradient id=\"barbarian-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#dc2626\" stop-opacity=\"0.38\"/>\n      <stop offset=\"60%\" stop-color=\"#7f1d1d\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"barbarian-steel\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#cbd5e1\"/>\n      <stop offset=\"50%\" stop-color=\"#64748b\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"barbarian-harness\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#78350f\"/>\n      <stop offset=\"100%\" stop-color=\"#451a03\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#barbarian-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#fca5a5\">\n    <circle cx=\"65\" cy=\"85\" r=\"1.8\" class=\"sparkle-1\"/>\n    <circle cx=\"178\" cy=\"72\" r=\"2.2\" class=\"sparkle-2\"/>\n    <circle cx=\"50\" cy=\"140\" r=\"1.6\" class=\"sparkle-3\"/>\n    <circle cx=\"192\" cy=\"135\" r=\"2.0\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M30 230 C38 175 75 158 120 158 C165 158 202 175 210 230 Z\" fill=\"#451a03\"/>\n    <path d=\"M52 185 L188 185\" stroke=\"#78350f\" stroke-width=\"6\"/>\n    <path d=\"M70 162 L170 230\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n    <path d=\"M170 162 L70 230\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n    <path d=\"M75 95 C75 58 95 48 120 48 C145 48 165 58 165 95 C165 130 148 156 120 162 C92 156 75 130 75 95 Z\" fill=\"#d97706\"/>\n    <path d=\"M78 68 C88 40 120 36 120 36 C120 36 152 40 162 68 C168 85 168 115 165 135 C156 100 148 85 120 85 C92 85 84 100 75 135 Z\" fill=\"#1c1917\"/>\n    <ellipse cx=\"104\" cy=\"108\" rx=\"4\" ry=\"2.2\" fill=\"#ef4444\" class=\"glow-eye\"/>\n    <ellipse cx=\"136\" cy=\"108\" rx=\"4\" ry=\"2.2\" fill=\"#ef4444\" class=\"glow-eye\"/>\n    <path d=\"M96 100 L112 105\" stroke=\"#7f1d1d\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M144 100 L128 105\" stroke=\"#7f1d1d\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M92 112 Q105 135 110 148\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M148 112 Q135 135 130 148\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M38 105 L25 55 L55 70 Z\" fill=\"url(#barbarian-steel)\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/>\n    <path d=\"M202 105 L215 55 L185 70 Z\" fill=\"url(#barbarian-steel)\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Bard",
    "slug": "bard",
    "ruleset": "Core 5e",
    "roleCategory": "Support Specialist & Arcane Generalist",
    "synopsis": "An inspiring magician whose music weaves the fundamental resonance of the multiverse. Bards bolster allies with Bardic Inspiration, disrupt enemy schemes with sharp cutting words, and steal the greatest spells from other traditions.",
    "hitDie": "d8",
    "primaryAbility": "Charisma",
    "saves": "Dexterity & Charisma",
    "armorProficiencies": "Light armor",
    "weaponProficiencies": "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    "signatureFeatures": [
      "Spellcasting",
      "Bardic Inspiration",
      "Jack of All Trades",
      "Song of Rest",
      "Expertise",
      "Font of Inspiration",
      "Magical Secrets"
    ],
    "subclasses": [
      {
        "name": "College of Lore",
        "summary": "Masters historical lore and steals powerful spells from across the arcane multiverse."
      },
      {
        "name": "College of Eloquence",
        "summary": "Supreme orators whose persuasive speeches sway judges, kings, and enemy saving throws."
      },
      {
        "name": "College of Swords",
        "summary": "Dances through melee combat with blade flourishes and dazzling weapon footwork."
      },
      {
        "name": "College of Glamour",
        "summary": "Wields unearthly fey majesty to enthrall throngs and orchestrate party repositioning."
      }
    ],
    "playstyleScores": {
      "offense": 3,
      "defense": 2,
      "utility": 5,
      "support": 5,
      "complexity": 4
    },
    "bestAncestries": [
      {
        "label": "Half-Elf",
        "slug": "half-elf-name-generator"
      },
      {
        "label": "Tiefling",
        "slug": "tiefling-name-generator"
      },
      {
        "label": "Human",
        "slug": "human-name-generator"
      }
    ],
    "playerPersona": "Creative players who want to do everything well, dominate dialogue scenes, and swing key encounters with buffs.",
    "themeColor": "#db2777",
    "accentColor": "#9d174d",
    "nameGeneratorUrl": "/half-elf-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Bard crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#831843\" fill-opacity=\"0.25\" stroke=\"#db2777\" stroke-width=\"1.5\"/>\n  <path d=\"M18 12 Q24 8 30 12 Q34 22 30 36 Q24 40 18 36 Q14 22 18 12 Z\" fill=\"#be185d\" fill-opacity=\"0.3\" stroke=\"#f472b6\" stroke-width=\"1.5\"/>\n  <line x1=\"21\" y1=\"14\" x2=\"21\" y2=\"34\" stroke=\"#fbcfe8\" stroke-width=\"1\"/>\n  <line x1=\"24\" y1=\"12\" x2=\"24\" y2=\"36\" stroke=\"#fbcfe8\" stroke-width=\"1\"/>\n  <line x1=\"27\" y1=\"14\" x2=\"27\" y2=\"34\" stroke=\"#fbcfe8\" stroke-width=\"1\"/>\n  <circle cx=\"34\" cy=\"16\" r=\"3\" fill=\"#f472b6\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Bard character portrait\">\n  <defs>\n    <radialGradient id=\"bard-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#db2777\" stop-opacity=\"0.35\"/>\n      <stop offset=\"60%\" stop-color=\"#831843\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"bard-tunic\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#9d174d\"/>\n      <stop offset=\"100%\" stop-color=\"#500724\"/>\n    </linearGradient>\n    <linearGradient id=\"bard-lute\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#fbbf24\"/>\n      <stop offset=\"100%\" stop-color=\"#b45309\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#bard-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#fbcfe8\">\n    <circle cx=\"68\" cy=\"80\" r=\"2\" class=\"sparkle-1\"/>\n    <circle cx=\"172\" cy=\"75\" r=\"2.2\" class=\"sparkle-2\"/>\n    <circle cx=\"52\" cy=\"150\" r=\"1.5\" class=\"sparkle-3\"/>\n    <circle cx=\"188\" cy=\"140\" r=\"1.8\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M42 230 C48 180 80 162 120 162 C160 162 192 180 198 230 Z\" fill=\"url(#bard-tunic)\"/>\n    <path d=\"M120 162 L120 230\" stroke=\"#f472b6\" stroke-width=\"2\"/>\n    <path d=\"M90 185 Q120 170 150 185\" stroke=\"#fbbf24\" stroke-width=\"2\" fill=\"none\"/>\n    <path d=\"M72 135 C66 85 84 45 120 38 C156 45 174 85 168 135 C158 165 142 178 120 180 C98 178 82 165 72 135 Z\" fill=\"#831843\" stroke=\"#db2777\" stroke-width=\"1.2\"/>\n    <path d=\"M84 96 C84 72 100 66 120 66 C140 66 156 72 156 96 C156 128 144 152 120 160 C96 152 84 128 84 96 Z\" fill=\"#fde68a\"/>\n    <path d=\"M75 75 Q120 50 165 75 Q168 105 156 120 C145 92 130 84 120 84 C110 84 95 92 84 120 Z\" fill=\"#78350f\"/>\n    <ellipse cx=\"106\" cy=\"112\" rx=\"3.5\" ry=\"2\" fill=\"#ec4899\" class=\"glow-eye\"/>\n    <ellipse cx=\"134\" cy=\"112\" rx=\"3.5\" ry=\"2\" fill=\"#ec4899\" class=\"glow-eye\"/>\n    <path d=\"M175 125 C185 140 195 175 185 205 Q170 215 160 200 Q160 165 175 125 Z\" fill=\"url(#bard-lute)\" stroke=\"#d97706\" stroke-width=\"1\"/>\n    <line x1=\"172\" y1=\"130\" x2=\"172\" y2=\"200\" stroke=\"#fff\" stroke-width=\"0.8\"/>\n    <line x1=\"176\" y1=\"130\" x2=\"176\" y2=\"200\" stroke=\"#fff\" stroke-width=\"0.8\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Cleric",
    "slug": "cleric",
    "ruleset": "Core 5e",
    "roleCategory": "Divine Healer & Battlecaster",
    "synopsis": "A devout champion who channels miraculous divine energy from a god or cosmic domain. Armored clerics balance potent healing and defensive wards with radiant offensive spells and formidable melee survivability.",
    "hitDie": "d8",
    "primaryAbility": "Wisdom",
    "saves": "Wisdom & Charisma",
    "armorProficiencies": "Light armor, medium armor, shields (some domains add heavy armor)",
    "weaponProficiencies": "Simple weapons (some domains add martial weapons)",
    "signatureFeatures": [
      "Spellcasting",
      "Divine Domain",
      "Channel Divinity",
      "Turn Undead",
      "Destroy Undead",
      "Divine Intervention"
    ],
    "subclasses": [
      {
        "name": "Life Domain",
        "summary": "Premier healers whose restorative magic maximizes hit points granted to injured companions."
      },
      {
        "name": "Light Domain",
        "summary": "Wields brilliant sunfire to incinerate enemy hordes and blind incoming attackers."
      },
      {
        "name": "Twilight Domain",
        "summary": "Envelops comrades in soothing twilight armor that refreshes temporary hit points each turn."
      },
      {
        "name": "Forge Domain",
        "summary": "Divine artisans clad in heavy plate who forge enchanted weapons directly on the battlefield."
      }
    ],
    "playstyleScores": {
      "offense": 4,
      "defense": 4,
      "utility": 4,
      "support": 5,
      "complexity": 3
    },
    "bestAncestries": [
      {
        "label": "Dwarf",
        "slug": "dwarf-name-generator"
      },
      {
        "label": "Human",
        "slug": "human-name-generator"
      },
      {
        "label": "Halfling",
        "slug": "halfling-name-generator"
      }
    ],
    "playerPersona": "Team anchors who want rock-solid survivability, game-saving heals, and holy radiant firepower.",
    "themeColor": "#f59e0b",
    "accentColor": "#b45309",
    "nameGeneratorUrl": "/dwarf-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Cleric crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#78350f\" fill-opacity=\"0.25\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n  <circle cx=\"24\" cy=\"24\" r=\"8\" fill=\"#fbbf24\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n  <path d=\"M24 6 L24 12 M24 36 L24 42 M6 24 L12 24 M36 24 L42 24\" stroke=\"#fbbf24\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <path d=\"M11 11 L16 16 M32 32 L37 37 M37 11 L32 16 M16 32 L11 37\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Cleric character portrait\">\n  <defs>\n    <radialGradient id=\"cleric-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.36\"/>\n      <stop offset=\"60%\" stop-color=\"#78350f\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"cleric-armor\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#64748b\"/>\n      <stop offset=\"50%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#0f172a\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#cleric-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#fde68a\">\n    <circle cx=\"62\" cy=\"75\" r=\"2.2\" class=\"sparkle-1\"/>\n    <circle cx=\"178\" cy=\"65\" r=\"2.0\" class=\"sparkle-2\"/>\n    <circle cx=\"48\" cy=\"145\" r=\"1.6\" class=\"sparkle-3\"/>\n    <circle cx=\"192\" cy=\"140\" r=\"1.8\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M35 230 C42 175 78 158 120 158 C162 158 198 175 205 230 Z\" fill=\"url(#cleric-armor)\" stroke=\"#f59e0b\" stroke-width=\"1.2\"/>\n    <polygon points=\"120,165 136,190 120,215 104,190\" fill=\"#f59e0b\"/>\n    <circle cx=\"120\" cy=\"190\" r=\"4\" fill=\"#fef3c7\"/>\n    <path d=\"M72 90 C72 50 94 40 120 40 C146 40 168 50 168 90 C168 108 160 118 120 118 C80 118 72 108 72 90 Z\" fill=\"#334155\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M120 40 L120 85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <polygon points=\"120,44 126,52 120,60 114,52\" fill=\"#fbbf24\"/>\n    <path d=\"M85 86 C85 75 100 70 120 70 C140 70 155 75 155 86 C155 105 146 115 120 118 C94 115 85 105 85 86 Z\" fill=\"#e2c4b0\"/>\n    <ellipse cx=\"105\" cy=\"94\" rx=\"3.2\" ry=\"1.8\" fill=\"#38bdf8\" class=\"glow-eye\"/>\n    <ellipse cx=\"135\" cy=\"94\" rx=\"3.2\" ry=\"1.8\" fill=\"#38bdf8\" class=\"glow-eye\"/>\n    <path d=\"M82 108 C80 165 96 220 120 226 C144 220 160 165 158 108 Q120 125 82 108 Z\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"1.2\"/>\n    <rect x=\"112\" y=\"155\" width=\"16\" height=\"7\" rx=\"2\" fill=\"#f59e0b\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Druid",
    "slug": "druid",
    "ruleset": "Core 5e",
    "roleCategory": "Primal Caster & Shapeshifter",
    "synopsis": "A guardian of the ancient wilderness who harnesses the raw primal power of nature. Druids cast earth-shattering elemental spells, mend the wounded, and use Wild Shape to morph into deadly beasts or woodland scouts.",
    "hitDie": "d8",
    "primaryAbility": "Wisdom",
    "saves": "Intelligence & Wisdom",
    "armorProficiencies": "Light armor, medium armor, shields (non-metal)",
    "weaponProficiencies": "Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
    "signatureFeatures": [
      "Druidic",
      "Spellcasting",
      "Wild Shape",
      "Druid Circle",
      "Timeless Body",
      "Beast Spells",
      "Archdruid"
    ],
    "subclasses": [
      {
        "name": "Circle of the Moon",
        "summary": "Specializes in transforming into ferocious combat beasts as a rapid bonus action."
      },
      {
        "name": "Circle of the Stars",
        "summary": "Consults ancient celestial star charts to blast radiant bolts or augment healing fonts."
      },
      {
        "name": "Circle of Wildfire",
        "summary": "Commands a bonded primal flame spirit to scorch enemies and teleport allies."
      },
      {
        "name": "Circle of the Land",
        "summary": "Masters biome-specific spells and recovers magical slots during brief rests."
      }
    ],
    "playstyleScores": {
      "offense": 3,
      "defense": 4,
      "utility": 5,
      "support": 4,
      "complexity": 4
    },
    "bestAncestries": [
      {
        "label": "Elf",
        "slug": "elf-name-generator"
      },
      {
        "label": "Gnome",
        "slug": "gnome-name-generator"
      },
      {
        "label": "Halfling",
        "slug": "halfling-name-generator"
      }
    ],
    "playerPersona": "Nature lovers who enjoy shapeshifting into animals, controlling the battlefield, and having versatile spell solutions.",
    "themeColor": "#10b981",
    "accentColor": "#047857",
    "nameGeneratorUrl": "/elf-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Druid crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#064e3b\" fill-opacity=\"0.25\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n  <path d=\"M24 10 C16 10 12 18 16 26 C18 30 24 38 24 38 C24 38 30 30 32 26 C36 18 32 10 24 10 Z\" fill=\"#059669\" fill-opacity=\"0.4\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n  <line x1=\"24\" y1=\"12\" x2=\"24\" y2=\"34\" stroke=\"#a7f3d0\" stroke-width=\"1.5\"/>\n  <path d=\"M24 20 L28 17 M24 26 L29 23 M24 22 L20 19 M24 28 L19 25\" stroke=\"#a7f3d0\" stroke-width=\"1.2\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Druid character portrait\">\n  <defs>\n    <radialGradient id=\"druid-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.35\"/>\n      <stop offset=\"60%\" stop-color=\"#064e3b\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"druid-robe\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#065f46\"/>\n      <stop offset=\"100%\" stop-color=\"#022c22\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#druid-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#a7f3d0\">\n    <circle cx=\"65\" cy=\"85\" r=\"1.6\" class=\"sparkle-1\"/>\n    <circle cx=\"175\" cy=\"72\" r=\"2.2\" class=\"sparkle-2\"/>\n    <circle cx=\"50\" cy=\"140\" r=\"1.5\" class=\"sparkle-3\"/>\n    <circle cx=\"190\" cy=\"135\" r=\"1.8\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M40 230 C48 185 80 165 120 165 C160 165 192 185 200 230 Z\" fill=\"url(#druid-robe)\"/>\n    <path d=\"M68 140 C62 90 82 50 120 42 C158 50 178 90 172 140 C162 165 145 178 120 180 C95 178 78 165 68 140 Z\" fill=\"#047857\" stroke=\"#10b981\" stroke-width=\"1.2\"/>\n    <path d=\"M96 68 C80 40 60 32 42 40 C52 56 70 65 88 74 Z\" fill=\"#92400e\" stroke=\"#b45309\" stroke-width=\"1\"/>\n    <path d=\"M144 68 C160 40 180 32 198 40 C188 56 170 65 152 74 Z\" fill=\"#92400e\" stroke=\"#b45309\" stroke-width=\"1\"/>\n    <path d=\"M84 100 C84 75 100 68 120 68 C140 68 156 75 156 100 C156 130 144 154 120 162 C96 154 84 130 84 100 Z\" fill=\"#fef3c7\"/>\n    <ellipse cx=\"106\" cy=\"115\" rx=\"3.5\" ry=\"2\" fill=\"#34d399\" class=\"glow-eye\"/>\n    <ellipse cx=\"134\" cy=\"115\" rx=\"3.5\" ry=\"2\" fill=\"#34d399\" class=\"glow-eye\"/>\n    <path d=\"M98 125 C108 135 132 135 142 125\" stroke=\"#059669\" stroke-width=\"1.5\" fill=\"none\"/>\n    <circle cx=\"120\" cy=\"88\" r=\"4\" fill=\"#10b981\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Fighter",
    "slug": "fighter",
    "ruleset": "Core 5e",
    "roleCategory": "Martial Master & Weapon Tactician",
    "synopsis": "A premier master of warfare skilled with an unmatched arsenal of weapons and armor. Fighters control the flow of battle through Action Surge, tactical fighting styles, and rapid multiple attacks that grind enemy lines to dust.",
    "hitDie": "d10",
    "primaryAbility": "Strength or Dexterity",
    "saves": "Strength & Constitution",
    "armorProficiencies": "All armor (light, medium, heavy), shields",
    "weaponProficiencies": "Simple weapons, martial weapons",
    "signatureFeatures": [
      "Fighting Style",
      "Second Wind",
      "Action Surge",
      "Martial Archetype",
      "Extra Attack",
      "Indomitable"
    ],
    "subclasses": [
      {
        "name": "Battle Master",
        "summary": "Uses superiority dice to execute combat maneuvers including trips, disarms, and tactical feints."
      },
      {
        "name": "Eldritch Knight",
        "summary": "Blends abjuration and evocation wizardry seamlessly into martial sword strikes."
      },
      {
        "name": "Champion",
        "summary": "Maximizes basic athletic physical power while doubling critical strike thresholds."
      },
      {
        "name": "Echo Knight",
        "summary": "Manifests a shadowy echo duplicate to attack from range and instantly swap battlefield spots."
      }
    ],
    "playstyleScores": {
      "offense": 5,
      "defense": 4,
      "utility": 2,
      "support": 2,
      "complexity": 2
    },
    "bestAncestries": [
      {
        "label": "Human",
        "slug": "human-name-generator"
      },
      {
        "label": "Dwarf",
        "slug": "dwarf-name-generator"
      },
      {
        "label": "Dragonborn",
        "slug": "dragonborn-name-generator"
      }
    ],
    "playerPersona": "Tacticians who want deep weapon mastery, reliable burst turns with Action Surge, and martial flexibility.",
    "themeColor": "#64748b",
    "accentColor": "#334155",
    "nameGeneratorUrl": "/human-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Fighter crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#1e293b\" fill-opacity=\"0.3\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n  <path d=\"M12 36 L36 12 M36 12 L30 12 M36 12 L36 18\" stroke=\"#94a3b8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <path d=\"M36 36 L12 12 M12 12 L18 12 M12 12 L12 18\" stroke=\"#cbd5e1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <circle cx=\"24\" cy=\"24\" r=\"4\" fill=\"#475569\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Fighter character portrait\">\n  <defs>\n    <radialGradient id=\"fighter-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#64748b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"60%\" stop-color=\"#1e293b\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"fighter-steel\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#94a3b8\"/>\n      <stop offset=\"50%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#fighter-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#cbd5e1\">\n    <circle cx=\"58\" cy=\"80\" r=\"1.8\" class=\"sparkle-1\"/>\n    <circle cx=\"182\" cy=\"70\" r=\"2.0\" class=\"sparkle-2\"/>\n    <circle cx=\"48\" cy=\"148\" r=\"1.5\" class=\"sparkle-3\"/>\n    <circle cx=\"190\" cy=\"142\" r=\"1.8\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M30 230 C36 175 75 158 120 158 C165 158 204 175 210 230 Z\" fill=\"url(#fighter-steel)\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/>\n    <path d=\"M60 170 L120 205 L180 170\" stroke=\"#cbd5e1\" stroke-width=\"2\" fill=\"none\"/>\n    <path d=\"M72 88 C72 45 92 38 120 38 C148 38 168 45 168 88 C168 112 155 125 120 125 C85 125 72 112 72 88 Z\" fill=\"#334155\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <rect x=\"92\" y=\"85\" width=\"56\" height=\"8\" rx=\"2\" fill=\"#0f172a\" stroke=\"#cbd5e1\" stroke-width=\"1\"/>\n    <path d=\"M120 38 L120 78\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <ellipse cx=\"106\" cy=\"89\" rx=\"3.5\" ry=\"1.5\" fill=\"#38bdf8\" class=\"glow-eye\"/>\n    <ellipse cx=\"134\" cy=\"89\" rx=\"3.5\" ry=\"1.5\" fill=\"#38bdf8\" class=\"glow-eye\"/>\n    <path d=\"M42 90 L20 190\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path d=\"M198 90 L220 190\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Monk",
    "slug": "monk",
    "ruleset": "Core 5e",
    "roleCategory": "Mobile Striker & Ki Adept",
    "synopsis": "A martial artist who harnesses internal ki energy to exceed mortal physical limits. Monks zip across walls and liquid, deflect incoming arrows mid-flight, and deliver rapid flurries of unarmed strikes that leave enemies stunned.",
    "hitDie": "d8",
    "primaryAbility": "Dexterity & Wisdom",
    "saves": "Strength & Dexterity",
    "armorProficiencies": "None (Unarmored Defense)",
    "weaponProficiencies": "Simple weapons, shortswords",
    "signatureFeatures": [
      "Unarmored Defense",
      "Martial Arts",
      "Ki",
      "Flurry of Blows",
      "Patient Defense",
      "Step of the Wind",
      "Deflect Missiles",
      "Stunning Strike",
      "Evasion"
    ],
    "subclasses": [
      {
        "name": "Way of the Open Hand",
        "summary": "Manipulates ki flow to knock opponents prone, shove foes across rooms, or stop hearts."
      },
      {
        "name": "Way of Shadow",
        "summary": "Teleports through darkness to ambush spellcasters and silence alarms undetected."
      },
      {
        "name": "Way of Mercy",
        "summary": "Wields medicinal ki masks to mend wounded allies or inflict chilling necrotic harm."
      },
      {
        "name": "Way of the Kensei",
        "summary": "Turns specialized swords, polearms, and bows into lethal extensions of the martial soul."
      }
    ],
    "playstyleScores": {
      "offense": 4,
      "defense": 3,
      "utility": 3,
      "support": 2,
      "complexity": 3
    },
    "bestAncestries": [
      {
        "label": "Human",
        "slug": "human-name-generator"
      },
      {
        "label": "Elf",
        "slug": "elf-name-generator"
      },
      {
        "label": "Halfling",
        "slug": "halfling-name-generator"
      }
    ],
    "playerPersona": "Action martial arts fans who want extreme mobility, arrow-catching, and battlefield stun combos.",
    "themeColor": "#06b6d4",
    "accentColor": "#0e7490",
    "nameGeneratorUrl": "/human-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Monk crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#164e63\" fill-opacity=\"0.25\" stroke=\"#06b6d4\" stroke-width=\"1.5\"/>\n  <circle cx=\"24\" cy=\"24\" r=\"10\" stroke=\"#22d3ee\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>\n  <path d=\"M24 16 C20 18 18 22 20 26 C22 30 26 32 28 30 C30 28 30 24 28 22 Z\" fill=\"#0891b2\" stroke=\"#67e8f9\" stroke-width=\"1.2\"/>\n  <circle cx=\"24\" cy=\"24\" r=\"3\" fill=\"#ecfeff\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Monk character portrait\">\n  <defs>\n    <radialGradient id=\"monk-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"60%\" stop-color=\"#164e63\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"monk-robes\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#0891b2\"/>\n      <stop offset=\"100%\" stop-color=\"#155e75\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#monk-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#67e8f9\">\n    <circle cx=\"65\" cy=\"80\" r=\"1.8\" class=\"sparkle-1\"/>\n    <circle cx=\"175\" cy=\"70\" r=\"2.2\" class=\"sparkle-2\"/>\n    <circle cx=\"52\" cy=\"150\" r=\"1.5\" class=\"sparkle-3\"/>\n    <circle cx=\"188\" cy=\"142\" r=\"1.8\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M40 230 C48 180 80 162 120 162 C160 162 192 180 200 230 Z\" fill=\"url(#monk-robes)\"/>\n    <path d=\"M95 162 L145 230\" stroke=\"#f59e0b\" stroke-width=\"3\"/>\n    <path d=\"M84 96 C84 72 100 66 120 66 C140 66 156 72 156 96 C156 128 144 152 120 160 C96 152 84 128 84 96 Z\" fill=\"#fed7aa\"/>\n    <path d=\"M84 92 Q120 85 156 92 L156 100 Q120 93 84 100 Z\" fill=\"#0e7490\" stroke=\"#22d3ee\" stroke-width=\"1\"/>\n    <ellipse cx=\"106\" cy=\"112\" rx=\"3.5\" ry=\"2\" fill=\"#22d3ee\" class=\"glow-eye\"/>\n    <ellipse cx=\"134\" cy=\"112\" rx=\"3.5\" ry=\"2\" fill=\"#22d3ee\" class=\"glow-eye\"/>\n    <circle cx=\"120\" cy=\"82\" r=\"3\" fill=\"#06b6d4\"/>\n    <circle cx=\"85\" cy=\"180\" r=\"10\" fill=\"#0891b2\" stroke=\"#22d3ee\" stroke-width=\"1\"/>\n    <circle cx=\"155\" cy=\"180\" r=\"10\" fill=\"#0891b2\" stroke=\"#22d3ee\" stroke-width=\"1\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Paladin",
    "slug": "paladin",
    "ruleset": "Core 5e",
    "roleCategory": "Holy Crusader & Aura Protector",
    "synopsis": "A righteous holy warrior bound to a sacred oath that manifests divine justice on the battlefield. Paladins combine heavy armor, lay on hands healing, and devastating radiant Divine Smites with party-protecting auras.",
    "hitDie": "d10",
    "primaryAbility": "Strength & Charisma",
    "saves": "Wisdom & Charisma",
    "armorProficiencies": "All armor (light, medium, heavy), shields",
    "weaponProficiencies": "Simple weapons, martial weapons",
    "signatureFeatures": [
      "Divine Sense",
      "Lay on Hands",
      "Fighting Style",
      "Spellcasting",
      "Divine Smite",
      "Divine Health",
      "Sacred Oath",
      "Aura of Protection",
      "Aura of Courage"
    ],
    "subclasses": [
      {
        "name": "Oath of Devotion",
        "summary": "The classic knight in shining armor whose sacred blade dispels evil and repels fiends."
      },
      {
        "name": "Oath of Vengeance",
        "summary": "A relentless huntsman who vows the destruction of hated foes with Vow of Enmity."
      },
      {
        "name": "Oath of the Ancients",
        "summary": "Champions the light of nature, granting an aura that halves incoming spell damage for the team."
      },
      {
        "name": "Oath of Conquest",
        "summary": "Subjugates adversaries through crushing supernatural fear and aura lockdown."
      }
    ],
    "playstyleScores": {
      "offense": 5,
      "defense": 5,
      "utility": 2,
      "support": 4,
      "complexity": 2
    },
    "bestAncestries": [
      {
        "label": "Dragonborn",
        "slug": "dragonborn-name-generator"
      },
      {
        "label": "Human",
        "slug": "human-name-generator"
      },
      {
        "label": "Half-Elf",
        "slug": "half-elf-name-generator"
      }
    ],
    "playerPersona": "Natural leaders who love dropping huge critical hit smites, standing as an unyielding bulwark, and buffing allies.",
    "themeColor": "#f97316",
    "accentColor": "#c2410c",
    "nameGeneratorUrl": "/dragonborn-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Paladin crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#7c2d12\" fill-opacity=\"0.25\" stroke=\"#f97316\" stroke-width=\"1.5\"/>\n  <path d=\"M24 8 L34 14 L34 26 C34 33 24 39 24 39 C24 39 14 33 14 26 L14 14 Z\" fill=\"#c2410c\" fill-opacity=\"0.4\" stroke=\"#fb923c\" stroke-width=\"1.5\"/>\n  <path d=\"M24 12 L24 32 M19 18 L29 18\" stroke=\"#fed7aa\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Paladin character portrait\">\n  <defs>\n    <radialGradient id=\"paladin-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#f97316\" stop-opacity=\"0.36\"/>\n      <stop offset=\"60%\" stop-color=\"#7c2d12\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"paladin-plate\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#ea580c\"/>\n      <stop offset=\"50%\" stop-color=\"#9a3412\"/>\n      <stop offset=\"100%\" stop-color=\"#431407\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#paladin-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#fdba74\">\n    <circle cx=\"58\" cy=\"85\" r=\"2.2\" class=\"sparkle-1\"/>\n    <circle cx=\"182\" cy=\"75\" r=\"2.0\" class=\"sparkle-2\"/>\n    <circle cx=\"45\" cy=\"145\" r=\"1.6\" class=\"sparkle-3\"/>\n    <circle cx=\"192\" cy=\"155\" r=\"2.4\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M35 230 C42 175 78 158 120 158 C162 158 198 175 205 230 Z\" fill=\"#1c1917\" stroke=\"#ea580c\" stroke-width=\"1.2\"/>\n    <polygon points=\"120,165 135,190 120,215 105,190\" fill=\"#f97316\" opacity=\"0.85\"/>\n    <path d=\"M90 75 C70 45 48 30 25 38 C35 55 60 72 82 85 Z\" fill=\"#7c2d12\" stroke=\"#ea580c\" stroke-width=\"1\"/>\n    <path d=\"M150 75 C170 45 192 30 215 38 C205 55 180 72 158 85 Z\" fill=\"#7c2d12\" stroke=\"#ea580c\" stroke-width=\"1\"/>\n    <path d=\"M86 85 C84 55 102 46 120 46 C138 46 156 55 154 85 C152 115 142 135 120 150 C98 135 88 115 86 85 Z\" fill=\"url(#paladin-plate)\"/>\n    <ellipse cx=\"104\" cy=\"92\" rx=\"4\" ry=\"2.2\" fill=\"#fef08a\" class=\"glow-eye\"/>\n    <ellipse cx=\"136\" cy=\"92\" rx=\"4\" ry=\"2.2\" fill=\"#fef08a\" class=\"glow-eye\"/>\n    <path d=\"M106 122 L120 136 L134 122\" stroke=\"#f97316\" stroke-width=\"1.5\" fill=\"none\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Ranger",
    "slug": "ranger",
    "ruleset": "Core 5e",
    "roleCategory": "Wilderness Skirmisher & Hunter",
    "synopsis": "A cunning tracker and borderlands scout who balances nature spells with martial archery or twin blade strikes. Rangers master hostile environments, locate hidden prey, and unleash devastating ambush rounds before enemies react.",
    "hitDie": "d10",
    "primaryAbility": "Dexterity & Wisdom",
    "saves": "Strength & Dexterity",
    "armorProficiencies": "Light armor, medium armor, shields",
    "weaponProficiencies": "Simple weapons, martial weapons",
    "signatureFeatures": [
      "Favored Enemy",
      "Natural Explorer",
      "Fighting Style",
      "Spellcasting",
      "Ranger Archetype",
      "Primeval Awareness",
      "Extra Attack",
      "Land Stride"
    ],
    "subclasses": [
      {
        "name": "Gloom Stalker",
        "summary": "Underdark ambush master invisible to darkvision who delivers furious opening-round volleys."
      },
      {
        "name": "Hunter",
        "summary": "Customizes battle tactics against massive hordes, giant monstrosities, or evasive skirmishers."
      },
      {
        "name": "Fey Wanderer",
        "summary": "Infuses charismatic fey trickery into dialogue and psychic power into arrow hits."
      },
      {
        "name": "Beast Master",
        "summary": "Bonds with a loyal animal companion that fights and maneuvers alongside the ranger."
      }
    ],
    "playstyleScores": {
      "offense": 4,
      "defense": 3,
      "utility": 4,
      "support": 3,
      "complexity": 2
    },
    "bestAncestries": [
      {
        "label": "Elf",
        "slug": "elf-name-generator"
      },
      {
        "label": "Half-Elf",
        "slug": "half-elf-name-generator"
      },
      {
        "label": "Kobold",
        "slug": "kobold-name-generator"
      }
    ],
    "playerPersona": "Tactical survivalists who love archery, tracking across wild terrain, and coordinating with beast companions.",
    "themeColor": "#84cc16",
    "accentColor": "#4d7c0f",
    "nameGeneratorUrl": "/elf-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Ranger crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#365314\" fill-opacity=\"0.25\" stroke=\"#84cc16\" stroke-width=\"1.5\"/>\n  <path d=\"M16 10 C28 16 28 32 16 38\" stroke=\"#a3e635\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line x1=\"16\" y1=\"10\" x2=\"16\" y2=\"38\" stroke=\"#d9f99d\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n  <line x1=\"12\" y1=\"24\" x2=\"36\" y2=\"24\" stroke=\"#facc15\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  <polygon points=\"36,24 30,21 32,24 30,27\" fill=\"#facc15\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Ranger character portrait\">\n  <defs>\n    <radialGradient id=\"ranger-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#84cc16\" stop-opacity=\"0.35\"/>\n      <stop offset=\"60%\" stop-color=\"#365314\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"ranger-cloak\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#3f6212\"/>\n      <stop offset=\"100%\" stop-color=\"#14532d\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#ranger-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#bef264\">\n    <circle cx=\"65\" cy=\"85\" r=\"1.5\" class=\"sparkle-1\"/>\n    <circle cx=\"178\" cy=\"72\" r=\"2.0\" class=\"sparkle-2\"/>\n    <circle cx=\"50\" cy=\"140\" r=\"1.5\" class=\"sparkle-3\"/>\n    <circle cx=\"192\" cy=\"135\" r=\"1.8\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M40 230 C48 185 80 165 120 165 C160 165 192 185 200 230 Z\" fill=\"url(#ranger-cloak)\"/>\n    <path d=\"M68 140 C62 90 82 50 120 42 C158 50 178 90 172 140 C162 165 145 178 120 180 C95 178 78 165 68 140 Z\" fill=\"#365314\" stroke=\"#4d7c0f\" stroke-width=\"1.2\"/>\n    <path d=\"M72 110 L45 88 C48 98 62 114 74 122 Z\" fill=\"#edd6c8\"/>\n    <path d=\"M168 110 L195 88 C192 98 178 114 166 122 Z\" fill=\"#edd6c8\"/>\n    <path d=\"M84 100 C84 75 100 68 120 68 C140 68 156 75 156 100 C156 130 144 154 120 162 C96 154 84 130 84 100 Z\" fill=\"#f7ebe1\"/>\n    <ellipse cx=\"106\" cy=\"115\" rx=\"3.5\" ry=\"2\" fill=\"#84cc16\" class=\"glow-eye\"/>\n    <ellipse cx=\"134\" cy=\"115\" rx=\"3.5\" ry=\"2\" fill=\"#84cc16\" class=\"glow-eye\"/>\n    <path d=\"M188 40 Q215 120 188 200\" stroke=\"#d4af37\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n    <polygon points=\"175,116 195,120 175,124\" fill=\"#a3e635\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Rogue",
    "slug": "rogue",
    "ruleset": "Core 5e",
    "roleCategory": "Precision Striker & Skill Expert",
    "synopsis": "A stealthy opportunist who capitalizes on enemy distraction to strike with lethal precision. Rogues deliver deadly Sneak Attacks, unlock traps with effortless skill checks, and slip through shadows via Cunning Action.",
    "hitDie": "d8",
    "primaryAbility": "Dexterity",
    "saves": "Dexterity & Intelligence",
    "armorProficiencies": "Light armor",
    "weaponProficiencies": "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    "signatureFeatures": [
      "Expertise",
      "Sneak Attack",
      "Thieves Cant",
      "Cunning Action",
      "Roguish Archetype",
      "Uncanny Dodge",
      "Evasion",
      "Reliable Talent"
    ],
    "subclasses": [
      {
        "name": "Arcane Trickster",
        "summary": "Learns illusion and enchantment wizardry to manipulate objects with an invisible Mage Hand."
      },
      {
        "name": "Assassin",
        "summary": "Masters deadly disguise and guarantees critical surprise hits on unaware targets."
      },
      {
        "name": "Swashbuckler",
        "summary": "A charismatic duelist who triggers Sneak Attack in one-on-one combat without allies nearby."
      },
      {
        "name": "Soulknife",
        "summary": "Manifests shimmering psionic blades that cut minds directly and boost skill check rolls."
      }
    ],
    "playstyleScores": {
      "offense": 5,
      "defense": 3,
      "utility": 4,
      "support": 1,
      "complexity": 2
    },
    "bestAncestries": [
      {
        "label": "Halfling",
        "slug": "halfling-name-generator"
      },
      {
        "label": "Drow",
        "slug": "drow-name-generator"
      },
      {
        "label": "Goblin",
        "slug": "goblin-name-generator"
      }
    ],
    "playerPersona": "Sneaky operators who love rolling piles of d6 sneak attack dice, solving locks, and evading damage.",
    "themeColor": "#8b5cf6",
    "accentColor": "#6d28d9",
    "nameGeneratorUrl": "/halfling-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Rogue crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#4c1d95\" fill-opacity=\"0.25\" stroke=\"#8b5cf6\" stroke-width=\"1.5\"/>\n  <path d=\"M16 12 L24 24 L22 36 M32 12 L24 24 L26 36\" stroke=\"#c4b5fd\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  <circle cx=\"24\" cy=\"24\" r=\"3\" fill=\"#a78bfa\"/>\n  <path d=\"M20 36 L24 40 L28 36\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Rogue character portrait\">\n  <defs>\n    <radialGradient id=\"rogue-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.32\"/>\n      <stop offset=\"60%\" stop-color=\"#4c1d95\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"rogue-cloak\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1e1b4b\"/>\n      <stop offset=\"100%\" stop-color=\"#0f0b18\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#rogue-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#ddd6fe\">\n    <circle cx=\"65\" cy=\"80\" r=\"1.5\" class=\"sparkle-1\"/>\n    <circle cx=\"175\" cy=\"70\" r=\"2.0\" class=\"sparkle-2\"/>\n    <circle cx=\"52\" cy=\"155\" r=\"1.8\" class=\"sparkle-3\"/>\n    <circle cx=\"188\" cy=\"148\" r=\"1.6\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M42 230 C48 180 80 162 120 162 C160 162 192 180 198 230 Z\" fill=\"url(#rogue-cloak)\" stroke=\"#6d28d9\" stroke-width=\"1\"/>\n    <path d=\"M68 135 C62 85 82 45 120 38 C158 45 178 85 172 135 C162 165 145 178 120 180 C95 178 78 165 68 135 Z\" fill=\"#2e1065\" stroke=\"#7c3aed\" stroke-width=\"1.2\"/>\n    <path d=\"M84 98 C84 74 100 66 120 66 C140 66 156 74 156 98 C156 128 144 152 120 160 C96 152 84 128 84 98 Z\" fill=\"#1e1b2e\"/>\n    <ellipse cx=\"106\" cy=\"114\" rx=\"3.5\" ry=\"2\" fill=\"#a78bfa\" class=\"glow-eye\"/>\n    <ellipse cx=\"134\" cy=\"114\" rx=\"3.5\" ry=\"2\" fill=\"#a78bfa\" class=\"glow-eye\"/>\n    <path d=\"M52 145 L72 205 L62 210 L45 152 Z\" fill=\"#c4b5fd\" stroke=\"#8b5cf6\" stroke-width=\"0.8\"/>\n    <path d=\"M188 145 L168 205 L178 210 L195 152 Z\" fill=\"#c4b5fd\" stroke=\"#8b5cf6\" stroke-width=\"0.8\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Sorcerer",
    "slug": "sorcerer",
    "ruleset": "Core 5e",
    "roleCategory": "Innate Blaster & Metamagic Specialist",
    "synopsis": "A spellcaster born with innate arcane power flowing through their bloodline or spark of destiny. Sorcerers sculpt spells on the fly with Metamagic, extending reach, twin-casting enchantments, or blasting foes with raw sorcery points.",
    "hitDie": "d6",
    "primaryAbility": "Charisma",
    "saves": "Constitution & Charisma",
    "armorProficiencies": "None",
    "weaponProficiencies": "Daggers, darts, slings, quarterstaffs, light crossbows",
    "signatureFeatures": [
      "Spellcasting",
      "Sorcerous Origin",
      "Font of Magic",
      "Sorcery Points",
      "Metamagic",
      "Sorcerous Restoration"
    ],
    "subclasses": [
      {
        "name": "Draconic Bloodline",
        "summary": "Sprouts dragon scales for resilient defense while boosting matched elemental spell damage."
      },
      {
        "name": "Wild Magic",
        "summary": "Taps unpredictable chaos surges to alter fate, manipulate rolls, and trigger magic fireworks."
      },
      {
        "name": "Aberrant Mind",
        "summary": "Wields strange psionic telepathy, casting spells silently without material components."
      },
      {
        "name": "Clockwork Soul",
        "summary": "Channels cosmic order to neutralize advantage or disadvantage and project damage-absorbing wards."
      }
    ],
    "playstyleScores": {
      "offense": 5,
      "defense": 2,
      "utility": 3,
      "support": 3,
      "complexity": 3
    },
    "bestAncestries": [
      {
        "label": "Tiefling",
        "slug": "tiefling-name-generator"
      },
      {
        "label": "Dragonborn",
        "slug": "dragonborn-name-generator"
      },
      {
        "label": "Half-Elf",
        "slug": "half-elf-name-generator"
      }
    ],
    "playerPersona": "Blasters who want flexible spell modifications, twin-spell combos, and raw charismatic force.",
    "themeColor": "#ec4899",
    "accentColor": "#be185d",
    "nameGeneratorUrl": "/dragonborn-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Sorcerer crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#831843\" fill-opacity=\"0.25\" stroke=\"#ec4899\" stroke-width=\"1.5\"/>\n  <path d=\"M24 10 Q32 18 28 26 Q36 28 32 38 Q24 34 22 28 Q14 26 24 10 Z\" fill=\"#db2777\" fill-opacity=\"0.4\" stroke=\"#f472b6\" stroke-width=\"1.5\"/>\n  <circle cx=\"24\" cy=\"24\" r=\"4\" fill=\"#fbcfe8\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Sorcerer character portrait\">\n  <defs>\n    <radialGradient id=\"sorcerer-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#ec4899\" stop-opacity=\"0.36\"/>\n      <stop offset=\"60%\" stop-color=\"#831843\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"sorcerer-robes\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#be185d\"/>\n      <stop offset=\"100%\" stop-color=\"#4c0519\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#sorcerer-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#fbcfe8\">\n    <circle cx=\"62\" cy=\"78\" r=\"2.0\" class=\"sparkle-1\"/>\n    <circle cx=\"178\" cy=\"74\" r=\"2.2\" class=\"sparkle-2\"/>\n    <circle cx=\"50\" cy=\"145\" r=\"1.6\" class=\"sparkle-3\"/>\n    <circle cx=\"190\" cy=\"140\" r=\"2.0\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M42 230 C48 180 80 162 120 162 C160 162 192 180 198 230 Z\" fill=\"url(#sorcerer-robes)\"/>\n    <path d=\"M84 96 C84 72 100 66 120 66 C140 66 156 72 156 96 C156 128 144 152 120 160 C96 152 84 128 84 96 Z\" fill=\"#fbcfe8\"/>\n    <path d=\"M82 72 Q120 40 158 72 Q140 120 120 120 Q100 120 82 72 Z\" fill=\"#9d174d\"/>\n    <ellipse cx=\"106\" cy=\"112\" rx=\"3.5\" ry=\"2\" fill=\"#ec4899\" class=\"glow-eye\"/>\n    <ellipse cx=\"134\" cy=\"112\" rx=\"3.5\" ry=\"2\" fill=\"#ec4899\" class=\"glow-eye\"/>\n    <path d=\"M120 78 L124 88 L120 96 L116 88 Z\" fill=\"#f472b6\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Warlock",
    "slug": "warlock",
    "ruleset": "Core 5e",
    "roleCategory": "Occult Pact Striker & Customizer",
    "synopsis": "A seeker of forbidden knowledge bound by pact to an otherworldly patron such as an archfey, fiend, or Great Old One. Warlocks cast max-level pact spells that recharge on short rests and snipe foes with upgraded Eldritch Blasts.",
    "hitDie": "d8",
    "primaryAbility": "Charisma",
    "saves": "Wisdom & Charisma",
    "armorProficiencies": "Light armor",
    "weaponProficiencies": "Simple weapons",
    "signatureFeatures": [
      "Otherworldly Patron",
      "Pact Magic",
      "Eldritch Invocations",
      "Pact Boon",
      "Mystic Arcanum",
      "Eldritch Master"
    ],
    "subclasses": [
      {
        "name": "The Fiend",
        "summary": "Draws hellfire from the Lower Planes to gain temporary hit points whenever enemies fall."
      },
      {
        "name": "The Hexblade",
        "summary": "Attacks using Charisma with shadowfell cursed weapons while hexing enemy targets."
      },
      {
        "name": "The Great Old One",
        "summary": "Awakens telepathic communication and bends minds with eldritch madness."
      },
      {
        "name": "The Genie",
        "summary": "Sanctuaries within an elemental vessel and adds elemental damage to strikes."
      }
    ],
    "playstyleScores": {
      "offense": 5,
      "defense": 3,
      "utility": 3,
      "support": 2,
      "complexity": 4
    },
    "bestAncestries": [
      {
        "label": "Tiefling",
        "slug": "tiefling-name-generator"
      },
      {
        "label": "Drow",
        "slug": "drow-name-generator"
      },
      {
        "label": "Half-Elf",
        "slug": "half-elf-name-generator"
      }
    ],
    "playerPersona": "Customization enthusiasts who love deep invocations, short-rest spell resets, and sinister patron lore.",
    "themeColor": "#a855f7",
    "accentColor": "#7e22ce",
    "nameGeneratorUrl": "/tiefling-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Warlock crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#581c87\" fill-opacity=\"0.25\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n  <path d=\"M12 24 C16 16 32 16 36 24 C32 32 16 32 12 24 Z\" stroke=\"#c084fc\" stroke-width=\"2\"/>\n  <circle cx=\"24\" cy=\"24\" r=\"4\" fill=\"#a855f7\" stroke=\"#e9d5ff\" stroke-width=\"1.5\"/>\n  <path d=\"M20 14 L24 8 L28 14\" stroke=\"#c084fc\" stroke-width=\"1.5\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Warlock character portrait\">\n  <defs>\n    <radialGradient id=\"warlock-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#a855f7\" stop-opacity=\"0.35\"/>\n      <stop offset=\"60%\" stop-color=\"#581c87\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"warlock-robes\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#3b0764\"/>\n      <stop offset=\"100%\" stop-color=\"#0f051d\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#warlock-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#e9d5ff\">\n    <circle cx=\"55\" cy=\"95\" r=\"1.8\" class=\"sparkle-1\"/>\n    <circle cx=\"185\" cy=\"80\" r=\"2.2\" class=\"sparkle-2\"/>\n    <circle cx=\"68\" cy=\"165\" r=\"1.6\" class=\"sparkle-3\"/>\n    <circle cx=\"170\" cy=\"160\" r=\"2.0\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M92 78 C70 42 45 32 30 48 C20 62 48 95 82 98 Z\" fill=\"#18181b\" stroke=\"#a855f7\" stroke-width=\"1\"/>\n    <path d=\"M148 78 C170 42 195 32 210 48 C220 62 192 95 158 98 Z\" fill=\"#18181b\" stroke=\"#a855f7\" stroke-width=\"1\"/>\n    <path d=\"M45 230 C50 180 80 162 120 162 C160 162 190 180 195 230 Z\" fill=\"url(#warlock-robes)\"/>\n    <path d=\"M84 96 C84 72 100 66 120 66 C140 66 156 72 156 96 C156 128 144 154 120 162 C96 154 84 128 84 96 Z\" fill=\"#701a75\"/>\n    <ellipse cx=\"106\" cy=\"118\" rx=\"3.5\" ry=\"2.2\" fill=\"#fbbf24\" class=\"glow-eye\"/>\n    <ellipse cx=\"134\" cy=\"118\" rx=\"3.5\" ry=\"2.2\" fill=\"#fbbf24\" class=\"glow-eye\"/>\n    <path d=\"M120 82 L123 90 L120 98 L117 90 Z\" fill=\"#f87171\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Wizard",
    "slug": "wizard",
    "ruleset": "Core 5e",
    "roleCategory": "Scholarly Arcane Specialist & Ritualist",
    "synopsis": "A scholarly master of the magical arts who unlocks the laws of the universe through disciplined study. Possessing a boundless spellbook, wizards bring unmatched preparation, ritual versatility, and reality-warping spells.",
    "hitDie": "d6",
    "primaryAbility": "Intelligence",
    "saves": "Intelligence & Wisdom",
    "armorProficiencies": "None",
    "weaponProficiencies": "Daggers, darts, slings, quarterstaffs, light crossbows",
    "signatureFeatures": [
      "Spellcasting",
      "Spellbook",
      "Arcane Recovery",
      "Arcane Tradition",
      "Spell Mastery",
      "Signature Spells"
    ],
    "subclasses": [
      {
        "name": "School of Evocation",
        "summary": "Sculpts destructive fireballs and lightning bursts safely around friendly allies."
      },
      {
        "name": "School of Abjuration",
        "summary": "Creates protective wards that absorb team damage and reliably counters magic."
      },
      {
        "name": "School of Divination",
        "summary": "Rolls Portent d20 dice each morning to force successes or failures on friend or foe."
      },
      {
        "name": "Order of Scribes",
        "summary": "Awakens an arcane grimoire that swaps spell damage elements and speeds ritual casting."
      }
    ],
    "playstyleScores": {
      "offense": 5,
      "defense": 2,
      "utility": 5,
      "support": 3,
      "complexity": 5
    },
    "bestAncestries": [
      {
        "label": "Gnome",
        "slug": "gnome-name-generator"
      },
      {
        "label": "Elf",
        "slug": "elf-name-generator"
      },
      {
        "label": "Human",
        "slug": "human-name-generator"
      }
    ],
    "playerPersona": "Planners and tacticians who love deep spellbooks, ritual preparation, and having an answer for every crisis.",
    "themeColor": "#3b82f6",
    "accentColor": "#1d4ed8",
    "nameGeneratorUrl": "/gnome-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Wizard crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#1e3a8a\" fill-opacity=\"0.25\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n  <path d=\"M14 16 L24 20 L34 16 L34 32 L24 36 L14 32 Z\" fill=\"#2563eb\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"1.5\"/>\n  <line x1=\"24\" y1=\"20\" x2=\"24\" y2=\"36\" stroke=\"#93c5fd\" stroke-width=\"1.5\"/>\n  <polygon points=\"24,10 26,14 24,18 22,14\" fill=\"#60a5fa\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Wizard character portrait\">\n  <defs>\n    <radialGradient id=\"wizard-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#3b82f6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"60%\" stop-color=\"#1e3a8a\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"wizard-robes\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1e40af\"/>\n      <stop offset=\"100%\" stop-color=\"#0f172a\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#wizard-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#93c5fd\">\n    <circle cx=\"65\" cy=\"80\" r=\"1.8\" class=\"sparkle-1\"/>\n    <circle cx=\"175\" cy=\"70\" r=\"2.2\" class=\"sparkle-2\"/>\n    <circle cx=\"52\" cy=\"150\" r=\"1.5\" class=\"sparkle-3\"/>\n    <circle cx=\"188\" cy=\"142\" r=\"1.8\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M40 230 C48 180 80 162 120 162 C160 162 192 180 200 230 Z\" fill=\"url(#wizard-robes)\"/>\n    <path d=\"M50 100 Q120 20 190 100 Q120 85 50 100 Z\" fill=\"#1e3a8a\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n    <polygon points=\"120,25 150,90 90,90\" fill=\"#1d4ed8\"/>\n    <path d=\"M84 96 C84 72 100 66 120 66 C140 66 156 72 156 96 C156 128 144 152 120 160 C96 152 84 128 84 96 Z\" fill=\"#fde68a\"/>\n    <ellipse cx=\"106\" cy=\"112\" rx=\"3.5\" ry=\"2\" fill=\"#60a5fa\" class=\"glow-eye\"/>\n    <ellipse cx=\"134\" cy=\"112\" rx=\"3.5\" ry=\"2\" fill=\"#60a5fa\" class=\"glow-eye\"/>\n    <path d=\"M96 135 C110 165 130 165 144 135 Z\" fill=\"#f1f5f9\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Artificer",
    "slug": "artificer",
    "ruleset": "Expansion (TCoE)",
    "roleCategory": "Magical Tinkerer & Support Specialist",
    "synopsis": "An inventive prodigy who channels magical energy into mundane items to engineer wondrous inventions. Artificers craft infused equipment, command mechanical homunculi, and innovate technical remedies for every hazard.",
    "hitDie": "d8",
    "primaryAbility": "Intelligence",
    "saves": "Constitution & Intelligence",
    "armorProficiencies": "Light armor, medium armor, shields",
    "weaponProficiencies": "Simple weapons, firearms (optional)",
    "signatureFeatures": [
      "Magical Tinkering",
      "Spellcasting",
      "Infuse Item",
      "Artificer Specialist",
      "The Right Tool for the Job",
      "Flash of Genius",
      "Magic Item Adept"
    ],
    "subclasses": [
      {
        "name": "Armorer",
        "summary": "Upgrades specialized heavy armor into a defensive guardian suit or silent stealth chassis."
      },
      {
        "name": "Artillerist",
        "summary": "Constructs deployable eldritch cannons that grant party shields or fiery blast cones."
      },
      {
        "name": "Battle Smith",
        "summary": "Attacks with intelligence, repairs gear, and commands an iron Steel Defender guardian."
      },
      {
        "name": "Alchemist",
        "summary": "Brews experimental alchemical elixirs that grant flight, resilience, or swift healing."
      }
    ],
    "playstyleScores": {
      "offense": 3,
      "defense": 4,
      "utility": 5,
      "support": 4,
      "complexity": 4
    },
    "bestAncestries": [
      {
        "label": "Gnome",
        "slug": "gnome-name-generator"
      },
      {
        "label": "Dwarf",
        "slug": "dwarf-name-generator"
      },
      {
        "label": "Human",
        "slug": "human-name-generator"
      }
    ],
    "playerPersona": "Inventors and gearheads who enjoy infusing gear for companions, creating gadgets, and technical utility.",
    "themeColor": "#14b8a6",
    "accentColor": "#0f766e",
    "nameGeneratorUrl": "/gnome-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Artificer crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#134e4a\" fill-opacity=\"0.25\" stroke=\"#14b8a6\" stroke-width=\"1.5\"/>\n  <circle cx=\"24\" cy=\"24\" r=\"10\" stroke=\"#2dd4bf\" stroke-width=\"2\"/>\n  <circle cx=\"24\" cy=\"24\" r=\"4\" fill=\"#5eead4\"/>\n  <path d=\"M24 10 L24 14 M24 34 L24 38 M10 24 L14 24 M34 24 L38 24 M14 14 L17 17 M31 31 L34 34 M34 14 L31 17 M17 31 L14 34\" stroke=\"#2dd4bf\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Artificer character portrait\">\n  <defs>\n    <radialGradient id=\"artificer-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#14b8a6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"60%\" stop-color=\"#134e4a\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"artificer-leather\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#0f766e\"/>\n      <stop offset=\"100%\" stop-color=\"#042f2e\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#artificer-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#5eead4\">\n    <circle cx=\"65\" cy=\"80\" r=\"1.8\" class=\"sparkle-1\"/>\n    <circle cx=\"175\" cy=\"70\" r=\"2.0\" class=\"sparkle-2\"/>\n    <circle cx=\"50\" cy=\"150\" r=\"1.5\" class=\"sparkle-3\"/>\n    <circle cx=\"190\" cy=\"142\" r=\"1.8\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M40 230 C48 180 80 162 120 162 C160 162 192 180 200 230 Z\" fill=\"url(#artificer-leather)\" stroke=\"#14b8a6\" stroke-width=\"1\"/>\n    <circle cx=\"95\" cy=\"190\" r=\"8\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"1.5\"/>\n    <circle cx=\"145\" cy=\"190\" r=\"8\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"1.5\"/>\n    <path d=\"M84 96 C84 72 100 66 120 66 C140 66 156 72 156 96 C156 128 144 152 120 160 C96 152 84 128 84 96 Z\" fill=\"#fed7aa\"/>\n    <rect x=\"90\" y=\"90\" width=\"24\" height=\"16\" rx=\"4\" fill=\"#0f172a\" stroke=\"#2dd4bf\" stroke-width=\"1.5\"/>\n    <rect x=\"126\" y=\"90\" width=\"24\" height=\"16\" rx=\"4\" fill=\"#0f172a\" stroke=\"#2dd4bf\" stroke-width=\"1.5\"/>\n    <line x1=\"114\" y1=\"98\" x2=\"126\" y2=\"98\" stroke=\"#2dd4bf\" stroke-width=\"2\"/>\n    <ellipse cx=\"102\" cy=\"98\" rx=\"4\" ry=\"3\" fill=\"#2dd4bf\" class=\"glow-eye\"/>\n    <ellipse cx=\"138\" cy=\"98\" rx=\"4\" ry=\"3\" fill=\"#2dd4bf\" class=\"glow-eye\"/>\n  </g>\n</svg>"
  },
  {
    "name": "Blood Hunter",
    "slug": "blood-hunter",
    "ruleset": "Partner (Critical Role)",
    "roleCategory": "Occult Warrior & Blood Mage",
    "synopsis": "A driven monster hunter who sacrifices their own vital essence to awaken esoteric blood magic. Blood Hunters enchant weapons with elemental Crimson Rites and curse adversaries using sacrificial Blood Maledicts.",
    "hitDie": "d10",
    "primaryAbility": "Strength or Dexterity & Intelligence or Wisdom",
    "saves": "Dexterity & Intelligence",
    "armorProficiencies": "Light armor, medium armor, shields",
    "weaponProficiencies": "Simple weapons, martial weapons",
    "signatureFeatures": [
      "Hunters Bane",
      "Blood Maledict",
      "Crimson Rite",
      "Blood Hunter Order",
      "Brand of Castigation",
      "Dark Augmentation",
      "Grim Psychometry"
    ],
    "subclasses": [
      {
        "name": "Order of the Ghostslayer",
        "summary": "Focuses on hunting incorporeal undead with radiant Rite of the Dawn weapon energy."
      },
      {
        "name": "Order of the Lycan",
        "summary": "Unleashes controlled lycanthropic hybrid forms to tear foes apart with feral claws."
      },
      {
        "name": "Order of the Mutant",
        "summary": "Concocts toxic mutagenic elixirs that enhance physical stats at the cost of side effects."
      },
      {
        "name": "Order of the Profane Soul",
        "summary": "Bargains with occult patrons to weave pact magic spells directly into blood rite strikes."
      }
    ],
    "playstyleScores": {
      "offense": 5,
      "defense": 3,
      "utility": 2,
      "support": 2,
      "complexity": 4
    },
    "bestAncestries": [
      {
        "label": "Tiefling",
        "slug": "tiefling-name-generator"
      },
      {
        "label": "Drow",
        "slug": "drow-name-generator"
      },
      {
        "label": "Half-Orc",
        "slug": "half-orc-name-generator"
      }
    ],
    "playerPersona": "Edgy monster hunters who love high-risk high-reward mechanics and spending hit points for devastating offense.",
    "themeColor": "#b91c1c",
    "accentColor": "#7f1d1d",
    "nameGeneratorUrl": "/tiefling-name-generator/",
    "crestSvg": "<svg class=\"class-crest-svg\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Blood Hunter crest\">\n  <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#450a0a\" fill-opacity=\"0.3\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/>\n  <path d=\"M24 10 L24 38 M18 16 L30 16\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <path d=\"M24 22 C21 26 20 28 20 30 C20 32.2 21.8 34 24 34 C26.2 34 28 32.2 28 30 C28 28 27 26 24 22 Z\" fill=\"#dc2626\"/>\n</svg>",
    "characterArtSvg": "<svg class=\"character-art-svg\" viewBox=\"0 0 240 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Blood Hunter character portrait\">\n  <defs>\n    <radialGradient id=\"blood-hunter-aura\" cx=\"50%\" cy=\"40%\" r=\"55%\">\n      <stop offset=\"0%\" stop-color=\"#b91c1c\" stop-opacity=\"0.38\"/>\n      <stop offset=\"60%\" stop-color=\"#450a0a\" stop-opacity=\"0.14\"/>\n      <stop offset=\"100%\" stop-color=\"transparent\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <linearGradient id=\"blood-hunter-coat\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#7f1d1d\"/>\n      <stop offset=\"100%\" stop-color=\"#1c1917\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"120\" cy=\"115\" r=\"95\" fill=\"url(#blood-hunter-aura)\"/>\n  <g class=\"char-sparkles\" fill=\"#fca5a5\">\n    <circle cx=\"58\" cy=\"85\" r=\"1.8\" class=\"sparkle-1\"/>\n    <circle cx=\"180\" cy=\"75\" r=\"2.0\" class=\"sparkle-2\"/>\n    <circle cx=\"48\" cy=\"148\" r=\"1.5\" class=\"sparkle-3\"/>\n    <circle cx=\"190\" cy=\"142\" r=\"1.8\" class=\"sparkle-4\"/>\n  </g>\n  <g class=\"char-body\">\n    <path d=\"M38 230 C44 175 78 158 120 158 C162 158 196 175 202 230 Z\" fill=\"url(#blood-hunter-coat)\" stroke=\"#991b1b\" stroke-width=\"1.2\"/>\n    <path d=\"M68 135 C62 85 82 45 120 38 C158 45 178 85 172 135 C162 165 145 178 120 180 C95 178 78 165 68 135 Z\" fill=\"#292524\" stroke=\"#7f1d1d\" stroke-width=\"1.2\"/>\n    <path d=\"M84 96 C84 72 100 66 120 66 C140 66 156 72 156 96 C156 128 144 152 120 160 C96 152 84 128 84 96 Z\" fill=\"#fed7aa\"/>\n    <ellipse cx=\"106\" cy=\"112\" rx=\"3.5\" ry=\"2\" fill=\"#ef4444\" class=\"glow-eye\"/>\n    <ellipse cx=\"134\" cy=\"112\" rx=\"3.5\" ry=\"2\" fill=\"#ef4444\" class=\"glow-eye\"/>\n    <path d=\"M120 102 L120 114\" stroke=\"#7f1d1d\" stroke-width=\"1.5\"/>\n    <line x1=\"175\" y1=\"90\" x2=\"195\" y2=\"210\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n</svg>"
  }
];

export const classBySlug = new Map(dndClasses.map((cls) => [cls.slug, cls]));

export default dndClasses;
