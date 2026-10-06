# DnD Classes: The Complete 5e Character Guide — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premier, comprehensive SEO cornerstone guide at `/dnd-classes/` describing all 14 official D&D character classes with mechanical dossiers (Hit Die, Primary Ability, Saves, Subclasses, Playstyle ratings), cinematic vector graphics inspired by D&D Beyond's dossier cards, and full schema markup.

**Architecture:** Pure static Astro page (`src/pages/dnd-classes.astro`) backed by a structured data module (`src/data/dnd-classes.js`) containing complete official class mechanics and bespoke SVG crests/illustrations. Integrated into `SiteLayout.astro` header/footer navigation and strictly validated in `scripts/validate-build.mjs`.

**Tech Stack:** Astro 7 (static output), vanilla ES modules (browser-safe JS), Tailwind CSS v4 / custom CSS variables, Schema.org JSON-LD (`Article`, `BreadcrumbList`, `FAQPage`).

**Spec:** OpenSEO keyword evaluation + D&D Beyond class card layout reference (`media_1791262462167.png`).

## Global Constraints

- Zero TypeScript sources: only `.astro`, `.js`, and `.css` files (enforced by `scripts/check-project.mjs`).
- Zero em dashes (`—`) anywhere in source files, template strings, or rendered HTML. Use hyphens (`-`).
- Zero external paid APIs, React, or UI framework dependencies.
- All internal route links must have trailing slashes (e.g. `/dnd-classes/`, `/character-name-generator/`).
- Title must begin with the primary keyword `dnd classes` and be under 60 characters.
- Meta description must contain `dnd classes` exactly once and be between 150 and 160 characters.
- Exactly one H1 tag containing `dnd classes`.
- Hero text must contain `dnd classes`.
- Full JSON-LD structured data: `Article`, `BreadcrumbList`, and `FAQPage`.
- Strict build verification: must pass `npm run check`, `node scripts/validate-name-engine.mjs`, and `npm run build` (both Phase 1 and Phase 2).

---

### Task 1: Comprehensive D&D Classes Data Module

**Files:**
- Create: `src/data/dnd-classes.js`
- Test: `node -e "import('./src/data/dnd-classes.js').then(m => console.log('Loaded', m.dndClasses.length, 'classes'))"`

**Interfaces:**
- Produces: `dndClasses` array of 14 class objects:
  ```js
  {
    name: string,
    slug: string,
    ruleset: string, // 'Core 5e' | 'Expansion' | 'Partner'
    roleCategory: string,
    synopsis: string,
    hitDie: string, // 'd12' | 'd10' | 'd8' | 'd6'
    primaryAbility: string,
    saves: string,
    armorProficiencies: string,
    weaponProficiencies: string,
    signatureFeatures: string[],
    subclasses: { name: string, summary: string }[],
    playstyleScores: { offense: number, defense: number, utility: number, support: number, complexity: number }, // 1-5
    bestAncestries: { label: string, slug: string }[],
    playerPersona: string,
    themeColor: string,
    accentColor: string,
    crestSvg: string,
    characterArtSvg: string,
    nameGeneratorUrl: string,
  }
  ```
  and `classBySlug` Map.

- [ ] **Step 1: Write failing test script to verify data module requirements**

Create scratch test script checking that all 14 classes exist, contain hit die, primary abilities, saving throws, crest SVGs, and character art SVGs with zero em dashes.

- [ ] **Step 2: Run test script to verify failure**

Run: `node -e "import('./src/data/dnd-classes.js')"`
Expected: FAIL (Cannot find module)

- [ ] **Step 3: Create `src/data/dnd-classes.js`**

Implement complete dataset for all 14 official classes:
1. Barbarian (d12, Str, Str/Con, Rage & Reckless Attack)
2. Bard (d8, Cha, Dex/Cha, Bardic Inspiration & Jack of All Trades)
3. Cleric (d8, Wis, Wis/Cha, Channel Divinity & Divine Domains)
4. Druid (d8, Wis, Int/Wis, Wild Shape & Circle Magic)
5. Fighter (d10, Str/Dex, Str/Con, Action Surge & Extra Attacks)
6. Monk (d8, Dex/Wis, Str/Dex, Ki & Flurry of Blows)
7. Paladin (d10, Str/Cha, Wis/Cha, Divine Smite & Lay on Hands)
8. Ranger (d10, Dex/Wis, Str/Dex, Deft Explorer & Spellcasting)
9. Rogue (d8, Dex, Dex/Int, Sneak Attack & Cunning Action)
10. Sorcerer (d6, Cha, Con/Cha, Metamagic & Sorcery Points)
11. Warlock (d8, Cha, Wis/Cha, Pact Magic & Eldritch Invocations)
12. Wizard (d6, Int, Int/Wis, Spellbook & Arcane Traditions)
13. Artificer (d8, Int, Con/Int, Infuse Items & Magical Tinkering)
14. Blood Hunter (d10, Str/Dex & Int/Wis, Dex/Int, Crimson Rite & Blood Maledict)

Verify each class includes bespoke SVG crest markup and cinematic SVG character art. Ensure zero em dashes in text strings.

- [ ] **Step 4: Verify data module loads and passes validation**

Run: `node -e "import('./src/data/dnd-classes.js').then(m => { console.log('Classes:', m.dndClasses.length); if (m.dndClasses.length !== 14) throw new Error('Expected 14 classes'); })"`
Expected: PASS

- [ ] **Step 5: Run project check**

Run: `npm run check`
Expected: PASS

---

### Task 2: D&D Classes SEO Cornerstone Page Component

**Files:**
- Create: `src/pages/dnd-classes.astro`
- Modify: `src/styles/global.css` (add styling for `.classes-grid`, `.class-dossier-card`, `.dice-pill`, `.score-bar`, `.subclass-chips`)

**Interfaces:**
- Consumes: `dndClasses` from `src/data/dnd-classes.js`, `SiteLayout` from `src/layouts/SiteLayout.astro`, `articleSchema`, `faqPageSchema` from `src/lib/seo.js`.
- Renders:
  - Route: `/dnd-classes/`
  - Title: `DnD Classes: The Complete 5e Character Guide`
  - Description: `Discover all official DnD classes with hit dice, primary abilities, combat roles, playstyles, and subclass breakdowns in our complete tabletop 5e guide.`
  - H1: `DnD Classes: The Complete 5e Character Guide`
  - Hero Section: `<section class="hero hero-classes">` highlighting core stats and quick jump navigation.
  - Class Filter Controls (All, Martial, Spellcasters, Half-Casters).
  - 14 Rich Dossier Cards (layout inspired by user reference `media_1791262462167.png`):
    - Crest emblem badge + Class Name + Ruleset tag + Role badge.
    - Stats bar: Hit Die (`d12`, `d10`, `d8`, `d6`) with dice icon, Primary Ability, Saving Throws.
    - Synopsis copy.
    - Signature features and Subclasses pills.
    - Playstyle radar bars (Offense, Defense, Support, Utility, Complexity).
    - Cinematic SVG character art with ambient glows.
    - Action CTA linking to character name generation.
  - Comprehensive SEO Guide Body (`data-seo-copy`):
    - Over 2,000 words of rich strategic advice: How to Choose Your Class, Martial vs Caster balance, Hit Die comparison chart, Multiclassing fundamentals, and beginner recommendations.
    - FAQ Section: 5 structured FAQ items.
    - Related tools card grid.

- [ ] **Step 1: Implement `src/pages/dnd-classes.astro`**

Write the Astro page component adhering strictly to zero em dashes, trailing slashes, and exact keyword requirements.

- [ ] **Step 2: Add CSS rules to `src/styles/global.css`**

Add styling for class cards, stat badges, dice indicators, score meters, and responsive grid layouts.

- [ ] **Step 3: Run project check**

Run: `npm run check`
Expected: PASS

---

### Task 3: Build Pipeline & Validator Integration

**Files:**
- Modify: `scripts/validate-build.mjs` (register `/dnd-classes/` in `guideKeywords`, update `expectedPages` and JSON-LD assertions)
- Modify: `src/layouts/SiteLayout.astro` (add Classes link to header navigation and footer)

**Interfaces:**
- Consumes: `guideKeywords = { '/dnd-classes/': 'dnd classes' }`
- Enforces:
  - Title starts with `dnd classes` and <60 chars.
  - Description contains `dnd classes` once and 150-160 chars.
  - Single H1 containing `dnd classes`.
  - Hero section contains `dnd classes`.
  - Article, BreadcrumbList, and FAQPage schemas present.
  - Sitemaps and robots validate properly.

- [ ] **Step 1: Update `scripts/validate-build.mjs`**

Add `guideKeywords`:
```javascript
const guideKeywords = {
  '/dnd-classes/': 'dnd classes',
};
const guidePaths = Object.keys(guideKeywords);
```
Add `...guidePaths` to `expectedPages`, update `verifyPage` checks, and ensure Article + FAQPage schema validation succeeds.

- [ ] **Step 2: Update `src/layouts/SiteLayout.astro`**

Add `Classes` link to primary header navigation (`<a class="nav-link" href="/dnd-classes/">Classes</a>`) and footer links.

- [ ] **Step 3: Run build validation**

Run: `node scripts/check-project.mjs`
Run: `node scripts/validate-name-engine.mjs`
Run: `npm run build`
Expected: PASS across both Phase 1 and Phase 2 builds with 0 errors!

---

### Task 4: End-to-End Verification & Visual Inspection

**Files:**
- Test: Local dev server at `http://localhost:4567/dnd-classes/`
- Verify: Full HTML output, JSON-LD schema, responsive layout, and mobile rendering.

- [ ] **Step 1: Inspect built HTML output**

Run: `curl -s http://localhost:4567/dnd-classes/ | head -n 30`
Check title, canonical, description, H1, and schemas.

- [ ] **Step 2: Verify all 14 class dossier cards**

Run curl/grep to verify all 14 classes (Barbarian through Blood Hunter) render with hit die, primary abilities, saves, and SVG graphics.

- [ ] **Step 3: Confirm whole-project build passes cleanly**

Run: `npm run build`
Expected: Full pass with sitemap, robots, and zero validator violations.
