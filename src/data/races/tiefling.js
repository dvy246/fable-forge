const profile = {
  slug: 'tiefling-name-generator',
  label: 'Tiefling',
  keyword: 'tiefling name generator',
  title: 'Tiefling Name Generator: Fantasy Names by Style',
  description: 'tiefling name generator for original names in lyrical, streetwise, and self-chosen styles. Add a family name and save favorites in your browser for later.',
  intro: [
    'This tiefling name generator creates original fantasy names with bright vowels, sharp turns, and endings that remain easy to say. Pick a sound style, adjust the length, and add a family name or chosen name when it suits the character.',
    'The syllable tables and example names were written for DnD Arena. They are not copied from a rulebook, setting guide, or other generator, so every result is open for you to reinterpret.'
  ],
  construction: [
    'A striking name can pair a lyrical center with a crisp ending. That contrast gives a result personality without requiring a difficult spelling or a fixed origin story. A one-beat nickname can sit beside a longer name and change how different characters address its owner.',
    'The three palettes on this page suggest an expressive salon, an urban everyday register, and a name chosen for oneself. They are not moral or cultural categories. A tiefling can use any sound, title, or family tradition that fits the world your table is making.'
  ],
  styles: [
    {
      id: 'velvet-echo', label: 'Velvet echo',
      summary: 'Flowing centers and a bright last beat make this style feel composed and expressive. It suits a performer, negotiator, painter, or character who enjoys a well-timed introduction.',
      starts: ['Aza', 'Cira', 'Davae', 'Eris', 'Lira', 'Mora', 'Sera', 'Vexa'], middles: ['aleth', 'evara', 'iriel', 'oraen', 'ivessa', 'ulorin'], endings: ['a', 'en', 'iel', 'eth', 'ora'],
      genderEndings: { male: ['eth', 'en', 'orin'], female: ['a', 'iel', 'ora'], neutral: ['en', 'ir', 'el'] },
      familyNames: ['Velvet Ash', 'Bright Cinder', 'Glass Orchard', 'Evening Vale', 'Red Sonnet', 'Sable Lantern'], flavors: ['A polished sound with a clear final beat.', 'A lyrical name ready for a stage or salon.', 'A name that feels composed but not formal.'],
      examples: ['Azaleth', 'Ciraiel', 'Davaeora', 'Erisen', 'Liraeth', 'Moraen', 'Seraivessa', 'Vexiel']
    },
    {
      id: 'city-corner', label: 'City-corner regulars',
      summary: 'Short openings and compact endings give this register a confident everyday rhythm. It works for a courier, shop owner, apprentice, or someone who prefers a name that fits in one breath.',
      starts: ['Bera', 'Demi', 'Fara', 'Kavi', 'Nera', 'Ravi', 'Tessa', 'Zori'], middles: ['avren', 'elka', 'irra', 'orin', 'essa', 'ulra'], endings: ['en', 'a', 'ik', 'or', 'is'],
      genderEndings: { male: ['or', 'ik', 'en'], female: ['a', 'is', 'essa'], neutral: ['en', 'ar', 'el'] },
      familyNames: ['Copper Sign', 'West Window', 'Ash Market', 'Morrow Street', 'Tin Cup', 'Quick Lantern'], flavors: ['A compact name for a fast introduction.', 'A confident sound that works in daily life.', 'A crisp rhythm with a clear ending.'],
      examples: ['Beraen', 'Demiis', 'Faraor', 'Kaviik', 'Neraessa', 'Ravien', 'Tessais', 'Zoriulra']
    },
    {
      id: 'self-named', label: 'Self-named paths',
      summary: 'Distinct middles and flexible endings create names that feel selected rather than inherited. They suit a character who has changed a name, made a private promise, or chosen a sound simply because it feels right.',
      starts: ['Ari', 'Calyx', 'Dara', 'Evo', 'Ivara', 'Nox', 'Riven', 'Vael'], middles: ['aeris', 'elora', 'ivren', 'oriel', 'essan', 'ulven'], endings: ['is', 'en', 'ora', 'iel', 'ar'],
      genderEndings: { male: ['ar', 'en', 'iel'], female: ['ora', 'is', 'ella'], neutral: ['en', 'ar', 'is'] },
      familyNames: ['New Moon Door', 'Clear Flame', 'Long Shadow', 'Open Archive', 'First Rain', 'Silent Bell'], flavors: ['A chosen name with a deliberate cadence.', 'A distinct sound that does not need an origin story.', 'A personal name with room to change.'],
      examples: ['Ariora', 'Calyxen', 'Daraiel', 'Evois', 'Ivaraar', 'Noxen', 'Rivenora', 'Vaeliel']
    }
  ],
  pronunciation: [
    { name: 'Ciraiel', guide: 'see-RYE-el', note: 'Let the middle vowel turn gently into the ending.' },
    { name: 'Vexiel', guide: 'VEKS-ee-el', note: 'Keep the first consonant crisp and the end light.' },
    { name: 'Neraessa', guide: 'NEH-rah-ESS-ah', note: 'Use a soft middle rise instead of a sharp stop.' },
    { name: 'Calyxen', guide: 'KAL-ik-sen', note: 'Say the x as a clean ks and keep the ending brief.' },
    { name: 'Ivaraar', guide: 'ih-vah-RAHR', note: 'The final beat carries the emphasis.' }
  ],
  tableTips: [
    'Ask who gave the character their name and whether they still use it. A chosen name can mark a new home, a private promise, or simply a sound the character prefers. You do not need to tie it to a dramatic event unless that story interests the player.',
    'For a non-player character, let the name and the first impression point in different directions. A lyrical name can belong to a blunt shopkeeper, and a compact name can belong to a patient archivist. That contrast helps avoid predictable characterization.',
    'Use the optional family name when a scene involves introductions, records, or relatives. In daily dialogue, a shorter form can help the party remember the character and keep conversation moving.',
    'A self-chosen name can have a private reason, a public meaning, or no explanation at all. Let the player decide how much to share. If a character uses different forms with different people, write down who knows each one so the detail remains steady across sessions. A family name can describe a household or chosen circle without defining a character’s history. For an NPC, connect the sound to one memorable action rather than relying on appearance alone. A short, confident introduction can be more effective than a dramatic speech. When a name feels too ornate, shorten it to a version the table can say naturally. When a name feels plain, give it meaning through a promise, a friendship, or a place the character hopes to see again.'
  ],
  faq: [
    { question: 'Can I generate a tiefling name that is not dramatic?', answer: 'Yes. Choose the city-corner style for a compact everyday sound, or shorten a longer result.' },
    { question: 'Are tiefling names here official DnD names?', answer: 'No. This is original fantasy naming material and is not affiliated with an official setting.' },
    { question: 'Can the name be self-chosen?', answer: 'Yes. Use the self-named style as a prompt, then invent the reason or leave the history private.' },
    { question: 'Can I save names for later?', answer: 'Yes. Favorites are saved locally in your browser and can be exported as a text file.' }
  ],
  relatedRaces: ['drow-name-generator', 'half-elf-name-generator', 'elf-name-generator', 'dragonborn-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator']
};

export default profile;
