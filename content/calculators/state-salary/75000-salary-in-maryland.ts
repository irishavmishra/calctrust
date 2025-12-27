import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '75000-salary-in-maryland',
  category: 'state-salary',
  title: '$75,000 Salary in Maryland',
  subheading: 'Calculate your take-home pay on a $75,000 salary in Maryland.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $75K in MD', 'Calculate MD state + county taxes'],
    whoUsefulFor: ['Maryland workers', 'DC metro (MD side) employees'],
    howItWorks: ['$75K salary entered', 'MD state + county rates applied'],
    deepDive: ['$75,000 in Maryland with state + county taxes. DC commuters often choose MD side.'],
    examples: ['Annual: $75,000. Take-home: ~$4,550-4,750/month.'],
    expertTips: ['Factor in county taxes', 'Compare to VA for DC workers'],
    assumptions: ['2025 MD state + county rates'],
    faq: [{ question: 'What is $75K take-home in MD?', answer: '~$4,550-4,750/month.' }],
    relatedCalculators: [{ title: '$100K Maryland', href: '/usa/100000-salary-in-maryland' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
