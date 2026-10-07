const profile = {
  slug: 'tabaxi-name-generator',
  label: 'Tabaxi',
  keyword: 'tabaxi name generator',
  title: 'Tabaxi Name Generator: Clan & Riddle Names',
  description: 'Tabaxi name generator for feline rogues, riddle keepers, and jungle scouts. Roll ten quick names, choose curious sound styles, and save campaign favorites.',
  intro: [
    'This tabaxi name generator creates poetic, curious, and agile names for feline scouts, wandering bards, inquisitive rogues, and riddle keepers.',
    'Whether your feline wanderer is chasing shiny trinkets across bustling ports or investigating ancient dungeon carvings, generate names that capture tabaxi curiosity and flair.'
  ],
  construction: [
    'Tabaxi naming traditions are celebrated for their poetic imagery, whimsical observations, and multi-layered meanings. A full tabaxi birth name is a phrase that describes a weather condition, an astrological omen, a striking animal behavior, or a sensory metaphor, such as Cloud on the Mountain, Five Timber Bells, Rain upon Stone, or Seven Silent Paws.',
    'Because full poetic names can be lengthy in fast-paced conversation, tabaxi readily shorten their names to a snappy, affectionate nickname used among companions. For instance, Cloud on the Mountain becomes Cloud, Five Timber Bells becomes Timber, and Seven Silent Paws becomes Paws. These nicknames are easy to say and carry warm personal familiarity.',
    'Clan names are tied to geographical landmarks, ancestral territories, or family packs, such as Bright Timber, River Mist, or Amber Cliff. A tabaxi takes pride in both their personal riddle moniker and their clan heritage, freely sharing their name with anyone who offers a good story or curious artifact in return.'
  ],
  styles: [
    {
      id: 'jungle-prowler',
      label: 'Jungle prowlers',
      summary: 'Soft feline sibilants, velvet stalks, and quiet jungle clicks. Fits nimble rogues, canopy scouts, and silent hunters.',
      starts: ['Blink', 'Cloud', 'Dusk', 'Flick', 'Jag', 'Mist', 'Paw', 'Rain', 'Shadow', 'Swift'],
      middles: ['anira', 'elith', 'iana', 'ilune', 'oliel', 'yssa'],
      endings: ['a', 'el', 'is', 'on', 'or', 'yn'],
      genderEndings: {
        male: ['on', 'or', 'yn', 'el'],
        female: ['a', 'iana', 'is', 'yssa'],
        neutral: ['el', 'is', 'on', 'yn']
      },
      familyNames: ['Bright Timber', 'River Mist', 'Mountain Tree', 'Deep Canopy', 'Amber Eye', 'Sun Cliff', 'Wind Whisker', 'Rain Forest'],
      flavors: [
        'A sleek, whisper-soft moniker suited to an agile canopy scout.',
        'A velvet sound that glides through shadowed branches without a sound.',
        'A quiet feline title that carries the scent of jungle rain.'
      ],
      examples: ['Blinkon', 'Cloudel', 'Duskis', 'Flickanira', 'Jagelith', 'Mistiana', 'Pawilune', 'Rainoliel', 'Shadowyssa', 'Swiftyn']
    },
    {
      id: 'riddle-keeper',
      label: 'Riddle keepers',
      summary: 'Poetic observations, numbers, and philosophical curiosities. Fits wandering bards, lore seekers, and eccentric scholars.',
      starts: ['Amber', 'Five', 'Gleam', 'Gold', 'Jade', 'Nine', 'Seven', 'Shine', 'Silent', 'Six'],
      middles: ['ados', 'elios', 'irian', 'olum', 'osina', 'ulion'],
      endings: ['ar', 'el', 'ian', 'on', 'or', 'os'],
      genderEndings: {
        male: ['on', 'or', 'ian', 'os'],
        female: ['a', 'el', 'ia', 'osina'],
        neutral: ['ar', 'el', 'ian', 'on']
      },
      familyNames: ['Two Moons', 'Whispering Bell', 'Clever Fox', 'Copper Thread', 'Seven Riddles', 'Folded Map', 'Old Lantern', 'Mirror Water'],
      flavors: [
        'A poetic, riddle-like title that invites questions and storytelling.',
        'An inquisitive name that suggests a hidden philosophical meaning.',
        'A curious moniker born from a memorable omen on the day of birth.'
      ],
      examples: ['Amberados', 'Fiveirian', 'Gleamolum', 'Goldados', 'Jadeosina', 'Nineulion', 'Sevenel', 'Shineel', 'Silentian', 'Sixon']
    },
    {
      id: 'curiosity-seeker',
      label: 'Curiosity seekers',
      summary: 'Brisk percussive clicks, playful bounces, and mischievous rhythm. Fits tricksters, treasure hunters, and nimble thieves.',
      starts: ['Chirp', 'Flint', 'Kite', 'Nip', 'Pounce', 'Quill', 'Snip', 'Whisk', 'Zin', 'Zip'],
      middles: ['akor', 'elis', 'ithor', 'olan', 'yris', 'zoth'],
      endings: ['a', 'an', 'is', 'on', 'or', 'us'],
      genderEndings: {
        male: ['an', 'on', 'or', 'us'],
        female: ['a', 'elis', 'is', 'ia'],
        neutral: ['an', 'is', 'on', 'or']
      },
      familyNames: ['Nimble Paw', 'Quick Tail', 'Brass Coin', 'Curious Box', 'Silk Ribbon', 'Copper Key', 'Shadow Puddle', 'Lost Clue'],
      flavors: [
        'A snappy, cheerful sound like paws pouncing on a fluttering moth.',
        'A lively moniker suited to an eccentric collector of oddities.',
        'A lighthearted title that bounds across tabletops and tavern roofs.'
      ],
      examples: ['Chirpan', 'Flintor', 'Kiteis', 'Nipon', 'Pouncea', 'Quillolan', 'Snipus', 'Whiskakor', 'Zinelis', 'Zipzoth']
    }
  ],
  pronunciation: [
    { name: 'Blinkon', guide: 'BLINK-on', note: 'Quick, lively opening beat with a soft concluding nasal.' },
    { name: 'Mistiana', guide: 'mis-tee-AH-nah', note: 'Graceful, flowing cadence reminiscent of rising jungle mist.' },
    { name: 'Goldolum', guide: 'gold-OH-luhm', note: 'Resonant, curious syllables with gentle vowel emphasis.' },
    { name: 'Jadeosina', guide: 'jayd-oh-SEE-nah', note: 'Lyrical feline rhythm that rolls lightly off the tongue.' },
    { name: 'Flintor', guide: 'FLIN-tohr', note: 'Brisk, percussive click ending in a steady highland stop.' }
  ],
  tableTips: [
    'Always introduce your tabaxi with both their full poetic phrase and their everyday nickname. Having your hero introduce themselves as Five Timber Bells before quickly telling party members, Just call me Timber, creates instant roleplay warmth.',
    'Tie your tabaxi obsession to their namesake. If your character is named Silver Mirror, give them an insatiable habit of inspecting reflective surfaces, polished armor, and glass baubles throughout dungeon explorations.',
    'Emphasize feline body language when speaking your character name. A tail flick, an involuntary ear swivel, or sudden curiosity toward an ordinary item makes tabaxi dialogue memorable and endearing.'
  ],
  faq: [
    { question: 'How do full tabaxi names work in D&D lore?', answer: 'Tabaxi full names are poetic descriptive phrases (like Cloud on the Mountain or Five Timber Bells), which are abbreviated to simple one-word nicknames for everyday use.' },
    { question: 'Do tabaxi have clans and family surnames?', answer: 'Yes. Tabaxi belong to clans named after geographical landmarks or ancestral woodlands, such as Bright Timber or River Mist.' },
    { question: 'Can I generate short nicknames directly?', answer: 'Yes. Selecting short length produces punchy one-word monikers ideal for everyday adventuring dialogue.' },
    { question: 'Can I save and export generated tabaxi names?', answer: 'Yes. Click the favorite icon on any result card to store names locally on your device and download them as a text file.' }
  ],
  relatedRaces: ['halfling-name-generator', 'gnome-name-generator', 'goblin-name-generator', 'fairy-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator', 'party-name-generator']
};

export default profile;
