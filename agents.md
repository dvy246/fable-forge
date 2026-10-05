# DnD Arena — Agent Guide

A comprehensive reference for AI coding assistants working on this codebase. Read this file before making any changes.

---

## What this project is

DnD Arena is a **static fantasy name generator** built with Astro, plain JavaScript, and Tailwind CSS v4. It targets tabletop RPG players who need original names for DnD characters, races, places, parties, NPCs, and family lines.

- **No backend.** All name generation runs in the browser from hand-written syllable tables.
- **No TypeScript.** Source files are `.astro`, `.js`, and `.css` only. This is enforced by `npm run check`.
- **No paid APIs.** No generation API, no account system, no analytics.
- **Deployed to Cloudflare Pages** as a fully static site via `astro build`.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro 7 (static output, no SSR) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| JavaScript | Plain ES modules — no React, Vue, or other UI framework |
| Node.js | 22.6 or newer (enforced by `engines` in `package.json`) |
| Deployment | Cloudflare Pages |

---

## Project structure

```
dnd-arena/
├── src/
│   ├── data/
│   │   ├── races/              # One .js module per ancestry (12 files)
│   │   │   └── index.js        # Barrel: raceProfiles[], raceBySlug Map
│   │   └── utilities.js        # Phase 2 utility page definitions
│   ├── lib/
│   │   ├── name-engine.js      # Core name construction logic (browser-safe)
│   │   └── seo.js              # JSON-LD schema helpers
│   ├── components/
│   │   ├── Generator.astro     # Interactive generator UI + all client JS
│   │   ├── ToolCards.astro     # Related-tool card grid
│   │   └── ContentPage.astro   # Generic content-page layout component
│   ├── layouts/
│   │   └── SiteLayout.astro    # Global head, header, nav, footer, theme switch
│   ├── pages/
│   │   ├── index.astro         # Hub (home page)
│   │   ├── [slug].astro        # Dynamic route for all 18 generator pages
│   │   ├── about.astro
│   │   ├── how-names-are-generated.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css          # All styles (no Tailwind utility classes in HTML)
├── scripts/
│   ├── check-project.mjs       # Validates extensions + JS syntax (npm run check)
│   ├── generate-seo-assets.mjs # Writes sitemap.xml and robots.txt post-build
│   ├── validate-build.mjs      # Full build integrity validator
│   └── validate-name-engine.mjs# Phonetic smoke-test for all race syllable tables
├── public/
│   └── og/                     # SVG social images (hub.svg, race.svg, utility.svg)
├── astro.config.mjs
├── package.json
└── .env.example
```

---

## Pages and routes

### Phase 1 — always built

| Route | Purpose |
|---|---|
| `/` | Hub: links to all generators, sample names per card |
| `/elf-name-generator/` | Elf ancestry names |
| `/drow-name-generator/` | Drow ancestry names |
| `/dragonborn-name-generator/` | Dragonborn ancestry names |
| `/orc-name-generator/` | Orc ancestry names |
| `/halfling-name-generator/` | Halfling ancestry names |
| `/gnome-name-generator/` | Gnome ancestry names |
| `/goblin-name-generator/` | Goblin ancestry names |
| `/half-elf-name-generator/` | Half-elf ancestry names |
| `/tiefling-name-generator/` | Tiefling ancestry names |
| `/half-orc-name-generator/` | Half-orc ancestry names |
| `/dwarf-name-generator/` | Dwarf ancestry names |
| `/human-name-generator/` | Human fantasy names |
| `/about/` | Trust page |
| `/how-names-are-generated/` | Trust/method page |
| `/privacy/` | Privacy policy |
| `/terms/` | Terms of use |
| `/contact/` | Contact (noindex until `PUBLIC_CONTACT_EMAIL` is set) |
| `/404.html` | Custom 404 (noindex) |

### Phase 2 — built when `PUBLIC_BUILD_PHASE_2 !== 'false'`

| Route | Tool type | Purpose |
|---|---|---|
| `/character-name-generator/` | `character` | Full race + style picker |
| `/fantasy-town-name-generator/` | `town` | Settlement name palettes |
| `/tavern-name-generator/` | `tavern` | Inn/tavern name palettes |
| `/party-name-generator/` | `party` | Adventuring group names |
| `/npc-name-generator/` | `npc` | Name + trait + quirk + hook |
| `/last-name-generator/` | `surname` | Family/clan names only |

Phase 2 is enabled by default in production. Pass `PUBLIC_BUILD_PHASE_2=false` to build Phase 1 only.

---

## Name engine (`src/lib/name-engine.js`)

This is the core library. It is **browser-safe** — no Node.js APIs.

### Exports

| Function | Signature | Purpose |
|---|---|---|
| `buildRaceName` | `(profile, options, seed) → {name, flavor}` | Assembles a race name from syllable parts |
| `buildSurname` | `(profile, styleId, seed) → {name, flavor}` | Returns a single family name |
| `buildUtilityResult` | `(toolType, profile, options, seed) → {name, flavor}` | Drives town, tavern, party, and NPC generators |
| `asGeneratorProfile` | `(profile) → stripped profile` | Strips server-only fields before JSON serialisation |
| `makeSampleResults` | `(profile, options, count?) → result[]` | Pre-renders 12 samples at build time |
| `isGeneratedResult` | `(value) → boolean` | Type guard for LocalStorage entries |

### Key internals

- `pick(items, seed, salt)` — deterministic pseudo-random item selector. Same seed + salt always returns the same item.
- `joinSyllables(parts)` — joins syllable parts, inserting `'e'` to break unpronounceable consonant clusters that are not in the `boundaryClusters` set. No triple-consonant sequences are allowed.
- Length limits: `short ≤ 12`, `medium ≤ 16`, `long ≤ 20` characters. The assembly loop trims middle syllables to stay within limits.
- `toolType === 'npc'` routes through `buildRaceName` for the name, then appends a trait, quirk, and story hook from fixed arrays.

### Options shape (passed to buildRaceName / buildUtilityResult)

```js
{
  race: string,        // profile slug
  style: string,       // style.id from the profile
  placeStyle: string,  // 'harbor' | 'highland' | 'woodland' | 'cozy' | 'crossroads' | 'candlelit' | 'bold' | 'hopeful' | 'wry'
  gender: string,      // 'neutral' | 'male' | 'female'
  length: string,      // 'short' | 'medium' | 'long'
  fullName: boolean,   // append a family name
}
```

---

## Race profile schema (`src/data/races/*.js`)

Each race module exports a default object. Every field is required unless noted.

```js
{
  slug: string,                // URL segment, e.g. 'elf-name-generator'
  label: string,               // Display name, e.g. 'Elf'
  keyword: string,             // Primary SEO keyword
  title: string,               // <title> tag (must start with keyword, under 60 chars)
  description: string,         // Meta description (150-160 chars, keyword once)
  intro: string[],             // Two paragraphs: [hero copy, styles intro]
  styles: [                    // Exactly three styles
    {
      id: string,
      label: string,
      summary: string,
      examples: string[],      // 8-10 example names
      starts: string[],
      middles: string[],
      endings: string[],
      genderEndings: { neutral: string[], male: string[], female: string[] },
      familyNames: string[],
      flavors: string[],
    }
  ],
  construction: string[],      // Paragraphs for "How X names work" section
  pronunciation: [             // Exactly five items
    { name: string, guide: string, note: string }
  ],
  tableTips: string[],         // Paragraphs for "Using X names in play"
  faq: [                       // 4 or 5 items
    { question: string, answer: string }
  ],
  relatedRaces: string[],      // Slugs of related race pages
  relatedUtilities: string[],  // Slugs of related utility pages (used in Phase 2 build)
}
```

---

## Utility page schema (`src/data/utilities.js`)

Each entry in `utilityPages` follows this shape:

```js
{
  slug: string,
  label: string,
  keyword: string,
  title: string,
  description: string,
  toolType: 'character' | 'town' | 'tavern' | 'party' | 'npc' | 'surname',
  intro: string[],             // First paragraph = hero copy; rest = body
  sections: [                  // Arbitrary number of content sections
    { heading: string, paragraphs: string[] }
  ],
  faq: [{ question: string, answer: string }],
  related: string[],           // Mix of race and utility slugs
}
```

---

## Generator component (`src/components/Generator.astro`)

All interactive generator logic lives here as a single `<script>` block (no framework).

### Tool types and their behaviour

| `toolType` | Shows race select | Shows person options | Shows place style | Generation function |
|---|---|---|---|---|
| `race` | No | Yes | No | `buildRaceName` |
| `character` | Yes | Yes | No | `buildRaceName` |
| `npc` | Yes | Yes | No | `buildUtilityResult('npc', ...)` |
| `surname` | Yes | Style only | No | `buildSurname` |
| `town` | No | No | Yes | `buildUtilityResult('town', ...)` |
| `tavern` | No | No | Yes | `buildUtilityResult('tavern', ...)` |
| `party` | No | No | Yes (mood) | `buildUtilityResult('party', ...)` |

### Client-side actions

Actions are dispatched by `data-action` attributes on buttons:

| Action | Effect |
|---|---|
| `generate` | Replaces all unlocked results with fresh ones |
| `more` | Appends 10 new results (does not replace existing) |
| `lock` | Toggles lock on a single result card; locked cards survive a reroll |
| `reroll` | Replaces one unlocked card |
| `favorite` | Adds name+flavor to `localStorage` under `'dnd-arena-favorites'` |
| `copy` | Copies the name to the clipboard via `navigator.clipboard` |
| `export` | Downloads saved favorites as `dnd-arena-favorites.txt` |

### State and storage

- Results array lives in a `let results` closure — no global state, no framework store.
- Favorites persist in `window.localStorage` under the key `'dnd-arena-favorites'` as a JSON array of `{name, flavor}` objects. `isGeneratedResult` validates entries on read.
- Generating runs fully synchronously (no async name engine calls).

---

## Layout (`src/layouts/SiteLayout.astro`)

The shell every page renders inside. Key behaviours:

- **Canonical logic:** Written only when `PUBLIC_SITE_URL` is set and the page is indexable.
- **Noindex rules:** `/404/` is always noindex. `/contact/` is noindex until `PUBLIC_CONTACT_EMAIL` is set. Any URL with a query string receives `noindex,follow` via an inline script at runtime.
- **Theme switch:** Dark / Night toggle stored in `localStorage` under `'dnd-arena-theme'`. Applied before paint by an inline script in `<head>`.
- **Social images:** Three shared SVGs (`hub.svg`, `race.svg`, `utility.svg`) in `public/og/`. Each is 1200×630.
- **Navigation:** Tool pages (`showTools=true`) get a `<details>` mega-nav listing all ancestry and campaign tools. Other pages get a simple "Generators" link back to the hub anchor.
- **JSON-LD:** `WebSite` schema on the hub only. `WebApplication` + `BreadcrumbList` on every indexable page. Noindex pages emit no structured data.

---

## Environment variables

| Variable | Required for | Behaviour when unset |
|---|---|---|
| `PUBLIC_SITE_URL` | Canonicals, sitemap, absolute OG image URLs | Canonicals and `sitemap.xml` omitted; `robots.txt` still generated |
| `PUBLIC_CONTACT_EMAIL` | Contact page indexing + footer mailto link | Contact page stays noindex; footer links to `/contact/` |
| `PUBLIC_BUILD_PHASE_2` | Enabling the six utility pages | Defaults to enabled; set to `'false'` to build Phase 1 only |

Copy `.env.example` to `.env` for local testing. Do not commit real values.

---

## Build pipeline

```
npm run build
  └── npm run build:phase1
        ├── PUBLIC_BUILD_PHASE_2=false astro build
        ├── PUBLIC_BUILD_PHASE_2=false node scripts/generate-seo-assets.mjs
        ├── node scripts/validate-name-engine.mjs
        └── PUBLIC_BUILD_PHASE_2=false node scripts/validate-build.mjs
  └── (if phase1 passes)
        ├── PUBLIC_BUILD_PHASE_2=true astro build
        ├── PUBLIC_BUILD_PHASE_2=true node scripts/generate-seo-assets.mjs
        ├── node scripts/validate-name-engine.mjs
        └── PUBLIC_BUILD_PHASE_2=true node scripts/validate-build.mjs
```

`generate-seo-assets.mjs` runs **after** `astro build`. It reads the built HTML to generate `sitemap.xml` and `robots.txt`. When `PUBLIC_SITE_URL` is unset it removes any existing sitemap and writes a minimal robots file.

---

## Scripts reference

### `npm run check` (`scripts/check-project.mjs`)

- Walks `src/` and fails on any file with an extension other than `.astro`, `.js`, or `.css`.
- Runs `node --check <file>` on every `.js` file to catch syntax errors.
- Does **not** run TypeScript — there is no TS in this project.

### `scripts/validate-name-engine.mjs`

- Imports all race profiles and exercises the name engine.
- Validates 221,616 generated combinations across 12 race tables.
- Asserts no triple-consonant sequences and length limits are respected.

### `scripts/validate-build.mjs`

Parses the built `dist/` HTML and enforces:

| Category | What is checked |
|---|---|
| Titles | Present, unique, under 60 chars, begins with primary keyword |
| Descriptions | Present, unique, 150–160 chars, keyword appears exactly once |
| H1s | Exactly one per page, contains primary keyword |
| Canonicals | Self-referencing HTTPS URL when `PUBLIC_SITE_URL` is set; absent otherwise |
| Robots | Correct `index,follow` vs `noindex,follow` per page |
| OG / Twitter | Both image tags with alt text, width 1200, height 630 |
| JSON-LD | `WebApplication` + `BreadcrumbList` on indexable pages; `WebSite` on hub only; noindex pages emit none |
| Internal links | Every `href="/"` path resolves to a built file; trailing slash required |
| Race pages | ≥400 words of SEO copy, 12 pre-rendered samples, exactly 3 styles with 8–10 examples each, 5 pronunciation items, 4–5 FAQ items |
| Copy uniqueness | Five-word-shingle Jaccard overlap across race pages must be ≤40% |
| Hub | Links to all expected generator pages; each card shows 3 pre-rendered sample names |
| Phase 2 cross-links | Race pages must link to ≥2 relevant utility pages |
| Sitemap | Entries exactly match indexable pages; referenced in `robots.txt` |
| Social images | `hub.svg`, `race.svg`, `utility.svg` exist and are 1200×630 |
| Query-string noindex | `SiteLayout.astro` must contain the runtime noindex logic |

---

## Constraints and rules

These are hard rules. Do not work around them.

1. **No TypeScript.** All source files must be `.astro`, `.js`, or `.css`. `npm run check` will fail otherwise.
2. **No Node.js APIs in `src/`.** `src/lib/name-engine.js` runs in the browser. Importing `fs`, `path`, or any Node built-in there will break the client bundle.
3. **No em dashes in page output.** The build validator rejects any `—` character in built HTML. Use hyphens instead.
4. **No `aggregateRating` schema or AdSense code.** The validator explicitly rejects these.
5. **No HTTP canonicals.** Canonical URLs must always use `https://`.
6. **Trailing slashes on all internal route links.** `/elf-name-generator/` not `/elf-name-generator`.
7. **Race pages need exactly three styles.** Each style needs 8–10 example names, and the `pronunciation` array must contain exactly five items.
8. **SEO copy word count.** Race pages must have at least 400 words in the `data-seo-copy` article (excluding the related section).
9. **Content uniqueness.** Five-word-shingle Jaccard overlap between any two race pages must stay under 40%.
10. **Keyword discipline.** Titles must start with the primary keyword. Descriptions must include it exactly once. H1s and the hero paragraph must contain it. No values outside the supplied keyword map are introduced.
11. **No query-string index.** The `SiteLayout.astro` inline script sets `noindex,follow` on any URL with a query string. This must remain intact.

---

## Adding a new race page

1. Create `src/data/races/<name>.js` following the profile schema above.
2. Verify: 3 styles, 8–10 examples per style, 5 pronunciation items, 4–5 FAQs, 400+ words of `construction`/`tableTips` copy.
3. Add the import and entry to `src/data/races/index.js` (`raceProfiles` array).
4. Add the slug to `raceKeywords` in `scripts/validate-build.mjs` with its primary keyword.
5. Add cross-links via `relatedRaces` on neighbouring pages.
6. Run `npm run build` and confirm it passes.

---

## Adding a new utility page

1. Add an entry to `utilityPages` in `src/data/utilities.js` following the utility schema.
2. If the `toolType` requires new generation logic, add it to `buildUtilityResult` in `src/lib/name-engine.js`.
3. Add the slug to `utilityKeywords` in `scripts/validate-build.mjs`.
4. Update `relatedUtilities` on related race profiles.
5. Run `npm run build` with `PUBLIC_BUILD_PHASE_2=true` and confirm it passes.

---

## Deployment checklist (Cloudflare Pages)

1. Create a Pages project; set build command to `npm run build` and output directory to `dist`.
2. Set Node.js 22 in build settings.
3. Set `PUBLIC_SITE_URL` to the production HTTPS origin (no trailing slash, no path).
4. Set `PUBLIC_CONTACT_EMAIL` when a public address is ready.
5. Redeploy; the build writes absolute canonicals, `sitemap.xml`, and the sitemap reference in `robots.txt`.
6. Add the domain to Google Search Console and submit `/sitemap.xml`.

---

## What is intentionally out of scope

- **Phase 3 full character generator** — excluded until Phase 1 + Phase 2 pages have Search Console impressions.
- **Low-volume tools** (weapon, ship, guild, pet, villain generators) — excluded per keyword scope decision.
- **External generation APIs** — all names come from the hand-written syllable tables.
- **User accounts or cloud storage** — favorites are localStorage-only with a text export option.
- **React, Vue, or any UI framework** — the generator is plain browser JS.
- **TypeScript** — explicitly not used; `npm run check` enforces this.
