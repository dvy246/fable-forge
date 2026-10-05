const profile = {
  slug: 'human-name-generator',
  label: 'Human',
  keyword: 'human fantasy name generator',
  title: 'Human Fantasy Name Generator: Original Names',
  description: 'human fantasy name generator for original names in port, hill, and crossroads styles. Choose a length, add a family name, and save favorites locally now.',
  intro: [
    'This human fantasy name generator creates original names for characters from many kinds of settlements. Choose a port, hill-country, or crossroads sound palette, then adjust the length and add a family name if the setting needs one.',
    'The syllables and sample names were written for DnD Arena. They are not copied from real name lists or published settings. Treat each style as a fictional naming custom that you can reshape for your own map.'
  ],
  construction: [
    'Human names can take almost any shape, so a useful fantasy naming system begins with a place or household rather than a universal rule. A port may favor brisk names heard over water, while a small inland community might keep a family name tied to one landmark or trade.',
    'The three styles on this page provide separate sound tables and family names. None of them represents a real-world language or a fixed culture. Combine them to show migration, marriage, adoption, travel, or a character’s decision to use a different form.'
  ],
  styles: [
    {
      id: 'salt-port', label: 'Salt-port neighborhoods',
      summary: 'Short, clear openings and brisk endings make this set easy to hear over wind and dock noise. It works for a sailor, cook, clerk, or child of a neighborhood where introductions happen quickly.',
      starts: ['Aven', 'Bera', 'Caro', 'Della', 'Eren', 'Mira', 'Tovan', 'Vela'], middles: ['avin', 'elora', 'orin', 'essa', 'arven', 'ivela'], endings: ['en', 'a', 'or', 'is', 'el'],
      genderEndings: { male: ['or', 'en', 'el'], female: ['a', 'is', 'ella'], neutral: ['en', 'ar', 'el'] },
      familyNames: ['Saltglass', 'West Quay', 'Three Nets', 'Blue Harbor', 'Drydock', 'Anchor Hill'], flavors: ['A brisk sound shaped for a busy port.', 'A clean name that carries across a quay.', 'A simple rhythm with room for a family tag.'],
      examples: ['Avenor', 'Beraella', 'Caroin', 'Dellaen', 'Erenis', 'Mirael', 'Tovanar', 'Velaessa']
    },
    {
      id: 'highland-lanes', label: 'Highland lanes',
      summary: 'Open vowels and steady middles make these names comfortable in a small settlement. They suit a farmer, courier, innkeeper, or anyone who knows the ridge path better than the main road.',
      starts: ['Ari', 'Bren', 'Cella', 'Dorin', 'Fara', 'Kellan', 'Nora', 'Rellan'], middles: ['alven', 'erra', 'orin', 'essa', 'amren', 'ivor'], endings: ['en', 'a', 'in', 'or', 'eth'],
      genderEndings: { male: ['in', 'or', 'eth'], female: ['a', 'ella', 'ena'], neutral: ['en', 'ar', 'in'] },
      familyNames: ['High Orchard', 'Ridgewell', 'Stone Fence', 'Cloud Meadow', 'North Well', 'Hay Lantern'], flavors: ['A steady name with a hillside cadence.', 'A familiar rhythm suited to a close community.', 'A clear sound that stays easy to recall.'],
      examples: ['Arien', 'Brenor', 'Cellaena', 'Dorineth', 'Farain', 'Kellanor', 'Noraessa', 'Rellanen']
    },
    {
      id: 'crossroads', label: 'Crossroads markets',
      summary: 'This register blends several easy syllables into a flexible sound. It fits a trader, messenger, guide, or person from a settlement where guests and family names often arrive from elsewhere.',
      starts: ['Bela', 'Cevan', 'Dara', 'Evin', 'Jora', 'Lavi', 'Maren', 'Sorin'], middles: ['avira', 'elven', 'irona', 'essa', 'oren', 'ulian'], endings: ['a', 'en', 'or', 'iel', 'in'],
      genderEndings: { male: ['or', 'in', 'en'], female: ['a', 'iel', 'essa'], neutral: ['en', 'ar', 'iel'] },
      familyNames: ['Many Roads', 'Market Lantern', 'Open Ledger', 'Crosswind', 'Red Mile', 'Bell Foundry'], flavors: ['A versatile name with a market-town rhythm.', 'A flexible sound for a traveler between places.', 'A clear cadence with a lively center.'],
      examples: ['Belaessa', 'Cevanor', 'Daraiel', 'Evinoren', 'Jorain', 'Laviulian', 'Marenen', 'Sorinavira']
    }
  ],
  pronunciation: [
    { name: 'Beraella', guide: 'beh-RAY-lah', note: 'The middle vowel has the strongest lift.' },
    { name: 'Dorineth', guide: 'DOR-in-eth', note: 'Keep the ending short and light.' },
    { name: 'Sorinavira', guide: 'SOR-in-ah-VEER-ah', note: 'Four clear beats make the longer form natural.' },
    { name: 'Kellanor', guide: 'KEL-ah-nor', note: 'Use a small pause between the middle and finish.' },
    { name: 'Daraiel', guide: 'DAH-ree-el', note: 'The last vowels may blend into a smooth two-beat ending.' }
  ],
  tableTips: [
    'Decide what distinguishes the settlements on your map, then let a name hint at one detail. A port family may keep a dock name, a hill household may use a field marker, and a crossroads family may carry a surname from another region.',
    'For a player character, a family name can be inherited, adopted, or chosen. The generator does not force an origin. Pick a result first, then build the story around the sound if you want one.',
    'When naming several human NPCs, vary both the rhythm and the family tag. That makes a market scene easier to follow and gives players a quick clue about who belongs to which neighborhood.',
    'Human naming traditions can change from one valley, port, or generation to another, so use a style as a local signal rather than a universal rule. A surname might describe a trade in one town and a street in another. For a character who has moved, two names can quietly show different chapters of their life. For a one-scene NPC, one clear pronunciation note and a familiar sound are usually enough. If the party returns later, reuse the name and add a new detail instead of replacing it with a more elaborate backstory. When several people share a surname, vary their first names in rhythm and opening vowel. This keeps a crowded conversation understandable and lets players recognize a household without a cast list.'
  ],
  faq: [
    { question: 'Are these human names from real cultures?', answer: 'No. The syllables are invented for a fictional fantasy setting and are not presented as real-world names or translations.' },
    { question: 'Can I use a name for any fantasy ancestry?', answer: 'Yes. These human names can also suit travelers, mixed communities, or characters whose background is not central to the story.' },
    { question: 'Can I add a family or place name?', answer: 'Yes. Turn on the family name option and adapt the result into a household, settlement, or trade name.' },
    { question: 'Are names generated in my browser?', answer: 'Yes. The generator runs locally in the page. Names are not sent to a server.' }
  ],
  relatedRaces: ['half-elf-name-generator', 'halfling-name-generator', 'dwarf-name-generator', 'tiefling-name-generator'],
  relatedUtilities: ['character-name-generator', 'fantasy-town-name-generator']
};

export default profile;
