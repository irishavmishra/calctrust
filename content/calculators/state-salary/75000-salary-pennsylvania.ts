import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '75000-salary-pennsylvania',
  category: 'state-salary',
  title: '$75,000 Salary in Pennsylvania',
  subheading: 'Calculate your take-home pay on a $75,000 salary in Pennsylvania.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $75K in PA', 'Calculate PA flat 3.07% + local taxes'],
    whoUsefulFor: ['PA workers', 'Philadelphia/Pittsburgh employees'],
    howItWorks: ['$75K salary entered', 'PA flat 3.07% + local taxes applied'],
    deepDive: ['$75,000 in PA with low 3.07% state rate but Philadelphia adds 3.75% wage tax.'],
    examples: ['Annual: $75,000. Take-home: ~$4,700-4,900/month (varies by city).'],
    expertTips: ['PA state rate is low but Philly/PGH add local taxes'],
    assumptions: ['2025 PA 3.07% + local rates'],
    faq: [{ question: 'What is $75K take-home in PA?', answer: '~$4,700-4,900/month.' }],
    relatedCalculators: [{ title: '$100K Pennsylvania', href: '/usa/100000-salary-pennsylvania' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
