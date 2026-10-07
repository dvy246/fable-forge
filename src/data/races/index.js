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
import kobold from './kobold.js';
import dragon from './dragon.js';
import avatar from './avatar.js';
import demon from './demon.js';
import vampire from './vampire.js';
import fairy from './fairy.js';
import githyanki from './githyanki.js';
import aasimar from './aasimar.js';
import goliath from './goliath.js';
import tabaxi from './tabaxi.js';
import wizard from './wizard.js';
import sorcerer from './sorcerer.js';
import druid from './druid.js';
import paladin from './paladin.js';
import warlock from './warlock.js';
import rogue from './rogue.js';
import bard from './bard.js';
import cleric from './cleric.js';
import barbarian from './barbarian.js';
import ranger from './ranger.js';
import fighter from './fighter.js';
import monk from './monk.js';
import artificer from './artificer.js';
import warforged from './warforged.js';
import genasi from './genasi.js';
import firbolg from './firbolg.js';
import kenku from './kenku.js';
import changeling from './changeling.js';
import lizardfolk from './lizardfolk.js';

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
  kobold,
  dragon,
  avatar,
  demon,
  vampire,
  fairy,
  githyanki,
  aasimar,
  goliath,
  tabaxi,
  wizard,
  sorcerer,
  druid,
  paladin,
  warlock,
  rogue,
  bard,
  cleric,
  barbarian,
  ranger,
  fighter,
  monk,
  artificer,
  warforged,
  genasi,
  firbolg,
  kenku,
  changeling,
  lizardfolk,
];

export const raceBySlug = new Map(raceProfiles.map((profile) => [profile.slug, profile]));
