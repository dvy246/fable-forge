const profile = {
  slug: 'avatar-name-generator',
  label: 'Avatar',
  keyword: 'avatar name generator',
  title: 'Avatar Name Generator: Na\'vi & Elemental Names',
  description: 'Avatar name generator for Na\'vi clan hunters, reef navigators, and elemental benders. Roll ten names, choose sound styles, and save campaign favorites.',
  intro: [
    'This avatar name generator creates original names inspired by the lush wildlands of Pandora and the iconic elemental traditions of the four nations. Whether you need a forest hunter, an oceanic reef navigator, or a disciplined bender, roll through dozens of atmospheric options ready for your table.',
    'All phonetics and examples are original creations crafted for DnD Arena. They capture the lyrical cadence of alien clans and elemental masters without copying trademarked characters, giving your homebrew personas an authentic voice.'
  ],
  construction: [
    'Creating a memorable avatar persona requires matching your vocal palette to the character environment and spiritual heritage. For woodland and canopy clans, linguistics emphasize crisp ejectives, glottal pauses, and bright liquid consonants that echo birdcalls through giant trees. Names often include parentage markers like suffixes denoting son of or daughter of, anchoring the character within a living lineage.',
    'Reef and ocean tribes favor elongated, buoyant vowels and undulating consonants that mimic oceanic currents and breathing swells. Their names roll gently on the tongue, evoking tidal reefs, coral canyons, and marine bond beasts. In contrast, elemental martial traditions draw from concise, resonant syllables that reflect physical balance, breath control, and the disciplined focus of master martial artists.',
    'When developing a character, consider whether their name was given at birth or earned through a sacred rite of passage. In many fantasy traditions, hunters receive formal ceremonial names when bonding with an aerial mount or mastering an elemental form. Use these variations to reflect personal growth across your campaign arcs.'
  ],
  styles: [
    {
      id: 'navi-forest',
      label: 'Forest clans',
      summary: 'Sharp glottal stops, ejective consonants, and bright open vowels inspired by canopy hunters and ikran riders. Fits scouts, bow masters, and tsahik spiritual leaders.',
      starts: ['Ate', 'Eyt', 'Ney', 'Ralu', 'Saey', 'Tey', 'Tsu', 'Var', 'Zaey', 'Kxu'],
      middles: ['okan', 'iran', 'eyla', 'otan', 'ukan', 'amul'],
      endings: ['an', 'ang', 'ey', 'lu', 'te', 'wa'],
      genderEndings: {
        male: ['an', 'otan', 'ey', 'lu'],
        female: ['e', 'eyla', 'te', 'ya'],
        neutral: ['ang', 'okan', 'wa', 'il']
      },
      familyNames: ['Te Sulan', 'Te Kxanu', 'Te Neyan', 'Te Veyla', 'Te Zaeyan', 'Te Maran', 'Te Raluk', 'Te Tsuan'],
      flavors: [
        'A lyrical canopy name with a sharp, birdlike click.',
        'A swift hunter moniker suited to an ikran rider above the trees.',
        'A spiritual title fit for a clan elder or healer.'
      ],
      examples: ['Atekan', 'Eytiran', 'Neyeyla', 'Raluwa', 'Saeyte', 'Teylu', 'Tsukan', 'Varotan', 'Zaeyan', 'Kxueyla']
    },
    {
      id: 'navi-reef',
      label: 'Ocean reef clans',
      summary: 'Fluid rolling vowels, gentle tidal swells, and aquatic cadences inspired by coastal navigators. Ideal for ilu divers, spear fishers, and ocean shamans.',
      starts: ['Aon', 'Kiri', 'Moa', 'Roa', 'Rot', 'Tsi', 'Tso', 'Ulu', 'Wai', 'Yan'],
      middles: ['alea', 'auri', 'enya', 'oan', 'uara', 'eyan'],
      endings: ['al', 'an', 'ea', 'on', 'ung', 'ya'],
      genderEndings: {
        male: ['an', 'on', 'ung', 'al'],
        female: ['a', 'ea', 'ya', 'ari'],
        neutral: ['en', 'oan', 'il', 'ur']
      },
      familyNames: ['Of Blue Waters', 'Of Coral Reef', 'Wave Singer', 'Tide Weaver', 'Sea Ray', 'Deep Current', 'Lagoon Walker', 'Pearl Diver'],
      flavors: [
        'A rolling water cadence that ebbs and flows like a tide.',
        'A calm oceanic moniker for a free-diver among shallow shoals.',
        'A resonant coastal title for an oceanic navigator.'
      ],
      examples: ['Aonung', 'Kiriya', 'Moalea', 'Roaon', 'Rotaur', 'Tsienya', 'Tsoan', 'Uluara', 'Waiea', 'Yanal']
    },
    {
      id: 'four-nations',
      label: 'Elemental traditions',
      summary: 'Crisp martial syllables, balanced tones, and flowing breath beats inspired by eastern elemental benders. Suits fire benders, water healers, earth warriors, and air monks.',
      starts: ['Bao', 'Chen', 'Jia', 'Korra', 'Mei', 'Ren', 'Sora', 'Tenz', 'Zha', 'Lin'],
      middles: ['ang', 'en', 'in', 'ong', 'uan', 'yun'],
      endings: ['ai', 'an', 'ao', 'en', 'in', 'o'],
      genderEndings: {
        male: ['an', 'in', 'o', 'ang'],
        female: ['ai', 'ao', 'en', 'a'],
        neutral: ['en', 'in', 'ong', 'yun']
      },
      familyNames: ['Of Caldera', 'Of Northern Ice', 'Of Stone Peak', 'Of Western Temple', 'Lotus Disciple', 'Iron Fist', 'Dragon Breath', 'Cloud Glider'],
      flavors: [
        'A disciplined martial name suited to an elemental warrior.',
        'A calm, breath-focused title for a temple traveler.',
        'A sharp, resolute moniker fit for a competitive bender.'
      ],
      examples: ['Baoang', 'Chenin', 'Jiaen', 'Korrao', 'Meiai', 'Renin', 'Sorao', 'Tenzan', 'Zhaong', 'Linyun']
    }
  ],
  pronunciation: [
    { name: 'Teylu', guide: 'TAY-loo', note: 'Two smooth syllables with equal breath weight.' },
    { name: 'Aonung', guide: 'ah-oh-NOONG', note: 'Glide softly between the initial vowels without harsh breaks.' },
    { name: 'Kxueyla', guide: 'k-hoo-AY-lah', note: 'The kx creates a brief breath pop before the vowel.' },
    { name: 'Tenzan', guide: 'TEN-zahn', note: 'A crisp martial cadence with a clear final dental stop.' },
    { name: 'Roaon', guide: 'roh-AH-ohn', note: 'Pronounce three undulating vowel beats like sea waves.' }
  ],
  tableTips: [
    'When using an avatar name in a tabletop campaign, highlight the cultural relationship to nature. A forest hunter speaks with respect toward their bond creature, addressing their mount by an affectionate two-syllable call like Ikni or Talu. This immediately showcases the character symbiotic mindset to fellow players.',
    'For aquatic or coastal settings, incorporate physical greetings and kinship gestures into roleplay. A reef navigator might touch their chest and forehead when introducing themselves, pairing their name with their clan lineage or mother line to establish mutual respect before negotiating with outsiders.',
    'Give elemental martial characters a combat style that mirrors their vocal cadence. A fire bender with sharp staccato syllables delivers aggressive, fast-paced strikes, whereas an earth warrior with heavy, deliberate vowels plants their feet and absorbs incoming blows with stubborn composure.'
  ],
  faq: [
    { question: 'What styles are included in the avatar name generator?', answer: 'The generator includes three styles: Na\'vi forest hunters, Na\'vi reef navigators, and eastern martial elemental traditions.' },
    { question: 'Can I generate full clan and family names?', answer: 'Yes. Toggling the full name control generates clan affiliations, parentage titles, and elemental monastery designations.' },
    { question: 'Are these names suitable for sci-fi and fantasy campaigns?', answer: 'Yes. They adapt naturally to space exploration campaigns, planetary wilderness settings, and fantasy martial arts worlds.' },
    { question: 'Do these names use actual Na\'vi linguistic grammar?', answer: 'The syllables incorporate authentic phonetic traits such as ejectives, glottal pauses, and affixes while remaining original for DnD Arena.' }
  ],
  relatedRaces: ['elf-name-generator', 'tiefling-name-generator', 'dragonborn-name-generator', 'human-name-generator'],
  relatedUtilities: ['character-name-generator', 'world-name-generator']
};

export default profile;
