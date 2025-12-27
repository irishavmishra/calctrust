import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '7-percent-raise-calculator',
  category: 'raise-calculators',
  title: '7% Raise Calculator',
  subheading: 'Calculate what a 7% pay raise means for your salary.',
  sections: {
    whatThisHelps: ['Calculate salary after 7% raise'],
    whoUsefulFor: ['Employees receiving large raises'],
    howItWorks: ['New Salary = Current × 1.07', '$50,000 × 1.07 = $53,500'],
    deepDive: ['A 7% raise is exceptional—often tied to promotions or retention offers.'],
    examples: ['$40,000 + 7% = $42,800', '$60,000 + 7% = $64,200', '$100,000 + 7% = $107,000'],
    expertTips: ['7% raises typically accompany title or role changes'],
    assumptions: ['Based on annual salary'],
    faq: [{ question: 'What is a 7% raise on $50,000?', answer: '$53,500 (+$3,500/year).' }],
    relatedCalculators: [{ title: '6% Raise', href: '/usa/6-percent-raise-calculator' }, { title: '8% Raise', href: '/usa/8-percent-raise-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
