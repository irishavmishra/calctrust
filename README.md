# CalcTrust – Production README

**Version:** 1.1.0  
**Status:** Production  
**Framework:** Next.js 16.1.1 (App Router)  
**Rendering:** Static Site Generation (SSG only)

---

## 1. Project Overview

### What This Is

CalcTrust is a financial reference platform providing accurate salary, paycheck, and tax calculators for the United States. This is NOT a blog, NOT a content farm, and NOT a marketing funnel. It is a specialized reference tool designed to rank for long-tail financial queries while maintaining trust and accuracy.

The platform currently serves 274 static pages covering salary conversions, tax estimations, and paycheck calculations across all 50 U.S. states.

### What This Is NOT

- A dynamic web application with user accounts
- A backend-driven system
- A SaaS product
- A content management system
- An e-commerce platform

### Core Philosophy

1. **Accuracy First** – Tax calculations use publicly available IRS and state data.
2. **Trust Over Growth** – E-E-A-T principles guide all content decisions.
3. **SEO Stability** – URL changes and structural modifications are heavily restricted.
4. **Calm UX** – No popups, no aggressive monetization, no dark patterns.
5. **Long-Term Maintainability** – Code is written to last years, not sprints.

---

## 2. Architecture Summary

### High-Level System Overview

```
┌─────────────────────────────────────────────────────────┐
│  Next.js Static Site (SSG Only)                         │
│                                                          │
│  ┌──────────────┐      ┌──────────────┐               │
│  │ Global Hub   │      │ USA Hub      │               │
│  │ (/)          │─────▶│ (/usa)       │               │
│  └──────────────┘      └──────────────┘               │
│                              │                          │
│                              ▼                          │
│                     ┌────────────────┐                 │
│                     │ 263 Calculator │                 │
│                     │ Pages (SSG)    │                 │
│                     └────────────────┘                 │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Pure TypeScript Calculator Functions             │  │
│  │ (No backend, all client-side)                    │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Rendering Model: SSG Only

**Why Static Site Generation?**

1. **Speed** – Pre-rendered pages load instantly.
2. **SEO** – Google prefers static HTML over client-rendered content.
3. **Cost** – No server required. Cloudflare Pages or Netlify hosting is sufficient.
4. **Security** – No backend means no attack surface for data breaches.
5. **Reliability** – No server downtime. No database failures.

**Why No Backend?**

This platform performs no operations that require a server:
- No user authentication
- No data storage
- No payment processing
- No personalization beyond client-side localStorage (theme)

All calculations happen **in the browser** using pure TypeScript functions.

### Build Process

```bash
npm run build
# Generates 274 static HTML pages in /out directory
# Build time: ~5-6 seconds
# Output size: ~15MB (compressed)
```

The build process:
1. Reads calculator definitions from `lib/content/calculators.ts`
2. Generates static pages via `generateStaticParams()`
3. Pre-renders all pages with metadata and structured data
4. Outputs production-ready HTML to `/out`

---

## 3. URL & Routing Rules (CRITICAL)

### Country-Based Routing

**WARNING:** URL structure changes will cause catastrophic SEO damage. Do not modify without explicit approval.

#### Current Structure

```
/                               → Global country selector hub
/usa                            → USA calculator hub
/usa/[slug]                     → USA calculator pages (263 pages)
/about, /methodology, etc.      → Trust pages (global)
```

#### Why `/usa` Exists

The platform is designed for **multi-country expansion** while maintaining strict data isolation:

- **Tax laws vary by jurisdiction.** U.S. tax logic must never mix with future UK or Canadian logic.
- **SEO clarity.** Search engines understand `/usa/salary-calculator` as distinct from `/uk/salary-calculator`.
- **Future-proofing.** Adding `/uk` or `/ca` requires no refactoring of existing USA routes.

#### Why Root `/` is Global

The root homepage serves as a global country selector. It is NOT a USA-specific page. This prevents hardcoding country assumptions into the root URL.

#### URL Modification Rules

**NEVER:**
- Change existing slugs (e.g., `salary-to-hourly-calculator`)
- Remove the `/usa/` prefix from existing pages
- Redirect old URLs without 301s
- Use query parameters for calculator state
- Add trailing slashes inconsistently

**SAFE:**
- Add new calculator pages under `/usa/[new-slug]`
- Add new country hubs (e.g., `/uk`) following the USA pattern
- Add new trust pages at the root level (e.g., `/privacy-policy`)

**REQUIRES APPROVAL:**
- Changing any existing URL
- Restructuring the `/usa` subdirectory
- Moving trust pages to subfolders

---

## 4. Calculator Engine Design

### Separation of Logic and UI

Calculator logic is **completely separated** from UI components:

```
lib/calculators/
├── types.ts           # TypeScript interfaces
├── salary.ts          # Salary conversion logic
├── paycheck.ts        # Tax calculation engine
├── index.ts           # Barrel exports
```

UI components live in:
```
components/calculator/
└── CalculatorShell.tsx  # Universal shell component
```

### How Calculations Work

All calculations are **pure functions**:

```typescript
export function calculateSalaryToHourly(
  annualSalary: number,
  hoursPerWeek: number = 40,
  weeksPerYear: number = 52
): { hourlyRate: number } {
  return {
    hourlyRate: annualSalary / (hoursPerWeek * weeksPerYear)
  };
}
```

**Design Principles:**

1. **Pure functions** – No side effects, same input = same output.
2. **No external dependencies** – Calculations do not call APIs or databases.
3. **Explicit assumptions** – Default values are documented.
4. **Testable** – Every function can be unit tested independently.

### Adding New Calculators

To add a new calculator:

1. Define the calculation function in `lib/calculators/`
2. Add the page definition to `lib/content/calculators.ts`
3. The build process will automatically generate the static page

**DO NOT:**
- Duplicate calculation logic in UI components
- Hardcode tax rates in JSX
- Create separate calculator components for each type

---

## 5. Data & Tax Logic Isolation

### Country-Specific Data Rules

**CRITICAL:** Tax logic must NEVER be shared across countries.

Current data structure:
```
lib/data/
├── federalTaxBrackets.json  # U.S. federal tax brackets
├── stateTaxRates.json       # U.S. state income tax rates
└── ficaRates.json           # U.S. Social Security/Medicare rates
```

### Why Isolation Matters

Mixing tax logic across jurisdictions will:
- Produce incorrect calculations
- Violate legal compliance
- Damage user trust
- Create SEO confusion

### Annual Tax Updates

**Every January**, tax data must be updated:

1. Download latest IRS tax brackets
2. Update `lib/data/federalTaxBrackets.json`
3. Verify FICA limits (Social Security wage base cap)
4. Update state tax rates if changed
5. Update `lastUpdated` timestamps in calculator metadata

**DO NOT:**
- Estimate or guess tax rates
- Copy tax data from non-authoritative sources
- Mix tax years in the same calculator

---

## 6. Internal Linking System

### Automated Linking Strategy

The platform uses a **4-zone automated internal linking system** to build SEO authority:

```
┌─────────────────────────────────────────────────────────┐
│ ZONE 1: Contextual Links                                │
│ Location: Intro paragraph                               │
│ Function: Natural link to core calculator               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ZONE 2: Related Calculators Grid                        │
│ Location: After main content                            │
│ Function: 2 peers + 1 parent + 1 conversion (4 slots)   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ZONE 3: Variation Pills                                 │
│ Location: Before FAQ                                    │
│ Function: Adjacent values (nearby salaries, states)     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ZONE 4: Authority Links                                 │
│ Location: Page footer                                   │
│ Function: Methodology, How Calculations Work, Disclaimer│
└─────────────────────────────────────────────────────────┘
```

### Link Generation

Links are generated programmatically via `lib/linking-utils.ts`:

```typescript
export function getPageLinkingData(page: CalculatorPageData) {
  return {
    contextual: getPrimaryContextualLink(page.slug, page.category),
    related: getRelatedCalculators(page.slug, page.category, page.stateCode),
    variations: getVariationLinks(page.slug, page.stateCode),
    authority: AUTHORITY_LINKS // Static trust anchors
  };
}
```

### Rules for Future Pages

**MUST:**
- Use the automated linking functions (do not hardcode links)
- Ensure new pages integrate into the 4-zone system
- Avoid duplicate slugs in the link arrays

**NEVER:**
- Manually hardcode internal links in content
- Bypass the linking utilities
- Create circular link chains

---

## 7. SEO & E-E-A-T Safeguards

### Required Trust Pages

The following pages are **required** for E-E-A-T compliance:

1. `/about` – Mission, team, credentials
2. `/methodology` – How calculations are performed
3. `/how-calculations-work` – User education
4. `/disclaimer` – Legal disclaimers (YMYL protection)
5. `/contact` – Contact information

**DO NOT:**
- Delete these pages
- Remove methodology links from calculators
- Reduce transparency about calculation methods

### Metadata Rules

Every calculator page MUST have:

```typescript
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: "...",           // Unique title
    description: "...",     // 150-160 characters
    alternates: {
      canonical: `https://calctrust.com/usa/${slug}`  // CRITICAL
    },
    openGraph: {...}
  };
}
```

**WARNING:** Broken canonical URLs will result in duplicate content penalties.

### Structured Data Usage

JSON-LD structured data is injected via `components/seo/Schema.tsx`:

- **FAQSchema** – FAQ markup for rich snippets
- **BreadcrumbSchema** – Breadcrumb navigation
- **WebPageSchema** – Page metadata for Google
- **HowToSchema** – Step-by-step guides

**SAFE USE OF dangerouslySetInnerHTML:**

The only acceptable use of `dangerouslySetInnerHTML` in this codebase is for JSON-LD script injection. This is safe because:

1. Content is JSON.stringify() on server-side data
2. No user input is involved
3. Output is a `<script type="application/ld+json">` tag

### Canonical URL Rules

**CRITICAL:** Every `/usa/` page must have its canonical URL set correctly:

```tsx
canonical: `https://calctrust.com/usa/${slug}`
```

**DO NOT:**
- Use relative canonical URLs
- Omit the `/usa/` prefix
- Point canonical to the root `/`

---

## 8. Performance & Build Expectations

### Expected Build Times

| Page Count | Build Time | Status   |
|------------|------------|----------|
| 274 pages  | ~5-6s      | ✅ Normal |
| 500 pages  | ~10-12s    | ⚠️ Monitor |
| 1000+ pages| ~20-30s    | ⚠️ Review |

Build time scales linearly with page count due to SSG.

### Page Count Considerations

The current 274 pages are sustainable. However:

- **Above 500 pages:** Consider lazy-loading non-critical calculators.
- **Above 1000 pages:** Evaluate incremental static regeneration (ISR) if build times exceed 30 seconds.

### Performance Regressions

A performance regression is defined as:

- **Build time increase >50%** without page count increase
- **Bundle size increase >30%** without feature addition
- **Lighthouse score drop below 90**
- **First Contentful Paint (FCP) >1.5s**

### When Optimization is Justified

**Justified:**
- Build time exceeds 30 seconds
- Bundle size exceeds 500KB (JS)
- Verifiable user complaints about speed

**NOT Justified:**
- Micro-optimizations for <50ms gains
- Refactoring working code "for performance" without metrics
- Adding complexity for theoretical future scale

---

## 9. Development Rules (DO NOT BREAK)

### Forbidden Actions

The following actions are **strictly forbidden** without CTO-level approval:

1. **Changing URLs** – SEO damage is irreversible.
2. **Removing trust pages** – E-E-A-T requires them.
3. **Adding a backend** – This is a static-only system.
4. **Storing user data** – Privacy-first design is non-negotiable.
5. **Mixing tax logic** – Country-specific data must remain isolated.
6. **Breaking internal linking** – Automated links are foundational to SEO.
7. **Removing canonical URLs** – Duplicate content penalties will occur.
8. **Changing calculator logic without validation** – Accuracy is the product.

### Actions Requiring Approval

The following require explicit review before implementation:

1. Adding new dependencies (bundle size impact)
2. Changing routing structure
3. Modifying tax calculation formulas
4. Restructuring component hierarchy
5. Changing build configuration
6. Adding client-side analytics or tracking

### Safe to Modify

The following are safe to modify:

1. **Adding new calculator pages** (following existing patterns)
2. **Updating tax data** (annual updates)
3. **Fixing bugs** (with tests)
4. **Improving accessibility** (ARIA labels, focus states)
5. **Updating dependencies** (patch and minor versions)
6. **Refining CSS** (visual polish, no structural changes)

---

## 10. Deployment & Environment Notes

### Build Command

```bash
npm run build
```

Output: `/out` directory containing static HTML, CSS, and JS.

### Deployment Targets

Recommended static hosts:

1. **Cloudflare Pages** (preferred)
   - Free tier sufficient
   - Global CDN
   - Automatic HTTPS

2. **Netlify**
   - Good alternative
   - Built-in forms (if needed for contact)

3. **Vercel**
   - Official Next.js hosting
   - Automatic previews

### Environment Variables

**NONE REQUIRED.**

This project has no environment variables because:
- No API keys
- No database connections
- No backend services
- No secrets

### robots.txt

Located at `/public/robots.txt`. Declares sitemap and explicitly allows AI bots (GPTBot, ClaudeBot, Google-Extended, etc.) to crawl the site.

**DO NOT:**
- Block Google or Bing
- Disallow `/usa` routes
- Remove sitemap declaration

---

## 11. Maintenance & Updates

### Annual Tax Updates (Required)

**When:** Every January

**What to update:**

1. Federal tax brackets (`lib/data/federalTaxBrackets.json`)
2. FICA limits (`lib/data/ficaRates.json`)
3. State tax rates (`lib/data/stateTaxRates.json`)
4. Standard deduction amounts
5. Update `lastUpdated` in calculator metadata

**How to validate:**

```bash
npm run build
# Manually test 3-5 calculators with known values
# Compare results against IRS calculators
```

### Content Updates

**Safe content updates:**
- Improving FAQ answers
- Adding new FAQ questions
- Clarifying methodology
- Fixing typos

**Requires review:**
- Changing calculator descriptions
- Modifying H1 titles (SEO impact)
- Rewriting trust pages

### When to Touch Calculators vs Content

**Touch calculators when:**
- Tax laws change
- Calculation errors are discovered
- New calculator types are needed

**Touch content when:**
- User feedback requests clarity
- SEO opportunities arise
- Trust signals need strengthening

### Validation Before Deployment

Before deploying any changes:

1. Run `npm run build` – Must complete without errors
2. Test 5 random calculator pages – Results must be accurate
3. Check Lighthouse score – Must remain >90
4. Verify canonical URLs – Must point to correct paths
5. Review structured data – Must validate via Google's tool

---

## 12. Final Notes to Future Developers

### Long-Term Thinking

This codebase is designed to operate for **years**, not months. Decisions prioritize stability over novelty. If you are tempted to rewrite something, ask:

- What problem does this solve?
- What risk does this introduce?
- Will this matter in 3 years?

### Restraint is Professionalism

The best code change is often no code change. This platform works. It generates traffic. It serves users. Do not break it in pursuit of perfection.

### Documentation is Mandatory

If you make a change:

1. Update this README if it affects architecture
2. Document why the change was necessary
3. Add comments for non-obvious logic
4. Update `calctrust-structure.json` if applicable

### Respect the Constraints

This platform has constraints by design:

- **No backend** – This keeps it simple and fast.
- **No user accounts** – This respects privacy.
- **Static only** – This ensures speed and reliability.

These are **features**, not limitations.

### When in Doubt

If you are unsure whether a change is safe:

1. Do not make it.
2. Document your reasoning.
3. Seek approval from a senior engineer or CTO.
4. Test extensively in a staging environment.

---

## Appendix: Key Files

| File | Purpose |
|------|---------|
| `lib/content/calculators.ts` | All 263 calculator definitions |
| `lib/calculators/paycheck.ts` | Tax calculation engine |
| `lib/linking-utils.ts` | Automated internal linking |
| `components/calculator/CalculatorShell.tsx` | Universal calculator UI |
| `components/seo/Schema.tsx` | Structured data components |
| `app/usa/[slug]/page.tsx` | Dynamic calculator page template |
| `app/layout.tsx` | Root layout with Header/Footer |
| `public/robots.txt` | Search engine directives |

---

**End of Production README**

Version 1.1.0 – Last Updated: December 2025
