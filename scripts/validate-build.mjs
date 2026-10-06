import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(projectRoot, 'dist');
const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const contactEmail = process.env.PUBLIC_CONTACT_EMAIL?.trim();
const phaseTwoEnabled = process.env.PUBLIC_BUILD_PHASE_2 !== 'false';
const raceKeywords = {
  '/elf-name-generator/': 'elf name generator',
  '/drow-name-generator/': 'drow name generator',
  '/dragonborn-name-generator/': 'dragonborn name generator',
  '/orc-name-generator/': 'orc name generator',
  '/halfling-name-generator/': 'halfling name generator',
  '/gnome-name-generator/': 'gnome name generator',
  '/goblin-name-generator/': 'goblin name generator',
  '/half-elf-name-generator/': 'half elf name generator',
  '/tiefling-name-generator/': 'tiefling name generator',
  '/half-orc-name-generator/': 'half orc name generator',
  '/dwarf-name-generator/': 'dwarf name generator',
  '/human-name-generator/': 'human fantasy name generator',
  '/kobold-name-generator/': 'kobold name generator',
};
const utilityKeywords = {
  '/character-name-generator/': 'dnd character name generator',
  '/fantasy-town-name-generator/': 'fantasy town name generator',
  '/tavern-name-generator/': 'tavern name generator',
  '/party-name-generator/': 'dnd party name generator',
  '/npc-name-generator/': 'dnd npc name generator',
  '/last-name-generator/': 'dnd last name generator',
  '/kingdom-name-generator/': 'fantasy kingdom name generator',
  '/world-name-generator/': 'fantasy world name generator',
};
const blogKeywords = {
  '/blog/how-to-name-your-dnd-character/': 'how to name your dnd character',
  '/blog/best-elf-names-for-dnd-5e/': 'best elf names for dnd',
  '/blog/dwarf-clan-names-and-meanings/': 'dwarf clan names',
  '/blog/tiefling-naming-conventions-5e/': 'tiefling naming conventions',
  '/blog/fantasy-town-naming-guide/': 'how to name a fantasy town',
};
const blogPaths = ['/blog/', ...Object.keys(blogKeywords)];
const guideKeywords = {
  '/dnd-classes/': 'dnd classes',
};
const guidePaths = Object.keys(guideKeywords);
const trustPaths = ['/about/', '/how-names-are-generated/', '/privacy/', '/terms/', '/contact/'];
const errors = [];
const pageRecords = [];

function fail(message) {
  errors.push(message);
}

function decodeEntities(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&#x27;', "'")
    .replaceAll('&nbsp;', ' ');
}

function stripHtml(value) {
  return decodeEntities(value.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function attribute(html, name, attributeName) {
  const match = html.match(new RegExp(`<${name}\\b[^>]*\\b${attributeName}=["']([^"']*)["'][^>]*>`, 'i'));
  return match ? decodeEntities(match[1]) : '';
}

function pagePathFromFile(file) {
  const relative = path.relative(distRoot, file).split(path.sep).join('/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'index.html'.length)}`;
  if (relative === '404.html') return '/404/';
  return `/${relative}`;
}

function countMatches(value, expression) {
  return [...value.matchAll(expression)].length;
}

function jsonLdEntries(html, pagePath) {
  const blocks = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const entries = [];
  for (const [, raw] of blocks) {
    try {
      entries.push(JSON.parse(raw));
    } catch (error) {
      fail(`${pagePath}: invalid JSON-LD (${error.message})`);
    }
  }
  return entries;
}

function pageHtmlFile(pagePath) {
  if (pagePath === '/') return path.join(distRoot, 'index.html');
  if (pagePath === '/404/') return path.join(distRoot, '404.html');
  return path.join(distRoot, pagePath.slice(1), 'index.html');
}

function shingles(value, size = 5) {
  const words = stripHtml(value).toLowerCase().match(/[a-z0-9]+/g) ?? [];
  return new Set(Array.from({ length: Math.max(0, words.length - size + 1) }, (_, index) => words.slice(index, index + size).join(' ')));
}

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  }));
  return files.flat();
}

async function verifyPage(pagePath, keyword) {
  const file = pageHtmlFile(pagePath);
  let html;
  try {
    html = await fs.readFile(file, 'utf8');
  } catch {
    fail(`${pagePath}: expected built HTML file is missing.`);
    return;
  }

  const title = stripHtml(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '');
  const descriptionTag = html.match(/<meta\s+name=["']description["'][^>]*>/i)?.[0] ?? '';
  const robots = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i)?.[1] || '';
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1] ?? '';
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  const heroText = stripHtml(html.match(/<section\s+class=["'][^"']*\bhero\b[^"']*["'][^>]*>([\s\S]*?)<\/section>/i)?.[1] ?? '');
  const routeIsNoindex = pagePath === '/404/' || (pagePath === '/contact/' && !contactEmail);
  const isIndexable = !routeIsNoindex;

  if (title.length === 0 || title.length >= 60) fail(`${pagePath}: title must be unique and under 60 characters (found ${title.length}).`);
  if (!descriptionTag) fail(`${pagePath}: meta description is missing.`);
  const description = stripHtml(descriptionTag.replace(/^<meta\s+[^>]*content=["']|["'][^>]*>$/gi, ''));
  if (description.length < 150 || description.length > 160) fail(`${pagePath}: meta description must be 150 to 160 characters (found ${description.length}).`);
  if (h1s.length !== 1) fail(`${pagePath}: expected exactly one H1 (found ${h1s.length}).`);
  const h1 = stripHtml(h1s[0]?.[1] ?? '');
  if (keyword) {
    if (!h1.toLowerCase().includes(keyword)) fail(`${pagePath}: H1 does not contain the primary keyword "${keyword}".`);
    if (!title.toLowerCase().startsWith(keyword)) fail(`${pagePath}: title must begin with the primary keyword "${keyword}".`);
    const occurrences = description.toLowerCase().split(keyword).length - 1;
    if (occurrences !== 1) fail(`${pagePath}: meta description must include the primary keyword once (found ${occurrences}).`);
    if (!heroText.toLowerCase().includes(keyword)) fail(`${pagePath}: the intro before the generator must include the primary keyword.`);
  }
  if (isIndexable && (!/property=["']og:image["']/i.test(html) || !/name=["']twitter:image["']/i.test(html))) fail(`${pagePath}: Open Graph and Twitter image tags are required.`);
  if (isIndexable && (!/property=["']og:image:alt["']/i.test(html) || !/property=["']og:image:width["']\s+content=["']1200["']/i.test(html) || !/property=["']og:image:height["']\s+content=["']630["']/i.test(html))) fail(`${pagePath}: social image needs descriptive alt text and 1200 by 630 dimensions.`);
  if (html.includes('—')) fail(`${pagePath}: output HTML contains an em dash.`);
  if (/aggregateRating|adsbygoogle/i.test(html)) fail(`${pagePath}: prohibited rating schema or AdSense code found.`);
  if (/<link\s+rel=["']canonical["'][^>]*href=["']http:\/\//i.test(html)) fail(`${pagePath}: HTTP canonical is not allowed.`);

  if (isIndexable && configuredSite) {
    const expectedCanonical = `${new URL(configuredSite).origin}${pagePath}`;
    if (canonical !== expectedCanonical) fail(`${pagePath}: expected self-referencing canonical ${expectedCanonical}.`);
  } else if (canonical) {
    fail(`${pagePath}: canonical must be absent when the page is noindex or PUBLIC_SITE_URL is unset.`);
  }
  if (isIndexable && robots.toLowerCase().includes('noindex')) fail(`${pagePath}: indexable page is marked noindex.`);
  if (routeIsNoindex && !robots.toLowerCase().includes('noindex')) fail(`${pagePath}: noindex page is missing its robots directive.`);

  const entries = jsonLdEntries(html, pagePath);
  if (isIndexable) {
    if (Object.hasOwn(blogKeywords, pagePath) || Object.hasOwn(guideKeywords, pagePath)) {
      const article = entries.find((entry) => entry['@type'] === 'Article');
      if (!article) fail(`${pagePath}: Article JSON-LD is missing.`);
      else {
        if (!article.headline || !article.url || !article.description) fail(`${pagePath}: Article JSON-LD needs headline, url, and description.`);
        if (configuredSite && !String(article.url).startsWith('https://')) fail(`${pagePath}: Article URL must use HTTPS when PUBLIC_SITE_URL is set.`);
      }
      if (entries.some((entry) => entry['@type'] === 'WebApplication')) fail(`${pagePath}: Article pages must not emit WebApplication JSON-LD.`);
    } else {
      const application = entries.find((entry) => entry['@type'] === 'WebApplication');
      if (!application) fail(`${pagePath}: WebApplication JSON-LD is missing.`);
      else {
        if (!application.name || !application.url || !application.description) fail(`${pagePath}: WebApplication JSON-LD needs name, url, and description.`);
        if (application.applicationCategory !== 'GameApplication' || application.operatingSystem !== 'Any') fail(`${pagePath}: WebApplication category or operating system is incorrect.`);
        if (Number(application.offers?.price) !== 0 || application.offers?.priceCurrency !== 'USD') fail(`${pagePath}: WebApplication offers must be free and priced in USD.`);
        if (configuredSite && !String(application.url).startsWith('https://')) fail(`${pagePath}: WebApplication URL must use HTTPS when PUBLIC_SITE_URL is set.`);
      }
    }
    const breadcrumb = entries.find((entry) => entry['@type'] === 'BreadcrumbList');
    if (!breadcrumb || !Array.isArray(breadcrumb.itemListElement) || breadcrumb.itemListElement.length === 0) fail(`${pagePath}: BreadcrumbList JSON-LD is missing or empty.`);
    if (pagePath === '/' && !entries.some((entry) => entry['@type'] === 'WebSite')) fail('/ : WebSite JSON-LD is required on the hub.');
    if (pagePath !== '/' && entries.some((entry) => entry['@type'] === 'WebSite')) fail(`${pagePath}: WebSite JSON-LD belongs on the hub only.`);

    const hasFaqContent = pagePath === '/' || Object.hasOwn(raceKeywords, pagePath) || Object.hasOwn(utilityKeywords, pagePath) || Object.hasOwn(blogKeywords, pagePath) || Object.hasOwn(guideKeywords, pagePath);
    if (hasFaqContent) {
      const faqPage = entries.find((entry) => entry['@type'] === 'FAQPage');
      if (!faqPage) {
        fail(`${pagePath}: FAQPage JSON-LD is missing.`);
      } else {
        if (!Array.isArray(faqPage.mainEntity) || faqPage.mainEntity.length === 0) {
          fail(`${pagePath}: FAQPage mainEntity must be a non-empty array.`);
        } else {
          for (const [index, item] of faqPage.mainEntity.entries()) {
            if (item['@type'] !== 'Question' || !item.name) {
              fail(`${pagePath}: FAQPage mainEntity[${index}] must be a Question with a name.`);
            }
            if (item.acceptedAnswer?.['@type'] !== 'Answer' || !item.acceptedAnswer?.text) {
              fail(`${pagePath}: FAQPage mainEntity[${index}] must have an acceptedAnswer of type Answer with text.`);
            }
          }
        }
      }
    } else if (entries.some((entry) => entry['@type'] === 'FAQPage')) {
      fail(`${pagePath}: FAQPage JSON-LD should only be present on pages with FAQ content.`);
    }
  } else if (entries.length > 0) {
    fail(`${pagePath}: noindex pages must not emit structured data.`);
  }

  const links = [...html.matchAll(/\bhref=["']([^"']+)["']/gi)].map((match) => decodeEntities(match[1]));
  for (const href of links) {
    if (!href.startsWith('/')) continue;
    const parsed = new URL(href, 'https://local.invalid');
    const targetPath = parsed.pathname;
    if (targetPath !== '/' && !targetPath.includes('.') && !targetPath.endsWith('/')) {
      fail(`${pagePath}: internal route link must use a trailing slash: ${href}`);
      continue;
    }
    const targetFile = targetPath.includes('.')
      ? path.join(distRoot, targetPath.slice(1))
      : pageHtmlFile(targetPath);
    try {
      await fs.access(targetFile);
    } catch {
      fail(`${pagePath}: internal link does not resolve to a built page or asset: ${href}`);
    }
  }

  if (Object.hasOwn(raceKeywords, pagePath)) {
    const bodyStart = html.indexOf('data-seo-copy');
    const bodyContentStart = bodyStart === -1 ? -1 : html.indexOf('>', bodyStart) + 1;
    const relatedStart = bodyContentStart === -1 ? -1 : (
      html.indexOf('<section class="page-section related-guides"', bodyContentStart) !== -1
        ? html.indexOf('<section class="page-section related-guides"', bodyContentStart)
        : html.indexOf('<section class="page-section" aria-labelledby="related-heading">', bodyContentStart)
    );
    const body = bodyContentStart >= 0 && relatedStart >= 0 ? html.slice(bodyContentStart, relatedStart) : '';
    const words = stripHtml(body).match(/[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)*/g) ?? [];
    if (words.length < 400) fail(`${pagePath}: race content must contain at least 400 words (found ${words.length}).`);
    const sampleSection = html.match(/<div\s+class=["']sample-grid["'][^>]*>([\s\S]*?)<\/div>/i)?.[1] ?? '';
    if (countMatches(sampleSection, /class=["']sample-card["']/gi) < 12) fail(`${pagePath}: needs at least 12 pre-rendered sample names.`);
    const styles = [...html.matchAll(/<ul\s+class=["']style-examples["'][^>]*>([\s\S]*?)<\/ul>/gi)];
    if (styles.length !== 3) fail(`${pagePath}: needs exactly three distinct naming styles.`);
    for (const [index, [, list]] of styles.entries()) {
      const examples = countMatches(list, /<li\b/gi);
      if (examples < 8 || examples > 10) fail(`${pagePath}: naming style ${index + 1} needs 8 to 10 example names (found ${examples}).`);
    }
    const pronunciation = html.match(/<ul\s+class=["']pronunciation-list["'][^>]*>([\s\S]*?)<\/ul>/i)?.[1] ?? '';
    if (countMatches(pronunciation, /<li\b/gi) !== 5) fail(`${pagePath}: needs pronunciation notes for five names.`);
    const faqSection = html.match(/<div\s+class=["']faq-grid["'][^>]*>([\s\S]*?)<\/div>/i)?.[1] ?? '';
    const faqCount = countMatches(faqSection, /class=["']faq-item["']/gi);
    if (faqCount < 4 || faqCount > 5) fail(`${pagePath}: needs four or five visible FAQ entries (found ${faqCount}).`);
    pageRecords.push({ pagePath, html, body });
  }

  if (pagePath === '/') {
    const hubCards = [...html.matchAll(/<a\s+class=["']tool-card["'][^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
    const hubPaths = new Set(hubCards.map(([, href]) => new URL(href, 'https://local.invalid').pathname));
    const expectedPaths = [...Object.keys(raceKeywords), ...(phaseTwoEnabled ? Object.keys(utilityKeywords) : [])];
    for (const expectedPath of expectedPaths) {
      if (!hubPaths.has(expectedPath)) fail(`/: hub does not link to ${expectedPath}.`);
    }
    for (const [, href, cardHtml] of hubCards) {
      if (expectedPaths.includes(new URL(href, 'https://local.invalid').pathname)) {
        const sampleText = cardHtml.match(/class=["']tool-card-samples["'][^>]*>([\s\S]*?)<\/p>/i)?.[1] ?? '';
        if (sampleText.split('·').map((item) => item.trim()).filter(Boolean).length !== 3) fail(`/: hub card ${href} must show three pre-rendered sample names.`);
      }
    }
  }

  if (Object.hasOwn(blogKeywords, pagePath)) {
    const bodyStart = html.indexOf('data-seo-copy');
    const bodyContentStart = bodyStart === -1 ? -1 : html.indexOf('>', bodyStart) + 1;
    const bodyEnd = bodyContentStart === -1 ? -1 : html.indexOf('aria-labelledby="related-heading"', bodyContentStart);
    const body = bodyContentStart >= 0 && bodyEnd >= 0 ? html.slice(bodyContentStart, bodyEnd) : (bodyContentStart >= 0 ? html.slice(bodyContentStart) : '');
    const words = stripHtml(body).match(/[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)*/g) ?? [];
    if (words.length < 600) fail(`${pagePath}: blog content must contain at least 600 words (found ${words.length}).`);
    const faqSection = html.match(/<div\s+class=["']faq-grid["'][^>]*>([\s\S]*?)<\/div>/i)?.[1] ?? '';
    const faqCount = countMatches(faqSection, /class=["']faq-item["']/gi);
    if (faqCount < 4) fail(`${pagePath}: needs at least four visible FAQ entries (found ${faqCount}).`);
  }

  if (Object.hasOwn(guideKeywords, pagePath)) {
    const bodyStart = html.indexOf('data-seo-copy');
    const bodyContentStart = bodyStart === -1 ? -1 : html.indexOf('>', bodyStart) + 1;
    const bodyEnd = bodyContentStart === -1 ? -1 : html.indexOf('aria-labelledby="related-heading"', bodyContentStart);
    const body = bodyContentStart >= 0 && bodyEnd >= 0 ? html.slice(bodyContentStart, bodyEnd) : (bodyContentStart >= 0 ? html.slice(bodyContentStart) : '');
    const words = stripHtml(body).match(/[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)*/g) ?? [];
    if (words.length < 2000) fail(`${pagePath}: guide content must contain at least 2000 words (found ${words.length}).`);
  }

  if (pagePath === '/blog/') {
    const postCards = [...html.matchAll(/<a\s+class=["']blog-card["'][^>]*href=["']([^"']+)["']/gi)];
    const cardHrefs = new Set(postCards.map(([, href]) => new URL(href, 'https://local.invalid').pathname));
    for (const expectedPostPath of Object.keys(blogKeywords)) {
      if (!cardHrefs.has(expectedPostPath)) fail(`/blog/: blog hub does not link to ${expectedPostPath}.`);
    }
  }

  if (Object.hasOwn(raceKeywords, pagePath) && phaseTwoEnabled) {
    const utilityLinks = new Set(links.map((href) => new URL(href, 'https://local.invalid').pathname).filter((href) => Object.hasOwn(utilityKeywords, href)));
    if (utilityLinks.size < 2) fail(`${pagePath}: must link to at least two relevant utilities in the Phase 2 build.`);
  }

  if (Object.hasOwn(raceKeywords, pagePath) || (phaseTwoEnabled && Object.hasOwn(utilityKeywords, pagePath))) {
    const guideCards = [...html.matchAll(/<a\b[^>]*\bclass=["'][^"']*\bguide-card\b[^"']*["'][^>]*>/gi)];
    if (guideCards.length < 1) fail(`${pagePath}: generator page must link to at least one related naming guide.`);
  }
}

const expectedPages = ['/', ...Object.keys(raceKeywords), ...trustPaths, '/404/', ...blogPaths, ...guidePaths, ...(phaseTwoEnabled ? Object.keys(utilityKeywords) : [])];
const builtHtmlFiles = (await walk(distRoot)).filter((file) => file.endsWith('.html'));
const actualPages = new Set(builtHtmlFiles.map(pagePathFromFile));
for (const pagePath of expectedPages) {
  if (!actualPages.has(pagePath)) fail(`${pagePath}: expected route is missing from the build.`);
}
for (const pagePath of actualPages) {
  if (!expectedPages.includes(pagePath)) fail(`${pagePath}: unexpected HTML route exists in the build.`);
}

for (const pagePath of expectedPages) {
  await verifyPage(pagePath, raceKeywords[pagePath] ?? utilityKeywords[pagePath] ?? blogKeywords[pagePath] ?? guideKeywords[pagePath]);
}

const titles = new Map();
const descriptions = new Map();
for (const file of builtHtmlFiles) {
  const pagePath = pagePathFromFile(file);
  const html = await fs.readFile(file, 'utf8');
  const title = stripHtml(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '').toLowerCase();
  const descriptionTag = html.match(/<meta\s+name=["']description["'][^>]*>/i)?.[0] ?? '';
  const description = stripHtml(descriptionTag.replace(/^<meta\s+[^>]*content=["']|["'][^>]*>$/gi, '')).toLowerCase();
  if (title) {
    if (titles.has(title)) fail(`${pagePath}: title duplicates ${titles.get(title)}.`);
    else titles.set(title, pagePath);
  }
  if (description) {
    if (descriptions.has(description)) fail(`${pagePath}: meta description duplicates ${descriptions.get(description)}.`);
    else descriptions.set(description, pagePath);
  }
}

for (let firstIndex = 0; firstIndex < pageRecords.length; firstIndex += 1) {
  for (let secondIndex = firstIndex + 1; secondIndex < pageRecords.length; secondIndex += 1) {
    const first = pageRecords[firstIndex];
    const second = pageRecords[secondIndex];
    const firstShingles = shingles(first.body);
    const secondShingles = shingles(second.body);
    const intersection = [...firstShingles].filter((shingle) => secondShingles.has(shingle)).length;
    const union = new Set([...firstShingles, ...secondShingles]).size;
    const overlap = union ? intersection / union : 0;
    if (overlap > 0.4) fail(`${first.pagePath} and ${second.pagePath}: race-page five-word-shingle overlap exceeds 40% (${(overlap * 100).toFixed(1)}%).`);
  }
}

const generatedRobots = await fs.readFile(path.join(distRoot, 'robots.txt'), 'utf8').catch(() => '');
if (!generatedRobots) fail('robots.txt was not generated.');
for (const imageFile of ['hub.svg', 'race.svg', 'utility.svg']) {
  const image = await fs.readFile(path.join(distRoot, 'og', imageFile), 'utf8').catch(() => '');
  if (!image || !/<svg\b[^>]*\bwidth=["']1200["'][^>]*\bheight=["']630["']/i.test(image)) fail(`Social image ${imageFile} must exist at 1200 by 630.`);
}
const sitemapPath = path.join(distRoot, 'sitemap.xml');
if (!configuredSite) {
  try {
    await fs.access(sitemapPath);
    fail('sitemap.xml must be omitted while PUBLIC_SITE_URL is unset.');
  } catch {
    if (/Sitemap:/i.test(generatedRobots)) fail('robots.txt must not advertise an unknown sitemap URL.');
  }
} else {
  const sitemap = await fs.readFile(sitemapPath, 'utf8').catch(() => '');
  if (!sitemap) fail('sitemap.xml was not generated after PUBLIC_SITE_URL was configured.');
  const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => decodeEntities(match[1])).sort();
  const indexable = [];
  for (const pagePath of expectedPages) {
    const html = await fs.readFile(pageHtmlFile(pagePath), 'utf8');
    const robots = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i)?.[1]?.toLowerCase() ?? '';
    if (!robots.includes('noindex')) indexable.push(`${new URL(configuredSite).origin}${pagePath}`);
  }
  if (JSON.stringify(listed) !== JSON.stringify(indexable.sort())) fail('Sitemap entries do not exactly match all indexable built pages.');
  if (!generatedRobots.includes(`Sitemap: ${new URL(configuredSite).origin}/sitemap.xml`)) fail('robots.txt is missing the sitemap location.');
}

const layoutSource = await fs.readFile(path.join(projectRoot, 'src/layouts/SiteLayout.astro'), 'utf8');
if (!layoutSource.includes('window.location.search') || !layoutSource.includes('noindex,follow')) fail('Share URLs with query parameters must receive noindex at runtime.');

if (errors.length > 0) {
  console.error(`Build validation failed with ${errors.length} violation${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  const indexableCount = expectedPages.length - 1 - (!contactEmail ? 1 : 0);
  console.log(`Build validation passed: ${builtHtmlFiles.length} routes, ${indexableCount} indexable pages, ${pageRecords.length} race pages, Phase 2 ${phaseTwoEnabled ? 'enabled' : 'deferred'}.`);
  console.log('Verified metadata, headings, canonicals, JSON-LD, links, sitemap rules, race content, sample counts, and copy overlap.');
}
