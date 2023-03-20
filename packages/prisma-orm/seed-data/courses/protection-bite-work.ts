import type { Prisma } from '../../dist'

export const protectionWork: Prisma.CourseCreateInput = {
  title: 'Protection & Bite work',
  description: 'We teach your dog to protect you and your family through positive reinforcement and play.',
  status: 'ACTIVE',
  slug: 'protection-and-bite-work',
  categories: {
    connect: { slug: 'dog-sports' },
  },
  classes: {
    create: [
      {
        title: 'Protection & Bite Work 1',
        description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
        price: { amount: '250', period: '/month', symbol: 'R' },
        duration: 'Monthly',
        audience: '',
        features: [],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'protection-and-bite-work-1',
      },
      {
        title: 'Protection & Bite Work 2',
        description: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis.',
        price: { amount: '250', period: '/month', symbol: 'R' },
        duration: 'Monthly',
        audience: '',
        features: [],
        mostPopular: false,
        status: 'ACTIVE',
        slug: 'protection-and-bite-work-2',
      },
    ],
  },
}
