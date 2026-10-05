const profile = {
  slug: 'half-orc-name-generator',
  label: 'Half-Orc',
  keyword: 'half orc name generator',
  title: 'Half Orc Name Generator: Original Fantasy Names',
  description: 'half orc name generator for original names across three traditions. Pick a brisk or blended sound, adjust length, and keep favorites in your browser here.',
  intro: [
    'This half-orc name generator creates original fantasy names that can sound direct, blended, or closely tied to a household. Choose a style, set a length, and decide whether a family name belongs in the character’s everyday introduction.',
    'The syllables and samples were written for DnD Arena rather than copied from published books or other generators. Use them to build a name that matches your character’s own history, not an assumed personality.'
  ],
  construction: [
    'Names with a quick opening and a clear vowel remain easy to say in fast dialogue. A softer middle can balance a firm ending, while a longer family name can hold a separate tradition. The generator keeps those choices in the sound rather than attaching them to a character’s temperament.',
    'The three palettes offer a direct register, a bridge between households, and a chosen personal form. They are optional creative directions. A character can keep one family’s name, join names, or take a new one that reflects where they feel at home.'
  ],
  styles: [
    {
      id: 'clear-call', label: 'Clear-call names',
      summary: 'Compact openings and steady endings make this style easy to call across a busy room. It suits a guard, scout, messenger, or anyone whose name must be heard the first time.',
      starts: ['Bara', 'Dren', 'Gora', 'Kara', 'Mara', 'Ruk', 'Toren', 'Vara'], middles: ['alen', 'orik', 'emra', 'avon', 'esha', 'urven'], endings: ['en', 'or', 'a', 'ik', 'eth'],
      genderEndings: { male: ['or', 'ik', 'eth'], female: ['a', 'ena', 'ara'], neutral: ['en', 'or', 'ar'] },
      familyNames: ['Wide Gate', 'Iron Orchard', 'Far Signal', 'Red Cart', 'Open Hill', 'Rainwall'], flavors: ['A direct name with a strong first beat.', 'A clear call that needs no explanation.', 'A steady sound for quick conversation.'],
      examples: ['Baraen', 'Drenor', 'Goraik', 'Karaeth', 'Maraena', 'Ruken', 'Torenor', 'Varaar']
    },
    {
      id: 'two-households', label: 'Two-household tradition',
      summary: 'Open centers and flowing endings give this style a blended cadence. It works for someone connected to more than one household, or for a family that made a new custom together.',
      starts: ['Avela', 'Bera', 'Cira', 'Dara', 'Eren', 'Lora', 'Nera', 'Sava'], middles: ['avira', 'elora', 'orin', 'essa', 'aethen', 'ivara'], endings: ['a', 'en', 'ora', 'is', 'eth'],
      genderEndings: { male: ['en', 'eth', 'orin'], female: ['a', 'ora', 'essa'], neutral: ['en', 'is', 'ar'] },
      familyNames: ['Two Fires', 'Shared Road', 'Oak and Stone', 'Bright Crossing', 'Riverhall', 'Common Hearth'], flavors: ['A blended rhythm with room for two histories.', 'A gentle center and a clear ending.', 'A name built around a shared home.'],
      examples: ['Avelaora', 'Beraen', 'Ciraessa', 'Daraorin', 'Erenaethen', 'Loraeth', 'Nerais', 'Savaen']
    },
    {
      id: 'chosen-name', label: 'Chosen names',
      summary: 'This palette uses distinct middles and short endings for a name selected later in life. It leaves the reason open: a new home, a private promise, a family story, or simply a sound the character likes.',
      starts: ['Ari', 'Bren', 'Davi', 'Fera', 'Korin', 'Mira', 'Oren', 'Tavi'], middles: ['avren', 'elka', 'irra', 'orven', 'essa', 'ulra'], endings: ['en', 'a', 'or', 'is', 'el'],
      genderEndings: { male: ['or', 'en', 'el'], female: ['a', 'is', 'ella'], neutral: ['en', 'or', 'ar'] },
      familyNames: ['New Lantern', 'North Window', 'Mile of Rain', 'First Garden', 'Open Hand', 'Evening Road'], flavors: ['A chosen name with an independent cadence.', 'A compact sound that stands by itself.', 'A personal name with no required origin.'],
      examples: ['Arien', 'Brenella', 'Davior', 'Ferais', 'Korinulra', 'Mirael', 'Orenen', 'Taviar']
    }
  ],
  pronunciation: [
    { name: 'Karaeth', guide: 'KAH-rayth', note: 'Keep the opening broad and finish lightly.' },
    { name: 'Avelaora', guide: 'ah-veh-LOR-ah', note: 'Let the long center flow instead of clipping it.' },
    { name: 'Brenella', guide: 'breh-NEL-ah', note: 'The second beat carries the name.' },
    { name: 'Goraik', guide: 'GOR-eye-k', note: 'Say the ending as one short beat.' },
    { name: 'Korinulra', guide: 'KOR-in-UL-rah', note: 'Break the longer form into four clear parts.' }
  ],
  tableTips: [
    'Let the player decide which family names or traditions matter to the character. The name does not need to explain their background before the first scene begins. A preference about what companions should call them can be enough to start a story.',
    'For an NPC, keep the full form for a letter, introduction, or family scene, and use the chosen everyday form in dialogue. The difference can show who is close without turning the name into a test for the party.',
    'If two relatives share a family name, vary the number of syllables in their given names. This creates a hint of connection while keeping each person easy to identify in a crowded scene.',
    'A strong cadence does not have to signal aggression. Give a character a profession, a private goal, or a relationship that lets the name sit beside a fuller impression. The generator’s shorter options can suit quick exchanges, while a longer form may belong on a document or during an introduction. Ask the player which version they want other characters to use. For an NPC, let that preference emerge naturally when someone repeats the name incorrectly or tries a nickname too soon. If a family appears in several sessions, repeat a surname or one ending and vary the first beat. Players will notice the connection without confusing one sibling for another. Treat the sound as a prompt for the scene, not a summary of the person.'
  ],
  faq: [
    { question: 'Does a half-orc name have to sound harsh?', answer: 'No. Use any style that fits the character. These options change rhythm, not personality or background.' },
    { question: 'Can I create a blended family name?', answer: 'Yes. Copy the result and combine family names, or use the optional family field as a starting point.' },
    { question: 'Are the names taken from official sourcebooks?', answer: 'No. The examples and syllable tables were created for this site and are original fantasy material.' },
    { question: 'Can I use these for an NPC?', answer: 'Yes. Save a favorite, add a role or goal, and keep it with your campaign notes.' }
  ],
  relatedRaces: ['orc-name-generator', 'human-name-generator', 'dragonborn-name-generator', 'dwarf-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator']
};

export default profile;
