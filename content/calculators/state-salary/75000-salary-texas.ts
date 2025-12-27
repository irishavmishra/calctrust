import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '75000-salary-texas',
  category: 'state-salary',
  title: '$75,000 Salary in Texas',
  subheading: 'Calculate your take-home pay on a $75,000 salary in Texas. No state income tax.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $75K in TX', 'No state tax advantage'],
    whoUsefulFor: ['Texas workers', 'Dallas/Houston/Austin employees'],
    howItWorks: ['$75K salary entered', 'No TX state tax', 'Only federal + FICA'],
    deepDive: ['$75,000 in Texas—no state income tax = ~$4,000+ more per year vs. CA. Growing tech hubs.'],
    examples: ['Annual: $75,000. Take-home: ~$4,900-5,100/month (no state tax).'],
    expertTips: ['TX no income tax is significant', 'Austin/Dallas have growing tech scenes'],
    assumptions: ['2025 federal rates', 'No state tax'],
    faq: [{ question: 'What is $75K take-home in TX?', answer: '~$4,900-5,100/month.' }],
    relatedCalculators: [{ title: '$100K Texas', href: '/usa/100000-salary-texas' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
