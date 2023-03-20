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
  slug: true,
  classes: {
    select: courseClassSelect,
  },
} satisfies Prisma.CourseSelect

const courseCategorySelect = {
  name: true,
  eyebrow: true,
  excerpt: true,
  description: true,
  link: true,
  slug: true,
  courses: {
    select: courseSelect,

  },
} satisfies Prisma.CourseCategorySelect

type CourseClassByCategoryPayload = Prisma.CourseCategoryGetPayload<{ select: typeof courseCategorySelect }>

export default defineEventHandler(
  async (event): Promise<CourseClassByCategoryPayload> => {
    const slug = event.context.params?.courseCategorySlug

    const category = await prisma.courseCategory.findUnique({
      where: { slug },
      select: courseCategorySelect,
    })

    if (!category) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No courses found by category.',
      })
    }

    return category
  },
)
