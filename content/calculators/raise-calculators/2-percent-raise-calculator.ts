import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '2-percent-raise-calculator',
  category: 'raise-calculators',
  title: '2% Raise Calculator',
  subheading: 'Calculate what a 2% pay raise means for your salary. See your new income after a 2% increase.',
  metaTitle: '2% Raise Calculator — Estimate Your New Salary (2025)',
  metaDescription: 'Calculate your salary after a 2% raise. This calculator estimates annual, monthly, and hourly income changes based on standard assumptions. Educational estimates only.',
  sections: {
    whatThisHelps: ['Calculate salary after 2% raise', 'See monthly and hourly impact'],
    whoUsefulFor: ['Employees receiving annual increases'],
    howItWorks: ['New Salary = Current × 1.02', '$50,000 × 1.02 = $51,000 (+$1,000/year)'],
    deepDive: ['A 2% raise is a common annual increase but may barely keep pace with inflation.'],
    examples: ['$40,000 + 2% = $40,800 (+$800/year)', '$60,000 + 2% = $61,200 (+$1,200/year)', '$100,000 + 2% = $102,000 (+$2,000/year)'],
    expertTips: ['2% is often the baseline—negotiate for 3-5% if performance warrants'],
    assumptions: ['Based on annual salary'],
    faq: [{ question: 'What is a 2% raise on $50,000?', answer: '$51,000 (+$1,000/year).' }],
    relatedCalculators: [{ title: '1% Raise', href: '/usa/1-percent-raise-calculator' }, { title: '3% Raise', href: '/usa/3-percent-raise-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
