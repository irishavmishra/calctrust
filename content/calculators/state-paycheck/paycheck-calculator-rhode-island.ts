import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-rhode-island',
  category: 'state-paycheck',
  title: 'Rhode Island Paycheck Calculator',
  subheading: 'Calculate your RI take-home pay. Rhode Island uses graduated income tax from 3.75% to 5.99%.',
  sections: {
    whatThisHelps: ['RI graduated tax: 3.75-5.99% rates', 'Net pay calculation', 'New England comparison'],
    whoUsefulFor: ['Rhode Island employees', 'Providence metro workers'],
    howItWorks: ['Enter your gross salary', 'RI graduated rates applied', 'FICA deducted'],
    deepDive: ['Rhode Island has moderate taxes compared to CT/MA neighbors. Providence is a growing tech hub.'],
    examples: ['Entry-Level: Annual $45,000, Net biweekly ~$1,380', 'Providence Professional: Annual $80,000, Net biweekly ~$2,350'],
    expertTips: ['RI taxes lower than MA/CT', 'Compare to NH for lowest New England taxes'],
    assumptions: ['Based on 2025 RI tax brackets'],
    commonMistakes: ['Not comparing to lower-tax NH'],
    faq: [{ question: 'What is RI income tax rate?', answer: '3.75% to 5.99% graduated.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Massachusetts', href: '/usa/paycheck-calculator-massachusetts' }, { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
