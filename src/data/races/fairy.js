const profile = {
  slug: 'fairy-name-generator',
  label: 'Fairy',
  keyword: 'fairy name generator',
  title: 'Fairy Name Generator: Seelie & Fae Folk Names',
  description: 'Fairy name generator for Seelie royals, wildwood sprites, and Unseelie shadows. Roll original fae names, explore three sound styles, and save favorites.',
  intro: [
    'This fairy name generator creates whimsical, lyrical, and twilight-kissed names for pixies, sprites, dryads, archfey nobles, and Feywild wanderers. Roll through bright summer blooms, playful woodland tricksters, and eerie autumn courts ready for your next fantasy adventure.',
    'All syllable patterns and sample fairy names are original creations developed for DnD Arena. They avoid direct copying from traditional folklore or commercial settings, offering an imaginative, enchanting voice for your tabletop fae.'
  ],
  construction: [
    'Fae naming customs operate on symbolic whimsy, floral compounds, and melodious vowel chimes that sound like ringing silver bells or rustling autumn leaves. In tabletop lore, true names within the Feywild carry binding magical power. Giving your true name to an archfey courtier is considered the ultimate gamble, as fae beings can leverage an accepted moniker to extract favors, memories, or lifelong servitude.',
    'The three registers on this page capture the shifting moods of the Feywild. Seelie luminaries embody high summer, star-blessed courts, and sparkling grace, utilizing liquid consonants, flowing vowels, and elegant floral affixes. Wildwood tricksters reflect the mischievous, unpredictable energy of sprites and pixies, favoring bouncy two-beat nicknames formed from acorns, dew drops, and woodland critters. Unseelie twilight names evoke autumn frosts, midnight brambles, and eerie mist, balancing beauty with thorns and cold moonlight.',
    'When choosing a fairy moniker, consider whether the name describes a current passion or a seasonal transformation. Fae creatures frequently swap titles when migrating between summer glades and winter groves. A sprite known as Marigold Dew in the warmth of spring might introduce themselves as Cinder Frost when the solstice arrives.'
  ],
  styles: [
    {
      id: 'seelie-luminary',
      label: 'Seelie luminaries',
      summary: 'Lyrical vowels, silver chimes, and luminous courtly grace. Fits summer court courtiers, swan maidens, starlight archfey, and radiant glade nobles.',
      starts: ['Ael', 'Cel', 'Fae', 'Glan', 'Lyr', 'Miri', 'Nim', 'Sil', 'Tir', 'Zeph'],
      middles: ['anira', 'elith', 'iana', 'ilune', 'oliel', 'yssa'],
      endings: ['a', 'fin', 'ia', 'iel', 'lune', 'wyn'],
      genderEndings: {
        male: ['fin', 'ion', 'or', 'wyn'],
        female: ['a', 'ia', 'iel', 'lune'],
        neutral: ['el', 'is', 'yn', 'al']
      },
      familyNames: ['Silver Blossom', 'Sun Dew', 'Morning Star', 'Golden Feather', 'Starlight Veil', 'Crystal Brook', 'Rose Glass', 'Meadow Dance'],
      flavors: [
        'A sparkling, radiant name like harp notes on a warm afternoon.',
        'An elegant court title worthy of a high summer archfey.',
        'A lyrical fae moniker that glimmers with starlight.'
      ],
      examples: ['Aelanira', 'Celilune', 'Faeiel', 'Glanwyn', 'Lyris', 'Mirioliel', 'Nimilune', 'Siliana', 'Tirfin', 'Zephyrel']
    },
    {
      id: 'wildwood-trickster',
      label: 'Wildwood tricksters',
      summary: 'Bouncy woodland beats, natural blossoms, and playful percussive clicks. Fits pixies, forest sprites, mischievous brownies, and clover dancers.',
      starts: ['Bram', 'Clov', 'Dew', 'Flic', 'Pip', 'Puck', 'Snap', 'Tig', 'Twig', 'Wisp'],
      middles: ['le', 'li', 'lo', 'kin', 'per', 'sy'],
      endings: ['berry', 'bloom', 'drop', 'kin', 'ling', 'weed'],
      genderEndings: {
        male: ['kin', 'ling', 'drop', 'er'],
        female: ['bloom', 'berry', 'sy', 'a'],
        neutral: ['drop', 'kin', 'weed', 'ling']
      },
      familyNames: ['Acorn Top', 'Honey Cup', 'Fox Glove', 'Puddle Hop', 'Pine Needle', 'Moss Tangle', 'Cricket Chirp', 'Thimble Pot'],
      flavors: [
        'A snappy, cheerful sound like twigs snapping under tiny boots.',
        'A playful woodland name for a prankster who hides in elderberry bushes.',
        'A lighthearted moniker that bounces along the forest floor.'
      ],
      examples: ['Bramekin', 'Cloverling', 'Dewberry', 'Flickerkin', 'Pipkin', 'Puckeli', 'Snapweed', 'Tigberry', 'Twigweed', 'Wispina']
    },
    {
      id: 'unseelie-twilight',
      label: 'Unseelie shadows',
      summary: 'Sibilant frost whispers, thorned beauty, and chilling autumn mists. Fits gloaming courtiers, barrow dryads, winter hags, and shadow fae.',
      starts: ['Bri', 'Cind', 'Gloom', 'Mor', 'Nyx', 'Rime', 'Shad', 'Thorn', 'Vex', 'Yew'],
      middles: ['alor', 'elis', 'ianis', 'olyn', 'ulva', 'yris'],
      endings: ['a', 'cinder', 'frost', 'gloom', 'is', 'shade'],
      genderEndings: {
        male: ['frost', 'gloom', 'or', 'shade'],
        female: ['a', 'ianis', 'is', 'yris'],
        neutral: ['cinder', 'is', 'shade', 'yn']
      },
      familyNames: ['Cold Thistle', 'Midnight Willow', 'Iron Briar', 'Frost Feather', 'Black Thorn', 'Pale Weave', 'Grave Dew', 'Raven Cry'],
      flavors: [
        'A sharp, cold whisper of a name that carries the bite of early frost.',
        'An eerie, beautiful title fit for an autumn court diplomat.',
        'A shadowy cadence suited to a fae who barters in forgotten memories.'
      ],
      examples: ['Brialor', 'Cinderis', 'Gloomis', 'Morelis', 'Nyxyris', 'Rimefrost', 'Shadolyn', 'Thornyris', 'Vexis', 'Yewulva']
    }
  ],
  pronunciation: [
    { name: 'Aelanira', guide: 'ay-eh-lah-NEER-ah', note: 'A light, musical roll that rises toward the third syllable.' },
    { name: 'Celilune', guide: 'seh-lee-LOON', note: 'Smooth and breathy, like moonlight reflecting on still water.' },
    { name: 'Pipkin', guide: 'PIP-kin', note: 'Two cheerful, crisp beats with a playful terminal stop.' },
    { name: 'Nyxyris', guide: 'nik-SEER-is', note: 'A sibilant whisper with an icy, lingering finish.' },
    { name: 'Gloomis', guide: 'GLOOM-is', note: 'Heavy and atmospheric, evoking dark barrows beneath ancient pines.' }
  ],
  tableTips: [
    'When roleplaying a fairy or fae NPC, embrace their unique relationship with rules and hospitality. Fae characters adhere fiercely to etiquette, gift exchanges, and sacred oaths while gleefully ignoring mortal laws of property or geography. A sprite offering their name as a gift might expect a memory or a polished button in equal trade.',
    'Highlight sudden emotional shifts in your character vocal delivery. Fae emotions can shift from bubbly laughter to razor-sharp menace in a single sentence. Delivering a name like Bramblekin with cheerful giggles before transitioning to a stone-faced stare reminds players that fae folk are ancient, otherworldly beings.',
    'Incorporate sensory flavor into your character aura. A Seelie luminary might carry the scent of sun-warmed lavender and cause nearby candles to flicker gold, while an Unseelie courtier might bring a chill breeze that turns dew into rime on the party shields.'
  ],
  faq: [
    { question: 'What is the significance of true names for fairies?', answer: 'In tabletop lore, sharing a true name gives others magical leverage over a fae creature. As a result, fairies frequently use aliases, flower names, or situational nicknames.' },
    { question: 'Can these names be used for player characters?', answer: 'Yes. These names work seamlessly for 5e fairies, eladrin, satyrs, warlocks with Archfey patrons, and circle of dreams druids.' },
    { question: 'What is the difference between Seelie and Unseelie styles?', answer: 'Seelie names celebrate summer blooms, golden light, and melodious chimes, while Unseelie names evoke autumn frost, shadow thorns, and nocturnal mystery.' },
    { question: 'Can I generate full titles and court designations?', answer: 'Yes. Enabling the full name feature produces whimsical court designations, seasonal titles, and nature-based lineage identifiers.' }
  ],
  relatedRaces: ['elf-name-generator', 'gnome-name-generator', 'halfling-name-generator', 'tiefling-name-generator'],
  relatedUtilities: ['character-name-generator', 'world-name-generator']
};

export default profile;
