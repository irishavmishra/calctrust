import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-new-mexico',
  category: 'state-paycheck',
  title: 'New Mexico Paycheck Calculator',
  subheading: 'Calculate your New Mexico take-home pay. NM uses graduated income tax from 1.7% to 5.9%.',
  sections: {
    whatThisHelps: ['NM graduated tax: 1.7-5.9% rates', 'Net pay calculation'],
    whoUsefulFor: ['New Mexico employees', 'Albuquerque metro workers', 'Santa Fe area employees'],
    howItWorks: ['Enter your gross salary', 'NM graduated rates applied', 'FICA deducted'],
    deepDive: ['New Mexico has moderate taxes. Remote workers attracted by lower cost of living and favorable tax treatment for retirees.'],
    examples: ['Entry-Level: Annual $40,000, Net biweekly ~$1,280', 'Albuquerque Professional: Annual $70,000, Net biweekly ~$2,100'],
    expertTips: ['NM has moderate taxes and low cost of living', 'Compare to Texas (no income tax) for border workers'],
    assumptions: ['Based on 2025 NM tax brackets'],
    commonMistakes: ['Not comparing to no-tax Texas'],
    faq: [{ question: 'What is NM income tax rate?', answer: '1.7% to 5.9% graduated.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Texas', href: '/usa/paycheck-calculator-texas' }, { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
