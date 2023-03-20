import type { Prisma } from '../../dist'

export const intermediate: Prisma.CourseCreateInput = {
  title: 'Intermediate Training',
  description: 'Once you have graduated Basic Home Obedience Three, we build the next level of skill. Honing-in and perfecting your obedience commands will give your dog key skills to obeying and fully develop obedience commands.',
  status: 'ACTIVE',
  slug: 'intermediate-training',
  categories: {
    connect: { slug: 'intermediate-training' },
  },
  classes: {
    create: [
      {
        title: 'Intermediate 1',
        description: 'We focus on perfecting your relationship with your dog.',
        price: { amount: '385', period: '/month', symbol: 'R' },
        duration: '12 weeks',
        audience: 'Requirement completion of BHO3',
        features: [
          'Requirement completion of BHO3',
          'Graduation Certificate',
        ],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'intermediate-1',
      },
      {
        title: 'Intermediate 2',
        description: 'We focus on perfecting your relationship with your dog.',
        price: { amount: '385', period: '/month', symbol: 'R' },
        duration: 'Until Graduation',
        audience: 'Requirement completion of BHO1',
        features: [
          'Requirement completion of Inter 1',
          'Graduation Certificate',
        ],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'intermediate-2',
      },
      {
        title: 'Intermediate 3',
        description: 'We focus on perfecting your relationship with your dog.',
        price: { amount: '385', period: '/month', symbol: 'R' },
        duration: 'Until Graduation',
        audience: 'Requirement completion of BHO3',
        features: [
          'Requirement completion of Inter 2',
          'Graduation Certificate',
        ],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'intermediate-3',
      },
      {
        title: 'Intermediate 4',
        description: 'We focus on perfecting your relationship with your dog.',
        price: { amount: '385', period: '/month', symbol: 'R' },
        duration: 'Until Graduation',
        audience: 'Requirement completion of BHO1',
        features: [
          'Requirement completion of Inter 3',
          'Graduation Certificate',
        ],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'intermediate-4',
      },
    ],
  },
}
