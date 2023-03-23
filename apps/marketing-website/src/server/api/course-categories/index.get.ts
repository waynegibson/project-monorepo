import type { Prisma } from '@project/prisma-orm'
import { prisma } from '@project/prisma-orm'
import cache from '../../cache'

const courseCategorySelect = {
  name: true,
  eyebrow: true,
  badge: true,
  excerpt: true,
  description: true,
  link: true,
  slug: true,
} satisfies Prisma.CourseCategorySelect

export type CourseCategoryPayload = Prisma.CourseCategoryGetPayload<{ select: typeof courseCategorySelect }>

export default defineEventHandler(
  async (_): Promise<CourseCategoryPayload[]> => {
    const fetcher = async () => {
      const categories = await prisma.courseCategory.findMany({
        select: courseCategorySelect,
      })

      if (!categories.length) {
        throw createError({
          statusCode: 404,
          statusMessage: 'No course categories found.',
        })
      }

      return categories
    }

    const cachedCourseCategories = await cache.fetch('course:categories:all', fetcher, { ttl: 60 * 24 * 7 * 60 }) // cache 1 week in seconds 604800

    return cachedCourseCategories
  },
)
