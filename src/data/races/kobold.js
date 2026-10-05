const profile = {
  slug: 'kobold-name-generator',
  label: 'Kobold',
  keyword: 'kobold name generator',
  title: 'Kobold Name Generator: Sharp Warren and Clutch Names',
  description: 'Create original kobold names with the kobold name generator. Choose sharp warren sounds, proud clutch names, and short syllables for your next 5e session.',
  intro: [
    'This kobold name generator creates original fantasy names built from sharp consonants, quick clicks, and proud draconic echoes. Tailor your search by style and length to find fitting names for trappers, miners, sorcerers, and clutch leaders.',
    'Every syllable set and sample is original to DnD Arena, ensuring your kobolds sound authentic at the table without copying directly from rulebooks or existing campaign settings.'
  ],
  construction: [
    'Kobold names are characterized by short, percussive consonants, rapid glottal stops, and bright, piercing vowels. Because warren corridors echo every footstep and chisel strike, names must cut clearly through stone dust and ambient chatter. Syllables tend to be compact and economical, rarely wasting breath on unnecessary ornamentation.',
    'The three styles represent distinct traditions within kobold society: warren scuttlers who value utility and rapid warning calls, proud draconic clutches who emulate the haughty cadence of chromatic dragons, and trap-gear tinkerers whose names mimic the rhythmic clicks and snaps of mechanical mechanisms. Each register offers a unique rhythm while maintaining phonetic clarity.',
    'Clutch names and family identifiers often draw upon physical features, celebrated traps, or clan accomplishments. Whether an individual uses a single sharp moniker among diggers or announces their full draconic lineage before a grand dragon wyrm, their name reflects both communal pride and personal craft.'
  ],
  styles: [
    {
      id: 'warren',
      label: 'Warren scuttlers',
      summary: 'Sharp clicks, sudden stops, and chattering vowels give these names a quick tunnel rhythm. They suit diggers, scout-trappers, and sentries who whistle warnings through hollow stone.',
      starts: ['Brik', 'Dak', 'Gek', 'Kip', 'Mak', 'Nik', 'Rik', 'Snik', 'Tak', 'Zik'],
      middles: ['akki', 'etti', 'ikra', 'okki', 'uruk', 'ekka'],
      endings: ['ik', 'ak', 'ok', 'it', 'ek', 'ip'],
      genderEndings: {
        male: ['ik', 'ak', 'or', 'uk'],
        female: ['i', 'a', 'iki', 'ari'],
        neutral: ['en', 'ek', 'it', 'ok']
      },
      familyNames: ['Sharp Pick', 'Tripwire', 'Loose Stone', 'Quick Chisel', 'Dark Tunnel', 'Copper Shard', 'Bone Whistle', 'Low Ceiling'],
      flavors: [
        'A sharp, chattering name for a tunnel scout.',
        'A quick click of a name that echoes off cavern walls.',
        'A brisk rhythm fit for a trapsmith who works in dark rock.'
      ],
      examples: ['Brikak', 'Daketti', 'Gekik', 'Kipok', 'Makakki', 'Nikuri', 'Rikit', 'Snikor', 'Takip', 'Zikek']
    },
    {
      id: 'draconic',
      label: 'Draconic clutch',
      summary: 'Sibilant hisses, rolled vowels, and haughty draconic titles give these names a grand cadence. They fit scale-sorcerers, clutch heralds, and kobolds who claim descent from ancient wyrms.',
      starts: ['Drax', 'Kaz', 'Kriv', 'Rax', 'Sark', 'Vaz', 'Zar', 'Zol', 'Krax', 'Rix'],
      middles: ['arax', 'elis', 'ivan', 'orin', 'ozar', 'ulan'],
      endings: ['ash', 'ar', 'ix', 'or', 'eth', 'ax'],
      genderEndings: {
        male: ['ar', 'or', 'eth', 'ash'],
        female: ['a', 'ia', 'ixa', 'ora'],
        neutral: ['ix', 'ax', 'en', 'is']
      },
      familyNames: ['Flamecrest', 'Ironscale', 'Goldspark', 'Wyrmbreath', 'Red Talon', 'Ashwing', 'Pyrespire', 'Sunscale'],
      flavors: [
        'A proud name invoking draconic heritage.',
        'A haughty sound that rings like coin in a dragon hoard.',
        'A scale-marked cadence fit for a small but fierce sorcerer.'
      ],
      examples: ['Draxar', 'Kazelis', 'Krivash', 'Raxix', 'Sarketh', 'Vazora', 'Zarorin', 'Zolax', 'Kraxen', 'Rixia']
    },
    {
      id: 'tinkerer',
      label: 'Trap-gear tinkerers',
      summary: 'Clicking teeth, metallic beats, and rattled endings give these names an inventive, bustling energy. They suit trap inventors, alchemists, lever-pullers, and lock-pickers.',
      starts: ['Clink', 'Grik', 'Jinx', 'Klak', 'Pik', 'Snark', 'Tik', 'Tock', 'Zik', 'Plink'],
      middles: ['abik', 'etti', 'obel', 'orin', 'ullik', 'even'],
      endings: ['ik', 'ak', 'et', 'op', 'en', 'it'],
      genderEndings: {
        male: ['ik', 'et', 'op', 'or'],
        female: ['a', 'ina', 'etta', 'i'],
        neutral: ['en', 'ak', 'it', 'el']
      },
      familyNames: ['Springcoil', 'Gearclick', 'Oilpot', 'Locktumbler', 'Rattlecage', 'Fusecord', 'Copperwire', 'Sparkshear'],
      flavors: [
        'A bustling name that rattles like a bag of clockwork gears.',
        'A snappy sound suited to a gadgeteer or lock-picker.',
        'An inventive cadence for someone who never leaves a trap disarmed.'
      ],
      examples: ['Clinket', 'Grikobel', 'Jinxina', 'Klaketti', 'Pikop', 'Snarkik', 'Tikullik', 'Tocken', 'Zikit', 'Plinkor']
    }
  ],
  pronunciation: [
    { name: 'Brikak', guide: 'BREEK-ahk', note: 'Two crisp beats with a sharp final stop.' },
    { name: 'Draxar', guide: 'DRAH-ksahr', note: 'The x carries a sibilant hiss into the final syllable.' },
    { name: 'Klaketti', guide: 'klah-KEH-tee', note: 'Stress the middle beat with an even rhythm.' },
    { name: 'Zolax', guide: 'ZOH-lahks', note: 'A proud opening vowel followed by a clipped finish.' },
    { name: 'Tikullik', guide: 'tee-KOO-leek', note: 'Keep the double l crisp without rushing the vowels.' }
  ],
  tableTips: [
    'When introducing a kobold NPC at the gaming table, establish their practical role in the warren before leaning into eccentric mannerisms. A tunnel sentry might test the cavern ceiling with a pole, an alchemist might meticulously check bottle seals for leaks, and a clutch tender might guard unhatched eggs with fierce loyalty. Grounding the character with an immediate, tangible task gives players an authentic reason to interact with them.',
    'Use name lengths deliberately during roleplay. In the middle of an ambush or cave-in, kobolds rely on sharp, single-beat calls like Kip or Tak to relay orders instantly. When addressing respected elders, spellcasters, or visiting adventurers, they may expand their titles to include proud clutch surnames or crafted honors. This distinction highlights the shift between emergency survival and social hierarchy.',
    'If your party encounters a whole pack or clutch of kobolds, distribute distinct vocal pitches and speech speeds across the group. A trapsmith might speak in rapid, clipped bursts while nervously tapping tools together, whereas a scale-sorcerer might adopt slow, exaggerated draconic sibilance. Repeating a shared clutch moniker across related NPCs immediately signals their clan allegiance without requiring lengthy exposition.'
  ],
  faq: [
    { question: 'Do kobold names have gender distinctions?', answer: 'Kobold names often share similar roots across genders, though draconic-influenced names may use softer vowel finishes for females and harsher consonant stops for males.' },
    { question: 'Can I add a clutch or trap name to my character?', answer: 'Yes. Enabling the full name option generates clutch and craft names, which can represent a family lineage, a mining guild, or a famous trap invention.' },
    { question: 'Are these names suitable for player characters and NPCs?', answer: 'Yes. The generator produces names suitable for 5e player characters, dungeon denizens, guides, rogues, artificers, and sorcerers alike.' },
    { question: 'How do kobolds earn nicknames or titles?', answer: 'Kobolds frequently earn titles through notable dungeon deeds, such as surviving a cave-in, inventing a deadly latch trap, or discovering a rich mineral vein.' }
  ],
  relatedRaces: ['dragonborn-name-generator', 'goblin-name-generator', 'gnome-name-generator'],
  relatedUtilities: ['npc-name-generator', 'character-name-generator']
};

export default profile;
