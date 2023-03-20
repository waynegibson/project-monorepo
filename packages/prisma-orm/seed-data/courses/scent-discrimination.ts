import type { Prisma } from '../../dist'

export const scentDiscrimination: Prisma.CourseCreateInput = {
  title: 'Scent Discrimination',
  description: 'Scent discrimination is for dogs who love to use their nose. We train dogs to discriminate from narcotics to explosives and everything in between.',
  status: 'ACTIVE',
  slug: 'scent-discrimination',
  categories: {
    connect: { slug: 'dog-sports' },
  },
  classes: {
    create: [
      {
        title: 'Scent Discrimination 1',
        description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
        price: { amount: '450', period: '/month', symbol: 'R' },
        duration: 'Monthly',
        audience: '',
        features: [],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'scent-discrimination-1',
      },
      {
        title: 'Scent Discrimination 2',
        description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
        price: { amount: '250', period: '/month', symbol: 'R' },
        duration: 'Monthly',
        audience: '',
        features: [],
        mostPopular: true,
        status: 'ACTIVE',
        slug: 'scent-discrimination-2',
      },
    ],
  },
}
