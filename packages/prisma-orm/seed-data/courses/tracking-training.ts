import type { Prisma } from '../../dist'

export const tracking: Prisma.CourseCreateInput = {
  title: 'Tracking Training',
  description: 'We train a dog to follow a particular human\'s scent pattern wherever it might lie on the ground or in the air rather than following a specific set of tracks.',
  status: 'ACTIVE',
  slug: 'tracking-training',
  categories: {
    connect: { slug: 'dog-sports' },
  },
  classes: {
    create: [
      {
        title: 'Tracking 1',
        description: 'Your dog is taught to follow a scent track left by the person that they are tracking.',
        price: { amount: '450', period: '/month', symbol: 'R' },
        duration: '',
        audience: '',
        features: [],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'tracking-1',
      },
      {
        title: 'Tracking 2',
        description: 'Your dog is taught to follow a scent track left by the person that they are tracking.',
        price: { amount: '250', period: '/month', symbol: 'R' },
        duration: '',
        audience: '',
        features: [],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'tracking-2',
      },
    ],
  },
}
