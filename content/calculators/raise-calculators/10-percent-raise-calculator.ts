import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '10-percent-raise-calculator',
  category: 'raise-calculators',
  title: '10% Raise Calculator',
  subheading: 'Calculate what a 10% pay raise means for your salary—a significant increase.',
  metaTitle: '10% Raise Calculator | Estimate New Salary 2025',
  metaDescription: 'Calculate your salary after a 10% raise. This calculator estimates annual, monthly, and hourly income changes. Educational estimates only.',
  sections: {
    whatThisHelps: ['Calculate salary after 10% raise'],
    whoUsefulFor: ['Employees receiving major raises or promotions'],
    howItWorks: ['New Salary = Current × 1.10', '$50,000 × 1.10 = $55,000'],
    deepDive: ['A 10% raise is significant—usually tied to promotions, new roles, or competitive counters. This substantially outpaces inflation.'],
    examples: ['$40,000 + 10% = $44,000', '$60,000 + 10% = $66,000', '$100,000 + 10% = $110,000'],
    expertTips: ['10% raises typically accompany promotions—ensure new title reflects compensation'],
    assumptions: ['Based on annual salary'],
    faq: [{ question: 'What is a 10% raise on $50,000?', answer: '$55,000 (+$5,000/year).' }],
    relatedCalculators: [{ title: '8% Raise', href: '/usa/8-percent-raise-calculator' }, { title: '12% Raise', href: '/usa/12-percent-raise-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
