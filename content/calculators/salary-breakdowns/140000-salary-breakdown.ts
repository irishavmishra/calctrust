import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '140000-salary-breakdown',
  category: 'salary-breakdowns',
  title: '$140,000 Salary Breakdown',
  subheading: 'Understand what a $140,000 annual salary means—approximately $67.31/hour.',
  sections: {
    whatThisHelps: ['See $140K hourly rate ($67.31/hour)', 'Calculate monthly take-home'],
    whoUsefulFor: ['Workers earning $140K'],
    howItWorks: ['$140,000 ÷ 2,080 = $67.31/hour', 'Monthly gross: $11,667'],
    deepDive: ['$140,000 annually is high earner territory—top 15% of U.S. incomes.'],
    examples: ['Hourly: $67.31/hour', 'Monthly: $11,667 gross'],
    expertTips: ['Consider advanced tax optimization'],
    assumptions: ['Based on 2,080 hours/year'],
    faq: [{ question: 'How much is $140K per hour?', answer: '$67.31/hour' }],
    relatedCalculators: [{ title: '$130,000 Salary', href: '/usa/130000-salary-breakdown' }, { title: '$150,000 Salary', href: '/usa/150000-salary-breakdown' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
