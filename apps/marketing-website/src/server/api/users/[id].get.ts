import { prisma } from '@project/database-core'
import { Prisma } from '@prisma/client'

const userEmail = Prisma.validator<Prisma.UserSelect>()({
  email: true,
})

const user = Prisma.validator<Prisma.UserArgs>()({
  select: {
    id: true,
    name: true,
    email: true,
  },
})

export type UserEmailOnly = Omit<Prisma.UserGetPayload<typeof user>, 'name' | 'id'>

export default defineEventHandler(
  async (event): Promise<UserEmailOnly> => {
    const { id } = event.context.params

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
      select: userEmail,
    })

    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found.',
      })
    }

    return {
      ...user,
    }
  },
)
