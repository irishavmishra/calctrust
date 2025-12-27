import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-south-carolina',
  category: 'state-paycheck',
  title: 'South Carolina Paycheck Calculator',
  subheading: 'Calculate your SC take-home pay. South Carolina uses graduated income tax from 0% to 6.2%.',
  metaTitle: 'South Carolina Paycheck Calculator 2025 | CalcTrust',
  metaDescription: 'Estimate your South Carolina take-home pay. This calculator shows net income after federal and state taxes based on standard withholding assumptions.',
  sections: {
    whatThisHelps: ['SC graduated tax: 0-6.2% rates', 'Net pay calculation'],
    whoUsefulFor: ['SC employees', 'Charleston workers', 'Greenville/Columbia area employees'],
    howItWorks: ['Enter your gross salary', 'SC graduated rates applied', 'FICA deducted'],
    deepDive: ['SC has moderate taxes with top rate 6.2%. Charleston and Greenville are growing tech/manufacturing hubs.'],
    examples: ['Entry-Level: Annual $42,000, Net biweekly ~$1,300', 'Charleston Professional: Annual $75,000, Net biweekly ~$2,180'],
    expertTips: ['SC has moderate taxes and growing job market', 'Compare to NC for regional comparison'],
    assumptions: ['Based on 2025 SC tax brackets'],
    commonMistakes: ['Expecting NC-like flat tax'],
    faq: [{ question: 'What is SC income tax rate?', answer: '0% to 6.2% graduated.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator North Carolina', href: '/usa/paycheck-calculator-north-carolina' }, { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
