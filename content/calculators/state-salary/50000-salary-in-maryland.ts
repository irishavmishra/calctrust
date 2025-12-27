import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '50000-salary-in-maryland',
  category: 'state-salary',
  title: '$50,000 Salary in Maryland',
  subheading: 'Calculate your take-home pay on a $50,000 salary in Maryland.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $50K in MD', 'Calculate MD state + county taxes'],
    whoUsefulFor: ['Maryland workers', 'DC metro (MD side) employees'],
    howItWorks: ['$50K salary entered', 'MD state + county rates applied'],
    deepDive: ['$50,000 in Maryland with state tax plus county taxes. DC commuters often live in MD.'],
    examples: ['Annual: $50,000. Take-home: ~$3,100-3,300/month.'],
    expertTips: ['Factor in county taxes', 'Compare to VA for DC workers'],
    assumptions: ['2025 MD state + county rates'],
    faq: [{ question: 'What is $50K take-home in MD?', answer: '~$3,100-3,300/month.' }],
    relatedCalculators: [{ title: '$75K Maryland', href: '/usa/75000-salary-in-maryland' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
