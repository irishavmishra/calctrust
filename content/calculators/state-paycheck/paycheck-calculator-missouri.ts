import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-missouri',
  category: 'state-paycheck',
  title: 'Missouri Paycheck Calculator',
  subheading: 'Calculate your Missouri take-home pay. Missouri uses graduated income tax from 2% to 4.8%.',
  metaTitle: 'Missouri Paycheck Calculator 2025 | CalcTrust',
  metaDescription: 'Estimate your Missouri take-home pay. This calculator shows net income after federal and state taxes based on standard withholding assumptions.',
  sections: {
    whatThisHelps: ['Missouri graduated tax: 2-4.8% rates', 'Net pay calculation', 'KC metro comparison'],
    whoUsefulFor: ['Missouri employees', 'St. Louis metro workers', 'Kansas City (MO side) employees'],
    howItWorks: ['Enter your gross salary', 'MO graduated rates applied', 'FICA deducted'],
    deepDive: ['Missouri rates are 2% on first $1,207 up to 4.8% on income over $8,449. KC straddles MO/KS border with different tax implications.'],
    examples: ['Entry-Level: Annual $42,000, Net biweekly ~$1,330', 'STL Professional: Annual $75,000, Net biweekly ~$2,220'],
    expertTips: ['KC metro: MO vs KS side has different taxes', 'Missouri is relatively tax-friendly'],
    assumptions: ['Based on 2025 Missouri tax brackets'],
    commonMistakes: ['Not comparing KC MO vs KS sides'],
    faq: [{ question: 'What is Missouri income tax rate?', answer: '2% to 4.8% graduated.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Kansas', href: '/usa/paycheck-calculator-kansas' }, { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
