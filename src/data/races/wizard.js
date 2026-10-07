const profile = {
  slug: 'wizard-name-generator',
  label: 'Wizard',
  keyword: 'wizard name generator',
  title: 'Wizard Name Generator: Arcane & Scholarly Names',
  description: 'Wizard name generator for arcane academicians, evokers, and chronomancy sages. Roll ten magical titles, choose scholar styles, and save campaign favorites.',
  intro: [
    'This wizard name generator creates learned, mystical names for academy archmages, fiery evokers, secretive necromancers, and time-weaving chronomancers.',
    'Whether your character is an eccentric apprentice carrying ink-stained spellbooks or an ancient scholar brooding in an isolated spire, generate names with profound arcane authority.'
  ],
  construction: [
    'Wizard naming traditions reflect lifelong study, formal academic hierarchies, and the dangerous pursuit of cosmic truths. Many wizards are born into ordinary families with simple mortal names, but adopt formal spellcasting surnames, Latinate scholastic roots, or grand titles upon mastering their third circle of magic. These chosen titles signal arcane specialty, university affiliation, or mastery over dangerous planar spells.',
    'The three registers available on this page reflect major philosophies of spellcraft. High arcana academicians favor dignified classical endings like -ius, -elios, and -ian, creating names that look prestigious carved into granite library archways. Pyromancers and evokers use crackling, elemental roots that invoke sparks, ash, and burning runes. Chronomancers and diviners employ ticking sibilants, temporal prefixes like Aeon and Chro, and echoing vowels that suggest glimpsing alternative timelines.',
    'For family names and epithets, wizards frequently append grandiose titles such as The Unbound, Of the High Spire, Star Weaver, Silver Quill, or The Patient Eye. Use these honorifics to establish immediate academic prestige at your gaming table.'
  ],
  styles: [
    {
      id: 'high-arcana',
      label: 'High arcana scholars',
      summary: 'Dignified classical endings, grand library cadences, and ancient spire prestige. Fits abjurers, transmuters, and university archmages.',
      starts: ['Al', 'El', 'Ign', 'Mor', 'Nal', 'Omn', 'Sil', 'Tel', 'Val', 'Zul'],
      middles: ['ador', 'elios', 'irian', 'orian', 'osina', 'ulion'],
      endings: ['ar', 'el', 'ian', 'ius', 'or', 'us'],
      genderEndings: {
        male: ['ius', 'or', 'us', 'ian'],
        female: ['a', 'ia', 'iel', 'ina'],
        neutral: ['ar', 'el', 'ian', 'or']
      },
      familyNames: ['Silver Spire', 'Black Quill', 'Arcane Tome', 'High Tower', 'Runecaster', 'Spellweaver', 'Star Gazer', 'Deep Library'],
      flavors: [
        'An imposing, scholarly name worthy of a master archmage.',
        'A classical academic moniker that commands silence in the grand library.',
        'A dignified arcane title that carries generations of university prestige.'
      ],
      examples: ['Alador', 'Elelios', 'Ignirian', 'Mororian', 'Nalosina', 'Omnulion', 'Silian', 'Telius', 'Valus', 'Zulor']
    },
    {
      id: 'pyro-evoker',
      label: 'Evokers and warmages',
      summary: 'Crackling percussives, burning consonant strikes, and volatile heat. Fits evocation warmages, flame weavers, and battlecasters.',
      starts: ['Ash', 'Blaz', 'Cind', 'Ember', 'Flam', 'Ign', 'Pyra', 'Scor', 'Sol', 'Spark'],
      middles: ['akar', 'athis', 'elith', 'okan', 'orim', 'urrak'],
      endings: ['ak', 'al', 'ar', 'is', 'on', 'or'],
      genderEndings: {
        male: ['or', 'on', 'ak', 'ar'],
        female: ['a', 'ia', 'is', 'elith'],
        neutral: ['al', 'is', 'on', 'ar']
      },
      familyNames: ['Flame Tongue', 'Ash Brand', 'Cinder Spark', 'Fire Hand', 'Red Comet', 'Iron Flare', 'Sun Sunder', 'Ember Ward'],
      flavors: [
        'A crackling, volatile name that smells of brimstone and ignited air.',
        'A fierce battlemage moniker that echoes like a thunderous fire strike.',
        'An intense elemental title suited to a pyromancer on the war front.'
      ],
      examples: ['Ashakar', 'Blazokan', 'Cindorim', 'Emberal', 'Flamis', 'Ignathis', 'Pyraon', 'Scorakar', 'Solor', 'Sparkelith']
    },
    {
      id: 'time-weaver',
      label: 'Chronomancers and diviners',
      summary: 'Ticking sibilants, temporal cadences, and echoing cosmic vowels. Fits diviners, chronomancy sages, and planar seers.',
      starts: ['Aeon', 'Hora', 'Kair', 'Mira', 'Noct', 'Pha', 'Sari', 'Tem', 'Vex', 'Zen'],
      middles: ['ados', 'elis', 'ithor', 'olan', 'yris', 'zoth'],
      endings: ['a', 'an', 'is', 'on', 'or', 'us'],
      genderEndings: {
        male: ['on', 'or', 'us', 'an'],
        female: ['a', 'ia', 'is', 'elis'],
        neutral: ['an', 'is', 'on', 'or']
      },
      familyNames: ['Second Hour', 'Hourglass', 'Pendulum', 'Lost Minute', 'True Thread', 'Mirror Time', 'Echo Mind', 'Future Gaze'],
      flavors: [
        'An enigmatic temporal title that sounds like sand sliding through an hourglass.',
        'A mysterious seer name that hints at knowledge of unwritten futures.',
        'A ticking, sibilant cadence suited to a scholar who bends temporal flow.'
      ],
      examples: ['Aeonis', 'Horaolan', 'Kairithor', 'Miraelis', 'Noctados', 'Phaon', 'Sariyris', 'Temor', 'Vexzoth', 'Zenus']
    }
  ],
  pronunciation: [
    { name: 'Alador', guide: 'AH-lah-dohr', note: 'Balanced classical cadence with open vowel resonance.' },
    { name: 'Ignirian', guide: 'ig-NEER-ee-an', note: 'Sharp elemental opening leading into three sustained scholarly beats.' },
    { name: 'Emberal', guide: 'EM-ber-uhl', note: 'Warm, crackling front syllable with a soft concluding liquid.' },
    { name: 'Aeonis', guide: 'AY-oh-nis', note: 'Ethereal diphthong transition into a crisp sibilant finish.' },
    { name: 'Kairithor', guide: 'KYE-ree-thor', note: 'Ticking temporal opening with deep, deliberate vocal emphasis.' }
  ],
  tableTips: [
    'Invent a memorable personal focus or spellbook quirk that matches your wizard name. A wizard named Ignirian might carry a scorched iron-bound tome, while Aeonis might write formulas with silver ink on hourglass-shaped scrolls.',
    'Decide whether your wizard uses their birth name or an assumed arcane title. Wizards frequently adopt new surnames upon graduation to distance themselves from ordinary provincial origins or to intimidate rival duelists.',
    'Pair your wizard name with a distinct verbal cadence when reciting verbal spell components. Pronouncing spell names with rhythmic pauses and formal phrasing makes your spellcasting feel deliberate and formidable.'
  ],
  faq: [
    { question: 'What makes wizard names different from sorcerer names?', answer: 'Wizard names favor formal Latinate roots, scholarly academic suffixes, and institutional titles, while sorcerer names emphasize innate bloodlines, chaotic surges, and primal elements.' },
    { question: 'Do wizards take on titles and epithets?', answer: 'Yes. Masters of the arcane frequently adopt epithets such as The Wise, The Unbound, Of the High Tower, or Star Weaver to mark their academic rank.' },
    { question: 'Can these names be used for warlocks and artficers?', answer: 'Yes. The styles adapt naturally to artificers, scholars, planar researchers, and studious ritual casters across tabletop systems.' },
    { question: 'Can I save and export my favorite wizard names?', answer: 'Yes. Click the favorite star on any result card to store names locally on your device and download them as a text file.' }
  ],
  relatedRaces: ['elf-name-generator', 'gnome-name-generator', 'human-name-generator', 'tiefling-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator', 'kingdom-name-generator']
};

export default profile;
