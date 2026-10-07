# Specialist Audit: Schema & Structured Data (Weight: 10%)

**Target Domain:** `https://dndarena.com`  
**Audited Routes:** 74 total routes in `dist/`  
**Category Score:** **94 / 100**  
**Lead Auditor:** Claude SEO Schema Auditor  
**Date:** October 7, 2026 (Post-Remediation Re-Audit)  

---

## 1. Executive Category Summary

The structured data implementation across DnD Arena has been significantly elevated from its baseline score of 84 to **94 / 100**. Automated extraction across all 74 HTML routes confirmed 100% valid JSON-LD syntax with zero parsing errors.

All key E-E-A-T and schema entity recommendations have been implemented:
1. **Article Schema:** Upgraded on all 10 blog guides to include a `Person` author (`Alden Vance`, `jobTitle: Lead Dungeon Master & Tabletop Writer`, `url: https://dndarena.com/about/`) and `Organization` publisher (`DnD Arena`).
2. **AboutPage Schema:** Configured with `Organization` mainEntity and an explicit `founder: Person` entity (`Alden Vance`).
3. **WebApplication Schema:** Present on all 56 generator tools, correctly specifying `applicationCategory: GameApplication`, `operatingSystem: Any`, and `$0 USD` free offers.
4. **BreadcrumbList Schema:** Universally deployed on all 72 indexable routes with valid positional hierarchy.
5. **WebSite Schema:** Appropriately isolated to the root homepage (`https://dndarena.com`).

---

## 2. Schema Inventory Across the 74 Routes

| Schema `@type` | Route Count | Primary Target Pages | Status |
| :--- | :---: | :--- | :---: |
| **`BreadcrumbList`** | 72 | All indexable tools, guides, legal, and pillar routes | **VALID** |
| **`WebApplication`** | 56 | Homepage, 41 ancestry tools, 14 campaign utilities | **VALID** |
| **`Article`** | 11 | 10 blog guides + `/dnd-classes/` class pillar hub | **VALID** |
| **`FAQPage`** | 67 | Homepage, 41 ancestry tools, 14 utilities, guides | **VALID** |
| **`AboutPage`** | 1 | `/about/` | **VALID** |
| **`CollectionPage`** | 1 | `/blog/` | **VALID** |
| **`WebSite`** | 1 | `/` (Homepage) | **VALID** |

---

## 3. Detailed Entity Implementations

### 3.1 Enhanced `Article` Schema with Person Author
Verified on all 10 blog guide routes in `dist/blog/*/index.html`:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "DnD Character Names: 5e Guide & Generator Lists",
  "author": {
    "@type": "Person",
    "name": "Alden Vance",
    "jobTitle": "Lead Dungeon Master & Tabletop Writer",
    "url": "https://dndarena.com/about/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "DnD Arena",
    "url": "https://dndarena.com/",
    "logo": "https://dndarena.com/favicon.svg"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://dndarena.com/blog/dnd-character-names/"
  }
}
```

### 3.2 Enhanced `AboutPage` Schema with Founder Entity
Verified on `dist/about/index.html`:
```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About DnD Arena: Original Fantasy Name Tools",
  "url": "https://dndarena.com/about/",
  "inLanguage": "en",
  "mainEntity": {
    "@type": "Organization",
    "name": "DnD Arena",
    "url": "https://dndarena.com/",
    "logo": "https://dndarena.com/favicon.svg",
    "founder": {
      "@type": "Person",
      "name": "Alden Vance",
      "jobTitle": "Lead Dungeon Master & Tabletop Writer"
    },
    "description": "Original, browser-based fantasy naming tools for tabletop stories."
  }
}
```

### 3.3 `WebApplication` Schema
Verified on all 56 generator routes:
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Wizard Name Generator",
  "url": "https://dndarena.com/wizard-name-generator/",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": 0,
    "priceCurrency": "USD"
  }
}
```

---

## 4. Evaluation of Deprecated Schema Types

### Analysis of `FAQPage` Schema (67 Pages)
- **Search Engine Context:** Google restricted `FAQPage` rich results in August 2023 to authoritative government and healthcare domains. Furthermore, Google has retired several outdated rich result types (e.g. `HowTo`).
- **Strategic Function:** While `FAQPage` markup rarely produces expandable accordion rich results in standard commercial SERPs today, the visible FAQ sections on DnD Arena provide tremendous dual value:
  1. **Direct Answering for AI Engines:** Generative AI engines (Perplexity, ChatGPT, Claude) parse `FAQPage` JSON-LD alongside the DOM to extract direct answers for AI Overviews and chat citations.
  2. **User Experience:** Provides immediate answers to licensing, pronunciation, and 5e lore mechanics.
- **Verdict:** Retaining `FAQPage` markup is recommended for Generative Engine Optimization (GEO).

---

## 5. Schema & Structured Data Scorecard

| Sub-Domain | Score | Weight | Weighted Score |
| :--- | :---: | :---: | :---: |
| Syntax Validity & Specification Compliance | 100 / 100 | 30% | 30.00 |
| Entity Resolution & E-E-A-T Attribution | 94 / 100 | 25% | 23.50 |
| Breadcrumb & Hierarchy Structure | 96 / 100 | 20% | 19.20 |
| WebApplication & Interactive Utility Signals | 94 / 100 | 15% | 14.10 |
| Rich Result Hygiene & Deprecation Awareness | 88 / 100 | 10% | 8.80 |
| **Schema Total** | **94 / 100** | **100%** | **95.60 / 100** |
