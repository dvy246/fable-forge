# DnD Arena

DnD Arena is a static Astro site built with Astro templates, plain JavaScript, Tailwind CSS, and HTML. Race names use hand-written syllable tables. Utility names use original word parts and prompts. Results are generated locally, with no account, paid service, or generation API.

## Run locally

Use Node.js 22.6 or newer, then install and start the site:

```sh
npm ci
npm run dev
```

`npm run check` validates JavaScript syntax and enforces the allowed website source extensions. A production build runs the Phase 1 race-page build and validator first. Only after that succeeds does it add and validate the six Phase 2 utilities:

```sh
npm run check
npm run build
```

`npm run build:phase1` builds only the hub, twelve ancestry pages, and trust pages. `PUBLIC_BUILD_PHASE_2` defaults to enabled for production builds. The full build verifies titles, descriptions, H1s, canonical rules, JSON-LD, internal links, sitemap membership, race-page length and uniqueness, sample counts, and generated-name phonetics.

## Verification

Verified on October 4, 2026:

- `npm run check`: validates JavaScript syntax and confirms there are no TypeScript sources.
- `npm run build`: Phase 1 and Phase 2 passed. The final build contains 25 routes, including 23 indexable pages, 12 race pages, six campaign utilities, trust pages, and the custom 404.
- Name-engine validation: 221,616 generated combinations checked across 12 race tables, with no consonant triplets and configured length limits respected.
- Browser checks at 360 by 800: all 18 race and utility generator pages place the primary action above the fold; lock, reroll, append, favorite save, text export, theme switch, query-string noindex, and NPC trait, quirk, and hook output passed.
- Local Lighthouse mobile emulation on the home page: Performance 99, Accessibility 100, Best Practices 96, SEO 100. LCP was 1.63 seconds, CLS was 0, and TBT was 0 ms.

The Lighthouse run used a local preview and emulated mobile settings. It is not a production measurement. Real-user INP, deployed Core Web Vitals, Search Console indexing, and domain-specific canonicals remain unverified until launch.

## SEO configuration

Copy `.env.example` to `.env` for local production-like testing. Do not fill in placeholder values:

```ini
PUBLIC_SITE_URL=https://YOUR_DOMAIN
PUBLIC_CONTACT_EMAIL=YOUR_PUBLIC_EMAIL
```

`PUBLIC_SITE_URL` must be the real HTTPS origin, with no path. When it is unset, the build omits canonicals and `sitemap.xml` instead of guessing a domain. `robots.txt` is still generated. The Contact page stays `noindex` until `PUBLIC_CONTACT_EMAIL` is set. Query-string URLs receive `noindex` in the browser and retain the base page canonical.

## Cloudflare Pages

1. Create a Pages project connected to this repository or upload the built `dist/` directory.
2. Set the build command to `npm run build` and the output directory to `dist`.
3. Configure Node.js 22 for builds.
4. After the production domain is assigned, set `PUBLIC_SITE_URL` to its HTTPS origin. Add `PUBLIC_CONTACT_EMAIL` when the public address is ready.
5. Redeploy. The build then writes absolute canonicals, `sitemap.xml`, and a sitemap reference in `robots.txt`.

## Manual launch tasks

- Choose and connect the production domain, then set `PUBLIC_SITE_URL`.
- Add the public contact email, then set `PUBLIC_CONTACT_EMAIL` so Contact can be indexed.
- Add the domain property in Google Search Console and submit `/sitemap.xml` after the first configured deploy.
- Review Search Console impressions for Phase 1 and Phase 2 before deciding whether to build the Phase 3 full character generator.
- Review the About page creator wording before publishing if you want a public byline.
- Run a production Lighthouse audit after deployment. This project does not claim a Lighthouse score from a local build.

## Project map

- `src/data/races/`: one original syllable-table and page-content module per ancestry.
- `src/data/utilities.js`: approved Phase 2 utility content and internal relationships.
- `src/lib/name-engine.js`: browser-side name construction and readability rules.
- `src/components/Generator.astro`: generator controls, result actions, local favorites, and text export.
- `src/layouts/SiteLayout.astro`: shared metadata, theme switch, breadcrumbs, and footer notice.
- `scripts/`: SEO asset generation, race-name phonetic checks, and the build validator.
- `public/og/`: original 1200 by 630 SVG social images for hub, ancestry, and utility pages.

## Scope and keyword data

Page targets follow the supplied keyword map only. No additional search volume or difficulty values are introduced. The low-volume weapon, ship, guild, pet, and villain tools are excluded. The Phase 3 random character generator is intentionally not included until the earlier pages have Search Console impressions.
