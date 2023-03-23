import type { Prisma } from '@project/prisma-orm'
import { prisma } from '@project/prisma-orm'

const userSelect = {
  id: true,
  firstname: true,
  lastname: true,
  createdAt: true,
} satisfies Prisma.UserSelect

export type UserPayload = Prisma.UserGetPayload<{ select: typeof userSelect }>

export default defineEventHandler(
  async (_): Promise<UserPayload[]> => {
    const users = await prisma.user.findMany()

    if (!users.length) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No users found.',
      })
    }
    return {
      ...users,
    }
  },
)
