const profile = {
  slug: 'sorcerer-name-generator',
  label: 'Sorcerer',
  keyword: 'sorcerer name generator',
  title: 'Sorcerer Name Generator: Draconic & Wild Magic',
  description: 'Sorcerer name generator for draconic scions, wild magic surges, and shadow sparks. Roll ten innate names, pick magical styles, and save campaign favorites.',
  intro: [
    'This sorcerer name generator creates fierce, innate magical names for draconic scions, wild magic surge conduits, and shadowy aberrant bloodlines.',
    'Unlike studious wizards who memorize tomes, sorcerers carry power in their blood and marrow. Generate names that crackle with raw, untamed magic for your campaign.'
  ],
  construction: [
    'Sorcerer naming practices celebrate inherited power, cosmic anomalies, and spontaneous arcane heritage rather than institutional degrees. While a sorcerer may inherit an ordinary family name from their mortal lineage, their true reputation at the table revolves around magical titles, Draconic syllables, or explosive monikers that manifested when their power first flared during adolescence.',
    'The three registers provided here capture distinct supernatural origins. Draconic bloodline scions command resonant guttural syllables with sibilant vowels like -rax, -vash, and -orath, echoing dragon ancestry. Wild magic conduits carry erratic, crackling names with sudden staccato endings like -kik, -zil, and -rin that suggest unstable arcane energy about to erupt. Shadow and aberrant sorcerers wield whispering, nocturnal phonemes like Umbr-, Nyx-, and -khal, conveying depths of planar mystery.',
    'Sorcerers frequently claim lineage titles or epithets reflecting their origin, such as Dragon Heart, Spark Touched, The Surge, Wild Ember, or Void Walker. These epithets warn allies and foes alike that raw power flows unrestrained through their veins.'
  ],
  styles: [
    {
      id: 'draconic-blood',
      label: 'Draconic bloodlines',
      summary: 'Resonant guttural strikes, noble dragon scales, and fiery reptilian power. Fits red, gold, and bronze draconic sorcerers.',
      starts: ['Bal', 'Dra', 'Ign', 'Kal', 'Pyra', 'Rha', 'Sar', 'Tyra', 'Val', 'Zar'],
      middles: ['ador', 'akar', 'elios', 'okan', 'orath', 'ulion'],
      endings: ['ar', 'ash', 'ax', 'on', 'or', 'rax'],
      genderEndings: {
        male: ['ax', 'or', 'on', 'ar'],
        female: ['a', 'ia', 'ina', 'orath'],
        neutral: ['ar', 'ash', 'ax', 'on']
      },
      familyNames: ['Dragon Heart', 'Fire Scale', 'Golden Talon', 'Flame Crest', 'Pyre Born', 'Red Wing', 'Sun Claw', 'True Drake'],
      flavors: [
        'A resonant, imperious name that reverberates with ancient draconic majesty.',
        'A fierce reptilian title that carries the scent of brimstone and molten gold.',
        'An imposing name suited to a sorcerer whose veins pulse with dragon blood.'
      ],
      examples: ['Balador', 'Drakar', 'Ignorath', 'Kalokan', 'Pyraon', 'Rhaelios', 'Sarax', 'Tyraulion', 'Valash', 'Zarrax']
    },
    {
      id: 'wild-magic',
      label: 'Wild magic conduits',
      summary: 'Erratic pops, unpredictable consonants, and chaotic spark rhythm. Fits wild magic tricksters, surge conduits, and chaos weavers.',
      starts: ['Blink', 'Cinder', 'Fizz', 'Jinx', 'Kip', 'Nova', 'Razz', 'Snap', 'Spark', 'Zap'],
      middles: ['akor', 'elis', 'ipon', 'okan', 'urin', 'yris'],
      endings: ['a', 'ik', 'in', 'is', 'on', 'or'],
      genderEndings: {
        male: ['ik', 'in', 'on', 'or'],
        female: ['a', 'elis', 'ia', 'is'],
        neutral: ['ik', 'in', 'is', 'on']
      },
      familyNames: ['Wild Surge', 'Spark Hand', 'Mad Helix', 'Chaos Bell', 'Twisted Rune', 'Lucky Coin', 'Split Flame', 'Errant Star'],
      flavors: [
        'A crackling, volatile name that hints at unpredictable magical surges.',
        'A playful chaos moniker that sparkles with untamed arcane energy.',
        'An erratic title suited to a sorcerer whose spells never take the same shape twice.'
      ],
      examples: ['Blinkin', 'Cinderon', 'Fizzelis', 'Jinxakor', 'Kipon', 'Novais', 'Razzurin', 'Snapis', 'Sparkor', 'Zapik']
    },
    {
      id: 'shadow-aberrant',
      label: 'Shadow and aberrant origins',
      summary: 'Whispering sibilants, nocturnal voids, and alien cadences. Fits shadow magic, cosmic voids, and psionic aberrations.',
      starts: ['Dusk', 'Kha', 'Mor', 'Nyx', 'Pha', 'Shad', 'Noct', 'Vex', 'Xan', 'Zul'],
      middles: ['ados', 'alor', 'elis', 'ithor', 'olan', 'zoth'],
      endings: ['a', 'an', 'el', 'is', 'on', 'us'],
      genderEndings: {
        male: ['an', 'on', 'us', 'alor'],
        female: ['a', 'elis', 'ia', 'is'],
        neutral: ['an', 'el', 'is', 'on']
      },
      familyNames: ['Void Walker', 'Night Weft', 'Black Veil', 'Dim Spark', 'Hollow Mind', 'Deep Mirror', 'Pale Shade', 'Silent Eye'],
      flavors: [
        'A whispering, nocturnal name touched by the chill of the Shadowfell.',
        'An enigmatic alien moniker that hints at strange planar origins.',
        'A shadowy title suited to a sorcerer who commands tenebrous magic.'
      ],
      examples: ['Duskan', 'Khael', 'Moralor', 'Nyxis', 'Phaon', 'Shadolan', 'Noctados', 'Vexzoth', 'Xanus', 'Zulelis']
    }
  ],
  pronunciation: [
    { name: 'Balador', guide: 'BAH-lah-dohr', note: 'Resonant draconic cadence with rich vowel volume.' },
    { name: 'Kalokan', guide: 'kah-LOH-kahn', note: 'Deep guttural emphasis followed by an open throat finish.' },
    { name: 'Fizzelis', guide: 'FIZ-eh-lis', note: 'Brisk crackling opening with a light, airy sibilant tail.' },
    { name: 'Duskan', guide: 'DUHS-kahn', note: 'Low shadow resonance with a restrained closing consonant.' },
    { name: 'Vexzoth', guide: 'VEKS-zahth', note: 'Sharp alien bite that descends into deep aberrant cadence.' }
  ],
  tableTips: [
    'Invent a signature cosmetic surge that accompanies your sorcerer name during combat. When Drakar casts lightning bolt, bronze scales might flare along their neck, while a spell from Fizzelis might cause nearby torches to momentarily turn lilac.',
    'Decide whether your character embraces or fears their innate magic. A wild magic sorcerer may adopt a humble pseudonym in town to hide an erratic surge history, revealing their true resonant name only to trusted adventuring companions.',
    'Play up the contrast between intuitive sorcery and formal book magic when roleplaying alongside wizards. Emphasize that your character feels spellcraft in their pulse rather than reading it from dusty parchment.'
  ],
  faq: [
    { question: 'What makes sorcerer names different from wizard names?', answer: 'Sorcerer names focus on raw bloodline power, chaotic surges, and primal elements, whereas wizard names lean on scholarly academic titles and Latinate roots.' },
    { question: 'Do sorcerers take on draconic family names?', answer: 'Yes. Sorcerers descended from dragon ancestry often adopt clan epithets like Dragon Heart, Fire Scale, or Sun Claw to honor their legendary heritage.' },
    { question: 'Can these names be used for warlocks or shadow casters?', answer: 'Yes. The shadow, aberrant, and wild magic styles easily fit warlocks bound to patron pacts, void seers, and psionic travelers.' },
    { question: 'Can I save and export my favorite sorcerer names?', answer: 'Yes. Use the star icon on any result card to save names to your browser storage and export them anytime as a clean text file.' }
  ],
  relatedRaces: ['dragonborn-name-generator', 'tiefling-name-generator', 'wizard-name-generator', 'demon-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator', 'party-name-generator']
};

export default profile;
