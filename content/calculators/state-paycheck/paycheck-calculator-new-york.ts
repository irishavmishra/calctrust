import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-new-york',
  category: 'state-paycheck',
  title: 'New York Paycheck Calculator',
  subheading: 'Calculate your New York take-home pay. NY uses graduated income tax from 4% to 10.9% plus NYC local tax.',
  sections: {
    whatThisHelps: ['NY graduated tax: 4-10.9% rates', 'NYC local tax: Additional 3.078-3.876%', 'Net pay calculation'],
    whoUsefulFor: ['New York employees', 'NYC residents', 'Upstate NY workers'],
    howItWorks: ['Enter your gross salary', 'NY state rates applied', 'NYC local tax if applicable', 'FICA deducted'],
    deepDive: ['NYC residents pay state + city tax (combined up to 14.7%). Many high earners live in NJ/CT to avoid NYC local tax.'],
    examples: ['Entry-Level NYC: Annual $60,000, Net biweekly ~$1,700', 'NYC Professional: Annual $120,000, Net biweekly ~$3,200'],
    expertTips: ['NYC local tax is significant—NJ residence can save thousands', 'Yonkers has 16.75% surcharge on NY tax'],
    assumptions: ['Based on 2025 NY state + NYC local rates'],
    commonMistakes: ['Forgetting NYC local tax for city residents', 'Not comparing to NJ/CT residence'],
    faq: [{ question: 'What is NY income tax rate?', answer: '4% to 10.9% state. NYC adds 3.078-3.876%.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator New Jersey', href: '/usa/paycheck-calculator-new-jersey' }, { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
