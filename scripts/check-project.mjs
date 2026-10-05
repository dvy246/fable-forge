import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(projectRoot, 'src');
const allowedExtensions = new Set(['.astro', '.js', '.css']);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  }));
  return nested.flat();
}

const sourceFiles = await walk(sourceRoot);
const unsupportedFiles = sourceFiles.filter((file) => !allowedExtensions.has(path.extname(file)));

if (unsupportedFiles.length) {
  console.error('Unsupported website source files found:');
  for (const file of unsupportedFiles) console.error(`- ${path.relative(projectRoot, file)}`);
  process.exit(1);
}

const javascriptFiles = sourceFiles.filter((file) => path.extname(file) === '.js');
for (const file of javascriptFiles) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

const astroFiles = sourceFiles.filter((file) => path.extname(file) === '.astro').length;
const cssFiles = sourceFiles.filter((file) => path.extname(file) === '.css').length;
console.log(`Project check passed: ${astroFiles} Astro files, ${javascriptFiles.length} JavaScript files, ${cssFiles} CSS files, no TypeScript sources.`);
