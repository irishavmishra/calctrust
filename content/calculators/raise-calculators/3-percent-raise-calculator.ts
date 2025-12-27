import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '3-percent-raise-calculator',
  category: 'raise-calculators',
  title: '3% Raise Calculator',
  subheading: 'Calculate what a 3% pay raise means for your salary—the typical annual merit increase.',
  sections: {
    whatThisHelps: ['Calculate salary after 3% raise', 'See monthly impact'],
    whoUsefulFor: ['Employees receiving merit increases'],
    howItWorks: ['New Salary = Current × 1.03', '$50,000 × 1.03 = $51,500 (+$1,500/year)'],
    deepDive: ['A 3% raise is generally considered a standard merit increase that keeps pace with inflation while providing modest real growth.'],
    examples: ['$40,000 + 3% = $41,200 (+$1,200/year)', '$60,000 + 3% = $61,800 (+$1,800/year)', '$100,000 + 3% = $103,000 (+$3,000/year)'],
    expertTips: ['3% is the national average annual raise—push for 4-5% if exceeding expectations'],
    assumptions: ['Based on annual salary'],
    faq: [{ question: 'What is a 3% raise on $50,000?', answer: '$51,500 (+$1,500/year).' }],
    relatedCalculators: [{ title: '2% Raise', href: '/usa/2-percent-raise-calculator' }, { title: '4% Raise', href: '/usa/4-percent-raise-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
