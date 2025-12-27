# PROJECT DNA: CALCTRUST

> **VERDICT**: PRODUCTION-READY FINANCIAL CALCULATOR PLATFORM
> **ARCHITEXTURE**: NEXT.JS 15 (APP ROUTER) ON CLOUDFLARE WORKERS
> **DNA VERSION**: 1.1.0 (Expanded Content Inventory)

---

## 1. CORE IDENTITY & TECH STACK

**Mission**: To provide accurate, fast, and secure financial calculators with a premium, trust-inducing user experience.

### 1.1 Technology Stack (The "Bedrock")
- **Framework**: Next.js 15.3.8 (App Router)
- **Language**: TypeScript 5.x (Strict Mode)
- **Styling**: Tailwind CSS v4.0 (Beta/RC)
- **UI Extensions**: `tailwindcss-animate`, `tw-animate-css`
- **Deployment**: OpenNext (`@opennextjs/cloudflare`) -> Cloudflare Workers
- **Package Manager**: npm
- **Testing**: Jest 30.x + React Testing Library

### 1.2 Key Dependencies & Versions
| Package | Version | Purpose |
| :--- | :--- | :--- |
| `next` | `~15.3.8` | Core Framework |
| `react` | `^18.3.1` | UI Library |
| `tailwindcss` | `^4.0.0` | Styling Engine |
| `@opennextjs/cloudflare` | `^1.14.7` | Edge Adapter |
| `lucide-react` | `^0.562.0` | Iconography |
| `clsx` / `tailwind-merge` | `latest` | Class utility composition |

---

## 2. ARCHITECTURAL BLUEPRINT

The project follows a **Fractal App Router** architecture, optimized for edge rendering.

### 2.1 Directory Structure
```
calctrust/
├── app/                        # Next.js App Router Handling
│   ├── globals.css             # GLOBAL STYLES (Tailwind v4 Theme)
│   ├── layout.tsx              # Root Layout (Providers: Theme)
│   ├── page.tsx                # Homepage
│   ├── usa/                    # Country-specific routes (e.g., /usa/calculators)
│   └── [route]/                # Other feature routes
├── components/                 # React Components
│   ├── calculator/             # BUSINESS LOGIC COMPONENTS (Shells, Error Boundaries)
│   ├── ui/                     # SHADCN PRIMITIVES (Button, Input, Card)
│   ├── home/                   # Homepage specific widgets
│   └── [feature]/              # Feature-scoped components
├── content/                    # CONTENT MANAGEMENT SYSTEM (CMS-as-Code)
│   ├── calculators/            # Structured Calculator Data (.ts files)
│   └── [type]/                 # Other content types
├── lib/                        # CORE LOGIC & UTILITIES
│   ├── types/                  # TypeScript Interfaces (CRITICAL)
│   ├── utils.ts                # Helper functions (cn, formatters)
│   └── linking-utils.ts        # Internal linking logic
├── public/                     # Static Assets (Logos, Robots.txt)
├── open-next.config.ts         # Cloudflare Adapter Config
└── next.config.ts              # Next.js Configuration
```

### 2.2 Key Configuration Profiles

#### `next.config.ts`
- **Output**: `standalone` (Required for OpenNext)
- **Images**: `unoptimized: true` (For static compatibility/cost optimization)
- **Trailing Slash**: `false`

#### `tsconfig.json`
- **Target**: `ES2017`
- **Strict**: `true`
- **Paths**: `@/*` -> `./*`

---

## 3. THE DESIGN SYSTEM (VISUAL DNA)

The design system is heavily reliant on **CSS Variables** defined in `app/globals.css` via the Tailwind v4 `@theme inline` directive.

### 3.1 Color Palette (Semantic)
The application uses a semantic color system with light/dark mode support.

| Variable | Light | Dark | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `#FFFFFF` | `#0A0A0A` | Page Background |
| `--foreground` | `#0A0A0A` | `#F5F5F5` | Primary Text |
| `--primary` | `#1A1A1A` | `#E5E5E5` | Main Action/Brand |
| `--muted` | `#F5F5F5` | `#2A2A2A` | Secondary Backgrounds |
| `--accent` | `#2A2A2A` | `#CCCCCC` | Highlights |

### 3.2 Typography
- **Heading Font**: `Manrope` (Variable weights: 400-800)
- **Body Font**: `Source Sans 3` (Variable weights: 300-700)

### 3.3 Visual Effects & Utilities
The `globals.css` defines custom utility classes that constitute the "Premium" look:

- **`.glass-card`**: `backdrop-blur-xl bg-white/70 dark:bg-white/5`
  *   *Usage*: Overlays, floating panels.
- **`.aurora-bg`**: Animated gradient background.
  *   *Animation*: `aurora-shift` (15s infinite).
- **`.bento-card`**: `rounded-2xl border border-border/50 bg-card`.
  *   *Usage*: Dashboard grids, feature highlights.
- **`.gradient-text`**: `bg-clip-text text-transparent` with linear gradient.

---

## 4. DATA & CONTENT ARCHITECTURE

The project uses a **"Content-as-Code"** approach. Content is not stored in a DB or Markdown files, but in strictly typed TypeScript objects. This ensures type safety and build-time validation.

### 4.1 The `BlogContent` Schema (`lib/types/blog-content.ts`)
Every calculator page is defined by an object adhering to this interface:

```typescript
interface BlogContent {
    slug: string;                 // e.g. "paycheck-calculator-florida"
    category: string;             // e.g. "state-paycheck"
    title: string;                // H1 Title
    subheading?: string;          // Hero description
    sections: {
        whatThisHelps?: string[]; // Bullet points
        whoUsefulFor?: string[];  // Bullet points
        howItWorks?: string[];    // Explanatory steps
        deepDive?: string[];      // Long-form content (Markdown-like strings)
        examples?: string[];      // Specific user scenarios
        expertTips?: string[];    // Value-add tips
        assumptions?: string[];   // Calculation basis
        faq?: FAQItem[];          // Structured data for SEO
        relatedCalculators?: RelatedCalculator[]; // Internal Linking
    }
}
```

### 4.2 Content Strategy
- **File Location**: `content/calculators/[category]/[slug].ts`
- **Data Flow**: Page Component imports this object -> Passes it to `CalculatorShell` -> Renders UI.
- **Freshness**: Includes `freshnessSignal` field (e.g., "December 2025") to display data currency.

---

## 5. CORE COMPONENTS

### 5.1 `CalculatorShell.tsx` (`components/calculator/`)
The master container for calculator pages.
- **Responsibilities**:
    - Layout orchestration (Header, Sidebar, Main Content).
    - Mobile/Desktop responsiveness.
    - SEO metadata injection.
    - Hydration of the specific calculator widget.

### 5.2 `CalculatorErrorBoundary.tsx`
Wraps calculator logic to prevent entire page crashes.
- **Fallback UI**: "Calculator Error" card with "Try Again" button.
- **Production Safety**: Isolates failures in complex math logic.

---

## 6. DEVELOPMENT PROTOCOLS

### 6.1 Creating a New Calculator
1.  **Define Content**: Create `content/calculators/[category]/new-calc.ts`.
2.  **Define Route**: Create `app/usa/new-calc/page.tsx`.
3.  **Implement Widget**: Create `components/calculator/widgets/NewCalcWidget.tsx`.
4.  **Connect**: Import content and widget into the page, wrap with `CalculatorShell`.

### 6.2 Testing Standard
- **Unit Tests**: `npm run test` (Jest)
- **Linting**: `npm run lint` (ESLint)
- **Deployment Check**: `npm run build` (Must pass standard Next.js build)

### 6.3 Code Quality Rules
- **Strict Typing**: No `any`. Use interfaces in `lib/types`.
- **Component Modularity**: If a component exceeds 200 lines, split it.
- **Design Consistency**: NEVER use raw colors. ALways use CSS variables (e.g., `bg-primary`, not `#000`).

---

## 7. CONTENT STRATEGY & SEO INVENTORY

**Total Keywords Targeted:** 1,170+  
**Total Generated Pages:** ~274 (263 Calculators + 11 Static/Hub Pages)

### 7.1 Content Inventory Breakdown
| Category | Page Count | Description |
| :--- | :--- | :--- |
| **State Paycheck** | **50** | One comprehensive page for every U.S. state. |
| **State Salary** | **80+** | "$50k in Florida", "$100k in NY" specific combinations. |
| **Salary Breakdowns** | **26** | "$40k a year", "$50k a year" standard ranges. |
| **Hourly Breakdowns** | **30** | "$15/hr", "$20/hr" to annual salary conversions. |
| **Biweekly Conversions** | **18** | "$2000 biweekly" to annual/monthly. |
| **Weekly Conversions** | **17** | "$1000 weekly" to annual/hourly. |
| **Monthly Conversions** | **19** | "$5000 a month" to annual/hourly. |
| **Raise Calculators** | **12** | "2% raise", "5% raise" scenarios. |
| **Core Tools** | **11** | `401k-calculator`, `bonus-tax-calculator`, etc. |

### 7.2 Core SEO Strategy
The platform targets **long-tail, high-intent financial queries**.

#### 1. "Long-Tail" Dominance
Instead of fighting for "salary calculator" (Volume: 1M+, Difficulty: 90+), we target thousands of lower-volume but higher-conversion queries:
*   *Generic*: "salary calculator" ❌
*   *Targeted*: "**$52,000 a year is how much an hour**" ✅
*   *Targeted*: "**$100,000 salary after tax in florida**" ✅

#### 2. Programmatic SEO (pSEO)
We use a programmatic approach to content generation:
*   **Template**: `CalculatorShell` + Structured Data (`BlogContent`).
*   **Variables**: Salary Amount, Location, Frequency.
*   **Outcome**: Consistent, high-quality pages generated at scale without manual writing overhead.

#### 3. Internal Linking Architecture
Every page includes a `relatedCalculators` section that links to 4-5 contextual peers, creating a dense "spiderweb" of links that signals authority to Google.
*   *Example*: A "$50k Salary" page links to "Hourly Calculator" and "$25/hr page".

### 7.3 Key Keyword Patterns
*   `[amount] [frequency] to [frequency]` (e.g., "2000 biweekly to annual")
*   `[amount] salary in [state]` (e.g., "75000 salary in texas")
*   `paycheck calculator [state]` (e.g., "paycheck calculator ohio")
*   `[percent] raise calculator` (e.g., "3 percent raise calculator")
