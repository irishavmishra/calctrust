import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-louisiana',
  category: 'state-paycheck',
  title: 'Louisiana Paycheck Calculator',
  subheading: 'Calculate your Louisiana take-home pay. Louisiana uses graduated income tax from 1.85% to 4.25%.',
  metaTitle: 'Louisiana Paycheck Calculator 2025 | CalcTrust',
  metaDescription: 'Estimate your Louisiana take-home pay. This calculator shows net income after federal and state taxes based on standard withholding assumptions.',
  sections: {
    whatThisHelps: [
      'Louisiana graduated tax: 1.85-4.25% rates',
      'Federal tax deduction: Louisiana allows this unique benefit',
      'Net pay calculation: Determine actual take-home',
    ],
    whoUsefulFor: [
      'Louisiana employees verifying paychecks',
      'New Orleans metro workers',
      'Baton Rouge area employees',
    ],
    howItWorks: [
      'Enter your gross salary',
      'Louisiana graduated rates applied',
      'Federal tax can be deducted from state taxable income',
    ],
    deepDive: [
      '2025 Louisiana rates: 1.85% on first $12,500, 3.5% on $12,501-$50,000, 4.25% over $50,000.',
      'Louisiana is one of three states allowing federal tax deduction from state income.',
    ],
    examples: [
      'Entry-Level: Annual $40,000, Net biweekly ~$1,290',
      'New Orleans Professional: Annual $75,000, Net biweekly ~$2,250',
    ],
    expertTips: [
      'Claim federal tax deduction to reduce Louisiana state burden',
      'Louisiana has relatively low state taxes compared to many states',
    ],
    assumptions: ['Based on 2025 Louisiana tax brackets', 'Federal deduction applied'],
    commonMistakes: ['Forgetting Louisiana allows federal tax deduction'],
    faq: [{ question: 'What is Louisiana income tax rate?', answer: '1.85% to 4.25% graduated.' }],
    relatedCalculators: [
      { title: 'Paycheck Calculator Texas', href: '/usa/paycheck-calculator-texas' },
      { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' },
    ],
    freshnessSignal: 'December 2025',
  },
};

export default content;
