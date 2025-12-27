import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '5-percent-raise-calculator',
  category: 'raise-calculators',
  title: '5% Raise Calculator',
  subheading: 'Calculate what a 5% pay raise means for your salary—a strong annual increase.',
  sections: {
    whatThisHelps: ['Calculate salary after 5% raise', 'See monthly impact'],
    whoUsefulFor: ['High performers receiving significant raises'],
    howItWorks: ['New Salary = Current × 1.05', '$50,000 × 1.05 = $52,500 (+$2,500/year)'],
    deepDive: ['A 5% raise signals excellent performance or market adjustment. This provides meaningful real wage growth.'],
    examples: ['$40,000 + 5% = $42,000', '$60,000 + 5% = $63,000', '$100,000 + 5% = $105,000'],
    expertTips: ['5% is excellent—ensure responsibilities match compensation growth'],
    assumptions: ['Based on annual salary'],
    faq: [{ question: 'What is a 5% raise on $50,000?', answer: '$52,500 (+$2,500/year).' }],
    relatedCalculators: [{ title: '4% Raise', href: '/usa/4-percent-raise-calculator' }, { title: '6% Raise', href: '/usa/6-percent-raise-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
