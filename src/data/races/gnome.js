const profile = {
  slug: 'gnome-name-generator',
  label: 'Gnome',
  keyword: 'gnome name generator',
  title: 'Gnome Name Generator: Fantasy Names by Style',
  description: 'gnome name generator with inventive, garden, and workshop styles. Create an original name, add a family name, and save favorites in your browser for later.',
  intro: [
    'This gnome name generator builds original fantasy names from lively openings, playful middle syllables, and clear endings. Choose a sound style, adjust the length, and decide whether a family name helps the character feel complete.',
    'DnD Arena writes its own syllable tables and sample names. Nothing is copied from a rules book or another generator, so the result can belong to a new inventor, neighbor, guide, or curious traveler.'
  ],
  construction: [
    'A whimsical name works best when the sound is surprising but still easy to repeat. One unusual middle beat can give a name sparkle, while a familiar vowel at the end helps players remember it after one introduction. Extra syllables can suggest a formal name or an affectionate nickname.',
    'These three palettes suggest a tinkering bench, a garden plot, and a society of curious questioners. They are not limits on a character’s personality. A quiet gnome can have a lively name, and a serious artisan can still carry a bright family tradition.'
  ],
  styles: [
    {
      id: 'brasswork', label: 'Brasswork inventors',
      summary: 'Quick starts and neatly fitted centers make this style feel like a device clicking into place. It suits an engineer, repairer, clock keeper, or anyone who labels every drawer in the workshop.',
      starts: ['Bim', 'Cala', 'Dori', 'Fenn', 'Gavi', 'Lumi', 'Nix', 'Tilla'], middles: ['abbin', 'elori', 'imebel', 'orren', 'essa', 'uvin'], endings: ['in', 'a', 'el', 'en', 'or'],
      genderEndings: { male: ['in', 'or', 'en'], female: ['a', 'ella', 'ina'], neutral: ['en', 'el', 'orin'] },
      familyNames: ['Copperwhistle', 'Ticklegear', 'Bright Rivet', 'Sprocketwell', 'Buttonwheel', 'Tinflower'], flavors: ['A brisk name with a neat mechanical rhythm.', 'A bright sound for a careful maker.', 'A name that could fit on a workshop label.'],
      examples: ['Bimabbin', 'Calaella', 'Doriimebel', 'Fennorin', 'Gaviessa', 'Lumiuvin', 'Nixel', 'Tillaen']
    },
    {
      id: 'moss-garden', label: 'Moss-garden neighbors',
      summary: 'Soft vowels and rounded endings make these names feel close to home. They fit gardeners, cooks, seed keepers, and people who know which path stays dry after rain.',
      starts: ['Ari', 'Bessa', 'Cori', 'Della', 'Evi', 'Mina', 'Nori', 'Pella'], middles: ['avie', 'elba', 'orin', 'essa', 'iver', 'ollin'], endings: ['a', 'en', 'ie', 'in', 'el'],
      genderEndings: { male: ['in', 'el', 'en'], female: ['a', 'ie', 'ella'], neutral: ['en', 'orin', 'el'] },
      familyNames: ['Mosswhisk', 'Dandelion Cup', 'Hedgebutton', 'Rainbloom', 'Fernbasket', 'Applewheel'], flavors: ['A gentle name with a garden-bright ending.', 'A friendly rhythm for a neighbor at the gate.', 'A warm sound with a soft center.'],
      examples: ['Ariavie', 'Bessaella', 'Corien', 'Dellaorin', 'Eviiver', 'Minain', 'Noriella', 'Pellael']
    },
    {
      id: 'curiosity-club', label: 'Curiosity circles',
      summary: 'This style has an extra turn in the middle and a firm finish. It works for a puzzle keeper, local scholar, collector, or gnome who asks how every ordinary object was made.',
      starts: ['Avela', 'Borin', 'Cett', 'Davi', 'Elda', 'Korin', 'Mella', 'Vivi'], middles: ['aerith', 'elora', 'imrin', 'orva', 'essarin', 'ulven'], endings: ['eth', 'ora', 'en', 'in', 'iel'],
      genderEndings: { male: ['eth', 'in', 'en'], female: ['ora', 'iel', 'ella'], neutral: ['en', 'orin', 'ar'] },
      familyNames: ['Questionmark', 'Folded Map', 'Indexberry', 'Amber Lens', 'Far Notebook', 'Whyspring'], flavors: ['A curious name with a deliberate last beat.', 'A layered sound for someone with a new theory.', 'A name that feels comfortable in a notebook margin.'],
      examples: ['Avelaeth', 'Borinora', 'Cettorin', 'Daviiel', 'Eldaen', 'Korinessarin', 'Mellaeth', 'Viviulven']
    }
  ],
  pronunciation: [
    { name: 'Doriimebel', guide: 'DOR-ee-eh-MEH-bel', note: 'Let the repeated vowels flow before the final two beats.' },
    { name: 'Tillaen', guide: 'TIL-en', note: 'The final vowels can blend into one brief sound.' },
    { name: 'Bessaella', guide: 'BEH-sah-EL-ah', note: 'Let the center turn be audible rather than rushed.' },
    { name: 'Korinessarin', guide: 'KOR-in-ESS-ah-rin', note: 'Keep the unusual center clear and the ending short.' },
    { name: 'Viviulven', guide: 'VIH-vee-UL-ven', note: 'Four light beats make this long form easy to follow.' }
  ],
  tableTips: [
    'Choose one detail that explains a gnome’s name style: a family workshop, a favorite plant, a society that collects odd objects, or a name shortened by friends. The detail turns a lively sound into a character hook.',
    'For an NPC, match the name rhythm to the scene. A short form works for quick banter, while a longer form can become a running joke or a formal title. Keep the joke on the situation rather than making the character itself a punchline.',
    'If several gnomes appear in one settlement, give them different first-syllable shapes. You can preserve one family suffix across relatives to suggest connection without making the cast confusing.',
    'A workshop name can point to what someone repairs, collects, or refuses to throw away. A garden style can connect a character to a plant or a patch of land, while a curiosity-circle name can suggest an ongoing question. These are optional prompts, not personality rules. A reserved gnome may prefer a plain short form, and an energetic inventor may keep a name that sounds calm. When preparing several NPCs, write down one pronunciation cue beside each name and choose a different opening sound for every speaker. Let the party meet one character at a time instead of reciting a whole family tree. If a longer name becomes difficult in play, decide who is allowed to shorten it. That preference can become a small relationship detail the group remembers.'
  ],
  faq: [
    { question: 'Can I make a short gnome name?', answer: 'Yes. Select a short length for a compact result, or use the first part of a longer result as an everyday nickname.' },
    { question: 'Are these official names from DnD?', answer: 'No. Every table and sample on this page was written as original fantasy material for DnD Arena.' },
    { question: 'What does the style selector change?', answer: 'It selects a separate set of original openings, middles, endings, family names, and flavor lines.' },
    { question: 'Can I save names without an account?', answer: 'Yes. Favorites stay in local browser storage on your device, and you can export them as a text file.' }
  ],
  relatedRaces: ['halfling-name-generator', 'dwarf-name-generator', 'elf-name-generator', 'human-name-generator'],
  relatedUtilities: ['character-name-generator', 'tavern-name-generator']
};

export default profile;
