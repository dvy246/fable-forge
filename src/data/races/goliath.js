const profile = {
  slug: 'goliath-name-generator',
  label: 'Goliath',
  keyword: 'goliath name generator',
  title: 'Goliath Name Generator: Mountain & Clan Names',
  description: 'Goliath name generator for mountain barbarians, storm giants, and clan champions. Roll ten names, choose high peak styles, and save campaign favorites.',
  intro: [
    'This goliath name generator creates rugged, imposing names for high-altitude climbers, stone-skinned barbarians, storm-born warriors, and clan champions.',
    'Whether you need a competitive peak athlete testing endurance against mountain blizzards or a wandering giant-kin seeking honorable deeds, generate names with stone-hard resonance.'
  ],
  construction: [
    'Goliath naming traditions in tabletop lore follow a distinct three-part structure: a birth name given by parents, a nickname bestowed by the clan chieftain, and a grand ancestral clan surname. Birth names feature heavy, rocky plosives, granite stops, and monosyllabic beats that echo down mountain valleys like rockfalls. They are practical, solid, and straightforward to pronounce in harsh weather.',
    'The clan nickname is perhaps the most personal part of a goliath identity. Chieftains award nicknames based on memorable deeds, foolish mistakes, or physical feats, such as Bear Climber, Flint Breaker, Sky Watcher, or Horn Cleaver. These monikers can change as a goliath accomplishes new triumphs during their adventuring career.',
    'Clan surnames are multi-syllabic and carry deep ancestral pride. A goliath introduces their full name during formal clan councils, athletic contests, and first meetings with rival tribes, signaling their readiness to uphold the honor of their mountain home.'
  ],
  styles: [
    {
      id: 'peak-climber',
      label: 'Peak climbers',
      summary: 'Hard granite plosives, flinty stops, and monosyllabic strength. Fits mountain athletes, brawlers, and cliff runners.',
      starts: ['Aug', 'Brax', 'Dor', 'Gauth', 'Kav', 'Mok', 'Nal', 'Thun', 'Tor', 'Vak'],
      middles: ['akar', 'athis', 'ekan', 'okan', 'orim', 'urrak'],
      endings: ['ak', 'an', 'ar', 'ik', 'or', 'uk'],
      genderEndings: {
        male: ['ak', 'an', 'or', 'uk'],
        female: ['a', 'ar', 'ik', 'is'],
        neutral: ['ak', 'an', 'ar', 'ik']
      },
      familyNames: ['Stone Peak', 'High Ridge', 'Flint Crag', 'Granite Horn', 'Cloud Runner', 'Barrow Step', 'Iron Anvil', 'Steep Cliff'],
      flavors: [
        'A rugged, heavy name that sounds like falling boulders on high cliffs.',
        'A sturdy mountain title forged in biting frost and sheer rock faces.',
        'A blunt, powerful moniker suited to an athletic mountain champion.'
      ],
      examples: ['Augakar', 'Braxokan', 'Dorurrak', 'Gauthik', 'Kavan', 'Mokorim', 'Nalakar', 'Thunak', 'Toran', 'Vakor']
    },
    {
      id: 'storm-born',
      label: 'Storm-born giants',
      summary: 'Rolling thunder cadences, gale-force vowels, and tempestuous power. Fits storm herald barbarians, runic shamans, and giant-kin.',
      starts: ['Gale', 'Krag', 'Rime', 'Roc', 'Skye', 'Storm', 'Talon', 'Thar', 'Vorn', 'Zul'],
      middles: ['ados', 'elios', 'irian', 'olum', 'osina', 'ulion'],
      endings: ['ar', 'as', 'el', 'on', 'or', 'os'],
      genderEndings: {
        male: ['on', 'or', 'os', 'as'],
        female: ['a', 'as', 'el', 'ia'],
        neutral: ['ar', 'el', 'on', 'os']
      },
      familyNames: ['Thunder Peak', 'Lightning Horn', 'Storm Walker', 'Gale Breaker', 'Cloud Cleaver', 'Hail Striker', 'Rime Ward', 'Sky Roar'],
      flavors: [
        'A tempestuous, roaring name that commands the mountain passes.',
        'A thunderous title born amidst freezing blizzards and jagged lightning.',
        'An imposing giant-kin moniker that echoes like distant thunder.'
      ],
      examples: ['Galeon', 'Kragor', 'Rimeas', 'Rocados', 'Skyeel', 'Stormon', 'Talonar', 'Tharos', 'Vornados', 'Zulon']
    },
    {
      id: 'clan-dawnstrider',
      label: 'Highland clan guardians',
      summary: 'Dignified stonekeeper roots, ancestral endurance, and mountain pride. Fits clan elders, runic paladins, and steadfast guides.',
      starts: ['Aethel', 'Dun', 'Ghor', 'Kala', 'Morn', 'Ola', 'Rune', 'Stone', 'Vola', 'Yur'],
      middles: ['akor', 'elis', 'ithor', 'olan', 'yris', 'zoth'],
      endings: ['a', 'an', 'is', 'on', 'or', 'us'],
      genderEndings: {
        male: ['an', 'on', 'or', 'us'],
        female: ['a', 'elis', 'is', 'ia'],
        neutral: ['an', 'is', 'on', 'or']
      },
      familyNames: ['Dawn Strider', 'True Peak', 'Stone Keeper', 'Old Hearth', 'Steep Ridge', 'Sun Anvil', 'Brave Pillar', 'Deep Root'],
      flavors: [
        'A dignified, steady name carrying generations of clan endurance.',
        'A proud mountain title that speaks of loyalty, family, and shared survival.',
        'A grounded moniker suited to a protector who holds the pass against all foes.'
      ],
      examples: ['Aethelor', 'Dunis', 'Ghoran', 'Kalaolan', 'Mornus', 'Olaakor', 'Runeon', 'Stoneor', 'Volayris', 'Yuran']
    }
  ],
  pronunciation: [
    { name: 'Braxokan', guide: 'BRAHK-soh-kahn', note: 'Hard, percussive beats that emphasize goliath athletic power.' },
    { name: 'Gauthik', guide: 'GAW-thik', note: 'Heavy throat opening followed by a crisp flinty conclusion.' },
    { name: 'Mokorim', guide: 'MOH-koh-rim', note: 'Deep, steady rhythm with equal cadence across all three beats.' },
    { name: 'Thunak', guide: 'THOO-nahk', note: 'Resonant first syllable ending in an abrupt mountain stop.' },
    { name: 'Vornados', guide: 'VOR-nah-dohs', note: 'Rolling giant-kin cadence that carries like thunder over rock.' }
  ],
  tableTips: [
    'Invent a memorable story behind your goliath clan nickname. Whether you earned Bear Tosser by wrestling a cave bear or Root Tripper by stumbling off a cliff during your first goat hunt, nicknames add instant humor and camaraderie to your character background.',
    'Emphasize your goliath drive for fair competition. In goliath culture, self-reliance and merit matter more than nobility or inherited gold. Have your hero keep a mental tally of athletic achievements and celebrate party victories with boisterous enthusiasm.',
    'Use stone and altitude metaphors in daily conversation. A goliath might compare an stubborn enemy to basalt rock, describe a difficult puzzle as climbing an icy overhang, or praise a reliable companion as a sturdy foothold.'
  ],
  faq: [
    { question: 'How are goliath names structured in D&D 5e?', answer: 'A formal goliath name consists of a birth name given by parents, a deed nickname awarded by the clan chief, and an ancestral clan surname.' },
    { question: 'Are goliaths related to giants in tabletop lore?', answer: 'Yes. Goliaths share distant planar and biological heritage with true giants, reflecting elemental stone, frost, storm, and fire affinities in their physiology.' },
    { question: 'Can goliath names change over time?', answer: 'While birth names and clan names remain steady, a goliath nickname frequently evolves as they achieve greater heroic deeds or survive legendary challenges.' },
    { question: 'Can I export my favorite generated goliath names?', answer: 'Yes. Click the favorite star on any result card to save names locally and export them as a plain text file.' }
  ],
  relatedRaces: ['dwarf-name-generator', 'orc-name-generator', 'half-orc-name-generator', 'dragonborn-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator', 'party-name-generator']
};

export default profile;
