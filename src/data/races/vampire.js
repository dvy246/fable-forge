const profile = {
  slug: 'vampire-name-generator',
  label: 'Vampire',
  keyword: 'vampire name generator',
  title: 'Vampire Name Generator: Gothic & Coven Names',
  description: 'Vampire name generator for gothic nobles, nightwalker covens, and ancient bloodlines. Generate ten names, select sound styles, and save campaign favorites.',
  intro: [
    'This vampire name generator creates atmospheric names for gothic counts, nocturnal aristocrats, rogue blood hunters, and ancient planar predators. Explore three distinctive styles ranging from classical Victorian nobility to shadowed nightwalker covens and antique Roman bloodlines.',
    'Every syllable set and sample title is an original creation designed for DnD Arena. They evoke the dark romanticism, velvet menace, and eternal chill of the undead without recycling tired tropes or copyrighted setting lore.'
  ],
  construction: [
    'Undead aristocrats often preserve linguistic patterns from long-dead empires, maintaining archaic pronunciations that feel slightly out of time with contemporary mortals. A vampire lord might speak with the measured cadence of an imperial court that fell five centuries ago, deliberately using antique grammar and velvet consonants to emphasize their ancient lineage and superior social standing.',
    'The three registers on this page reflect diverse eras of undead unlife. Gothic aristocrats draw upon Central European and late Victorian traditions, pairing distinguished titles with dignified consonant clusters and crisp patronymics. Shadow covens favor nocturnal sibilants, whispered liquids, and predatory breath sounds that blend seamlessly with night winds and secret crypt societies. Ancient bloodlines reach back to classical antiquity, using Latinate and Hellenic roots that recall pre-cataclysmic empires.',
    'When choosing a vampire moniker, decide whether the character operates openly as a lord or hides within mortal society under a modern pseudonym. Many vampires adopt brief, ordinary given names for casual mortal encounters while reserving their grand ancestral titles for private coven gatherings and grand masquerades.'
  ],
  styles: [
    {
      id: 'gothic-aristocracy',
      label: 'Gothic aristocracy',
      summary: 'Dignified Central European stops, formal patronymics, and Victorian elegance. Fits manor lords, castle rulers, formal duelists, and masquerade hosts.',
      starts: ['Cas', 'Dra', 'Kon', 'Mal', 'Rad', 'Stav', 'Val', 'Vlad', 'Von', 'Wil'],
      middles: ['elav', 'imir', 'islav', 'omir', 'ovan', 'usla'],
      endings: ['escu', 'ic', 'in', 'islav', 'off', 'ov'],
      genderEndings: {
        male: ['islav', 'imir', 'ov', 'escu'],
        female: ['a', 'ina', 'eva', 'iska'],
        neutral: ['ic', 'in', 'off', 'or']
      },
      familyNames: ['Von Draken', 'Black Rose', 'Night Raven', 'Von Cinder', 'Winter Throne', 'Pale Manor', 'Gilded Chalice', 'Cold Hearth'],
      flavors: [
        'A formal, aristocratic title that carries the chill of mountain castles.',
        'A distinguished noble moniker fit for an eternal masquerade.',
        'A commanding cadence worthy of a gothic provincial ruler.'
      ],
      examples: ['Casimir', 'Draisla', 'Konomir', 'Malovan', 'Radislav', 'Stavin', 'Valescu', 'Vladislav', 'Vonoff', 'Wilimir']
    },
    {
      id: 'nightwalker-coven',
      label: 'Nightwalker covens',
      summary: 'Whispering sibilants, nocturnal liquids, and predatory velvet sounds. Fits rogue stalkers, crypt assassins, shadow adepts, and nocturnal sorceresses.',
      starts: ['Carm', 'Eve', 'Lil', 'Mor', 'Nyx', 'Sil', 'Umbil', 'Vesp', 'Xan', 'Zil'],
      middles: ['anna', 'essa', 'gante', 'iella', 'ira', 'olyn'],
      endings: ['a', 'elle', 'ia', 'is', 'ora', 'yn'],
      genderEndings: {
        male: ['is', 'or', 'yn', 'el'],
        female: ['a', 'elle', 'ia', 'ora'],
        neutral: ['is', 'yn', 'en', 'ar']
      },
      familyNames: ['Night Velvet', 'Moon Veil', 'Grave Lily', 'Blood Thorn', 'Shadow Mist', 'Silent Fang', 'Silver Weep', 'Dusk Singer'],
      flavors: [
        'A seductive whisper of a name that feels soft and dangerous.',
        'A sleek, predatory moniker for a rooftop hunter in foggy alleys.',
        'A shadowed cadence suited to a secretive coven priestess.'
      ],
      examples: ['Carmelle', 'Eveira', 'Liliella', 'Morgante', 'Nyxora', 'Silanna', 'Umbilissa', 'Vespis', 'Xanolyn', 'Zilanna']
    },
    {
      id: 'ancient-bloodline',
      label: 'Imperial bloodlines',
      summary: 'Archaic classical roots, dignified Latinate endings, and monumental dignity. Fits elder vampires, ancient founders, and timeless planar rulers.',
      starts: ['Aur', 'Aug', 'Cass', 'Cor', 'Jul', 'Mar', 'Oct', 'Sev', 'Tib', 'Val'],
      middles: ['ellio', 'erian', 'illia', 'inian', 'onius', 'urian'],
      endings: ['an', 'ia', 'ian', 'ius', 'or', 'us'],
      genderEndings: {
        male: ['ius', 'or', 'us', 'ian'],
        female: ['a', 'ia', 'illa', 'ina'],
        neutral: ['an', 'ar', 'en', 'or']
      },
      familyNames: ['Aethelgard', 'Sovereign Core', 'First Pillar', 'Golden Urn', 'Iron Laurel', 'Sun Sunder', 'Eternal Gate', 'True Lineage'],
      flavors: [
        'An imposing archaic title carved from classical marble and bronze.',
        'A monumental name belonging to an ancient empire founder.',
        'A dignified, timeless cadence that commands absolute reverence.'
      ],
      examples: ['Aurelius', 'Augustus', 'Cassian', 'Coronius', 'Julian', 'Marian', 'Octavius', 'Severus', 'Tiberius', 'Valerian']
    }
  ],
  pronunciation: [
    { name: 'Vladislav', guide: 'VLAH-dee-slahv', note: 'Emphasize the brisk first syllable with a crisp concluding v.' },
    { name: 'Morgante', guide: 'mor-GAHN-teh', note: 'A soft, breathy terminal syllable that trails into silence.' },
    { name: 'Aurelius', guide: 'ow-RAY-lee-oos', note: 'Three sustained classical syllables with dignified vowel resonance.' },
    { name: 'Carmelle', guide: 'kar-MEL', note: 'A smooth, French-gothic cadence that stops cleanly.' },
    { name: 'Stavin', guide: 'STAH-vin', note: 'Sharp opening sibilant leading into a dark, guttural center beat.' }
  ],
  tableTips: [
    'When running a vampire antagonist, emphasize their voice as a hypnotic instrument. A centuries-old vampire does not yell in anger; they speak with calm, chilling stillness. Have the character pause mid-sentence to sip wine or gaze at an antique portrait, forcing the players to hang on every syllable.',
    'Incorporate the character date of turning into their mannerisms and vocabulary. A vampire turned during the renaissance might carry archaic vocabulary regarding astronomy, anatomy, and court etiquette, while one turned in antiquity might refer to modern kingdoms as transient squatter colonies.',
    'Use name aliases for intrigue. When the party visits an isolated mountain village, introduce the local philanthropist as Lord Casimir, only for the party to discover in an old dusty chapel ledger that a Lord Casimir with the exact same portrait signed the town founding charter three centuries ago.'
  ],
  faq: [
    { question: 'Do vampires change their names after being turned?', answer: 'Many vampires retain their mortal names out of aristocratic pride, while others adopt nocturnal pseudonyms, symbolic virtue titles, or ancient coven monikers to sever ties with their mortal past.' },
    { question: 'Can these names be used for dhampirs and vampire spawn?', answer: 'Yes. Dhampir player characters and subordinate spawn frequently carry regional gothic names, balancing their undead heritage with mortal ancestry.' },
    { question: 'What styles work best for Ravenloft or Curse of Strahd campaigns?', answer: 'The gothic aristocracy and nightwalker coven styles fit the misty valleys, gothic manors, and dark fantasy aesthetics of Barovia and the domains of dread.' },
    { question: 'Can I export a list of vampire names for my campaign?', answer: 'Yes. You can star and save names into your browser storage, then download them as a plain text file directly from the generator interface.' }
  ],
  relatedRaces: ['drow-name-generator', 'tiefling-name-generator', 'elf-name-generator', 'human-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator']
};

export default profile;
