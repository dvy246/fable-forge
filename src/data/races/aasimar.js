const profile = {
  slug: 'aasimar-name-generator',
  label: 'Aasimar',
  keyword: 'aasimar name generator',
  title: 'Aasimar Name Generator: Celestial & Radiant Names',
  description: 'Aasimar name generator for celestial guides, solar paragons, and fallen outcasts. Roll ten radiant names, pick divine styles, and save campaign favorites.',
  intro: [
    'This aasimar name generator creates luminous names for celestial emissaries, radiant paladins, serene spirit guides, and somber fallen outcasts.',
    'Whether your character was blessed by a solar archon, guided by a guardian deva, or carries the burden of an eclipsed destiny, generate names that echo with divine resonance.'
  ],
  construction: [
    'Aasimar naming conventions blend terrestrial human traditions with the harmonic linguistics of Mount Celestia and Elysium. Celestial syllables favor soaring open vowels, liquid consonants like L and R, and sacred angelic suffixes such as -iel, -ael, and -on. In tabletop lore, an aasimar may be given a common mortal birth name by human parents, only to receive a secret celestial true name during their first visionary communion with a divine guide.',
    'The three registers on this page reflect the diverse spiritual callings of celestial scions. Solar emissaries carry ringing, brass-bright vowels that invoke dawn light, holy fire, and unyielding justice. Radiant guides utilize softer, flowing cadences that suggest healing sanctuaries, compassionate counsel, and tranquil silver sanctuaries. Fallen outcasts feature shadowed, melancholic consonants that reflect severed planar ties, eclipsed wings, and private redemption quests.',
    'For family names and epithets, aasimar often adopt titles that honor their angelic heritage, moral virtues, or celestial manifestations. Surnames like Dawn Weaver, Sun Pillar, Silver Gaze, or Light Bearer distinguish an aasimar hero during grand diplomatic assemblies and temple ceremonies.'
  ],
  styles: [
    {
      id: 'solar-emissary',
      label: 'Solar emissaries',
      summary: 'Resonant brass vowels, golden stops, and triumphant cadences. Fits devotion paladins, radiant zealots, and solar archon heralds.',
      starts: ['Aur', 'Cel', 'Dawn', 'Elys', 'Hel', 'Lu', 'Oph', 'Rad', 'Sol', 'Val'],
      middles: ['ador', 'elios', 'iel', 'oniel', 'osina', 'ulion'],
      endings: ['ael', 'iel', 'ion', 'or', 'os', 'us'],
      genderEndings: {
        male: ['ion', 'or', 'os', 'us'],
        female: ['a', 'ael', 'ia', 'iel'],
        neutral: ['ael', 'el', 'on', 'iel']
      },
      familyNames: ['Sun Pillar', 'Dawn Sovereign', 'Golden Halo', 'Radiant Spear', 'Light Bearer', 'Solar Crest', 'True Flame', 'Holy Spire'],
      flavors: [
        'A ringing, golden name that echoes like a sacred temple bell.',
        'A triumphant celestial title worthy of a holy solar knight.',
        'A commanding name radiant with the fire of the upper planes.'
      ],
      examples: ['Aurador', 'Celelios', 'Dawniel', 'Elysiel', 'Heloniel', 'Luosina', 'Ophador', 'Radiel', 'Solion', 'Valus']
    },
    {
      id: 'radiant-guide',
      label: 'Radiant guides',
      summary: 'Gentle silver harmonics, lyrical angelic suffixes, and serene beauty. Fits life clerics, celestial warlocks, and peaceful healers.',
      starts: ['Ari', 'Cas', 'Gav', 'Lir', 'Miri', 'Nath', 'Rapha', 'Ser', 'Tir', 'Uri'],
      middles: ['ael', 'anira', 'elith', 'iana', 'ilune', 'oliel'],
      endings: ['a', 'el', 'ia', 'iel', 'on', 'yn'],
      genderEndings: {
        male: ['el', 'iel', 'on', 'yn'],
        female: ['a', 'ia', 'iel', 'yn'],
        neutral: ['el', 'iel', 'is', 'yn']
      },
      familyNames: ['Silver Grace', 'Clear Mercy', 'Healing Light', 'Star Veil', 'Gentle Ray', 'Pure Well', 'Peace Weaver', 'Dawn Singer'],
      flavors: [
        'A tranquil, flowing name that carries the soothing warmth of dawn.',
        'A lyrical angelic moniker suited to a healer or spiritual protector.',
        'A serene cadence that reminds listeners of starlight on still water.'
      ],
      examples: ['Ariael', 'Casanira', 'Gavelith', 'Liriana', 'Mirilune', 'Natholiel', 'Raphael', 'Seriel', 'Tiron', 'Uriyn']
    },
    {
      id: 'fallen-outcast',
      label: 'Fallen outcasts',
      summary: 'Somber stops, veiled vowels, and heavy resonance. Fits vengeful inquisitors, shadowed champions, and tragic antiheroes.',
      starts: ['Ash', 'Dusk', 'Gloom', 'Mor', 'Nyx', 'Ruin', 'Shad', 'Vex', 'Woe', 'Zor'],
      middles: ['akor', 'elis', 'ithor', 'olum', 'yris', 'zoth'],
      endings: ['ar', 'el', 'is', 'on', 'or', 'us'],
      genderEndings: {
        male: ['ar', 'on', 'or', 'us'],
        female: ['a', 'elis', 'is', 'ia'],
        neutral: ['ar', 'el', 'is', 'on']
      },
      familyNames: ['Black Feather', 'Eclipsed Sun', 'Grave Halo', 'Pale Crown', 'Cursed Light', 'Dusk Walker', 'Iron Tear', 'Lost Star'],
      flavors: [
        'A somber, shadowed name that hints at a shattered celestial heritage.',
        'A brooding cadence suited to a champion whose halo has dimmed.',
        'A melancholic title born from sacrifice, exile, or broken promises.'
      ],
      examples: ['Ashakor', 'Duskelis', 'Gloomis', 'Morithor', 'Nyxolum', 'Ruinis', 'Shadyris', 'Vexzoth', 'Woeon', 'Zorus']
    }
  ],
  pronunciation: [
    { name: 'Aurador', guide: 'ow-RAH-dohr', note: 'Resonant, open vowel cadence that rings like polished brass.' },
    { name: 'Dawniel', guide: 'DAWN-ee-el', note: 'Smooth transition from the morning noun to the gentle angelic suffix.' },
    { name: 'Gavelith', guide: 'GAH-veh-lith', note: 'Soft, lyrical rise in the center with a breathy terminal stop.' },
    { name: 'Raphael', guide: 'RAH-fah-el', note: 'Classic angelic cadence delivered with clear, balanced stress.' },
    { name: 'Duskelis', guide: 'DUHSK-eh-lis', note: 'Quiet, atmospheric syllables that trail off into a sibilant whisper.' }
  ],
  tableTips: [
    'Decide how your aasimar celestial guide communicates with them. A guide might speak in dreams through recurring symbols, brief musical chords, or telepathic urges. Connecting your character name to this guide vision deepens roleplay immersion.',
    'Highlight the contrast between your mortal disguise and divine transformation. When an aasimar activates Radiant Soul or Necrotic Shroud, describe how their voice takes on a choral echo or shadowy rasp that makes their spoken name shake the room.',
    'Use titles to show personal growth across levels. A level one hero might introduce themselves simply as Gavelith, but by level ten they may have earned the epithet Gavelith the Dawn Shield after defending a besieged mountain sanctuary.'
  ],
  faq: [
    { question: 'What makes aasimar names different from tiefling names?', answer: 'Aasimar names favor open, harmonic vowels and angelic celestial suffixes (-iel, -ael), whereas tiefling names introduce sharp sibilants, dramatic contrast, and virtuous chosen words.' },
    { question: 'Do aasimar have both mortal and celestial names?', answer: 'Yes. Many aasimar receive an ordinary human or regional birth name from their mortal family and discover their true celestial name during divine communions.' },
    { question: 'Can these names be used for fallen aasimar characters?', answer: 'Yes. The fallen outcast style provides darker, somber syllables and eclipsed family titles perfect for antiheroes and renegade champions.' },
    { question: 'Are these names safe to use in published campaigns?', answer: 'Yes. All syllable tables and examples are completely original fantasy material created for DnD Arena and free to use in your tabletop adventures.' }
  ],
  relatedRaces: ['tiefling-name-generator', 'elf-name-generator', 'human-name-generator', 'dragonborn-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator', 'party-name-generator']
};

export default profile;
