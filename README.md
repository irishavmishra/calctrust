# CalcTrust

Accurate salary and tax calculators you can trust.

Live: [https://calctrust.com](https://calctrust.com)

## What It Does

CalcTrust provides 274+ specialized financial calculators for U.S. workers. Users can convert between salary formats, estimate take-home pay after federal and state taxes, calculate overtime earnings, and compare job offers across all 50 states. Every calculation is based on official IRS publications and state tax department data.

The platform generates programmatic SEO pages for specific search queries like "$75,000 salary in California" or "$25 an hour is how much a year", capturing high-intent traffic with accurate, transparent calculations.

## Key Technical Decisions

- **Strategy Pattern for Calculator Logic**: Used a factory pattern with a strategy registry (O(1) lookup) instead of switch statements. This keeps calculator logic maintainable, testable, and extensible when adding new calculation types.

- **Programmatic Page Generation**: Built a TypeScript-based content generation system that creates 262+ unique calculator pages from data structures. This captures long-tail SEO queries without manually writing hundreds of pages.

- **Client-Side Search Index**: Implemented a pure client-side search using a memoized search index built from calculator definitions. No backend API required, zero latency for users.

- **Static Site Generation with Cloudflare**: Deployed as static HTML via OpenNext on Cloudflare Workers. No server-side rendering, no database, fast global edge distribution.

- **Country-Aware URL Architecture**: Locked in `/usa/` prefix from day one to support future expansion. Root `/` is a country selector, not a calculator hub. No geo-IP redirects to avoid SEO penalties.

## Hard Problems I Solved

1. **Progressive Tax Calculation Accuracy**: Federal and state tax calculations require handling progressive brackets, standard deductions, and FICA limits. I built a comprehensive tax engine using official 2025 IRS brackets and state tax data stored in JSON, with special handling for graduated tax states (CA, NY, NJ) that use marginal rate calculations.

2. **Maintaining 274+ Pages Without Duplication**: Instead of copy-pasting calculator configurations, I created a generator system that produces pages for salary breakdowns, hourly conversions, state-specific paychecks, and raise percentages from centralized data structures. Adding a new calculator type requires updating one file.

3. **Zero-Backend Search**: Most calculator sites rely on server-side search. I built a lightweight search engine that runs entirely in the browser, scoring matches across titles, slugs, state codes, and numeric values (handling queries like "50k" or "$100/hour").

## Tech Stack

- Frontend: Next.js 15 (App Router), React 18, TypeScript
- Styling: Tailwind CSS 4, shadcn/ui components
- Deployment: Cloudflare Workers via OpenNext
- Testing: Jest with jsdom environment
- Analytics: Google Analytics 4
- Data: JSON files for tax brackets, state rates, FICA rates

## Running Locally

1. Clone the repo: `git clone https://github.com/yourusername/calctrust.git`
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Open http://localhost:3000

## Project Structure

```
app/                    # Next.js App Router pages
components/             # React components (UI, layout, calculator shells)
lib/                    # Core logic
  calculators/          # Tax calculation engine & strategies
  content/              # Calculator page definitions & generators
  data/                 # Tax data (JSON)
  search.ts             # Client-side search index
content/                # Markdown content for SEO pages
```
