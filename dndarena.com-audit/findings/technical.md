# Specialist Audit: Technical SEO (Weight: 22%)

**Target Domain:** `https://dndarena.com`  
**Audited Routes:** 74 total routes in `dist/` (72 indexable routes, 2 noindex routes)  
**Category Score:** **96 / 100**  
**Lead Auditor:** Claude SEO Technical Auditor  
**Date:** October 7, 2026 (Post-Remediation Re-Audit)  

---

## 1. Executive Category Summary

Following the comprehensive remediation sprint, the technical SEO foundation of DnD Arena achieves an elite **96 / 100**. The codebase leverages Astro SSG pure static generation, delivering fully rendered semantic HTML, strict self-referencing HTTPS canonical tags, 100% trailing slash consistency, zero broken internal links, and explicit AI search crawler authorization.

The previously flagged critical vulnerability regarding client-side robots mutation has been thoroughly investigated and validated as an intentional security and canonical hygiene requirement enforced by `AGENTS.md` and `validate-build.mjs`. In static pre-rendered HTML, all 72 production pages serve `<meta name="robots" content="index,follow">`. The runtime script only activates on URLs with search parameters (`window.location.search`) to eliminate parameter crawler traps and duplicate indexation.

| Technical Metric | Value / Result | Audit Status |
| :--- | :--- | :---: |
| **Total Built HTML Routes** | 74 routes in `dist/` | **PASS** |
| **Indexable Routes in Sitemap** | 72 routes matching canonical URLs | **PASS** |
| **Canonical Alignment** | 100% self-referencing HTTPS (`https://dndarena.com/...`) | **PASS** |
| **Trailing Slash Consistency** | 100% enforced across internal links & routes | **PASS** |
| **Broken Internal Links** | 0 broken links (0 404s across internal link graph) | **PASS** |
| **AI Search Crawler Access** | Explicit Allow for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot | **PASS** |
| **Runtime Query Parameter Guard** | Enforced security requirement (`AGENTS.md` constraint #11) | **VERIFIED** |
| **Sitemap Reference in robots.txt**| `Sitemap: https://dndarena.com/sitemap.xml` declared | **PASS** |
| **Contact Route Indexation** | Marked `noindex,follow` when `PUBLIC_CONTACT_EMAIL` unset | **LOW / CONFIG** |
| **App & Favicon Coverage** | `favicon.svg` present; missing `favicon.ico` & `apple-touch-icon` | **LOW / POLISH** |

---

## 2. What Works Well (Concrete Evidence)

### 2.1 Pure Static Pre-Rendering (SSG) & Zero Client-Side Hydration Dependency
Astro compiles all 74 routes into static HTML files at build time (`dist/`). Search engine crawlers (Googlebot, Bingbot, Applebot, GPTBot) receive complete page content on initial HTTP GET:
- All 12 pre-rendered name cards per generator are immediately present in the DOM.
- Full cultural naming lore, style tables, pronunciation guides, and FAQ text exist in raw server HTML.
- Zero client-side JavaScript execution or hydration is required for discovery and indexation.

### 2.2 Strict Canonical Tag Precision
All 72 indexable routes emit self-referencing canonical tags:
```html
<link rel="canonical" href="https://dndarena.com/wizard-name-generator/">
```
On `404.html` and the developer placeholder `/contact/` route, canonical tags are correctly omitted per SEO best practices.

### 2.3 Enhanced `robots.txt` with Explicit AI Crawler Directives
`dist/robots.txt` now includes dedicated user-agent declarations ensuring premier Generative Engine Optimization (GEO):
```txt
User-agent: *
Allow: /

# AI Search Crawlers
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
Sitemap: https://dndarena.com/sitemap.xml
```

### 2.4 Sitemap Validation
`dist/sitemap.xml` contains exactly the 72 indexable routes with absolute HTTPS URLs:
```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://dndarena.com/</loc></url>
  <url><loc>https://dndarena.com/about/</loc></url>
  ...
  <url><loc>https://dndarena.com/wizard-name-generator/</loc></url>
</urlset>
```
`scripts/validate-build.mjs` enforces an exact 1:1 match between built indexable pages and sitemap entries.

### 2.5 Zero Broken Links & URL Normalization
Automated link verification across all 74 HTML files confirmed:
- Zero broken internal links (`404 Not Found`).
- 100% trailing slash consistency on internal links (e.g., `/elf-name-generator/`), preventing unnecessary 301 redirect hops.

---

## 3. Detailed Findings & Project Constraints

### Finding TEC-01: Runtime Query-String noindex Script Validated as Security Requirement (INFORMATIONAL)
- **File Reference:** `src/layouts/SiteLayout.astro#L143-L151`
- **Specification:** `AGENTS.md` Rule #11: *"No query-string index. The SiteLayout.astro inline script sets noindex,follow on any URL with a query string. This must remain intact."*
- **Build Enforcement:** `scripts/validate-build.mjs#L440` asserts that `layoutSource.includes('window.location.search') && layoutSource.includes('noindex,follow')`.
- **Analysis:** In initial server-rendered HTML, indexable pages output `<meta name="robots" content="index,follow">`. The runtime script modifies the robots meta tag to `noindex,follow` strictly when query parameters are detected in the client window (`window.location.search`). This protects the site against infinite URL parameter variations (e.g. ad tracking tokens, scraper parameters, or faceted filtering) creating duplicate indexing issues. Because standard search crawlers do not execute arbitrary query strings unless discovered via links, this provides robust canonical defense.
- **Verdict:** Validated as compliant with project security constraints.

### Finding TEC-02: Contact Page Gated by Environment Variable (LOW)
- **File Reference:** `src/pages/contact.astro#L5-L11`
- **Analysis:** `/contact/` intentionally checks `PUBLIC_CONTACT_EMAIL`. When unset at build time, it outputs a developer placeholder, receives `noindex,follow`, and is omitted from `sitemap.xml`.
- **Recommendation:** Ensure `PUBLIC_CONTACT_EMAIL` is configured in the production deployment environment (e.g. Vercel, Cloudflare Pages, Netlify) so the contact page builds as an indexable trust signal.

### Finding TEC-03: Missing Legacy Favicon & Apple Touch Icon (LOW)
- **File Reference:** `public/favicon.svg`
- **Analysis:** The site provides an SVG favicon. Legacy desktop browsers and iOS Safari bookmarking prefer `favicon.ico` (32x32) and `apple-touch-icon.png` (180x180).
- **Recommendation:** Add `favicon.ico` and `apple-touch-icon.png` into `public/`.

---

## 4. Technical Category Scorecard

| Sub-Domain | Score | Weight | Weighted Score |
| :--- | :---: | :---: | :---: |
| Crawlability & HTTP Status | 100 / 100 | 25% | 25.00 |
| Indexability & Canonicals | 96 / 100 | 25% | 24.00 |
| robots.txt & Sitemap Hygiene | 98 / 100 | 25% | 24.50 |
| URL Architecture & Internal Resolution | 90 / 100 | 25% | 22.50 |
| **Technical SEO Total** | **96 / 100** | **100%** | **96.00 / 100** |
