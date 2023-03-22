import type { Prisma } from '@project/prisma-orm'
import { prisma } from '@project/prisma-orm'

const courseSelect = {
  title: true,
  description: true,
  status: true,
  slug: true,
} satisfies Prisma.CourseSelect

export type CoursePayload = Prisma.CourseGetPayload<{ select: typeof courseSelect }>

export default defineEventHandler(
  async (_): Promise<CoursePayload[]> => {
    const cache = await useStorage('db').getItem('courses:all')

    if (!cache) {
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

      await useStorage('db').setItem('courses:all', courses)

      return courses
    }
    else {
      return cache as CoursePayload[]
    }
  },
)
