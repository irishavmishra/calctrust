import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '12-percent-raise-calculator',
  category: 'raise-calculators',
  title: '12% Raise Calculator',
  subheading: 'Calculate what a 12% pay raise means for your salary.',
  metaTitle: '12% Raise Calculator | Estimate New Salary 2025',
  metaDescription: 'Calculate your salary after a 12% raise. This calculator estimates annual, monthly, and hourly income changes. Educational estimates only.',
  sections: {
    whatThisHelps: ['Calculate salary after 12% raise'],
    whoUsefulFor: ['Employees receiving major compensation changes'],
    howItWorks: ['New Salary = Current × 1.12', '$50,000 × 1.12 = $56,000'],
    deepDive: ['A 12% raise is exceptional—typically for major promotions or high-value retention situations.'],
    examples: ['$40,000 + 12% = $44,800', '$60,000 + 12% = $67,200', '$100,000 + 12% = $112,000'],
    expertTips: ['12% raises are rare—document this for future negotiations'],
    assumptions: ['Based on annual salary'],
    faq: [{ question: 'What is a 12% raise on $50,000?', answer: '$56,000 (+$6,000/year).' }],
    relatedCalculators: [{ title: '10% Raise', href: '/usa/10-percent-raise-calculator' }, { title: '15% Raise', href: '/usa/15-percent-raise-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
