import type { Prisma } from '@project/prisma-orm'
import { prisma } from '@project/prisma-orm'

// Create a strongly typed `UserSelect` object with `satisfies`
const userSelect = {
  id: true,
  firstname: true,
  lastname: true,
  createdAt: true,
  posts: true,
} satisfies Prisma.UserSelect

// Infer the resulting payload type
type MyUserPayload = Prisma.UserGetPayload<{ select: typeof userSelect }>

export default defineEventHandler(
  async (event): Promise<MyUserPayload> => {
    const { id: record } = event.context

    // The result type is equivalent to `MyUserPayload | null`
    const user = await prisma.user.findFirst({
      where: { id: record },
      select: userSelect,
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
