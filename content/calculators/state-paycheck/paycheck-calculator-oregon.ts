import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: 'paycheck-calculator-oregon',
  category: 'state-paycheck',
  title: 'Oregon Paycheck Calculator',
  subheading: 'Calculate your Oregon take-home pay. Oregon uses graduated income tax from 4.75% to 9.9% among highest.',
  metaTitle: 'Oregon Paycheck Calculator 2025 | CalcTrust',
  metaDescription: 'Estimate your Oregon take-home pay. This calculator shows net income after federal and state taxes based on standard withholding assumptions.',
  sections: {
    whatThisHelps: ['Oregon graduated tax: 4.75-9.9% rates', 'No sales tax benefit', 'Net pay calculation'],
    whoUsefulFor: ['Oregon employees', 'Portland metro workers', 'Eugene/Salem employees'],
    howItWorks: ['Enter your gross salary', 'OR graduated rates applied', 'FICA deducted', 'Note: No sales tax in Oregon'],
    deepDive: ['Oregon has high income tax (9.9% top) but no sales tax one of five states without. Portland has additional local taxes.'],
    examples: ['Entry-Level: Annual $48,000, Net biweekly ~$1,380', 'Portland Professional: Annual $90,000, Net biweekly ~$2,450'],
    expertTips: ['No sales tax offsets high income tax somewhat', 'WA border workers: live in WA, shop in OR'],
    assumptions: ['Based on 2025 Oregon tax brackets'],
    commonMistakes: ['Not factoring in no sales tax benefit'],
    faq: [{ question: 'What is Oregon income tax rate?', answer: '4.75% to 9.9% graduated.' }, { question: 'Does Oregon have sales tax?', answer: 'No. Oregon has no sales tax.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Washington', href: '/usa/paycheck-calculator-washington' }, { title: 'Take Home Pay Calculator', href: '/usa/take-home-pay-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
