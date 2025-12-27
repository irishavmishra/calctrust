import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '150000-salary-breakdown',
  category: 'salary-breakdowns',
  title: '$150,000 Salary Breakdown',
  subheading: 'Understand what a $150,000 annual salary means—approximately $72.12/hour.',
  sections: {
    whatThisHelps: ['See $150K hourly rate ($72.12/hour)', 'Calculate monthly take-home'],
    whoUsefulFor: ['Workers earning $150K'],
    howItWorks: ['$150,000 ÷ 2,080 = $72.12/hour', 'Monthly gross: $12,500'],
    deepDive: ['$150,000 annually is high earner territory—top 10% of U.S. incomes.'],
    examples: ['Hourly: $72.12/hour', 'Monthly: $12,500 gross'],
    expertTips: ['At $72/hour, comprehensive financial planning essential'],
    assumptions: ['Based on 2,080 hours/year'],
    faq: [{ question: 'How much is $150K per hour?', answer: '$72.12/hour' }],
    relatedCalculators: [{ title: '$140,000 Salary', href: '/usa/140000-salary-breakdown' }, { title: '$175,000 Salary', href: '/usa/175000-salary-breakdown' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
