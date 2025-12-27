import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '8-percent-raise-calculator',
  category: 'raise-calculators',
  title: '8% Raise Calculator',
  subheading: 'Calculate what an 8% pay raise means for your salary.',
  metaTitle: '8% Raise Calculator | Estimate New Salary 2025',
  metaDescription: 'Calculate your salary after a 8% raise. This calculator estimates annual, monthly, and hourly income changes. Educational estimates only.',
  sections: {
    whatThisHelps: ['Calculate salary after 8% raise'],
    whoUsefulFor: ['Employees receiving exceptional raises'],
    howItWorks: ['New Salary = Current × 1.08', '$50,000 × 1.08 = $54,000'],
    deepDive: ['An 8% raise is well above typical—usually for promotions or retention counters.'],
    examples: ['$40,000 + 8% = $43,200', '$60,000 + 8% = $64,800', '$100,000 + 8% = $108,000'],
    expertTips: ['8% raises signal you are highly valued—leverage this in negotiations'],
    assumptions: ['Based on annual salary'],
    faq: [{ question: 'What is an 8% raise on $50,000?', answer: '$54,000 (+$4,000/year).' }],
    relatedCalculators: [{ title: '7% Raise', href: '/usa/7-percent-raise-calculator' }, { title: '10% Raise', href: '/usa/10-percent-raise-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
