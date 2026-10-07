const profile = {
  slug: 'dragon-name-generator',
  label: 'Dragon',
  keyword: 'dragon name generator',
  title: 'Dragon Name Generator: Ancient & Wyrm Names',
  description: 'Dragon name generator for ancient wyrms, chromatic terrors, and metallic sovereigns. Generate ten names, inspect draconic styles, and save favorites now.',
  intro: [
    'This dragon name generator creates original fantasy names for ancient wyrms, chromatic predators, and noble metallic sovereigns. Select a draconic lineage, choose a name length, and generate a hoard of memorable titles for your next tabletop campaign.',
    'All syllable patterns and sample wyrm monikers were newly crafted for DnD Arena. They avoid copying intellectual property from published rulebooks, giving your campaign dragons a fresh, thundering voice at the table.'
  ],
  construction: [
    'True dragon names carry volcanic weight and centuries of draconic pride. In classical fantasy linguistics, draconic phonetics favor harsh guttural stops, rolling alveolar consonants, and long sibilant hisses that evoke exhaled smoke and scraping scales. A younger wyrmling might bear a concise two-beat identifier, whereas a legendary great wyrm gathers honorifics, lair markers, and ancestral titles over centuries of territorial conquest.',
    'The three draconic sound styles on this page explore distinct vocal registers. Ancient chromatic wyrms lean into violent plosives, jarring consonant clusters, and fiery terminal beats that command immediate submission. Metallic sovereigns balance power with dignified resonance, utilizing open vowels, liquid consonants, and brass-bright endings that ring like cathedral bells. Shadow and planar wyrms favor whispered sibilance, hollow vowel shifts, and unearthly cadences born in the void between planes.',
    'When building a draconic introduction, decide how other species speak the name. True dragons often possess private names that lesser humanoids find impossible to pronounce without burning their palates. The names generated here represent the spoken forms used by dungeon masters, planar scholars, and brave adventuring parties who negotiate before drawing steel.'
  ],
  styles: [
    {
      id: 'chromatic-fury',
      label: 'Chromatic fury',
      summary: 'Guttural stops, volcanic plosives, and jagged consonant strikes give these names a ferocious presence. Ideal for red, black, green, blue, and white dragons who rule through fear.',
      starts: ['Bal', 'Drak', 'Gorg', 'Ign', 'Krag', 'Rakh', 'Skar', 'Typhon', 'Vrak', 'Zul'],
      middles: ['akor', 'athis', 'goroth', 'kragh', 'orim', 'urrak'],
      endings: ['ar', 'ax', 'or', 'oth', 'rax', 'ur'],
      genderEndings: {
        male: ['or', 'oth', 'rax', 'ur'],
        female: ['a', 'ia', 'yra', 'tira'],
        neutral: ['ax', 'orim', 'ath', 'ash']
      },
      familyNames: ['Flame Sovereign', 'Ash Sovereign', 'Cinder Claw', 'Iron Maw', 'Blight Wing', 'Dusk Tyrant', 'Storm Fang', 'Ruin Bringer'],
      flavors: [
        'A volcanic draconic title that rumbles with smoke and embers.',
        'A jagged, aggressive name fit for a lair in jagged mountain peaks.',
        'A ferocious name that demands tribute before entering the cavern.'
      ],
      examples: ['Balgoroth', 'Drakorim', 'Gorgathis', 'Ignorim', 'Kragoth', 'Rakhurrak', 'Skarax', 'Typhonoth', 'Vrakrax', 'Zulakor']
    },
    {
      id: 'metallic-majesty',
      label: 'Metallic majesty',
      summary: 'Resonant vowels, brass-bright cadences, and noble liquid consonants create an imposing and dignified aura. Perfect for gold, silver, bronze, brass, and copper sovereigns.',
      starts: ['Aur', 'Cel', 'Eld', 'Hel', 'Lyr', 'Ond', 'Pal', 'Sil', 'Val', 'Zan'],
      middles: ['ador', 'elios', 'irian', 'orian', 'osina', 'ulion'],
      endings: ['ar', 'iel', 'ion', 'or', 'os', 'us'],
      genderEndings: {
        male: ['on', 'or', 'os', 'ion'],
        female: ['a', 'ia', 'iel', 'ys'],
        neutral: ['ar', 'el', 'ian', 'or']
      },
      familyNames: ['Sun Sovereign', 'Dawn Crest', 'Beacon Sovereign', 'Gilded Crown', 'Silver Spire', 'Radiant Scale', 'Peace Weaver', 'Sky Ward'],
      flavors: [
        'A noble, resonant draconic name echoing with ancient wisdom.',
        'A majestic title worthy of a sanctuary guardian or scholar wyrm.',
        'A golden cadence that sounds ancient, proud, and just.'
      ],
      examples: ['Aurador', 'Celelios', 'Eldirian', 'Helorian', 'Lyrosina', 'Ondulion', 'Palador', 'Siliel', 'Valorian', 'Zanosina']
    },
    {
      id: 'shadow-planar',
      label: 'Shadow and planar',
      summary: 'Whispering sibilants, void-born vowels, and hollow undertones evoke creatures that dwell in twilight or astral seas. Fits shadow dragons, deep wyrms, and cosmic beasts.',
      starts: ['Ash', 'Mor', 'Nox', 'Null', 'Phan', 'Shad', 'Vesper', 'Vex', 'Xal', 'Zyr'],
      middles: ['akor', 'ethis', 'ithor', 'olum', 'yris', 'zoth'],
      endings: ['ash', 'ax', 'is', 'or', 'yx', 'zyx'],
      genderEndings: {
        male: ['or', 'oth', 'ux', 'zyx'],
        female: ['a', 'ia', 'yris', 'is'],
        neutral: ['ash', 'ax', 'yx', 'en']
      },
      familyNames: ['Void Whisper', 'Night Eclipse', 'Grave Shade', 'Abyssal Maw', 'Hollow Star', 'Pale Mist', 'Dusk Walker', 'Null Scale'],
      flavors: [
        'A chilling whisper of a name that drifts like cold fog.',
        'A hollow, predatory title born in ancient planar rifts.',
        'An eerie sibilant cadence suited to a beast of the twilight depths.'
      ],
      examples: ['Ashithor', 'Morethis', 'Noxakor', 'Nullax', 'Phanolum', 'Shadyris', 'Vesperzoth', 'Vexax', 'Xalis', 'Zyryx']
    }
  ],
  pronunciation: [
    { name: 'Vrakrax', guide: 'VRAHK-rahks', note: 'Emphasize the hard first syllable and roll the draconic r.' },
    { name: 'Aurador', guide: 'ow-RAH-dohr', note: 'Keep the vowels open and sustained like a ringing gong.' },
    { name: 'Zulakor', guide: 'ZOO-lah-kohr', note: 'Deliver the opening z with sharp hiss into the throat stop.' },
    { name: 'Nullax', guide: 'NUHL-ahks', note: 'Cut the final syllable sharply without softening the ending x.' },
    { name: 'Siliel', guide: 'sil-EE-el', note: 'A flowing, melodious rise suited to a silver dragon diplomat.' }
  ],
  tableTips: [
    'When introducing a dragon NPC to your players, stage their name revelation carefully. A legendary wyrm does not blurt out their full ancestral title immediately upon landing. Instead, have cultists whisper the name in dread, or let nearby villagers refer to them by an evocative regional nickname like the Smoke Father or the Iron Ridge Scourge before the true name is spoken.',
    'Match your dragon speaking pace to the name cadence. A red dragon bearing a harsh, explosive moniker like Kragoth speaks in loud, imperious commands with brief pauses meant to display dominance. A silver or gold dragon with a fluid name like Valorian speaks with calm, deliberate articulation, treating every sentence like a formal treaty.',
    'Incorporate lair traditions and hoard lore into the dragon title. Dragons accumulate monikers from famous kingdoms they dismantled or heroic paladins whose shields now line their bedchambers. Adding a title like Ash Sovereign or Sun Crest gives your players immediate tactical hooks and campaign history.'
  ],
  faq: [
    { question: 'Do dragons use surnames in fantasy campaigns?', answer: 'Dragons rarely carry conventional family surnames. Instead, they use earned epithets, clan lines, or titles tied to their territory, hoard treasures, or legendary conquests.' },
    { question: 'How can I differentiate chromatic and metallic dragon names?', answer: 'Chromatic names favor guttural consonants, harsh plosives, and abrupt stops, while metallic names utilize flowing vowels, soft liquids, and dignified resonant endings.' },
    { question: 'Can these names be used for wyverns and drakes?', answer: 'Yes. Shorter two-syllable results are ideal for wild drakes, wyverns, and dragon mounts, while longer multi-syllable names suit intelligent ancient dragons.' },
    { question: 'Are these names safe from copyright issues?', answer: 'Yes. All syllable tables and examples were originally composed for DnD Arena, ensuring they are distinct from proprietary setting names.' }
  ],
  relatedRaces: ['dragonborn-name-generator', 'kobold-name-generator', 'tiefling-name-generator', 'dwarf-name-generator'],
  relatedUtilities: ['character-name-generator', 'world-name-generator']
};

export default profile;
