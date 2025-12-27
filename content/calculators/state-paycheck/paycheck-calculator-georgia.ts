import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-georgia',
  category: 'state-paycheck',
  title: 'Georgia Paycheck Calculator',
  subheading: 'Calculate your Georgia take-home pay. Georgia uses graduated income tax from 1% to 5.49%.',
  sections: {
    whatThisHelps: ['GA graduated tax: 1-5.49% rates', 'Net pay calculation', 'Southeast comparison'],
    whoUsefulFor: ['Georgia employees', 'Atlanta metro workers', 'Savannah/Augusta employees'],
    howItWorks: ['Enter your gross salary', 'GA graduated rates applied', 'FICA deducted'],
    deepDive: ['Georgia has moderate taxes. Atlanta is a major tech/corporate hub. Compare to FL/TN (no income tax) for neighbors.'],
    examples: ['Entry-Level: Annual $48,000, Net biweekly ~$1,470', 'Atlanta Professional: Annual $90,000, Net biweekly ~$2,650'],
    expertTips: ['GA has lower taxes than many states but more than FL/TN', 'Atlanta cost of living is moderate'],
    assumptions: ['Based on 2025 Georgia tax brackets'],
    commonMistakes: ['Not comparing to no-tax FL/TN'],
    faq: [{ question: 'What is Georgia income tax rate?', answer: '1% to 5.49% graduated.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Florida', href: '/usa/paycheck-calculator-florida' }, { title: 'Paycheck Calculator Tennessee', href: '/usa/paycheck-calculator-tennessee' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
