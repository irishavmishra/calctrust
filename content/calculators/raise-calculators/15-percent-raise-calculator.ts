import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '15-percent-raise-calculator',
  category: 'raise-calculators',
  title: '15% Raise Calculator',
  subheading: 'Calculate what a 15% pay raise means for your salary—a major increase.',
  metaTitle: '15% Raise Calculator | Estimate New Salary 2025',
  metaDescription: 'Calculate your salary after a 15% raise. This calculator estimates annual, monthly, and hourly income changes. Educational estimates only.',
  sections: {
    whatThisHelps: ['Calculate salary after 15% raise'],
    whoUsefulFor: ['Employees receiving significant promotions'],
    howItWorks: ['New Salary = Current × 1.15', '$50,000 × 1.15 = $57,500'],
    deepDive: ['A 15% raise is substantial—typically for role changes, promotions to management, or competitive counter-offers.'],
    examples: ['$40,000 + 15% = $46,000', '$60,000 + 15% = $69,000', '$100,000 + 15% = $115,000'],
    expertTips: ['15% raises often accompany major responsibility changes'],
    assumptions: ['Based on annual salary'],
    faq: [{ question: 'What is a 15% raise on $50,000?', answer: '$57,500 (+$7,500/year).' }],
    relatedCalculators: [{ title: '12% Raise', href: '/usa/12-percent-raise-calculator' }, { title: '20% Raise', href: '/usa/20-percent-raise-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
