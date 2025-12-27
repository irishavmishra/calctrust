import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '50000-salary-in-washington',
  category: 'state-salary',
  title: '$50,000 Salary in Washington',
  subheading: 'Calculate your take-home pay on a $50,000 salary in Washington. No state income tax.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $50K in WA', 'No state tax advantage'],
    whoUsefulFor: ['Washington workers', 'Seattle metro employees'],
    howItWorks: ['$50K salary entered', 'No WA state tax', 'Only federal + FICA'],
    deepDive: ['$50,000 in Washington—no state income tax is huge vs. OR (9.9%) and CA (13.3%). Seattle has high costs but no tax.'],
    examples: ['Annual: $50,000. Take-home: ~$3,400-3,600/month (no state tax).'],
    expertTips: ['WA no income tax = huge savings vs OR/CA', 'Seattle has high cost but no state tax'],
    assumptions: ['2025 federal rates', 'No state tax'],
    faq: [{ question: 'What is $50K take-home in WA?', answer: '~$3,400-3,600/month.' }],
    relatedCalculators: [{ title: '$75K Washington', href: '/usa/75000-salary-in-washington' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
