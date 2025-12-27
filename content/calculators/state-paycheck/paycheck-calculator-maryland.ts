import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-maryland',
  category: 'state-paycheck',
  title: 'Maryland Paycheck Calculator',
  subheading: 'Calculate your Maryland take-home pay. Maryland uses graduated income tax from 2% to 5.75% plus local county taxes.',
  sections: {
    whatThisHelps: ['Maryland graduated tax: 2-5.75% rates', 'County taxes: Additional 2.25-3.2% depending on county', 'Net pay calculation'],
    whoUsefulFor: ['Maryland employees', 'DC metro workers in Maryland', 'Baltimore area employees'],
    howItWorks: ['Enter your gross salary', 'Maryland state rates applied', 'County taxes added', 'FICA deducted'],
    deepDive: ['Maryland has both state and county income taxes. Counties range from 2.25% (Worcester) to 3.2% (multiple counties).', 'DC workers living in MD pay MD taxes, not DC.'],
    examples: ['Entry-Level: Annual $45,000, Net biweekly ~$1,350', 'Baltimore Professional: Annual $85,000, Net biweekly ~$2,400'],
    expertTips: ['Factor in county tax—varies significantly', 'Compare to Virginia for DC commuters'],
    assumptions: ['Based on 2025 Maryland state + county rates'],
    commonMistakes: ['Forgetting county taxes', 'Not comparing to VA/DC'],
    faq: [{ question: 'What is Maryland income tax rate?', answer: '2% to 5.75% state plus 2.25-3.2% county.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Virginia', href: '/usa/paycheck-calculator-virginia' }, { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
