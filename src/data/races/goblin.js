const profile = {
  slug: 'goblin-name-generator',
  label: 'Goblin',
  keyword: 'goblin name generator',
  title: 'Goblin Name Generator: Original Fantasy Names',
  description: 'goblin name generator for nimble original names in market, scrap-road, and den styles. Choose a length, add a family tag, and save favorites locally now.',
  intro: [
    'This goblin name generator creates original fantasy names with quick openings, crisp vowels, and endings that stay easy to remember. Choose a style, change the length, and add a group or family name when the character needs a wider connection.',
    'All syllable tables and examples are original to DnD Arena. The results do not copy names, lore, or text from a game book or another generator. Give a name whatever history makes sense in your setting.'
  ],
  construction: [
    'A nimble name can use a quick first beat and a bright vowel in the middle. A firm ending keeps it distinct when several characters are speaking at once. The tool avoids making names intentionally unpronounceable, because a memorable goblin should be easy to call back into a scene.',
    'The three styles suggest a busy market, a traveling band, and a close den community. They are sound choices rather than personality labels. A goblin can be thoughtful, ambitious, gentle, or anything else your story needs.'
  ],
  styles: [
    {
      id: 'market-sparks', label: 'Market sparks',
      summary: 'Fast starts and bright endings give these names a sales-floor rhythm. They fit traders, messengers, performers, and characters who can remember a customer after one brief conversation.',
      starts: ['Bik', 'Cavo', 'Dri', 'Gela', 'Kivo', 'Miri', 'Nekk', 'Rava'], middles: ['abbi', 'ekor', 'ivra', 'essa', 'orin', 'ulvi'], endings: ['i', 'en', 'or', 'a', 'ik'],
      genderEndings: { male: ['or', 'ik', 'en'], female: ['a', 'i', 'essa'], neutral: ['en', 'iv', 'or'] },
      familyNames: ['Bright Button', 'Copper Pouch', 'Three Bells', 'Quick Basket', 'Red Ribbon', 'Last Coin'], flavors: ['A quick name for a busy market scene.', 'A bright cadence with an easy call.', 'A lively sound that ends cleanly.'],
      examples: ['Bikabbi', 'Cavoen', 'Driivra', 'Gelaessa', 'Kivoor', 'Miriulvi', 'Nekkik', 'Ravaen']
    },
    {
      id: 'scrap-road', label: 'Scrap-road crews',
      summary: 'A practical center and a quick finish make this register useful for scouts and tinkerers. It sounds like a name learned from working together, not a title handed down in a ceremony.',
      starts: ['Ari', 'Bessa', 'Dov', 'Fenna', 'Kara', 'Lumo', 'Pavi', 'Tekk'], middles: ['aruk', 'evin', 'orra', 'aleth', 'imra', 'osen'], endings: ['en', 'a', 'ik', 'or', 'eth'],
      genderEndings: { male: ['ik', 'or', 'eth'], female: ['a', 'ena', 'essa'], neutral: ['en', 'ar', 'ik'] },
      familyNames: ['Bent Nail', 'Old Cartwheel', 'Tin Roof', 'Dry Rope', 'Patchwork Key', 'Side Door'], flavors: ['A road-tested name with a short finish.', 'A practical sound for a close-knit crew.', 'A name easy to say above the noise.'],
      examples: ['Ariik', 'Bessaena', 'Dovaruk', 'Fennaeth', 'Karaorra', 'Lumoen', 'Paviosen', 'Tekkik']
    },
    {
      id: 'den-keepers', label: 'Den keepers',
      summary: 'Rounded middles and softer endings make these names feel personal and close. They work for caretakers, cooks, storytellers, or anyone whose role is to make a shared place feel safe.',
      starts: ['Bara', 'Ciri', 'Della', 'Ero', 'Gami', 'Heka', 'Mavo', 'Niri'], middles: ['avela', 'erra', 'olin', 'essa', 'irren', 'umara'], endings: ['a', 'en', 'in', 'el', 'ora'],
      genderEndings: { male: ['in', 'el', 'en'], female: ['a', 'ora', 'ella'], neutral: ['en', 'ir', 'orin'] },
      familyNames: ['Warm Pot', 'Root Cellar', 'Understep', 'Shared Blanket', 'Red Hearth', 'Moss Door'], flavors: ['A soft name with a close-to-home finish.', 'A steady rhythm for a trusted neighbor.', 'A gentle sound that welcomes a longer story.'],
      examples: ['Baraavela', 'Cirien', 'Dellaora', 'Eroolin', 'Gamien', 'Hekaella', 'Mavoir', 'Nirien']
    }
  ],
  pronunciation: [
    { name: 'Nekkik', guide: 'NEK-ik', note: 'Use two sharp, quick beats without adding a growl.' },
    { name: 'Gelaessa', guide: 'geh-LAY-sah', note: 'The middle vowel opens the short first beat.' },
    { name: 'Paviosen', guide: 'PAH-vee-oh-sen', note: 'Keep the vowels distinct and let the final n stay light.' },
    { name: 'Hekaella', guide: 'HEH-kah-EL-ah', note: 'The center carries the rhythm, not the opening.' },
    { name: 'Dovaruk', guide: 'DOH-vah-ruk', note: 'A smooth first pair leads into a compact final syllable.' }
  ],
  tableTips: [
    'Give a goblin NPC an ordinary skill or responsibility before using a comic trait. A market seller might keep careful accounts, a scout might know every dry trail, and a den keeper might remember which guest dislikes onions. Small details make a name feel attached to a person.',
    'A shared group name can come from a tool, a place, or an inside joke. Keep it short enough that the party can repeat it. If the name has a long history, reveal that history through a scene rather than a paragraph.',
    'When you name several goblins at once, vary the first syllables and keep a common family tag for relatives. That lets players hear who belongs together without needing a chart.',
    'A quick name can sound lively without making its owner a joke. Give the character a reason to be in the scene, such as guarding a footbridge, tracking supplies, or trading a useful rumor. Then use the name as a handle the group can remember. A den tag might refer to a shared hiding place, a favorite workbench, or a team that formed for one specific task. Keep it distinct from a family name so players can tell whether the connection is kinship or choice. If several goblins speak together, choose names with different first vowels and endings. A familiar nickname can help the party address someone warmly, but not every character has to welcome one. Use the short form in fast conversation and save the full name for introductions that deserve attention.'
  ],
  faq: [
    { question: 'Are goblin names here meant to sound silly?', answer: 'No. The styles offer different rhythms, from quick market sounds to quiet household names. Personality is yours to decide.' },
    { question: 'Can I add a crew or den name?', answer: 'Yes. Use the optional family field, then change the result into a chosen crew tag, den name, or shared nickname.' },
    { question: 'Are these names original?', answer: 'Yes. The examples and syllable tables were written for this tool and are not copied from published lists.' },
    { question: 'Can I use these for NPCs?', answer: 'Yes. Save a result, pair it with a motive or job, and add it to your session notes.' }
  ],
  relatedRaces: ['orc-name-generator', 'half-orc-name-generator', 'gnome-name-generator', 'halfling-name-generator'],
  relatedUtilities: ['npc-name-generator', 'party-name-generator']
};

export default profile;
