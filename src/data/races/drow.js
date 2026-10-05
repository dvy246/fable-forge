const profile = {
  slug: 'drow-name-generator',
  label: 'Drow',
  keyword: 'drow name generator',
  title: 'Drow Name Generator: Original Fantasy Names',
  description: 'drow name generator for sharp, original names with three undercity styles. Choose a length or house name, then save favorites locally for your next session.',
  intro: [
    'This drow name generator creates original names with crisp consonants, shadowed vowels, and a rhythm that can sound formal without becoming hard to say. Choose a style, set a length, and add a house or family name when the scene calls for one.',
    'These syllable tables are original to DnD Arena. They do not borrow names, lore, or text from published settings, so you can decide what a house, title, or custom means in your campaign.'
  ],
  construction: [
    'A memorable subterranean fantasy name can pair a precise opening with a broad vowel in the middle and a compact ending. That contrast makes the result feel deliberate while keeping it easy to call during play. The generator avoids dense consonant clusters that slow down a first reading.',
    'The styles below are sound palettes rather than claims about a single culture. One is public and ceremonial, one is spare and practical, and one leans toward whispered research and careful record keeping. Choose the palette that fits your character’s social role, or combine details to make a local tradition.'
  ],
  styles: [
    {
      id: 'obsidian-hall', label: 'Obsidian hall',
      summary: 'Clean stops and a firm last syllable give this style a public, ceremonial quality. It works for a negotiator, captain, or house representative whose name is often announced before they enter a room.',
      starts: ['Dra', 'Keth', 'Lira', 'Mav', 'Nera', 'Oth', 'Siv', 'Vela'], middles: ['aeth', 'ira', 'orin', 'essa', 'ivra', 'elun'], endings: ['ra', 'thil', 'veth', 'orin', 'ess'],
      genderEndings: { male: ['veth', 'orin', 'thil'], female: ['ra', 'ess', 'vra'], neutral: ['ren', 'ith', 'el'] },
      familyNames: ['Vanthel', 'Kesthra', 'Orvess', 'Nhaloren', 'Duskwrit', 'Vireth'], flavors: ['A formal sound suited to a public introduction.', 'A precise name with a confident last beat.', 'A name that feels composed before it feels friendly.'],
      examples: ['Drathil', 'Kethorin', 'Liraess', 'Mavveth', 'Neravra', 'Othith', 'Sivren', 'Velael']
    },
    {
      id: 'quiet-shaft', label: 'Quiet shaft scouts',
      summary: 'Short starts and quick endings make this set useful for scouts, couriers, and people who prefer not to repeat themselves. The names have a clipped profile, but each still has a vowel anchor that keeps it pronounceable.',
      starts: ['Ari', 'Brel', 'Cira', 'Demi', 'Fenn', 'Isha', 'Kori', 'Tess'], middles: ['alen', 'ivor', 'essa', 'orin', 'arel', 'ethara'], endings: ['en', 'is', 'or', 'eth', 'a'],
      genderEndings: { male: ['or', 'eth', 'en'], female: ['is', 'a', 'essa'], neutral: ['en', 'ir', 'el'] },
      familyNames: ['Narrowstep', 'Blackglass', 'Stillcoil', 'Farsignal', 'Stonewhisper', 'Lowtorch'], flavors: ['A compact name made for a quiet introduction.', 'A quick rhythm that fits a scout on the move.', 'A name that stays clear when spoken softly.'],
      examples: ['Arien', 'Brelor', 'Cirais', 'Demeth', 'Fennel', 'Ishaessa', 'Korir', 'Tessan']
    },
    {
      id: 'ink-vault', label: 'Ink-vault keepers',
      summary: 'Longer vowels and a measured center give this style the feel of a name written carefully into a ledger. It suits a scholar, artisan, or archivist who treats every title as a choice rather than an inheritance.',
      starts: ['Avara', 'Ceth', 'Elior', 'Ilva', 'Maeth', 'Nira', 'Rovel', 'Zera'], middles: ['aelin', 'orith', 'ivara', 'elith', 'sorin', 'vaeth'], endings: ['ith', 'ara', 'enor', 'iel', 'eth'],
      genderEndings: { male: ['enor', 'eth', 'orin'], female: ['ara', 'iel', 'ith'], neutral: ['en', 'aer', 'orin'] },
      familyNames: ['Inkward', 'Velmora', 'Deepfolio', 'Ashenmark', 'Sableleaf', 'Quietarchive'], flavors: ['A considered name with space for a formal title.', 'A measured cadence that reads well on a page.', 'A reflective sound with a clean final consonant.'],
      examples: ['Avaraith', 'Cethen', 'Elioriel', 'Ilvaara', 'Maethorin', 'Niraen', 'Rovelith', 'Zeraeth']
    }
  ],
  pronunciation: [
    { name: 'Kethorin', guide: 'KEH-thor-in', note: 'Keep the first beat short and the middle vowel open.' },
    { name: 'Neravra', guide: 'NEH-rah-vrah', note: 'The final two consonants are light, not a hard stop.' },
    { name: 'Ishaessa', guide: 'EE-shah-ESS-ah', note: 'Give the second half a gentle rise.' },
    { name: 'Maethorin', guide: 'MAY-thor-in', note: 'Let the opening vowel carry before the two short closing beats.' },
    { name: 'Zeraeth', guide: 'ZEH-rayth', note: 'The last syllable rhymes with a soft, breathy “wraith.”' }
  ],
  tableTips: [
    'Decide whether your character introduces themself with a personal name, a house name, or a title. A public official might use the whole form, while a trusted companion uses only the given name. That difference can signal a change in trust without a speech explaining it.',
    'For an NPC, connect the house name to one visible detail: a seal, a stitched cuff, a signet, or a phrase used at a meeting. The generated sound becomes easier to remember when players can attach it to an object or action.',
    'If the name feels too severe, choose a softer style or use a short nickname. If it feels too gentle for a tense scene, add a firm family name. The tool supplies sounds; the table supplies meaning.',
    'Treat a house name as a choice about your own setting rather than a fixed claim about status or behavior. It could refer to a craft, a neighborhood, a long-running partnership, or a name adopted after a move. Give each character one practical detail that makes the name easy to recall, such as a careful greeting or a distinctive piece of clothing. When several drow appear in one scene, vary the first syllable and the number of beats. Reserve repeated endings for relatives or people who share a public role. A short form can make dialogue easier, while a formal name can mark a negotiation or a moment when someone wants to be taken seriously. Let the players decide what those choices mean.'
  ],
  faq: [
    { question: 'Are these official DnD names?', answer: 'No. They are original fantasy names generated from this site’s own syllable tables and are not official setting material.' },
    { question: 'Can I use a house name without making a noble character?', answer: 'Yes. A house name can describe a neighborhood, craft group, household, or chosen affiliation in your own world.' },
    { question: 'Why are some drow names short?', answer: 'A short form is easier to remember in play and can be a given name, nickname, or informal version of a longer introduction.' },
    { question: 'Can I change the generated result?', answer: 'Yes. Copy it and edit any syllable, family name, or title. The generator is a starting point, not a fixed naming rule.' }
  ],
  relatedRaces: ['elf-name-generator', 'tiefling-name-generator', 'half-elf-name-generator', 'gnome-name-generator'],
  relatedUtilities: ['character-name-generator', 'last-name-generator']
};

export default profile;
