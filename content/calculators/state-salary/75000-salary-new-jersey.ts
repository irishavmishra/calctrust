import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '75000-salary-new-jersey',
  category: 'state-salary',
  title: '$75,000 Salary in New Jersey',
  subheading: 'Calculate your take-home pay on a $75,000 salary in New Jersey.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $75K in NJ', 'Calculate NJ graduated taxes'],
    whoUsefulFor: ['NJ workers', 'NYC commuters in NJ'],
    howItWorks: ['$75K salary entered', 'NJ graduated rates applied'],
    deepDive: ['$75,000 in NJ—many NYC commuters live in NJ to avoid NYC local tax.'],
    examples: ['Annual: $75,000. Take-home: ~$4,600-4,800/month.'],
    expertTips: ['NJ residence avoids NYC local tax', 'Compare to PA/CT for NYC commute'],
    assumptions: ['2025 NJ tax brackets'],
    faq: [{ question: 'What is $75K take-home in NJ?', answer: '~$4,600-4,800/month.' }],
    relatedCalculators: [{ title: '$100K New Jersey', href: '/usa/100000-salary-new-jersey' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
