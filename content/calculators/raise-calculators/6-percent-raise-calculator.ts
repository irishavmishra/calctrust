import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '6-percent-raise-calculator',
  category: 'raise-calculators',
  title: '6% Raise Calculator',
  subheading: 'Calculate what a 6% pay raise means for your salary.',
  metaTitle: '6% Raise Calculator | Estimate New Salary 2025',
  metaDescription: 'Calculate your salary after a 6% raise. This calculator estimates annual, monthly, and hourly income changes. Educational estimates only.',
  sections: {
    whatThisHelps: ['Calculate salary after 6% raise'],
    whoUsefulFor: ['Employees receiving significant raises'],
    howItWorks: ['New Salary = Current × 1.06', '$50,000 × 1.06 = $53,000'],
    deepDive: ['A 6% raise is well above average—typical for promotions or market corrections.'],
    examples: ['$40,000 + 6% = $42,400', '$60,000 + 6% = $63,600', '$100,000 + 6% = $106,000'],
    expertTips: ['6% raises often accompany increased responsibilities'],
    assumptions: ['Based on annual salary'],
    faq: [{ question: 'What is a 6% raise on $50,000?', answer: '$53,000 (+$3,000/year).' }],
    relatedCalculators: [{ title: '5% Raise', href: '/usa/5-percent-raise-calculator' }, { title: '7% Raise', href: '/usa/7-percent-raise-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
