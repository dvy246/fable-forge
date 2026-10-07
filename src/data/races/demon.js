const profile = {
  slug: 'demon-name-generator',
  label: 'Demon',
  keyword: 'demon name generator',
  title: 'Demon Name Generator: Abyssal & Fiend Names',
  description: 'Demon name generator for abyssal lords, horned fiends, and chaos entities. Create ten original names with three sinister styles and save favorites locally.',
  intro: [
    'This demon name generator creates sinister names for abyssal warlords, horned fiends, infernal tempters, and chaotic planar entities. Choose between rumbling abyssal titans, aristocratic fiends, and chaotic parasites to find the perfect title for your tabletop antagonist.',
    'All phonetics and sinister syllables are original creations developed for DnD Arena. They avoid direct copyright infringement from religious texts or proprietary rulebooks, delivering genuinely terrifying fiendish monikers for campaigns and dark fiction.'
  ],
  construction: [
    'Fiendish linguistics thrive on unsettling dissonance, harsh guttural glottals, and rolling sibilants that scrape against mortal ears. In tabletop mythologies, a demon name is not merely an introduction; it is a metaphysical binding formula. Knowing the true name of an abyssal monstrosity grants summoners dangerous leverage, while speaking that name aloud across planar thresholds risks drawing unwanted demonic attention.',
    'The three registers available on this page reflect the diverse hierarchy of the lower planes. Abyssal lords carry heavy, crushing plosives and rumbling guttural vowels that evoke volcanic pits, tectonic fissures, and bottomless chasm depths. Infernal aristocrats utilize deceptive velvet cadences, flowing consonants, and archaic classical suffixes designed to beguile mortals during soul contracts. Primal chaos entities speak in broken staccato clicks, hissing sibilants, and jagged syllables that defy mortal grammar.',
    'When designing a fiendish encounter, consider the distinction between a demon true name and their public mortal title. Lesser cultists rarely utter a demon true name for fear of instantaneous psychic backlash. Instead, they chant titles like the Horned Tyrant, the Rotting Feast, or the Prince of Broken Chains. Use these flavor lines alongside the generated names to give your bosses memorable presence.'
  ],
  styles: [
    {
      id: 'abyssal-lord',
      label: 'Abyssal warlords',
      summary: 'Heavy guttural stops, tectonic plosives, and rumbling chasm sounds. Fits towering balors, horned warlords, pit commanders, and abyssal conquerors.',
      starts: ['Az', 'Baph', 'Dagon', 'Gor', 'Krag', 'Mal', 'Mor', 'Nal', 'Raz', 'Zul'],
      middles: ['akor', 'athis', 'goroth', 'kragh', 'orim', 'urrak'],
      endings: ['ak', 'ar', 'gorgon', 'moth', 'or', 'oth'],
      genderEndings: {
        male: ['or', 'oth', 'moth', 'ur'],
        female: ['a', 'ia', 'gorgon', 'tira'],
        neutral: ['ak', 'ar', 'ath', 'orim']
      },
      familyNames: ['Of Red Pits', 'Iron Horn', 'Blood Drinker', 'Grave Sovereign', 'Chasm Maw', 'Skull Cleaver', 'Cinder Beast', 'Doom Bringer'],
      flavors: [
        'A crushing, volcanic name that shakes subterranean stone.',
        'A rumbling title worthy of a warlord in the infinite abyss.',
        'A brutal, guttural moniker that echoes over screaming battlefields.'
      ],
      examples: ['Azgoroth', 'Baphorim', 'Dagonathis', 'Gormoth', 'Kragurrak', 'Malakor', 'Morgorgon', 'Naloth', 'Razak', 'Zular']
    },
    {
      id: 'infernal-aristocrat',
      label: 'Infernal aristocrats',
      summary: 'Smooth velvet vowels, legalistic sibilants, and deceptive elegance. Fits pit diplomats, silver-tongued tempters, and archdevil courtiers.',
      starts: ['Bel', 'Cas', 'Luc', 'Mal', 'Mor', 'Phan', 'Sari', 'Val', 'Xap', 'Zep'],
      middles: ['ador', 'elios', 'irian', 'orian', 'osina', 'ulion'],
      endings: ['el', 'ial', 'iel', 'or', 'os', 'fegor'],
      genderEndings: {
        male: ['ial', 'or', 'os', 'fegor'],
        female: ['a', 'iel', 'ia', 'essa'],
        neutral: ['el', 'ian', 'os', 'ar']
      },
      familyNames: ['Black Quill', 'Contract Weaver', 'Silver Fang', 'Gilded Chain', 'Iron Scales', 'Cursed Coin', 'False Truth', 'Shadow Court'],
      flavors: [
        'A polished, alluring cadence with a hidden venomous bite.',
        'A courtly title suited to a broker of damnation.',
        'An elegant aristocratic name that rolls smoothly off the tongue.'
      ],
      examples: ['Belial', 'Casirian', 'Lucador', 'Malfegor', 'Morelios', 'Phanorian', 'Sariosina', 'Valulion', 'Xapiel', 'Zepos']
    },
    {
      id: 'primal-chaos',
      label: 'Chaos horrors',
      summary: 'Sibilant hisses, jarring staccato breaks, and bizarre vowel shifts. Fits creeping parasites, oozing fiends, and insectoid void horrors.',
      starts: ['Chit', 'Glik', 'Kraz', 'Nix', 'Krik', 'Vash', 'Xar', 'Yrr', 'Zik', 'Zul'],
      middles: ['akor', 'ethis', 'ikra', 'okki', 'uruk', 'zoth'],
      endings: ['ash', 'ax', 'ik', 'kraz', 'vash', 'yx'],
      genderEndings: {
        male: ['ik', 'kraz', 'vash', 'ax'],
        female: ['a', 'ia', 'yris', 'is'],
        neutral: ['ash', 'ax', 'yx', 'en']
      },
      familyNames: ['Flesh Swarm', 'Blight Swarm', 'Void Worm', 'Carrion Wing', 'Shattered Mind', 'Bone Singer', 'Rot Spore', 'Null Eye'],
      flavors: [
        'A jarring chattering title that sounds like scraping mandibles.',
        'A chaotic screech of a name that disorients mortal listeners.',
        'An erratic, creeping cadence suited to a parasitic fiend.'
      ],
      examples: ['Chitikra', 'Glikokki', 'Krazvash', 'Nixzoth', 'Krikax', 'Vashakor', 'Xarethis', 'Yrryx', 'Zikuruk', 'Zulik']
    }
  ],
  pronunciation: [
    { name: 'Azgoroth', guide: 'AHZ-goh-rawth', note: 'Drop the vocal pitch deeply into the chest for the final syllable.' },
    { name: 'Belial', guide: 'BEE-lee-uhl', note: 'Soft, seductive liquid vowels that conceal the ending menace.' },
    { name: 'Krazvash', guide: 'KRAHZ-vahsh', note: 'Deliver both syllables with harsh, guttural friction.' },
    { name: 'Malfegor', guide: 'MAHL-feh-gohr', note: 'A rolling noble cadence with a dark, commanding finish.' },
    { name: 'Krikax', guide: 'KREE-kahks', note: 'A piercing screech of an opening with a sharp terminal click.' }
  ],
  tableTips: [
    'When running a demonic villain, control the delivery of their name to build psychological tension. Have thralls, cult leaders, or corrupted nobles stammer and avoid speaking the name directly. When the entity finally manifests, let them announce their title in a slow, unnatural baritone that silences the gaming table.',
    'Give each demonic name a distinctive sensory symptom when spoken in game. Speaking an abyssal lord name might cause campfire flames to flare purple and emit sulfurous heat. An infernal aristocrat name might carry a scent of cold rosewater and old parchment, while a chaos horror name might cause silver coins to tarnish instantly.',
    'Utilize title stacking for high-level fiends. A lesser demon might simply be called Krazvash, but an archfiend demands a terrifying pedigree such as Azgoroth, Seventh Sovereign of the Ash Chasm and Render of Flesh. This informs your adventurers of the creature planar stature and history.'
  ],
  faq: [
    { question: 'What is the difference between demon and devil names?', answer: 'Demon names favor chaotic guttural stops, harsh plosives, and alien breaks, while devil names feature polished, courtly cadences and formal titles reflecting cosmic hierarchy.' },
    { question: 'Can these names be used for tiefling characters?', answer: 'Yes. Tieflings with strong abyssal or infernal ancestry often carry ancestral fiendish names or choose fiendish-sounding syllables to honor or reclaim their planar heritage.' },
    { question: 'Can I generate demonic cult titles and epithets?', answer: 'Yes. Enabling the full name toggle generates sinister epithets, domain titles, and planar affiliations for your villains.' },
    { question: 'Are these names safe from religious trademark controversies?', answer: 'Yes. All syllable tables are completely original fantasy constructions crafted for DnD Arena to avoid offending religious sensibilities while maintaining dark fantasy flavor.' }
  ],
  relatedRaces: ['tiefling-name-generator', 'orc-name-generator', 'drow-name-generator', 'dragonborn-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator']
};

export default profile;
