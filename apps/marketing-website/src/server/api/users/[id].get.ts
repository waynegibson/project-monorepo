import { prisma } from '@project/database-core'
// import { Prisma } from '@prisma/client'

// const lessonSelect = Prisma.validator<Prisma.UserArgs>()({
//   select: {
//     firstname: true,
//     email: true,
//   },
// })

export default defineEventHandler(
  async (event): Promise<any> => {
    const users = await prisma.user.findMany()

    return {
      ...users,
    }
  },
)
