import dragonborn from './dragonborn.js';
import drow from './drow.js';
import dwarf from './dwarf.js';
import elf from './elf.js';
import goblin from './goblin.js';
import gnome from './gnome.js';
import halfElf from './half-elf.js';
import halfOrc from './half-orc.js';
import halfling from './halfling.js';
import human from './human.js';
import orc from './orc.js';
import tiefling from './tiefling.js';

export const raceProfiles = [
  elf,
  drow,
  dragonborn,
  orc,
  halfling,
  gnome,
  goblin,
  halfElf,
  tiefling,
  halfOrc,
  dwarf,
  human,
];

export const raceBySlug = new Map(raceProfiles.map((profile) => [profile.slug, profile]));
