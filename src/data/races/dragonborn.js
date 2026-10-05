const profile = {
  slug: 'dragonborn-name-generator',
  label: 'Dragonborn',
  keyword: 'dragonborn name generator',
  title: 'Dragonborn Name Generator: New Fantasy Names',
  description: 'dragonborn name generator for clan-ready names in three original sound styles. Choose length, add a family name, copy a result, or save favorites locally.',
  intro: [
    'This dragonborn name generator makes original fantasy names with resonant openings, deliberate middle beats, and sturdy endings. Choose a tradition, tune the length, and add a clan-style family name when a full introduction will help the scene.',
    'The name fragments were written for DnD Arena rather than taken from a rulebook or existing generator. That leaves room for your own customs, family histories, and meanings.'
  ],
  construction: [
    'A strong-sounding name does not need a difficult spelling. Clear vowels let a name project across a table, while a firm final syllable gives it a satisfying stop. The syllable tables combine those qualities without relying on familiar names from published settings.',
    'Three palettes suggest a civic register, a traveling tradition, and a forge-side craft community. Each can belong to any character background. You can treat a family name as an inherited clan label, a place name, or an affiliation chosen later in life.'
  ],
  styles: [
    {
      id: 'high-banner', label: 'High-banner assembly',
      summary: 'This set favors balanced syllables and a confident last beat. It fits a speaker at a council, an envoy, or a character accustomed to giving their name before asking a question.',
      starts: ['Avar', 'Bren', 'Dara', 'Kovar', 'Mira', 'Rhaz', 'Sora', 'Tavar'], middles: ['aresh', 'ivor', 'orren', 'aela', 'dorin', 'vasha'], endings: ['ar', 'eth', 'ora', 'esh', 'orin'],
      genderEndings: { male: ['ar', 'orin', 'eth'], female: ['ora', 'asha', 'esh'], neutral: ['en', 'ar', 'orin'] },
      familyNames: ['Brightscale', 'High Ember', 'Vararesh', 'Redcliff', 'Stormledger', 'Sunward'], flavors: ['A clear name for a formal introduction.', 'A steady sound that carries across a hall.', 'A composed cadence with a strong final beat.'],
      examples: ['Avarar', 'Breneth', 'Daraora', 'Kovorin', 'Miraesh', 'Rhazorin', 'Soraen', 'Tavarasha']
    },
    {
      id: 'roadfire', label: 'Roadfire caravans',
      summary: 'The caravan register moves quickly and leaves room for a nickname. Its plain vowels make names easy to call over wind, rain, or a busy market, and the family names hint at routes or shared work.',
      starts: ['Ari', 'Barek', 'Cala', 'Dorin', 'Esha', 'Kera', 'Marek', 'Vela'], middles: ['avan', 'eshara', 'orin', 'aleth', 'ivara', 'oren'], endings: ['en', 'a', 'or', 'eth', 'in'],
      genderEndings: { male: ['or', 'eth', 'in'], female: ['a', 'ena', 'esha'], neutral: ['en', 'oren', 'ar'] },
      familyNames: ['Long Mile', 'Copper Axle', 'Waystone', 'Ash Cart', 'Open Road', 'Two Rivers'], flavors: ['A practical name with a traveling rhythm.', 'A name that sounds easy to call from a wagon.', 'A road-ready cadence with few sharp turns.'],
      examples: ['Arien', 'Barekoren', 'Calasha', 'Dorineth', 'Eshaena', 'Keraor', 'Marekin', 'Velaen']
    },
    {
      id: 'kiln-mark', label: 'Kiln-mark artisans',
      summary: 'Longer centers and clipped endings give this style an artisan’s precision. It works for a jeweler, builder, cook, or smith whose name is often followed by a craft or a mark of quality.',
      starts: ['Asha', 'Daven', 'Evara', 'Keth', 'Loran', 'Navi', 'Riven', 'Zarek'], middles: ['aresh', 'elvar', 'iveth', 'orava', 'saren', 'vethara'], endings: ['en', 'ar', 'esh', 'ora', 'eth'],
      genderEndings: { male: ['ar', 'eth', 'en'], female: ['ora', 'esh', 'ava'], neutral: ['en', 'ir', 'ar'] },
      familyNames: ['Kilnward', 'Coppergrain', 'Ashen Wheel', 'Vethara Forge', 'Stoneglaze', 'Emberline'], flavors: ['A measured name with a crafted finish.', 'A name with a clean rhythm and a warm center.', 'A precise sound suited to a careful maker.'],
      examples: ['Ashaar', 'Daveneth', 'Evaraora', 'Kethen', 'Loranesh', 'Navir', 'Rivenar', 'Zarekava']
    }
  ],
  pronunciation: [
    { name: 'Breneth', guide: 'BREH-neth', note: 'Keep both beats even, with a light ending.' },
    { name: 'Tavarasha', guide: 'TAH-vah-RAH-shah', note: 'The middle beat takes the stress.' },
    { name: 'Marekin', guide: 'MAH-reh-kin', note: 'Use a soft initial sound rather than a growl.' },
    { name: 'Navir', guide: 'NAH-veer', note: 'A short two-beat name with a clear final r.' },
    { name: 'Evaraora', guide: 'eh-VAH-rah-OR-ah', note: 'Separate the neighboring vowels instead of rushing them.' }
  ],
  tableTips: [
    'A full dragonborn introduction can include a given name, family name, and a craft or route label. Use all three for a first appearance, then let other characters shorten it naturally. The contrast can make a formal moment feel different from a familiar one.',
    'If your campaign has several dragonborn families, choose one shared family-name sound and vary the first names. A small pattern is enough for players to recognize a connection without a long explanation.',
    'Names with three beats are useful for public scenes, while one- or two-beat forms work well in quick exchanges. Try each result aloud and keep the version your group can say comfortably.',
    'Decide what a family label means before repeating it across the cast. It might identify a workshop, a traveling route, a household promise, or simply a shared name that relatives kept. The same syllable pattern can serve a council speaker and a quiet craftsperson without assigning either one a personality. For a player character, ask which parts of the formal name they actually use. For a non-player character, let the full introduction appear only when the scene calls for ceremony. That gives the table a natural way to learn the shorter form. If you create siblings or cousins, vary the opening sounds and repeat just one family cue. Players will recognize the connection without having to memorize a list of similar names.'
  ],
  faq: [
    { question: 'Does this generator use official dragonborn lore?', answer: 'No. The tool provides original fantasy syllables only. Any family customs or meanings are yours to define for the campaign.' },
    { question: 'Can I include a clan or craft name?', answer: 'Yes. Turn on the family name option, then adapt the result into a clan, route, workshop, or chosen affiliation.' },
    { question: 'Why are the names easy to pronounce?', answer: 'The tables keep clear vowel anchors and avoid long clusters. That helps names remain memorable when spoken at the table.' },
    { question: 'Can the same name be used for an NPC?', answer: 'Yes. Save a favorite for a player character or copy it into your notes for an NPC, rival, artisan, or traveler.' }
  ],
  relatedRaces: ['dwarf-name-generator', 'orc-name-generator', 'half-orc-name-generator', 'tiefling-name-generator'],
  relatedUtilities: ['character-name-generator', 'last-name-generator']
};

export default profile;
