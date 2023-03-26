import type { Prisma } from '@project/prisma-orm'
import { prisma } from '@project/prisma-orm'
import cache from '../../utils/cache-server-request'

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

type CourseClassesByCoursePayload = Prisma.CourseGetPayload<{ select: typeof courseSelect }>

export default defineEventHandler(
  async (event): Promise<CourseClassesByCoursePayload> => {
    const slug = event.context.params?.courseSlug

    const fetchCourse = async () => {
      const course = await prisma.course.findFirst({
        where: {
          slug,
          status: 'ACTIVE',
        },
        select: courseSelect,
      })

      if (!course) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Course not found.',
        })
      }

      return course
    }

    const cachedCourse = await cache.fetch(`courses:course:${slug}`, fetchCourse)

    return cachedCourse
  },
)
