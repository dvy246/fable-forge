const profile = {
  slug: 'paladin-name-generator',
  label: 'Paladin',
  keyword: 'paladin name generator',
  title: 'Paladin Name Generator: Holy Vows & Sacred Orders',
  description: 'Paladin name generator for oath knights, holy champions, and sacred crusaders. Roll ten noble names, pick sacred oath styles, and save campaign favorites.',
  intro: [
    'This paladin name generator creates solemn, valiant names for holy oath champions, righteous avengers, and ancient green knights.',
    'Whether your character is an anointed knight serving a sun cathedral or a grim crusader bound by a vow of vengeance, generate names worthy of sacred glory.'
  ],
  construction: [
    'Paladin naming conventions interlace chivalric honor, sacred oath oaths, and military martial prowess. Most paladins carry an anointed first name paired with a martial epithet, a patron saint title, or an honorable chivalric house name. When taking sacred vows upon an altar, many crusaders adopt a sacred vow title that defines their lifelong mission in the mortal realms.',
    'The three registers provided on this page reflect core sacred tenets. Devotion paragons and holy champions feature dignified, chivalric syllables with classical endings like -iel, -ian, and -or that echo radiant dawn temples and stained glass halls. Vengeance crusaders and grim inquisitors command sharp, striking consonant boundaries and severe phonemes like Grim-, Brand-, and -vorn that carry the weight of an unforgiving mandate. Ancients wardens and green knights wield verdant, sylvan roots combined with martial titles, invoking sacred groves and unyielding verdant bastions.',
    'Paladin surnames frequently represent solemn virtues or legendary deeds: Sun Blade, Dawn Shield, Iron Vow, Bright Shield, True Heart, or Shadow Bane. These titles command instant respect among common folk and announce the paladin sacred mantle.'
  ],
  styles: [
    {
      id: 'oath-devotion',
      label: 'Devotion and radiant dawn',
      summary: 'Dignified chivalric cadences, radiant light vowels, and temple honor. Fits Oath of Devotion, sun champions, and cathedral knights.',
      starts: ['Aura', 'Bell', 'Clar', 'Dawn', 'Gali', 'Just', 'Luci', 'Radi', 'Sola', 'Vali'],
      middles: ['ador', 'akar', 'elios', 'irian', 'orian', 'ulion'],
      endings: ['an', 'ar', 'el', 'ian', 'or', 'us'],
      genderEndings: {
        male: ['or', 'us', 'ian', 'an'],
        female: ['a', 'el', 'ia', 'ina'],
        neutral: ['an', 'ar', 'el', 'ian']
      },
      familyNames: ['Dawn Shield', 'Bright Blade', 'Sun Mantle', 'True Heart', 'Silver Crest', 'Holy Light', 'Gold Helm', 'Radiant Dawn'],
      flavors: [
        'A noble, chivalric name that resounds with honor and radiant glory.',
        'A holy champion moniker suited to a knight sworn to defend the innocent.',
        'A radiant title that carries the light of dawn against ancient darkness.'
      ],
      examples: ['Aurael', 'Bellador', 'Claror', 'Dawnus', 'Galian', 'Justian', 'Lucielios', 'Radirian', 'Solaorian', 'Valiulion']
    },
    {
      id: 'oath-vengeance',
      label: 'Vengeance and grim justice',
      summary: 'Sharp striking percussives, severe mandates, and unrelenting judgment. Fits Oath of Vengeance, inquisitors, and blackguard slayers.',
      starts: ['Bane', 'Brand', 'Dire', 'Grim', 'Iron', 'Mal', 'Mor', 'Scorn', 'Steel', 'Vow'],
      middles: ['akor', 'athis', 'okan', 'orim', 'urrak', 'yris'],
      endings: ['ak', 'ar', 'ik', 'on', 'or', 'us'],
      genderEndings: {
        male: ['or', 'on', 'us', 'ak'],
        female: ['a', 'ia', 'is', 'athis'],
        neutral: ['ak', 'ar', 'ik', 'on']
      },
      familyNames: ['Iron Vow', 'Shadow Bane', 'Grim Brand', 'Blood Shield', 'Cold Steel', 'Dark Judgement', 'Severing Blade', 'Night Wrath'],
      flavors: [
        'A stern, uncompromising name that carries the weight of a blood vow.',
        'A grim inquisitor title that strikes fear into oath breakers.',
        'A severe martial moniker sworn to hunt wicked fiends to the grave.'
      ],
      examples: ['Baneor', 'Brandak', 'Direon', 'Grimathis', 'Ironus', 'Malorim', 'Morakor', 'Scornik', 'Steelokan', 'Vowyris']
    },
    {
      id: 'oath-ancients',
      label: 'Ancients and green wardens',
      summary: 'Verdant bastions, ancient oak resilience, and primal sylvan light. Fits Oath of the Ancients, fey wardens, and green knights.',
      starts: ['Bram', 'Briar', 'Clover', 'Green', 'Grove', 'Oak', 'Rowan', 'Sylvan', 'Thorn', 'Verd'],
      middles: ['ados', 'alor', 'elios', 'irian', 'olum', 'osina'],
      endings: ['a', 'an', 'el', 'in', 'on', 'or'],
      genderEndings: {
        male: ['on', 'or', 'an', 'alor'],
        female: ['a', 'el', 'ia', 'osina'],
        neutral: ['an', 'el', 'in', 'on']
      },
      familyNames: ['Green Shield', 'Oak Heart', 'Verdant Vow', 'Briar Blade', 'Ancient Branch', 'Sylvan Horn', 'Wild Mantle', 'Sun Grove'],
      flavors: [
        'A verdant knightly title rooted in ancient fey forests and elder vows.',
        'A resilient green warden name that shields the light of the living world.',
        'A noble champion moniker blessed by elder spirits of the grove.'
      ],
      examples: ['Bramon', 'Briaran', 'Cloverel', 'Groveados', 'Greenalor', 'Oakin', 'Rowanelios', 'Sylvanolum', 'Thornosina', 'Verdor']
    }
  ],
  pronunciation: [
    { name: 'Bellador', guide: 'BEL-lah-dohr', note: 'Resonant chivalric cadence with formal balance.' }
    ,
    { name: 'Justian', guide: 'JOOS-tee-an', note: 'Clear, upright meter with noble Latinate weight.' },
    { name: 'Grimathis', guide: 'grim-AH-this', note: 'Stern opening beat leading into an unrelenting finish.' },
    { name: 'Brandak', guide: 'BRAN-dahk', note: 'Sharp striking martial impact with sudden stop.' },
    { name: 'Verdor', guide: 'VAIR-dohr', note: 'Rich verdant cadence echoing ancient grove oath halls.' }
  ],
  tableTips: [
    'Choose an oath emblem to accompany your paladin name at the gaming table. A devotion knight named Bellador might bear an emblazoned silver chalice, while Brandak carries a jagged iron dagger etched with vengeance runes.',
    'Portray the moral weight of your sacred vow in everyday conversations. Paladins are defined by their uncompromising promises, which should be reflected in their titles and pledges.',
    'Deliver smite declarations and holy prayers with deliberate solemnity during combat encounters. Pairing your knight moniker with formal oaths enhances party immersion.'
  ],
  faq: [
    { question: 'What makes paladin names unique?', answer: 'Paladin names balance chivalric martial prestige with sacred vows, holy virtues, and patron deities.' },
    { question: 'Do paladins take on new names upon swearing their oath?', answer: 'Yes. Many paladins adopt sacred epithets or virtue titles upon kneeling before the altar to take their sacred vows.' },
    { question: 'Can these names be used for clerics and fighters?', answer: 'Yes. The devotion, vengeance, and ancient styles work naturally for holy clerics, crusader fighters, and zealots across tabletop settings.' },
    { question: 'Can I save and export my paladin names?', answer: 'Yes. Use the star icon on any result card to store names in your browser and export them as a clean text file.' }
  ],
  relatedRaces: ['human-name-generator', 'dwarf-name-generator', 'aasimar-name-generator', 'dragonborn-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator', 'party-name-generator']
};

export default profile;
