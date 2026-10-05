const profile = {
  slug: 'dwarf-name-generator',
  label: 'Dwarf',
  keyword: 'dwarf name generator',
  title: 'Dwarf Name Generator: Original Fantasy Names',
  description: 'dwarf name generator for sturdy fantasy names with three original traditions. Choose a short or long form, add a clan name, and save favorites locally.',
  intro: [
    'This dwarf name generator makes original fantasy names with sturdy openings, a clear central beat, and endings that are easy to remember. Select a tradition, choose a length, and add a clan name if a full introduction suits the character.',
    'The syllable tables and examples were written for DnD Arena. They are not copied from game books or existing lists. A family name can point to a craft, a place, a promise, or a group your campaign invents.'
  ],
  construction: [
    'A grounded name often relies on a few sounds repeated with care. A strong opening gives it presence, a broad vowel keeps it speakable, and a concise ending makes it easy to recall. The generator uses those ingredients without requiring every dwarf to sound alike.',
    'The three styles here suggest a stonehall assembly, a trade road, and a makers guild. Their syllable tables differ in length and texture. Use one palette for a whole family, or mix them when a character has moved between communities and adopted a new name.'
  ],
  styles: [
    {
      id: 'deep-hall', label: 'Deep-hall council',
      summary: 'Compact starts and resonant endings give this register a formal, steady sound. It suits a council speaker, keeper of records, or character whose full name is used at a public gathering.',
      starts: ['Borin', 'Dara', 'Garn', 'Kelda', 'Mora', 'Runa', 'Thora', 'Varn'], middles: ['adun', 'erik', 'orin', 'alva', 'emra', 'urdan'], endings: ['in', 'a', 'or', 'eth', 'en'],
      genderEndings: { male: ['or', 'in', 'eth'], female: ['a', 'ena', 'ora'], neutral: ['en', 'ar', 'in'] },
      familyNames: ['Iron Ledger', 'Deepbeam', 'Stonewake', 'Boulderkin', 'Coppermark', 'Old Anvil'], flavors: ['A steady name with a formal finish.', 'A grounded rhythm suited to a public record.', 'A name that feels clear when announced.'],
      examples: ['Bororin', 'Daraena', 'Garneth', 'Keldaor', 'Moraen', 'Runaora', 'Thorin', 'Varnar']
    },
    {
      id: 'trade-road', label: 'Trade-road carriers',
      summary: 'This style moves briskly and leaves a little warmth in its vowels. It works for a merchant, guide, caravan cook, or map reader who has learned to introduce themself quickly in a crowded room.',
      starts: ['Alda', 'Bera', 'Doran', 'Edda', 'Kori', 'Mara', 'Noren', 'Tova'], middles: ['avel', 'orin', 'edra', 'aran', 'emel', 'ovar'], endings: ['a', 'en', 'or', 'el', 'in'],
      genderEndings: { male: ['or', 'in', 'en'], female: ['a', 'ela', 'ara'], neutral: ['en', 'el', 'ar'] },
      familyNames: ['West Cart', 'Red Mile', 'Copper Road', 'Bridgewright', 'Market Bell', 'Last Mile'], flavors: ['A traveling name with an easy pulse.', 'A quick introduction that remains memorable.', 'A warm sound for a road-worn traveler.'],
      examples: ['Aldara', 'Beraen', 'Doranor', 'Eddavel', 'Koriel', 'Marain', 'Norenel', 'Tovaor']
    },
    {
      id: 'maker-guild', label: 'Makers guild',
      summary: 'The craft style uses careful middles and a clean ending, like a mark stamped into a finished piece. It can fit a mason, brewer, locksmith, or anyone whose work is recognized before their title.',
      starts: ['Bara', 'Durn', 'Elda', 'Gera', 'Hald', 'Kara', 'Nava', 'Rurik'], middles: ['alder', 'emrin', 'orva', 'uneth', 'irra', 'adren'], endings: ['en', 'ar', 'a', 'eth', 'in'],
      genderEndings: { male: ['ar', 'eth', 'in'], female: ['a', 'ena', 'ira'], neutral: ['en', 'ar', 'ir'] },
      familyNames: ['Makersmark', 'Coalbright', 'Hammergrain', 'True Measure', 'Kilnwheel', 'Pewterline'], flavors: ['A precise name with a workshop cadence.', 'A name that sits well beside a trade.', 'A careful sound with room for a craft title.'],
      examples: ['Baraen', 'Durnar', 'Eldaeth', 'Geraena', 'Haldin', 'Karaira', 'Navaen', 'Rurikar']
    }
  ],
  pronunciation: [
    { name: 'Keldaor', guide: 'KEL-dah-or', note: 'Use three easy beats instead of compressing the vowels.' },
    { name: 'Moraen', guide: 'MOR-en', note: 'Join the vowels smoothly and keep the ending brief.' },
    { name: 'Doranor', guide: 'DOR-ah-nor', note: 'Give the opening and closing beats equal weight.' },
    { name: 'Eldaeth', guide: 'EL-dayth', note: 'The final sound can be soft rather than forceful.' },
    { name: 'Rurikar', guide: 'ROO-rih-kar', note: 'Let the middle vowel make the name easy to call.' }
  ],
  tableTips: [
    'A clan name can be a shared identity without making a character wealthy or important. Tie it to a workshop, a bridge, a ledger, or a story that has been retold for years. Players can learn the connection from one object rather than a long family history.',
    'For an NPC, use a short personal name in ordinary conversation and the full name in a contract, toast, or formal challenge. That small change gives the scene a clear shift in tone.',
    'If you create a family, keep one sound pattern across relatives and vary the openings. A shared ending or surname provides continuity while letting each character stand apart.',
    'A sturdy rhythm can suggest confidence without making every dwarf a warrior or craftsperson. Let the name belong to a baker, historian, courier, gardener, or anyone else who matters in the scene. If a clan or workshop name appears, attach it to something the party can see or use: a stamped tool, a door sign, an old recipe, or a bridge that needs repair. This gives the name a memorable anchor and gives players an easy question to ask. For a group of relatives, reuse one surname but give each person a different number of syllables. Keep the distinction audible when spoken quickly. A formal version can appear on records or invitations, while a familiar version keeps everyday exchanges light.'
  ],
  faq: [
    { question: 'Can a dwarf name have no clan name?', answer: 'Yes. The family name option is optional, and a character may use one name, a place name, or a chosen title.' },
    { question: 'Are these names official DnD content?', answer: 'No. DnD Arena uses original sound tables and does not reproduce names or lore from published books.' },
    { question: 'How can I make a family sound related?', answer: 'Reuse a surname or one syllable pattern, then vary the other parts so each relative remains recognizable.' },
    { question: 'Can I use the names for non-player characters?', answer: 'Yes. Copy a result into your notes, save it as a favorite, or adapt it for an artisan, guide, rival, or neighbor.' }
  ],
  relatedRaces: ['dragonborn-name-generator', 'orc-name-generator', 'half-orc-name-generator', 'gnome-name-generator'],
  relatedUtilities: ['character-name-generator', 'last-name-generator']
};

export default profile;
