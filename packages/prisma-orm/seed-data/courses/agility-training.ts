import type { Prisma } from '../../dist'

export const agility: Prisma.CourseCreateInput = {
  title: 'Agility Training',
  description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
  status: 'ACTIVE',
  slug: 'agility-training',
  categories: {
    connect: { slug: 'agility-training' },
  },
  classes: {
    create: [
      {
        title: 'Agility 1',
        description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
        price: { amount: '450', period: '/month', symbol: 'R' },
        duration: 'Monthly',
        audience: '',
        features: [],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'agility-1',
      },
      {
        title: 'Agility 2',
        description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
        price: { amount: '250', period: '/month', symbol: 'R' },
        duration: 'Monthly',
        audience: '',
        features: [],
        mostPopular: true,
        status: 'ACTIVE',
        slug: 'agility-2',
      },
    ],
  },
}
