import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '75000-salary-california',
  category: 'state-salary',
  title: '$75,000 Salary in California',
  subheading: 'Calculate your take-home pay on a $75,000 salary in California.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $75K in CA', 'Calculate CA graduated taxes'],
    whoUsefulFor: ['California workers', 'Bay Area/LA employees'],
    howItWorks: ['$75K salary entered', 'CA graduated rates applied'],
    deepDive: ['$75,000 in California is middle-class income. ~$36/hour. Coastal metros are expensive but Central Valley is affordable.'],
    examples: ['Annual: $75,000. Take-home: ~$4,600-4,850/month.'],
    expertTips: ['$75K is challenging in SF/LA', 'Consider inland areas for better value'],
    assumptions: ['2025 CA tax brackets'],
    faq: [{ question: 'What is $75K take-home in CA?', answer: '~$4,600-4,850/month.' }],
    relatedCalculators: [{ title: '$100K California', href: '/usa/100000-salary-california' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
