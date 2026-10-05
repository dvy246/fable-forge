import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const raceDirectory = path.join(projectRoot, 'src/data/races');
const sourcePattern = /[bcdfghjklmnpqrstvwxz]{3,}/i;
const maximumLength = { short: 12, medium: 16, long: 20 };
const errors = [];
const raceFiles = (await fs.readdir(raceDirectory)).filter((file) => file.endsWith('.js') && file !== 'index.js');
const { asGeneratorProfile, buildRaceName } = await import(pathToFileURL(path.join(projectRoot, 'src/lib/name-engine.js')));
const profiles = await Promise.all(raceFiles.map(async (file) => (await import(pathToFileURL(path.join(raceDirectory, file)))).default));
let checkedNames = 0;

for (const profile of profiles) {
  for (const style of profile.styles) {
    for (const part of [...style.starts, ...style.middles, ...style.endings, ...style.genderEndings.male, ...style.genderEndings.female, ...style.genderEndings.neutral]) {
      if (sourcePattern.test(part)) errors.push(`${profile.slug}/${style.id}: syllable fragment "${part}" contains three consecutive consonants.`);
    }
    for (const example of style.examples) {
      if (sourcePattern.test(example)) errors.push(`${profile.slug}/${style.id}: sample name "${example}" contains three consecutive consonants.`);
    }
  }
  for (const note of profile.pronunciation) {
    if (sourcePattern.test(note.name)) errors.push(`${profile.slug}: pronunciation sample "${note.name}" contains three consecutive consonants.`);
  }

  const generatorProfile = asGeneratorProfile(profile);
  for (const style of generatorProfile.styles) {
    for (const gender of ['male', 'female', 'neutral']) {
      for (const length of ['short', 'medium', 'long']) {
        for (let seed = 0.13; seed < 800; seed += 1.17) {
          const result = buildRaceName(generatorProfile, {
            race: profile.slug,
            style: style.id,
            placeStyle: 'harbor',
            gender,
            length,
            fullName: false,
          }, seed);
          checkedNames += 1;
          if (sourcePattern.test(result.name)) errors.push(`${profile.slug}/${style.id}: generated name "${result.name}" has an invalid consonant cluster.`);
          if (result.name.length > maximumLength[length]) errors.push(`${profile.slug}/${style.id}: ${length} name "${result.name}" exceeds ${maximumLength[length]} characters.`);
          if (errors.length > 25) break;
        }
        if (errors.length > 25) break;
      }
      if (errors.length > 25) break;
    }
    if (errors.length > 25) break;
  }
}

if (errors.length > 0) {
  console.error(`Name-engine validation failed with ${errors.length} violation${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors.slice(0, 25)) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Name-engine validation passed: ${profiles.length} race tables, ${checkedNames.toLocaleString()} generated names, no consonant triplets, and length caps respected.`);
}
