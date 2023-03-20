import type { Prisma } from '@project/prisma-orm'
import { prisma } from '@project/prisma-orm'

const courseClassSelect = {
  title: true,
  description: true,
  price: true,
  duration: true,
  audience: true,
  features: true,
  mostPopular: true,
  slug: true,
} satisfies Prisma.CourseClassSelect

const courseSelect = {
  title: true,
  description: true,
  status: true,
  slug: true,
  classes: {
    select: courseClassSelect,
  },
} satisfies Prisma.CourseSelect

export type CourseClassPayload = Prisma.CourseGetPayload<{ select: typeof courseSelect }>

export default defineEventHandler(
  async (_): Promise<CourseClassPayload[]> => {
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
  },
)
