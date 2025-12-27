import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '75000-salary-in-ohio',
  category: 'state-salary',
  title: '$75,000 Salary in Ohio',
  subheading: 'Calculate your take-home pay on a $75,000 salary in Ohio.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $75K in OH', 'Calculate OH state + local taxes'],
    whoUsefulFor: ['Ohio workers', 'Columbus/Cleveland/Cincinnati employees'],
    howItWorks: ['$75K salary entered', 'OH state rates + local taxes applied'],
    deepDive: ['$75,000 in Ohio with low state rate but many cities add local tax.'],
    examples: ['Annual: $75,000. Take-home: ~$4,650-4,850/month (varies by city).'],
    expertTips: ['Factor in local city taxes', 'OH state rate is low'],
    assumptions: ['2025 OH state + local rates'],
    faq: [{ question: 'What is $75K take-home in OH?', answer: '~$4,650-4,850/month.' }],
    relatedCalculators: [{ title: '$100K Ohio', href: '/usa/100000-salary-in-ohio' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
