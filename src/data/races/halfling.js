const profile = {
  slug: 'halfling-name-generator',
  label: 'Halfling',
  keyword: 'halfling name generator',
  title: 'Halfling Name Generator: Original Fantasy Names',
  description: 'halfling name generator for original names with warm, wandering, and storybook styles. Choose a length, add a family name, and save a favorite locally.',
  intro: [
    'This halfling name generator makes original fantasy names with warm vowels, friendly rhythms, and endings that sound natural in conversation. Choose a style, set the length, and add a family name when a character belongs to a close-knit household.',
    'The names and sound fragments were written for DnD Arena, not copied from a rulebook or another generator. Use them as a starting point for a traveler, host, farmer, courier, or unexpected hero.'
  ],
  construction: [
    'A welcoming name often has a light opening, two clear beats, and a final vowel or soft consonant. That shape makes it easy for a group to remember and gives a nickname room to appear naturally. Longer forms can suggest a family tradition without becoming difficult to pronounce.',
    'The three styles suggest a village household, an open-road traveler, and a storyteller’s circle. These are creative sound palettes, not mandatory customs. You can borrow one for an NPC and another for a player character who has made a home somewhere new.'
  ],
  styles: [
    {
      id: 'hearthside', label: 'Hearthside households',
      summary: 'Round vowels and gentle endings make these names feel familiar and easy to call. They suit hosts, gardeners, shopkeepers, and relatives who know exactly how someone takes their tea.',
      starts: ['Bela', 'Cori', 'Della', 'Fenna', 'Hali', 'Lina', 'Milo', 'Perri'], middles: ['afer', 'elby', 'orin', 'essa', 'avin', 'ollo'], endings: ['a', 'en', 'by', 'in', 'o'],
      genderEndings: { male: ['o', 'in', 'en'], female: ['a', 'ella', 'ina'], neutral: ['en', 'by', 'orin'] },
      familyNames: ['Applewick', 'Warmkettle', 'Goodberry', 'Cloverfield', 'Merrymeadow', 'Tumblegate'], flavors: ['A familiar sound that feels easy to welcome.', 'A bright name with a soft landing.', 'A name that fits in a shared kitchen.'],
      examples: ['Belaella', 'Corien', 'Dellaorin', 'Fennina', 'Haliby', 'Linaen', 'Miloavin', 'Perrio']
    },
    {
      id: 'open-road', label: 'Open-road walkers',
      summary: 'This set has quick starts and a little swing through its middle syllables. It works for a courier, cartographer, peddler, or a character who collects stories from every place they visit.',
      starts: ['Ari', 'Brenna', 'Dori', 'Evin', 'Jori', 'Kela', 'Nella', 'Rin'], middles: ['avon', 'erra', 'olin', 'essa', 'irren', 'afer'], endings: ['en', 'a', 'in', 'o', 'er'],
      genderEndings: { male: ['in', 'o', 'er'], female: ['a', 'essa', 'ella'], neutral: ['en', 'orin', 'ir'] },
      familyNames: ['Longfoot Lane', 'Roadbasket', 'Westbridge', 'Far Lantern', 'Pinecart', 'Milemarker'], flavors: ['A traveling cadence with an easy beat.', 'A clear name for a quick roadside introduction.', 'A lively sound with no hard-to-say clusters.'],
      examples: ['Arien', 'Brennaer', 'Dorissa', 'Evinolin', 'Joriin', 'Kelaessa', 'Nellaorin', 'Rinavon']
    },
    {
      id: 'story-circle', label: 'Story-circle tellers',
      summary: 'Longer centers and lyrical endings make these names comfortable in a tale told aloud. They suit a singer, cook, local historian, or anyone whose name arrives with a story attached.',
      starts: ['Avela', 'Borin', 'Cenna', 'Delia', 'Ember', 'Lori', 'Maren', 'Tavi'], middles: ['alora', 'elvin', 'orena', 'ivella', 'essarin', 'ulora'], endings: ['a', 'en', 'ella', 'orin', 'in'],
      genderEndings: { male: ['orin', 'en', 'in'], female: ['ella', 'a', 'ina'], neutral: ['en', 'arin', 'or'] },
      familyNames: ['Evening Pie', 'Storybrook', 'Blue Apron', 'Lanternloaf', 'Riverwhistle', 'Taleberry'], flavors: ['A melodic name for a tale told in company.', 'A gentle rhythm with a bright final vowel.', 'A name that leaves room for a familiar nickname.'],
      examples: ['Avelaella', 'Borinen', 'Cennaorin', 'Deliaa', 'Emberin', 'Loriella', 'Marenarin', 'Taviorin']
    }
  ],
  pronunciation: [
    { name: 'Fennina', guide: 'feh-NEE-nah', note: 'Let the second beat rise lightly.' },
    { name: 'Kelaessa', guide: 'keh-LAY-sah', note: 'Keep the final vowel open and gentle.' },
    { name: 'Avelaella', guide: 'ah-veh-LAY-ell-ah', note: 'Slow the center slightly so the vowels stay distinct.' },
    { name: 'Rinavon', guide: 'RIH-nah-von', note: 'A quick first beat leads into a rounded finish.' },
    { name: 'Marenarin', guide: 'MAH-ren-ah-rin', note: 'Use four even beats, or shorten it to Maren.' }
  ],
  tableTips: [
    'A family name can carry a small, concrete tradition: a shared recipe, a lane where several homes stand, or a basket passed between cousins. Such details make a household feel real without requiring a long genealogy.',
    'For an NPC, give the character a nickname that reveals who uses it. A neighbor may use the short form, while a new visitor hears the full name. The difference can show familiarity before anyone explains it.',
    'If a long result feels too formal, use its first two syllables in daily dialogue. Let the full name return for a ceremony, a letter, or a moment when the character wants to be taken seriously.',
    'Warm sounds can suggest welcome, but they do not require a character to be cheerful or domestic. A halfling name can belong to a scout who prefers the road, a patient judge, or a quiet person who keeps careful records. For a recurring NPC, choose one small habit that makes the name stick, such as a greeting, a favorite seat, or a way of remembering visitors. If the party meets several relatives, reuse a family name and vary the first syllable so dialogue stays clear. A nickname can come from a friend, a work crew, or a place the character once lived. Decide whether the character likes that form. When the group returns to town, repeating the same preferred name helps make the settlement feel familiar without adding a long block of lore.'
  ],
  faq: [
    { question: 'Can I generate a halfling family name too?', answer: 'Yes. Turn on the optional family name control, or visit the surname generator for a longer set of family and clan names.' },
    { question: 'Are the example names from an existing fantasy book?', answer: 'No. These examples are original combinations built for DnD Arena from its own syllable tables.' },
    { question: 'How do I make a halfling name sound more formal?', answer: 'Choose the story-circle style or a longer length, then keep the full family name for introductions.' },
    { question: 'Will saved favorites stay on my device?', answer: 'Favorites are stored in this browser on your device. They are not uploaded to a server.' }
  ],
  relatedRaces: ['gnome-name-generator', 'human-name-generator', 'half-elf-name-generator', 'dwarf-name-generator'],
  relatedUtilities: ['character-name-generator', 'tavern-name-generator']
};

export default profile;
