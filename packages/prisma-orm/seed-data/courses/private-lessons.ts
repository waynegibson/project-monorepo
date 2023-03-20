import type { Prisma } from '../../dist'

export const privateLessons: Prisma.CourseCreateInput = {
  title: 'Private Lessons',
  description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
  status: 'ACTIVE',
  slug: 'private-lessons',
  categories: {
    connect: { slug: 'specialised-training' },
  },
  classes: {
    create: [
      {
        title: 'One on One Session',
        description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
        price: { amount: '250', period: '/session', symbol: 'R' },
        duration: '',
        audience: '',
        features: [],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'one-on-one-session',
      },
      {
        title: 'Home Consult',
        description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
        price: { amount: '1500', period: '/consult', symbol: 'R' },
        duration: '',
        audience: '',
        features: [],
        mostPopular: true,
        status: 'ACTIVE',
        slug: 'home-consult',
      },
    ],
  },
}
