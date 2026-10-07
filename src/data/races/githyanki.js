const profile = {
  slug: 'githyanki-name-generator',
  label: 'Githyanki',
  keyword: 'githyanki name generator',
  title: 'Githyanki Name Generator: Astral & Silver Sword Names',
  description: 'Githyanki name generator for astral raiders, silver sword knights, and creche leaders. Roll ten names, choose planar styles, and save campaign favorites.',
  intro: [
    'This githyanki name generator creates martial, psionic names for astral raiders, supreme silver sword duelists, red dragon riders, and severe creche commanders.',
    'Whether you are rolling a battle master fighter from Tu narath or an outcast psychic monk seeking enlightenment away from the Lich Queen, generate names with authentic planar cadence.'
  ],
  construction: [
    'Githyanki linguistics reflect an ancient history of planar rebellion and eternal war against mind flayers in the Astral Sea. Names feature sharp glottal attacks, crisp sibilants, and monosyllabic beats that sound like silver blades ringing against chitin armor. Syllable combinations are designed to be barked over the rushing psychic winds of the silver void.',
    'The three registers on this page capture the social pillars of githyanki society. Astral raiders carry fierce, percussive plosives that command dragon mounts and boarding parties. Silver sword knights use dignified, classical cadences that honor martial vows, psychic purity, and ancient knightly lineages. Creche scholars and psions favor analytical, sibilant cadences that evoke mind-weaving, telepathic focus, and ruthless planar strategy.',
    'When choosing a githyanki surname or title, consider whether your character belongs to a famous astral warband or serves a legendary supreme commander. Surnames often take the form of military accolades, planar creche titles, or weapon bonds such as Silver Brand, Mind Cutter, or Astral Talon.'
  ],
  styles: [
    {
      id: 'astral-raider',
      label: 'Astral raiders',
      summary: 'Sharp glottal stops, aggressive plosives, and martial percussion. Fits dragon knights, skiff captains, and planar warriors.',
      starts: ['Bael', 'Dak', 'Gith', 'Kael', 'Lae', 'Mael', 'Qor', 'Raez', 'Vlaa', 'Zar'],
      middles: ['akor', 'athis', 'elith', 'ithar', 'orim', 'urrak'],
      endings: ['ak', 'al', 'ar', 'ith', 'on', 'ur'],
      genderEndings: {
        male: ['ak', 'ar', 'ur', 'on'],
        female: ['a', 'al', 'ith', 'el'],
        neutral: ['ak', 'al', 'ar', 'ith']
      },
      familyNames: ['Silver Brand', 'Void Talon', 'Astral Cleaver', 'Dragon Talon', 'Mind Cutter', 'Star Cleaver', 'Red Wing', 'Silver Lash'],
      flavors: [
        'A sharp, metallic title ready to command an astral skiff boarding party.',
        'A fierce moniker that echoes over the silver sea of the astral plane.',
        'A martial name forged in the unending war against aberrant horrors.'
      ],
      examples: ['Baelith', 'Dakorim', 'Githar', 'Kaelak', 'Laezur', 'Maelithar', 'Qorurrak', 'Raezal', 'Vlaakis', 'Zarak']
    },
    {
      id: 'silver-knight',
      label: 'Silver sword knights',
      summary: 'Dignified knightly cadences, flowing psionic vowels, and martial precision. Fits psychic paladins, gish duelists, and elite inquisitors.',
      starts: ['Al', 'El', 'Il', 'Kith', 'Mor', 'Nal', 'Sari', 'Tal', 'Val', 'Zel'],
      middles: ['ados', 'elion', 'irian', 'orian', 'osina', 'ulion'],
      endings: ['ar', 'el', 'ian', 'ion', 'or', 'os'],
      genderEndings: {
        male: ['ian', 'ion', 'or', 'os'],
        female: ['a', 'el', 'ia', 'is'],
        neutral: ['ar', 'el', 'ian', 'os']
      },
      familyNames: ['Of Astral Crest', 'Pure Mind', 'True Oath', 'Silver Spire', 'Astral Pillar', 'Keen Edge', 'Noble Talon', 'Void Watch'],
      flavors: [
        'A disciplined knightly name honoring the bond of the greatsword.',
        'A resonant, noble title suited to an elite planar champion.',
        'A composed psionic moniker reflecting focus and mental serenity.'
      ],
      examples: ['Alados', 'Elirian', 'Ilosina', 'Kithion', 'Morulion', 'Nalorian', 'Sariel', 'Talados', 'Valian', 'Zelos']
    },
    {
      id: 'creche-scholar',
      label: 'Creche scholars',
      summary: 'Analytical sibilants, whispered mind-roots, and crisp stops. Fits psionic monks, creche overseers, and planar cartographers.',
      starts: ['Chir', 'Jen', 'Kar', 'Li', 'Mir', 'Ny', 'Ren', 'Tir', 'Voss', 'Yen'],
      middles: ['akor', 'elis', 'ithor', 'olum', 'yris', 'zoth'],
      endings: ['a', 'en', 'is', 'or', 'us', 'yn'],
      genderEndings: {
        male: ['en', 'or', 'us', 'yn'],
        female: ['a', 'elis', 'is', 'ia'],
        neutral: ['en', 'is', 'yn', 'al']
      },
      familyNames: ['Mind Weave', 'Thought Stone', 'Astral Eye', 'Creche Ward', 'Silent Rune', 'Void Cipher', 'Iron Scroll', 'Deep Eye'],
      flavors: [
        'An analytical, cryptic name suited to a master of mental disciplines.',
        'A quiet, focused title that hints at psionic foresight.',
        'A calculated moniker born within the training halls of the creche.'
      ],
      examples: ['Chirakor', 'Jenelis', 'Karithor', 'Liolum', 'Miryris', 'Nyzoth', 'Renis', 'Tiror', 'Vossen', 'Yenus']
    }
  ],
  pronunciation: [
    { name: 'Baelith', guide: 'BAY-lith', note: 'Clip the first vowel cleanly with a sharp final dental stop.' },
    { name: 'Kithion', guide: 'KITH-ee-on', note: 'Soft psionic opening leading into two sustained, dignified beats.' },
    { name: 'Laezur', guide: 'LAY-zur', note: 'Bright, metallic front cadence with a firm concluding consonant.' },
    { name: 'Vlaakis', guide: 'VLAH-kis', note: 'Roll the initial vl together without an intervening vowel.' },
    { name: 'Zarak', guide: 'ZAH-rahk', note: 'Sharp opening sibilant into two rhythmic, percussive beats.' }
  ],
  tableTips: [
    'When roleplaying a githyanki, emphasize their intense economy of speech and absolute focus. Githyanki do not engage in idle small talk; every sentence is delivered with directness, sharp observation, and military clarity.',
    'Explore your character relationship with the Lich Queen and their martial creche. An orthodox warrior will fiercely defend astral law, while a renegade might speak their creche name with bitter resolve or adopt an outcast title to conceal their whereabouts.',
    'Connect the character psychic abilities to their naming identity. If your adventurer wields telekinesis or psionic blade leaps, describe how their silver sword rings like their spoken name whenever psychic energy surges through the hilt.'
  ],
  faq: [
    { question: 'What makes githyanki names unique in D&D?', answer: 'Githyanki names combine sharp martial stops, glottal pauses, and psionic cadences that evoke their astral planar heritage and silver sword traditions.' },
    { question: 'Can these names be used for githzerai characters?', answer: 'Yes. Githzerai share linguistic roots with githyanki, though githzerai characters typically prefer more meditative, monastic vowels and philosophical titles.' },
    { question: 'What do githyanki surnames represent?', answer: 'Githyanki surnames typically signify martial warband honors, dragon-riding titles, or psionic creche allegiances rather than inherited bloodlines.' },
    { question: 'Can I export my favorite githyanki names?', answer: 'Yes. Click the favorite icon on any result card to store names locally on your device and download them as a text file.' }
  ],
  relatedRaces: ['elf-name-generator', 'tiefling-name-generator', 'dragonborn-name-generator', 'drow-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator', 'ship-name-generator']
};

export default profile;
