const profile = {
  slug: 'half-elf-name-generator',
  label: 'Half-Elf',
  keyword: 'half elf name generator',
  title: 'Half Elf Name Generator: Fantasy Names by Style',
  description: 'half elf name generator for original names that blend or contrast two family traditions. Choose a sound, adjust length, and save favorites locally later.',
  intro: [
    'This half elf name generator makes original fantasy names that can blend two family sound traditions or hold them apart. Choose a style, set the length, and add a family name if the character carries more than one history.',
    'DnD Arena uses original syllable tables rather than names or lore from published books. Decide whether your character keeps one name, joins two names, or chooses a new form that belongs only to them.'
  ],
  construction: [
    'A mixed naming tradition can be shown through rhythm instead of a long explanation. A name might begin with a short, practical beat and end with a flowing one, or combine a family name with a chosen nickname. Both approaches can say something about belonging without defining the character for them.',
    'The styles below offer a blended cadence, a family-bridge tradition, and an independent register. They are prompts for your world rather than a fixed identity rule. Use one palette for the character, or let the name change as relationships and home places change.'
  ],
  styles: [
    {
      id: 'shared-horizon', label: 'Shared horizon',
      summary: 'This style balances crisp starts with open endings. It works for someone comfortable moving between households, or for a character who has made a sound all their own from two sources.',
      starts: ['Ari', 'Bela', 'Ceri', 'Dara', 'Evan', 'Lira', 'Maren', 'Sela'], middles: ['avon', 'elira', 'orin', 'essa', 'aerin', 'ivela'], endings: ['en', 'a', 'iel', 'or', 'is'],
      genderEndings: { male: ['or', 'en', 'iel'], female: ['a', 'is', 'ella'], neutral: ['en', 'ar', 'iel'] },
      familyNames: ['Two Rivers', 'Silverfield', 'Hearthmere', 'Openbranch', 'Westgarden', 'Evening Vale'], flavors: ['A balanced sound with space for two histories.', 'A flowing name that remains easy to say.', 'A clear cadence shaped for introductions.'],
      examples: ['Arien', 'Belaella', 'Cerior', 'Daraiel', 'Evanis', 'Liraen', 'Marenar', 'Selaa']
    },
    {
      id: 'bridge-house', label: 'Bridge-house families',
      summary: 'Longer centers and a formal finish make this register feel like a name used at family gatherings. It suits characters who value a shared household, a community role, or a tradition they helped revise.',
      starts: ['Avela', 'Borin', 'Cala', 'Dorien', 'Elira', 'Kalen', 'Nera', 'Tavi'], middles: ['alora', 'elven', 'irion', 'aveth', 'orena', 'saren'], endings: ['ael', 'en', 'ora', 'eth', 'in'],
      genderEndings: { male: ['eth', 'in', 'en'], female: ['ora', 'ael', 'ella'], neutral: ['en', 'ar', 'el'] },
      familyNames: ['Common Lantern', 'Oak and Reed', 'Shared Table', 'Brightwater', 'Bridgeward', 'Many Windows'], flavors: ['A full name that feels at home in a family record.', 'A measured rhythm for a formal gathering.', 'A name shaped by a shared place.'],
      examples: ['Avelaora', 'Borineth', 'Calaen', 'Dorienin', 'Eliraael', 'Kalenora', 'Nerael', 'Tavieth']
    },
    {
      id: 'own-making', label: 'Names of one’s own making',
      summary: 'This palette favors singular middles and compact endings. It fits a character who has chosen a name apart from family expectations, while leaving the reason for that choice open to the player.',
      starts: ['Bren', 'Cira', 'Demi', 'Fara', 'Ilan', 'Kira', 'Rova', 'Venn'], middles: ['aeris', 'elor', 'ivra', 'oren', 'eska', 'ulren'], endings: ['is', 'a', 'en', 'or', 'el'],
      genderEndings: { male: ['or', 'en', 'el'], female: ['a', 'is', 'ella'], neutral: ['en', 'ar', 'el'] },
      familyNames: ['Newday', 'Far Lantern', 'Clear Road', 'Rainsong', 'Quiet Gate', 'Blue Threshold'], flavors: ['A distinct name with an independent finish.', 'A compact rhythm that stands on its own.', 'A chosen sound with no required backstory.'],
      examples: ['Brenis', 'Ciraen', 'Demiel', 'Faraella', 'Ilanor', 'Kiraeska', 'Rovaar', 'Vennel']
    }
  ],
  pronunciation: [
    { name: 'Daraiel', guide: 'DAH-ree-el', note: 'Keep the final vowels distinct enough to hear.' },
    { name: 'Marenar', guide: 'MAH-ren-ar', note: 'A steady three-beat reading works well.' },
    { name: 'Dorienin', guide: 'DOR-ee-en-in', note: 'Slow the vowel sequence, or shorten the everyday form.' },
    { name: 'Kiraeska', guide: 'KEE-rah-ESS-kah', note: 'Let the center carry the stress.' },
    { name: 'Eliraael', guide: 'eh-LEE-rayl', note: 'The vowels can blend into two smooth beats.' }
  ],
  tableTips: [
    'Ask whether the character wants a blended name, two separate family names, or a form that does not refer to ancestry at all. That decision belongs to the player. The generator offers sounds, not a rule for how a person should describe themself.',
    'For an NPC, show the choice through how they introduce themself. One person may share both names with pride, while another may use a short chosen form. A companion who remembers the preferred name can make a small but meaningful scene.',
    'If two family traditions appear in the same campaign, reuse one family name or a sound ending on both sides. A few repeated sounds can make relationships legible without forcing every character into a single pattern.',
    'A blended style is only one option. A character might use a name from one household, keep two names for different settings, or choose a form that says little about family history. Let the player decide what feels comfortable instead of assigning a meaning from the outside. For a non-player character, a preference can shape a scene without becoming the character’s entire story. Perhaps they correct a clerk politely, introduce a nickname to a friend, or use a full name when reconnecting with relatives. If you create several family members, repeat one small sound or surname, then give each person a different cadence. That makes connections easy to hear without suggesting everyone made the same choice. Keep a note of the form each character prefers so later scenes remain consistent.'
  ],
  faq: [
    { question: 'Does a half elf name have to combine two styles?', answer: 'No. It can follow one family, blend sounds, use a chosen name, or ignore ancestry entirely.' },
    { question: 'Are these names from a published DnD book?', answer: 'No. This page uses original syllables and sample names written for DnD Arena.' },
    { question: 'Can I add two family names?', answer: 'The generator adds one optional family name, but you can copy the result and add another name or title yourself.' },
    { question: 'What is a good way to roleplay a chosen name?', answer: 'Decide who knows the older name, who uses the chosen form, and what the character wants new companions to call them.' }
  ],
  relatedRaces: ['elf-name-generator', 'human-name-generator', 'drow-name-generator', 'tiefling-name-generator'],
  relatedUtilities: ['character-name-generator', 'last-name-generator']
};

export default profile;
