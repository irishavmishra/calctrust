import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-new-hampshire',
  category: 'state-paycheck',
  title: 'New Hampshire Paycheck Calculator',
  subheading: 'Calculate your New Hampshire take-home pay. New Hampshire has NO income tax on wages—only interest/dividends.',
  metaTitle: 'New Hampshire Paycheck Calculator 2025 | CalcTrust',
  metaDescription: 'Estimate your New Hampshire take-home pay. This calculator shows net income after federal and state taxes based on standard withholding assumptions.',
  sections: {
    whatThisHelps: ['NH: No income tax on wages', 'Full federal + FICA only', 'New England tax advantage'],
    whoUsefulFor: ['New Hampshire employees', 'Boston commuters living in NH', 'Manchester area workers'],
    howItWorks: ['Enter your gross salary', 'No state wage tax deduction', 'Only federal + FICA deducted'],
    deepDive: ['NH has no tax on wages (only 4% on interest/dividends, phasing out by 2027). Many Boston workers live in NH to avoid MA 5% tax.'],
    examples: ['Entry-Level: Annual $50,000, Net biweekly ~$1,580', 'NH Professional: Annual $95,000, Net biweekly ~$2,880'],
    expertTips: ['Live in NH, work in MA = significant tax savings', 'I&D tax phasing out by 2027'],
    assumptions: ['Based on 2025 federal rates (NH has no wage tax)'],
    commonMistakes: ['Thinking NH has no taxes at all (it has property tax and I&D)'],
    faq: [{ question: 'Does New Hampshire have income tax?', answer: 'No tax on wages. 4% on interest/dividends (phasing out).' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Massachusetts', href: '/usa/paycheck-calculator-massachusetts' }, { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
