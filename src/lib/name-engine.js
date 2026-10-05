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
