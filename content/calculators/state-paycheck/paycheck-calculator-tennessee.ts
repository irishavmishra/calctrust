import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-tennessee',
  category: 'state-paycheck',
  title: 'Tennessee Paycheck Calculator',
  subheading: 'Calculate your TN take-home pay. Tennessee has NO state income tax on wages—keep more of your paycheck.',
  sections: {
    whatThisHelps: ['TN: No income tax on wages', 'Full federal + FICA only', 'Southeast tax advantage'],
    whoUsefulFor: ['Tennessee employees', 'Nashville workers', 'Memphis/Knoxville area employees'],
    howItWorks: ['Enter your gross salary', 'No state wage tax deduction', 'Only federal + FICA deducted'],
    deepDive: ['Tennessee has no income tax on wages. Nashville is a booming tech/healthcare hub with high salaries and no state tax.'],
    examples: ['Entry-Level: Annual $48,000, Net biweekly ~$1,540', 'Nashville Professional: Annual $90,000, Net biweekly ~$2,780'],
    expertTips: ['No income tax + growing job market = excellent value', 'Compare salary to KY/GA (have income tax)'],
    assumptions: ['Based on 2025 federal rates (TN has no wage tax)'],
    commonMistakes: ['Not factoring in no tax when comparing offers'],
    faq: [{ question: 'Does Tennessee have income tax?', answer: 'No tax on wages. TN eliminated its Hall Tax in 2021.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Kentucky', href: '/usa/paycheck-calculator-kentucky' }, { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
