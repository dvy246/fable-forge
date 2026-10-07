const profile = {
  slug: 'druid-name-generator',
  label: 'Druid',
  keyword: 'druid name generator',
  title: 'Druid Name Generator: Nature & Wild Circle Names',
  description: 'Druid name generator for circle shapeshifters, grove wardens, and sylvan shamans. Roll ten primal names, pick nature styles, and save campaign favorites.',
  intro: [
    'This druid name generator creates primal, nature-attuned names for Circle of the Moon shapeshifters, ancient grove wardens, and swamp spore shamans.',
    'Whether your character is an elusive hermit sworn to protect old growth redwoods or a storm-calling sylvan mystic, roll authentic druidic titles for your tabletop adventure.'
  ],
  construction: [
    'Druid naming conventions spring directly from the primal rhythms of earth, river, fang, and foliage. Many druids discard the conventional town surnames of their childhood upon undertaking sacred rites of initiation in a sacred stone grove. In their place, initiates take on sylvan titles, animal totems, or compound nature epithets that announce their bonded biome and druidic circle.',
    'The three registers featured in this generator mirror key archetypes of druidic power. Moon shapeshifters and beast wardens carry rugged, predatory phonemes like Fang-, Claw-, and -gar that echo animal ferocity and wilderness resilience. Sylvan grove wardens favor soft rustling syllables, floral roots, and flowing vowels like -iel, -owen, and -luna that sound like wind whispering through birch branches. Spore, swamp, and deep earth shamans use earthy, fungal, and subterranean roots like Moss-, Root-, and -muck to invoke damp soil and ancient decomposition cycles.',
    'Compound surnames are common throughout druidic enclaves. Names such as Oak Heart, River Song, Bear Ward, Moss Walker, or Rain Caller ground characters in their bonded ecosystems and create immediate narrative texture for Dungeon Masters and players alike.'
  ],
  styles: [
    {
      id: 'circle-moon',
      label: 'Moon beasts and shapeshifters',
      summary: 'Predatory strikes, feral beast resilience, and nocturnal claws. Fits Circle of the Moon wild shapers, wolf shamans, and bear wardens.',
      starts: ['Bear', 'Fang', 'Grizz', 'Hawk', 'Hunt', 'Lup', 'Roar', 'Talon', 'Wolf', 'Claw'],
      middles: ['akor', 'athis', 'okan', 'orim', 'urrak', 'yris'],
      endings: ['ak', 'an', 'ar', 'is', 'on', 'or'],
      genderEndings: {
        male: ['or', 'on', 'ak', 'ar'],
        female: ['a', 'ia', 'is', 'athis'],
        neutral: ['an', 'ar', 'is', 'on']
      },
      familyNames: ['Bear Ward', 'Iron Claw', 'Moon Fang', 'Night Howl', 'Red Mane', 'Swift Paw', 'True Wolf', 'Wild Hunt'],
      flavors: [
        'A feral, predatory name that carries the primal growl of the wild pack.',
        'A rugged beast title suited to a druid who spends more days in fur than skin.',
        'A fierce shapeshifter moniker echoing deep wilderness survival.'
      ],
      examples: ['Bearon', 'Fangor', 'Grizzathis', 'Hawkan', 'Huntokan', 'Luporim', 'Roarak', 'Talonis', 'Wolfurrak', 'Wolfyris']
    },
    {
      id: 'sylvan-grove',
      label: 'Sylvan grove wardens',
      summary: 'Rustling leaves, soft breeze vowels, and floral grace. Fits Circle of the Land, forest guardians, and elven wardens.',
      starts: ['Alder', 'Breeze', 'Clover', 'Fern', 'Leaf', 'Meadow', 'Moss', 'Pine', 'Reed', 'Rowan'],
      middles: ['ados', 'alor', 'elios', 'irian', 'olum', 'osina'],
      endings: ['a', 'el', 'ia', 'iel', 'in', 'owen'],
      genderEndings: {
        male: ['el', 'in', 'owen', 'alor'],
        female: ['a', 'ia', 'iel', 'osina'],
        neutral: ['el', 'in', 'owen', 'olum']
      },
      familyNames: ['Green Leaf', 'Oak Heart', 'River Song', 'Silver Birch', 'Sylvan Song', 'Whispering Glen', 'Wild Bloom', 'Wood Ward'],
      flavors: [
        'A melodic sylvan name that sighs like wind through high canopy leaves.',
        'A gentle, peaceful title rooted in ancient woodland tranquility.',
        'A graceful nature moniker carrying the scent of wild elderflowers.'
      ],
      examples: ['Alderalor', 'Breezeel', 'Ferniel', 'Leafin', 'Meadowosina', 'Mossados', 'Pineowen', 'Reedirian', 'Rowana', 'Cloverolum']
    },
    {
      id: 'spore-deep',
      label: 'Spore shamans and deep earth',
      summary: 'Earthy humus cadences, damp fungal roots, and subterranean wisdom. Fits Circle of Spores, swamp shamans, and underdark hermits.',
      starts: ['Bog', 'Bram', 'Damp', 'Deep', 'Fen', 'Fung', 'Gloom', 'Mire', 'Mold', 'Peat'],
      middles: ['akos', 'elis', 'ithor', 'olan', 'unor', 'zoth'],
      endings: ['an', 'is', 'on', 'or', 'um', 'us'],
      genderEndings: {
        male: ['on', 'or', 'us', 'unor'],
        female: ['a', 'elis', 'is', 'um'],
        neutral: ['an', 'is', 'on', 'um']
      },
      familyNames: ['Black Root', 'Deep Mire', 'Fungal Bloom', 'Muck Walker', 'Pale Cap', 'Rot Singer', 'Silt Mire', 'Spore Veil'],
      flavors: [
        'A damp, resonant title that smells of rich loam and fresh rain on moss.',
        'An earthy shaman moniker grounded in the cycles of renewal and decay.',
        'A low, subterranean name suited to a hermit who communes with deep fungi.'
      ],
      examples: ['Bogolan', 'Bramon', 'Dampunor', 'Fenis', 'Fungum', 'Glooman', 'Mireakos', 'Moldus', 'Peatelis', 'Deepzoth']
    }
  ],
  pronunciation: [
    { name: 'Fangor', guide: 'FANG-ohr', note: 'Primal resonant bite with an open vocal release.' },
    { name: 'Wolfurrak', guide: 'WULF-oo-rahk', note: 'Deep guttural growl ending in a sharp predatory stop.' },
    { name: 'Ferniel', guide: 'FERN-ee-el', note: 'Gentle, sylvan cadence echoing woodland breezes.' },
    { name: 'Alderalor', guide: 'AWL-der-ah-lohr', note: 'Rhythmic flowing meter reminiscent of swaying river branches.' },
    { name: 'Bogolan', guide: 'BOH-goh-lahn', note: 'Low, earthy resonance evoking deep wetland waters.' }
  ],
  tableTips: [
    'Give your druid a signature totem or wild shape tell when roleplaying at the table. When Wolfurrak shifts into a dire wolf, golden eyes and distinctive white ear tips should carry over from their humanoid form.',
    'Weave seasonal transitions into your druid name: explain why your character took an autumn-themed moniker like Alder Leaf over a summer title during their initiation rites.',
    'Ground spells in ecological components rather than abstract gestures. Narrate how your druid gathers dried pollen, river-smoothed pebbles, and damp lichen to weave their primal magic.'
  ],
  faq: [
    { question: 'What makes druid names unique?', answer: 'Druid names draw directly from flora, fauna, natural phenomena, and sacred grove traditions rather than civil registries.' },
    { question: 'Do druids keep their birth family names?', answer: 'Many druids abandon birth surnames upon completing initiation rites, adopting nature titles or circle designations instead.' },
    { question: 'Can these names fit rangers and nature clerics?', answer: 'Yes. The styles work smoothly for rangers, nature domain clerics, barbarians, and sylvan scouts across fantasy systems.' },
    { question: 'Can I save and export my druid names?', answer: 'Yes. Click the favorite icon on any generated result to store titles locally and download them as a text file.' }
  ],
  relatedRaces: ['elf-name-generator', 'halfling-name-generator', 'fairy-name-generator', 'gnome-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator', 'fantasy-town-name-generator']
};

export default profile;
