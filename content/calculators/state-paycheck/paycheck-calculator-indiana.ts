import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-indiana',
  category: 'state-paycheck',
  title: 'Indiana Paycheck Calculator',
  subheading: 'Calculate your Indiana take-home pay. Indiana uses a flat 3.05% income tax plus county taxes.',
  metaTitle: 'Indiana Paycheck Calculator 2025 | CalcTrust',
  metaDescription: 'Estimate your Indiana take-home pay. This calculator shows net income after federal and state taxes based on standard withholding assumptions.',
  sections: {
    whatThisHelps: ['Indiana flat 3.05% state tax', 'County taxes 0.5-3%', 'Net pay calculation'],
    whoUsefulFor: ['Indiana employees', 'Indianapolis workers', 'Fort Wayne/Evansville employees'],
    howItWorks: ['Enter your gross salary', 'IN flat 3.05% state rate applied', 'County tax added', 'FICA deducted'],
    deepDive: ['Indiana has low 3.05% state rate but counties add 0.5-3%. Total varies by county. Indianapolis (Marion County) adds about 2%.'],
    examples: ['Entry-Level: Annual $42,000, Net biweekly ~$1,310', 'Indianapolis Professional: Annual $75,000, Net biweekly ~$2,200'],
    expertTips: ['IN has lower state rate than IL', 'Factor in county taxes—they vary significantly'],
    assumptions: ['Based on 2025 Indiana 3.05% + county rates'],
    commonMistakes: ['Forgetting county taxes'],
    faq: [{ question: 'What is Indiana income tax rate?', answer: 'Flat 3.05% state plus county taxes.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Illinois', href: '/usa/paycheck-calculator-illinois' }, { title: 'Paycheck Calculator Ohio', href: '/usa/paycheck-calculator-ohio' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
