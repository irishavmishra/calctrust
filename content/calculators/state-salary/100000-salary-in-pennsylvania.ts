import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '100000-salary-in-pennsylvania',
  category: 'state-salary',
  title: '$100,000 Salary in Pennsylvania',
  subheading: 'Calculate your take-home pay on a $100,000 salary in Pennsylvania.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $100K in PA', 'Calculate PA flat 3.07% + local taxes'],
    whoUsefulFor: ['PA professionals', 'Philadelphia/Pittsburgh workers'],
    howItWorks: ['$100K salary entered', 'PA flat 3.07% + local taxes applied'],
    deepDive: ['$100,000 in PA with low 3.07% state rate but Philadelphia adds 3.75% wage tax.'],
    examples: ['Annual: $100,000. Take-home: ~$6,200-6,500/month (varies by city).'],
    expertTips: ['PA state rate is low but Philly/PGH add local taxes'],
    assumptions: ['2025 PA 3.07% + local rates'],
    faq: [{ question: 'What is $100K take-home in PA?', answer: '~$6,200-6,500/month.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Pennsylvania', href: '/usa/paycheck-calculator-pennsylvania' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
