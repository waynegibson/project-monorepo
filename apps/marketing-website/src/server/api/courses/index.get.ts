import type { Prisma } from '@project/prisma-orm'
import { prisma } from '@project/prisma-orm'
import cache from '../../utils/cache-server-request'

const courseSelect = {
  title: true,
  description: true,
  slug: true,
} satisfies Prisma.CourseSelect

export type CoursePayload = Prisma.CourseGetPayload<{ select: typeof courseSelect }>

export default defineEventHandler(
  async (_): Promise<CoursePayload[]> => {
    const fetchCourses = async () => {
      const courses = await prisma.course.findMany({
        where: { status: 'ACTIVE' },
        select: courseSelect,
      })

      if (!courses.length) {
        throw createError({
          statusCode: 404,
          statusMessage: 'No courses found.',
        })
      }

      return courses
    }

    const cachedCourses = await cache.fetch('courses:all', fetchCourses)

    return cachedCourses
  },
)
