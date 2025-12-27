import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-idaho',
  category: 'state-paycheck',
  title: 'Idaho Paycheck Calculator',
  subheading: 'Calculate your Idaho take-home pay. Idaho uses a flat 5.8% income tax.',
  sections: {
    whatThisHelps: ['Idaho flat 5.8% tax', 'Net pay calculation', 'Mountain West comparison'],
    whoUsefulFor: ['Idaho employees', 'Boise workers', 'Coeur d Alene area employees'],
    howItWorks: ['Enter your gross salary', 'ID flat 5.8% rate applied', 'FICA deducted'],
    deepDive: ['Idaho recently moved to a flat 5.8% rate. Boise is a growing tech hub. Compare to no-tax WY/NV for border workers.'],
    examples: ['Entry-Level: Annual $42,000, Net biweekly ~$1,290', 'Boise Professional: Annual $75,000, Net biweekly ~$2,180'],
    expertTips: ['Idaho is growing rapidly with good job opportunities', 'Compare to WA (no income tax) for Pacific NW workers'],
    assumptions: ['Based on 2025 Idaho 5.8% flat rate'],
    commonMistakes: ['Using old graduated rate structure'],
    faq: [{ question: 'What is Idaho income tax rate?', answer: 'Flat 5.8%.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Washington', href: '/usa/paycheck-calculator-washington' }, { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
