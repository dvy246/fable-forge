const pick = (items, seed, salt = 0) => {
  const index = Math.abs(Math.floor(seed * 9301 + 49297 + salt * 233)) % items.length;
  return items[index];
};

const syllableCount = {
  short: 1,
  medium: 2,
  long: 3,
};
const nameLengthLimit = {
  short: 12,
  medium: 16,
  long: 20,
};
const boundaryClusters = new Set([
  'bl', 'br', 'ch', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'kh', 'kr', 'll', 'lm', 'mb', 'mp', 'nd', 'ng', 'nk', 'nn', 'ns', 'nt',
  'ph', 'pl', 'pr', 'rd', 'rg', 'rh', 'rk', 'rl', 'rm', 'rn', 'rr', 'rs', 'rt', 'rv', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'ss', 'st',
  'sw', 'th', 'tr', 'tt', 'vr', 'wh', 'zh',
]);

function joinSyllables(parts) {
  return parts.reduce((name, part) => {
    if (!name) return part;
    const trailing = name.match(/[bcdfghjklmnpqrstvwxz]+$/i)?.[0] ?? '';
    const leading = part.match(/^[bcdfghjklmnpqrstvwxz]+/i)?.[0] ?? '';
    const boundary = `${trailing}${leading}`.toLocaleLowerCase();
    const separator = trailing && leading && (boundary.length > 2 || !boundaryClusters.has(`${trailing.at(-1)}${leading[0]}`.toLocaleLowerCase())) ? 'e' : '';
    return `${name}${separator}${part}`;
  }, '');
}

function selectedStyle(profile, styleId, seed) {
  return profile.styles.find((style) => style.id === styleId) ?? pick(profile.styles, seed, 3);
}

export function buildRaceName(profile, options, seed) {
  const style = selectedStyle(profile, options.style, seed);
  const syllables = [pick(style.starts, seed, 1)];
  const count = syllableCount[options.length];

  for (let index = 0; index < count - 1; index += 1) {
    syllables.push(pick(style.middles, seed, index + 2));
  }

  syllables.push(pick(style.genderEndings[options.gender].length ? style.genderEndings[options.gender] : style.endings, seed, 5));
  let name = joinSyllables(syllables);
  while (name.length > nameLengthLimit[options.length] && syllables.length > 2) {
    syllables.splice(syllables.length - 2, 1);
    name = joinSyllables(syllables);
  }
  name = name.charAt(0).toLocaleUpperCase() + name.slice(1);

  if (options.fullName) {
    name += ` ${pick(style.familyNames, seed, 7)}`;
  }

  return {
    name,
    flavor: pick(style.flavors, seed, 9),
  };
}

export function buildSurname(profile, styleId, seed) {
  const style = selectedStyle(profile, styleId, seed);
  return {
    name: pick(style.familyNames, seed, 11),
    flavor: `A ${style.label.toLocaleLowerCase()} family name with room for a clan, house, or old promise.`,
  };
}

export function buildUtilityResult(toolType, profile, options, seed) {
  const root = buildRaceName(profile, { ...options, fullName: false }, seed).name;

  if (toolType === 'town') {
    const palettes = {
      harbor: { starts: ['Anchor', 'Blue', 'Brine', 'Candle', 'Dawn', 'East', 'Salt', 'Silver'], endings: [' quay', 'watch', 'mere', 'crossing', 'market', 'rest', 'bridge', 'reach'], flavor: 'A town shaped by arrivals, trade, and the waterline.' },
      highland: { starts: ['Ash', 'Bell', 'Cinder', 'Fox', 'Moss', 'North', 'Rain', 'Thorn'], endings: [' hill', 'hollow', 'field', 'ford', 'well', 'ridge', 'stead', 'gate'], flavor: 'A settlement with a hill-road or farmstead cadence.' },
      woodland: { starts: ['Alder', 'Birch', 'Fern', 'Hazel', 'Juniper', 'Lark', 'Rowan', 'Willow'], endings: ['grove', 'fen', 'mere', 'bloom', 'wood', 'rest', 'brook', 'shade'], flavor: 'A place-name drawn from paths, trees, and clearings.' },
    };
    const palette = palettes[options.placeStyle] ?? palettes.harbor;
    return { name: `${pick(palette.starts, seed, 13)}${pick(palette.endings, seed, 14)}`, flavor: palette.flavor };
  }

  if (toolType === 'tavern') {
    const palettes = {
      cozy: { moods: ['Kindly', 'Golden', 'Warm', 'Merry', 'Patient', 'Honeyed', 'Quiet', 'Hearthside'], objects: ['Kettle', 'Apple', 'Blue Door', 'Copper Cup', 'Wool Blanket', 'Baking Stone', 'Mossy Window', 'Last Candle'], flavor: 'A welcoming room with a place near the hearth.' },
      crossroads: { moods: ['Wandering', 'Restless', 'Open', 'Far', 'Wayward', 'Northbound', 'Rainy', 'Early'], objects: ['Lantern', 'Milepost', 'Fox', 'Traveling Bell', 'Roadside Star', 'Packhorse', 'Bridge', 'Market Cart'], flavor: 'A stop where travelers trade news as often as coin.' },
      candlelit: { moods: ['Hidden', 'Moonlit', 'Crooked', 'Silver', 'Whispering', 'Velvet', 'Dusk', 'Midnight'], objects: ['Mask', 'Quiet Bell', 'Blue Heron', 'Sleeping Hart', 'Paper Moon', 'Glass Key', 'Blackbird', 'Old Map'], flavor: 'A memorable name for a room with one small mystery.' },
    };
    const palette = palettes[options.placeStyle] ?? palettes.cozy;
    return { name: `The ${pick(palette.moods, seed, 15)} ${pick(palette.objects, seed, 16)}`, flavor: palette.flavor };
  }

  if (toolType === 'party') {
    const palettes = {
      bold: { first: ['Ashbound', 'Brass', 'Cinder', 'Copper', 'Dawnward', 'Iron', 'Northroad', 'Silver'], second: ['Company', 'Oath', 'Wardens', 'Circle', 'Vanguard', 'Keepers', 'Compass', 'Crew'], flavor: 'A confident name for a group ready to be remembered.' },
      hopeful: { first: ['Bright', 'Far Lantern', 'First Light', 'Open Road', 'Kindred', 'New Dawn', 'Small Star', 'Wayfinding'], second: ['Company', 'Covenant', 'Travelers', 'Circle', 'Promise', 'Guides', 'Friends', 'Wanderers'], flavor: 'A name that sounds like a promise made together.' },
      wry: { first: ['Almost Famous', 'Last Minute', 'Mostly Harmless', 'Oddly Prepared', 'Spare Map', 'Three Left Boots', 'Unpaid', 'Wrong Turn'], second: ['Company', 'Experts', 'Plan', 'Collective', 'Professionals', 'Companions', 'Committee', 'Crew'], flavor: 'A light name for a group that laughs at its own plans.' },
    };
    const palette = palettes[options.placeStyle] ?? palettes.bold;
    return { name: `${pick(palette.first, seed, 17)} ${pick(palette.second, seed, 18)}`, flavor: palette.flavor };
  }

  if (toolType === 'kingdom') {
    const palettes = {
      ancient: {
        prefixes: ['High', 'Grand', 'Old', 'Solar', 'Golden', 'Archon', 'Crown', 'Sovereign'],
        roots: ['Valoria', 'Eldoria', 'Sunspire', 'Aethelgard', 'Ilyria', 'Moravia', 'Corinth', 'Oakhaven'],
        suffixes: ['Dominion', 'Empire', 'Kingdom', 'Realm', 'Dynasty', 'Throne', 'Reach', 'Crown'],
        flavor: 'An ancient dynasty marked by long lineages and monumental stone.',
      },
      verdant: {
        prefixes: ['Emerald', 'Green', 'Wild', 'Ever', 'River', 'Summer', 'Briar', 'Deep'],
        roots: ['Sylvanor', 'Oakhaven', 'Elmsreach', 'Thornvale', 'Willowmere', 'Verdantia', 'Mistwood', 'Arboria'],
        suffixes: ['Realm', 'March', 'Kingdom', 'Dominion', 'Canopy', 'Bower', 'Reach', 'Hold'],
        flavor: 'A verdant realm intertwined with deep forests and fertile riverlands.',
      },
      iron: {
        prefixes: ['Iron', 'Black', 'Steel', 'Stone', 'Frost', 'Drakon', 'Grim', 'Anvil'],
        roots: ['Kragmoor', 'Ironspire', 'Drakengard', 'Barrowhold', 'Grimpeak', 'Cindergard', 'Vandor', 'Stoneglen'],
        suffixes: ['Imperium', 'Dominion', 'Throne', 'March', 'Bastion', 'Bulwark', 'Empire', 'Sovereignty'],
        flavor: 'An iron imperium forged in mountain passes, discipline, and fortified citadels.',
      },
    };
    const palette = palettes[options.placeStyle] ?? palettes.ancient;
    const format = Math.abs(Math.floor(seed * 31 + 7)) % 3;
    let name;
    if (format === 0) {
      name = `${pick(palette.roots, seed, 22)} ${pick(palette.suffixes, seed, 23)}`;
    } else if (format === 1) {
      name = `The ${pick(palette.suffixes, seed, 24)} of ${pick(palette.roots, seed, 25)}`;
    } else {
      name = `The ${pick(palette.prefixes, seed, 26)} ${pick(palette.suffixes, seed, 27)} of ${pick(palette.roots, seed, 28)}`;
    }
    return { name, flavor: palette.flavor };
  }

  if (toolType === 'world') {
    const palettes = {
      mythic: {
        prefixes: ['Prime', 'Eternal', 'Genesis', 'Old', 'First', 'Golden', 'Arcane', 'Boundless'],
        roots: ['Aethelgard', 'Elysia', 'Solaria', 'Mythoria', 'Valeron', 'Aurelia', 'Chronos', 'Pangaea'],
        suffixes: ['Prime', 'Sphere', 'Expanse', 'Realm', 'Firmament', 'Cosmos', 'Dominion', 'Haven'],
        flavor: 'A mythic realm of ancient gods, legendary ages, and heroic destinies.',
      },
      elemental: {
        prefixes: ['Cinder', 'Torrent', 'Aether', 'Abyssal', 'Storm', 'Terran', 'Frost', 'Radiant'],
        roots: ['Ignis', 'Aquaris', 'Zephyria', 'Geos', 'Pyra', 'Maelstrom', 'Glacies', 'Vortex'],
        suffixes: ['Sphere', 'Maelstrom', 'Domain', 'Crucible', 'Vortex', 'Reach', 'Core', 'Depths'],
        flavor: 'An elemental sphere dominated by raw primordial forces and shifting energies.',
      },
      astral: {
        prefixes: ['Astral', 'Cosmic', 'Starlight', 'Void', 'Nebular', 'Infinite', 'Celestial', 'Lunar'],
        roots: ['Astraea', 'Vespera', 'Lunaria', 'Aethel', 'Celestia', 'Noctis', 'Stellaria', 'Orion'],
        suffixes: ['Expanse', 'Void', 'Firmament', 'Sea', 'Horizon', 'Weave', 'Drift', 'Tide'],
        flavor: 'An astral expanse where silver currents drift between planar islands.',
      },
    };
    const palette = palettes[options.placeStyle] ?? palettes.mythic;
    const format = Math.abs(Math.floor(seed * 29 + 11)) % 3;
    let name;
    if (format === 0) {
      name = `${pick(palette.roots, seed, 31)} ${pick(palette.suffixes, seed, 32)}`;
    } else if (format === 1) {
      name = `The ${pick(palette.prefixes, seed, 33)} ${pick(palette.suffixes, seed, 34)} of ${pick(palette.roots, seed, 35)}`;
    } else {
      name = `The ${pick(palette.suffixes, seed, 36)} of ${pick(palette.roots, seed, 37)}`;
    }
    return { name, flavor: palette.flavor };
  }

  if (toolType === 'ship') {
    const palettes = {
      galleon: {
        prefixes: ['Sea', 'Storm', 'Wave', 'Ocean', 'Fortune', 'Tide', 'Iron', 'Salt'],
        nouns: ['Hound', 'Daughter', 'Venture', 'Serpent', 'Wanderer', 'Fortune', 'Revenge', 'Pearl'],
        flavor: 'A weathered galleon or privateer vessel that commands the open trade routes.',
      },
      astral: {
        prefixes: ['Star', 'Astral', 'Silver', 'Cosmic', 'Solar', 'Void', 'Nebular', 'Aether'],
        nouns: ['Skiff', 'Drifter', 'Ray', 'Comet', 'Sailor', 'Wind', 'Arrow', 'Crown'],
        flavor: 'A luminous spelljammer skiff skimming ethereal currents between planar spheres.',
      },
      ghost: {
        prefixes: ['Dusk', 'Pale', 'Shadow', 'Silent', 'Night', 'Grave', 'Wraith', 'Cursed'],
        nouns: ['Banshee', 'Specter', 'Mariner', 'Omen', 'Mist', 'Gull', 'Tide', 'Haunt'],
        flavor: 'An eerie, phantom vessel emerging from sea fog with blackened timber and glowing lanterns.',
      },
    };
    const palette = palettes[options.placeStyle] ?? palettes.galleon;
    const format = Math.abs(Math.floor(seed * 37 + 5)) % 3;
    let name;
    if (format === 0) {
      name = `The ${pick(palette.prefixes, seed, 41)} ${pick(palette.nouns, seed, 42)}`;
    } else if (format === 1) {
      name = `${pick(palette.prefixes, seed, 43)}'s ${pick(palette.nouns, seed, 44)}`;
    } else {
      name = `The ${pick(palette.nouns, seed, 45)} of the ${pick(palette.prefixes, seed, 46)}`;
    }
    return { name, flavor: palette.flavor };
  }

  if (toolType === 'villain') {
    const palettes = {
      overlord: {
        prefixes: ['Dread', 'Iron', 'Malor', 'Vrak', 'Bane', 'Gore', 'Grim', 'Void', 'Khor', 'Rav'],
        roots: ['kor', 'gath', 'mora', 'than', 'vash', 'drak', 'kan', 'zar', 'vorn', 'rak'],
        titles: ['the Cruel', 'Iron Hand', 'the Defiler', 'Blood Sovereign', 'the Merciless', 'Bone Carver', 'the Dire', 'Void Lord'],
        flavor: 'An imposing warlord or conqueror who subjugates kingdoms through raw force.',
      },
      lich: {
        prefixes: ['Mor', 'Necro', 'Nyx', 'Mal', 'Vile', 'Grave', 'Zul', 'Ruin', 'Dusk', 'Xan'],
        roots: ['thas', 'vorn', 'azar', 'lith', 'mora', 'zel', 'khal', 'orim', 'rakis', 'dal'],
        titles: ['the Undying', 'Soul Eater', 'Grave Lord', 'the Eternal', 'Bone Binder', 'Dusk Walker', 'the Silent', 'Void Seer'],
        flavor: 'An immortal spellcaster whose arcane studies conquered death itself.',
      },
      tyrant: {
        prefixes: ['Baron', 'Lord', 'Duke', 'Judge', 'Czar', 'Sire', 'Bane', 'Iron'],
        roots: ['vane', 'kane', 'morel', 'gale', 'valen', 'corin', 'taven', 'rakor'],
        titles: ['the Vain', 'Gold Talon', 'the Bitter', 'Coin Master', 'the Hollow', 'Iron Smile', 'the Cold', 'Pale Regent'],
        flavor: 'A corrupt noble or shadow ruler who manipulates court politics and syndicates.',
      },
    };
    const palette = palettes[options.placeStyle] ?? palettes.overlord;
    const format = Math.abs(Math.floor(seed * 41 + 7)) % 2;
    let name;
    if (format === 0) {
      name = `${pick(palette.prefixes, seed, 51)}${pick(palette.roots, seed, 52)} ${pick(palette.titles, seed, 53)}`;
    } else {
      name = `${pick(palette.prefixes, seed, 54)} ${pick(palette.titles, seed, 56)}`;
    }
    return { name, flavor: palette.flavor };
  }

  if (toolType === 'guild') {
    const palettes = {
      thieves: {
        prefixes: ['Shadow', 'Silent', 'Dusk', 'Grave', 'Dagger', 'Cloak', 'Black', 'Raven'],
        nouns: ['Blades', 'Knives', 'Hoods', 'Ravens', 'Vipers', 'Claws', 'Rogues', 'Shadows'],
        titles: ['Syndicate', 'Guild', 'Fraternity', 'Brotherhood', 'Ring', 'Coven', 'Compact', 'League'],
        flavor: 'A secretive criminal brotherhood operating through rooftop alleys and backrooms.',
      },
      arcane: {
        prefixes: ['Silver', 'Solar', 'Aether', 'Golden', 'Arcane', 'Mystic', 'Cosmic', 'Sunbeam'],
        nouns: ['Spire', 'Tome', 'Synod', 'Sages', 'Runes', 'Weavers', 'Flames', 'Visions'],
        titles: ['Academy', 'Order', 'Synod', 'College', 'Society', 'Union', 'Alliance', 'Cabal'],
        flavor: 'A prestigious scholarly guild dedicated to arcane research and magical craft.',
      },
      merchant: {
        prefixes: ['Golden', 'Iron', 'Ocean', 'Amber', 'Ruby', 'Silver', 'Crown', 'Gilded'],
        nouns: ['Coin', 'Compass', 'Caravan', 'Harbor', 'Scales', 'Flotilla', 'Haven', 'Venture'],
        titles: ['Company', 'League', 'Cartel', 'Syndicate', 'Consortium', 'Market', 'Guild', 'Pact'],
        flavor: 'A wealthy mercantile league controlling sea lanes, spice routes, and bank loans.',
      },
    };
    const palette = palettes[options.placeStyle] ?? palettes.thieves;
    const format = Math.abs(Math.floor(seed * 43 + 3)) % 2;
    let name;
    if (format === 0) {
      name = `The ${pick(palette.prefixes, seed, 61)} ${pick(palette.nouns, seed, 62)} ${pick(palette.titles, seed, 63)}`;
    } else {
      name = `The ${pick(palette.nouns, seed, 64)} of the ${pick(palette.prefixes, seed, 65)}`;
    }
    return { name, flavor: palette.flavor };
  }

  if (toolType === 'deity') {
    const palettes = {
      pantheon: {
        prefixes: ['Sol', 'Aethel', 'Oron', 'Balar', 'Kael', 'Theron', 'Vala', 'Zoran'],
        roots: ['dor', 'mar', 'us', 'ian', 'on', 'ar', 'iel', 'or'],
        titles: ['Lord of Dawn', 'the Creator', 'All Father', 'Sun Sovereign', 'the Eternal', 'Sky Ruler', 'Golden Judge', 'High King'],
        flavor: 'A primary creation deity revered across grand temple cathedrals and city capitals.',
      },
      trickster: {
        prefixes: ['Loki', 'Fey', 'Raza', 'Miri', 'Jox', 'Kip', 'Zul', 'Vex'],
        roots: ['an', 'iel', 'is', 'on', 'or', 'in', 'ar', 'ik'],
        titles: ['the Laughing', 'Moon Fox', 'Shadow Weaver', 'the Unseen', 'Coin Spinner', 'Fey Prince', 'the Errant', 'Silver Jester'],
        flavor: 'An elusive, unpredictable god of fortune, laughter, crossroad tests, and illusions.',
      },
      nether: {
        prefixes: ['Mor', 'Nyx', 'Vor', 'Than', 'Hades', 'Zul', 'Khor', 'Dusk'],
        roots: ['gath', 'ath', 'on', 'or', 'ax', 'is', 'orim', 'ar'],
        titles: ['Grave Keeper', 'the Silent', 'Lord of Shades', 'Void King', 'the Reaper', 'Dusk Sovereign', 'Pale Judge', 'Bone Warden'],
        flavor: 'A solemn ruler of subterranean halls, departing souls, and silent tombs.',
      },
    };
    const palette = palettes[options.placeStyle] ?? palettes.pantheon;
    const name = `${pick(palette.prefixes, seed, 71)}${pick(palette.roots, seed, 72)}, ${pick(palette.titles, seed, 73)}`;
    return { name, flavor: palette.flavor };
  }

  if (toolType === 'weapon') {
    const palettes = {
      blade: {
        prefixes: ['Sun', 'Dawn', 'Star', 'Silver', 'Iron', 'Radiant', 'Golden', 'Valiant'],
        nouns: ['Blade', 'Saber', 'Edge', 'Reaver', 'Fang', 'Cleaver', 'Spur', 'Razor'],
        suffixes: ['of Dawn', 'of Steel', 'of Honor', 'of Sol', 'of Glory', 'of Valor', 'of the Sun', 'of Justice'],
        flavor: 'A masterwork relic blade forged by ancient smiths to slay monsters and tyrants.',
      },
      curse: {
        prefixes: ['Dread', 'Grave', 'Void', 'Soul', 'Shadow', 'Pale', 'Bile', 'Ruin'],
        nouns: ['Dagger', 'Spike', 'Shard', 'Fang', 'Bane', 'Gouge', 'Sting', 'Barb'],
        suffixes: ['of Agony', 'of Spite', 'of Ruin', 'of Graves', 'of Sorrow', 'of Curses', 'of Despair', 'of Woe'],
        flavor: 'A sinister blade that whispers dark urges into the mind of whoever carries it.',
      },
      divine: {
        prefixes: ['Holy', 'Solar', 'Sacred', 'Noble', 'Pure', 'Celestial', 'Aura', 'Seraph'],
        nouns: ['Hammer', 'Mace', 'Spear', 'Halberd', 'Flail', 'Pike', 'Baton', 'Staff'],
        suffixes: ['of Grace', 'of Angels', 'of Truth', 'of Purity', 'of Peace', 'of the Sky', 'of Mercy', 'of Devotion'],
        flavor: 'A consecrated armament blessed in temple fires to vanquish fiends and the undead.',
      },
    };
    const palette = palettes[options.placeStyle] ?? palettes.blade;
    const format = Math.abs(Math.floor(seed * 47 + 1)) % 2;
    let name;
    if (format === 0) {
      name = `${pick(palette.prefixes, seed, 81)} ${pick(palette.nouns, seed, 82)}`;
    } else {
      name = `The ${pick(palette.nouns, seed, 83)} ${pick(palette.suffixes, seed, 84)}`;
    }
    return { name, flavor: palette.flavor };
  }

  if (toolType === 'island') {
    const palettes = {
      pirate: {
        prefixes: ['Cutlass', 'Raider', 'Dead Man', 'Black', 'Corsair', 'Shark', 'Reef', 'Rum'],
        nouns: ['Cove', 'Cay', 'Haven', 'Shoal', 'Isle', 'Point', 'Harbor', 'Inlet'],
        suffixes: ['Bay', 'Isle', 'Reef', 'Spit', 'Key', 'Haven', 'Rock', 'Point'],
        flavor: 'A lawless hideout sheltered behind jagged rocks and treacherous breakers.',
      },
      mist: {
        prefixes: ['Pale', 'Ghost', 'Wraith', 'Silent', 'Dusk', 'Fog', 'Shadow', 'Lost'],
        nouns: ['Atoll', 'Isle', 'Refuge', 'Shoal', 'Reef', 'Spire', 'Rock', 'Bar'],
        suffixes: ['of Tears', 'of Haze', 'of Spirits', 'of Sorrows', 'of Shadows', 'of Silence', 'of Echoes', 'of Phantoms'],
        flavor: 'A desolate island cloaked in eternal sea fog where old shipwrecks rot in silence.',
      },
      coral: {
        prefixes: ['Emerald', 'Golden', 'Azure', 'Sunlit', 'Coral', 'Cerulean', 'Beryl', 'Opal'],
        nouns: ['Atoll', 'Lagoon', 'Isles', 'Reef', 'Cay', 'Shoal', 'Haven', 'Key'],
        suffixes: ['of Pines', 'of Gems', 'of Sun', 'of Waves', 'of Tides', 'of Shores', 'of Azure', 'of Breeze'],
        flavor: 'A vibrant coral reef and lagoon teeming with warm winds and clear blue waters.',
      },
    };
    const palette = palettes[options.placeStyle] ?? palettes.pirate;
    const format = Math.abs(Math.floor(seed * 53 + 9)) % 2;
    let name;
    if (format === 0) {
      name = `${pick(palette.prefixes, seed, 91)} ${pick(palette.suffixes, seed, 92)}`;
    } else {
      name = `${pick(palette.nouns, seed, 93)} ${pick(palette.suffixes, seed, 94)}`;
    }
    return { name, flavor: palette.flavor };
  }

  const traits = ['keeps careful promises', 'collects maps with missing corners', 'never turns down a shared meal', 'speaks softly in a crisis', 'remembers every debt', 'asks one question too many', 'knows the old roads', 'laughs before the punchline', 'is always mending something', 'never gives the same answer twice'];
  const quirks = ['labels every key', 'counts steps when nervous', 'keeps a pocket full of string', 'hums the wrong tune', 'writes with a green pencil', 'names each travel cup', 'arrives with a spare button', 'folds notes into tiny boats', 'carries a smooth stone', 'polishes an already clean buckle'];
  const hooks = ['has a letter that was never opened', 'is looking for a missing cartographer', 'owes a favor to a quiet stranger', 'heard a familiar name in a distant port', 'found a mark on an old door', 'needs help choosing a new home', 'is guarding a small but urgent secret', 'offers a map with one blank road', 'is waiting for a traveler who is late', 'knows where a lost bell was last heard'];
  return {
    name: root,
    flavor: `Trait: ${pick(traits, seed, 19)}. Quirk: ${pick(quirks, seed, 20)}. Hook: ${pick(hooks, seed, 21)}.`,
  };
}

export function asGeneratorProfile(profile) {
  return {
    slug: profile.slug,
    label: profile.label,
    styles: profile.styles.map(({ id, label, starts, middles, endings, genderEndings, familyNames, flavors }) => ({
      id,
      label,
      starts,
      middles,
      endings,
      genderEndings,
      familyNames,
      flavors,
    })),
  };
}

export function makeSampleResults(profile, options, count = 12) {
  return Array.from({ length: count }, (_, index) => buildRaceName(profile, options, index + 1.13));
}

export function isGeneratedResult(value) {
  return typeof value === 'object' && value !== null && 'name' in value && 'flavor' in value &&
    typeof value.name === 'string' && typeof value.flavor === 'string';
}
