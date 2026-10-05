const profile = {
  slug: 'orc-name-generator',
  label: 'Orc',
  keyword: 'orc name generator',
  title: 'Orc Name Generator: Original Fantasy Names',
  description: 'orc name generator for bold original names with short, steady, and layered sounds. Choose a style, add a family name, and save favorites in your browser.',
  intro: [
    'This orc name generator creates original fantasy names with sturdy syllables and clear vowels. Choose a style that feels like a family, a traveling crew, or a local tradition, then adjust the name length and add a surname if it helps the character feel grounded.',
    'Every sound table here was written for DnD Arena. The names do not come from rulebooks or other generators, so you can decide whether a result signals kinship, a personal choice, or a story still being written.'
  ],
  construction: [
    'A forceful name can remain easy to say when its consonants are spaced around open vowels. Short forms are useful in quick combat scenes, while an extra middle beat can create a more formal cadence. Neither form implies that a character must be loud, hostile, or simple.',
    'The three palettes on this page offer different rhythms: a public gathering style, a route and camp style, and a craft-centered style. They are creative prompts for a home setting. Mix the sounds, change a family name, or use a nickname if that better fits your character.'
  ],
  styles: [
    {
      id: 'stone-ring', label: 'Stone-ring speakers',
      summary: 'This register uses strong openings and measured endings for names meant to carry in a meeting. It can suit a spokesperson, organizer, teacher, or anyone who wants a full introduction to sound steady rather than harsh.',
      starts: ['Bara', 'Drok', 'Gara', 'Kova', 'Morga', 'Ruk', 'Tara', 'Vorga'], middles: ['adan', 'okar', 'urga', 'avel', 'oran', 'ethara'], endings: ['an', 'ar', 'a', 'eth', 'or'],
      genderEndings: { male: ['ar', 'or', 'eth'], female: ['a', 'ara', 'ethara'], neutral: ['an', 'en', 'or'] },
      familyNames: ['Redstone Circle', 'Hearthwall', 'Boulderturn', 'Rainfield', 'Wide Gate', 'North Cairn'], flavors: ['A full name with a steady public rhythm.', 'A bold opening followed by a calm finish.', 'A name designed to carry without shouting.'],
      examples: ['Baran', 'Drokor', 'Garaethara', 'Kovaar', 'Morgaan', 'Ruken', 'Taraor', 'Vorgaeth']
    },
    {
      id: 'long-road', label: 'Long-road crews',
      summary: 'The road style favors quick vowels and a reliable beat. It suits a guide, scout, trader, or musician whose name gets repeated while people are moving. Family names may point to a route or a shared camp.',
      starts: ['Aru', 'Bera', 'Dena', 'Fara', 'Keri', 'Mava', 'Rena', 'Suri'], middles: ['avan', 'erik', 'orin', 'avel', 'ushen', 'ara'], endings: ['en', 'ik', 'or', 'a', 'un'],
      genderEndings: { male: ['ik', 'or', 'un'], female: ['a', 'ena', 'ara'], neutral: ['en', 'orin', 'ar'] },
      familyNames: ['Far Mile', 'Open Trail', 'Three Fires', 'Red Cart', 'Moss Camp', 'Distant Bridge'], flavors: ['A mobile name that keeps its rhythm on the move.', 'A clear sound for a quick introduction.', 'A traveling cadence with a warm center.'],
      examples: ['Aruen', 'Beraor', 'Denaik', 'Faraun', 'Keriena', 'Mavaorin', 'Renaara', 'Suriar']
    },
    {
      id: 'maker-mark', label: 'Maker-mark households',
      summary: 'Longer middles and clean endings give this style a careful, workbench rhythm. It fits makers, cooks, healers, builders, or a family known for an object that passes from one generation to another.',
      starts: ['Asha', 'Brava', 'Duma', 'Eren', 'Gora', 'Hara', 'Mera', 'Tov'], middles: ['akren', 'elora', 'imara', 'oveth', 'urena', 'avari'], endings: ['en', 'a', 'ar', 'eth', 'in'],
      genderEndings: { male: ['ar', 'eth', 'in'], female: ['a', 'ena', 'ora'], neutral: ['en', 'ari', 'ar'] },
      familyNames: ['Kiln Song', 'Oak Peg', 'Good Measure', 'Ash Weave', 'Stone Stitch', 'Copper Thread'], flavors: ['A carefully paced name with a makers mark feel.', 'A warm sound that suggests a household craft.', 'A clear rhythm with room for a family story.'],
      examples: ['Ashaar', 'Bravaeth', 'Dumaen', 'Erenora', 'Gorain', 'Haraena', 'Meraari', 'Toveth']
    }
  ],
  pronunciation: [
    { name: 'Drokor', guide: 'DROH-kor', note: 'Keep the middle vowel open and finish with a light r.' },
    { name: 'Garaethara', guide: 'gah-ray-THAH-rah', note: 'The first syllable is gentle; the middle carries the beat.' },
    { name: 'Faraun', guide: 'FAH-rown', note: 'Say the two vowels as one smooth diphthong.' },
    { name: 'Bravaeth', guide: 'BRAH-vayth', note: 'A clear two-part sound works better than an exaggerated growl.' },
    { name: 'Meraari', guide: 'meh-RAH-ree', note: 'Separate the repeated a sounds with an easy pause.' }
  ],
  tableTips: [
    'Avoid making a generated name do all the work of describing an orc character. Pair it with a goal, a skill, or a relationship so players meet a person rather than a stereotype. A careful scholar and a fearless guide can both use a firm-sounding name.',
    'For a family group, repeat a surname or the first syllable of a given name. That gives the table a simple signal for kinship. For a crew, use a route or camp label as a shared surname and let each member keep a distinct first name.',
    'Before the session, choose whether the character welcomes a nickname. A short form can make conversation flow, while the full form can land at an important introduction or reconciliation.',
    'A firm ending is a sound choice, not a personality description. Give each orc a practical role, a personal aim, or someone they care about before deciding how they speak. A family or crew name can refer to a campsite, a shared promise, or an old route, depending on the campaign. Keep that connection simple enough to explain in one sentence when the players ask. For a group of allies, use distinct first syllables and only one repeated cue, such as a surname. That keeps similar names from blending together during combat or planning. Let a character choose a shorter form for everyday speech, or keep the full version if they value it. Consistent pronunciation will make the name easier to carry from one session to the next.'
  ],
  faq: [
    { question: 'Are these names from a DnD setting?', answer: 'No. They are original fantasy names built from DnD Arena syllable tables, with no copied lore or lists.' },
    { question: 'Can I make an orc name that feels gentle?', answer: 'Yes. Choose a softer style or shorten a result. A sound palette does not decide a character’s personality.' },
    { question: 'Can the family name refer to a crew?', answer: 'Yes. Treat it as a chosen group, shared route, workshop, household, or other connection that matters in your world.' },
    { question: 'How do I use a generated name in play?', answer: 'Copy or save a result, say it aloud once, and add a personal detail that gives players a reason to remember it.' }
  ],
  relatedRaces: ['half-orc-name-generator', 'dragonborn-name-generator', 'dwarf-name-generator', 'goblin-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator']
};

export default profile;
