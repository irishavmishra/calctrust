import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '100000-salary-in-california',
  category: 'state-salary',
  title: '$100,000 Salary in California',
  subheading: 'Calculate your take-home pay on a $100,000 salary in California.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $100K in CA', 'Calculate CA graduated taxes'],
    whoUsefulFor: ['California tech workers', 'Bay Area/LA professionals'],
    howItWorks: ['$100K salary entered', 'CA graduated rates applied'],
    deepDive: ['$100,000 in California is competitive but cost of living is high. ~$48/hour. Expect ~$6,000-6,500/month take-home.'],
    examples: ['Annual: $100,000. Take-home: ~$6,000-6,500/month.'],
    expertTips: ['$100K is solid but challenging in Bay Area', 'Central Valley is more affordable'],
    assumptions: ['2025 CA tax brackets'],
    faq: [{ question: 'What is $100K take-home in CA?', answer: '~$6,000-6,500/month.' }],
    relatedCalculators: [{ title: '$120K California', href: '/usa/120000-salary-in-california' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
