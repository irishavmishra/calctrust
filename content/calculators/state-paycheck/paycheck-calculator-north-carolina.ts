import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-north-carolina',
  category: 'state-paycheck',
  title: 'North Carolina Paycheck Calculator',
  subheading: 'Calculate your NC take-home pay. North Carolina uses a flat 4.75% income tax (phasing down).',
  sections: {
    whatThisHelps: ['NC flat 4.75% tax', 'Net pay calculation', 'Compare to no-tax neighbors'],
    whoUsefulFor: ['NC employees', 'Charlotte metro workers', 'Raleigh-Durham area employees'],
    howItWorks: ['Enter your gross salary', 'NC flat 4.75% rate applied', 'FICA deducted'],
    deepDive: ['NC simplified to flat tax, phasing down from 5.25% to 3.99% by 2027. Charlotte and RDU are major tech/finance hubs.'],
    examples: ['Entry-Level: Annual $48,000, Net biweekly ~$1,480', 'Charlotte Professional: Annual $90,000, Net biweekly ~$2,650'],
    expertTips: ['NC tax rates are decreasing annually', 'Compare to SC for border workers'],
    assumptions: ['Based on 2025 NC 4.75% flat rate'],
    commonMistakes: ['Using old higher rate'],
    faq: [{ question: 'What is NC income tax rate?', answer: 'Flat 4.75% (phasing down to 3.99% by 2027).' }],
    relatedCalculators: [{ title: 'Paycheck Calculator South Carolina', href: '/usa/paycheck-calculator-south-carolina' }, { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
