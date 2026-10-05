import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(projectRoot, 'dist');
const configuredSite = process.env.PUBLIC_SITE_URL?.trim();

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  }));
  return files.flat();
}

function extractMeta(html, name) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = html.match(new RegExp(`<meta\\s+name=["']${escapedName}["']\\s+content=["']([^"']*)["']`, 'i'));
  return match?.[1] ?? '';
}

function escapeXml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

await fs.mkdir(distRoot, { recursive: true });
const robotsLines = ['User-agent: *', 'Allow: /'];

if (!configuredSite) {
  await fs.rm(path.join(distRoot, 'sitemap.xml'), { force: true });
  await fs.writeFile(path.join(distRoot, 'robots.txt'), `${robotsLines.join('\n')}\n`);
  console.log('Generated robots.txt; sitemap.xml omitted because PUBLIC_SITE_URL is unset.');
  process.exit(0);
}

const siteUrl = new URL(configuredSite);
if (siteUrl.protocol !== 'https:') {
  throw new Error('PUBLIC_SITE_URL must use HTTPS before canonical URLs or a sitemap can be generated.');
}
const origin = siteUrl.origin;
const htmlFiles = (await walk(distRoot)).filter((file) => file.endsWith('.html'));
const urls = [];

for (const file of htmlFiles) {
  const html = await fs.readFile(file, 'utf8');
  if (extractMeta(html, 'robots').toLowerCase().includes('noindex')) continue;
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1];
  if (!canonical) throw new Error(`Indexable page is missing a canonical: ${file}`);
  if (!canonical.startsWith(`${origin}/`)) throw new Error(`Canonical is outside PUBLIC_SITE_URL: ${canonical}`);
  urls.push(canonical);
}

const uniqueUrls = [...new Set(urls)].sort();
if (uniqueUrls.length !== urls.length) throw new Error('Duplicate canonical URLs found while generating the sitemap.');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueUrls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n')}\n</urlset>\n`;
robotsLines.push(`Sitemap: ${origin}/sitemap.xml`);
await fs.writeFile(path.join(distRoot, 'sitemap.xml'), sitemap);
await fs.writeFile(path.join(distRoot, 'robots.txt'), `${robotsLines.join('\n')}\n`);
console.log(`Generated sitemap.xml with ${uniqueUrls.length} indexable page URLs and robots.txt.`);
