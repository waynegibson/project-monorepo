import type { Prisma } from '@project/prisma-orm'
import { prisma } from '@project/prisma-orm'

// Create a strongly typed `UserSelect` object with `satisfies`
const userPostSelect = {
  id: true,
  firstname: true,
  lastname: true,
  createdAt: true,
  posts: true,
} satisfies Prisma.UserSelect

// Infer the resulting payload type
type UserPostPayload = Prisma.UserGetPayload<{ select: typeof userPostSelect }>

export default defineEventHandler(
  async (event): Promise<UserPostPayload> => {
    const { id } = event.context

    // The result type is equivalent to `UserPostPayload | null`
    const user = await prisma.user.findFirst({
      where: { id },
      select: userPostSelect,
    })

    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found',
      })
    }

    return user
  },
)
