import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '100000-salary-in-ohio',
  category: 'state-salary',
  title: '$100,000 Salary in Ohio',
  subheading: 'Calculate your take-home pay on a $100,000 salary in Ohio.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $100K in OH', 'Calculate OH state + local taxes'],
    whoUsefulFor: ['Ohio professionals', 'Columbus/Cleveland/Cincinnati workers'],
    howItWorks: ['$100K salary entered', 'OH state rates + local taxes applied'],
    deepDive: ['$100,000 in Ohio with low state rate but many cities add local tax.'],
    examples: ['Annual: $100,000. Take-home: ~$6,100-6,400/month (varies by city).'],
    expertTips: ['Factor in local city taxes', 'OH state rate is low'],
    assumptions: ['2025 OH state + local rates'],
    faq: [{ question: 'What is $100K take-home in OH?', answer: '~$6,100-6,400/month.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Ohio', href: '/usa/paycheck-calculator-ohio' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
