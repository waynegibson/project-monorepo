import type { Prisma } from '../../dist'

export const mantrailing: Prisma.CourseCreateInput = {
  title: 'Mantrailing Training',
  description: 'Mantrailing is a tracking method that relies on a dog\'s keen sense of smell. The dog follows a person\'s scent from one point to another, allowing the handler to track the individual even over long distances or through rugged terrain. Mantrailing dogs are trained to ignore all other scents and focus solely on the target.',
  status: 'ACTIVE',
  slug: 'mantrailing-training',
  categories: {
    connect: { slug: 'dog-sports' },
  },
  classes: {
    create: [
      {
        title: 'Mantrailing 1',
        description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
        price: { amount: '450', period: '/month', symbol: 'R' },
        duration: 'Monthly',
        audience: '',
        features: [],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'mantrailing-1',
      },
      {
        title: 'Mantrailing 2',
        description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
        price: { amount: '250', period: '/month', symbol: 'R' },
        duration: 'Monthly',
        audience: '',
        features: [],
        mostPopular: true,
        status: 'ACTIVE',
        slug: 'mantrailing-2',
      },
    ],
  },
}
