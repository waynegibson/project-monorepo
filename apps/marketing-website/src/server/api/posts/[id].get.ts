import type { Prisma } from '@project/prisma-orm'
import { prisma } from '@project/prisma-orm'

// Create a strongly typed `PostSelect` object with `satisfies`
const postSelect = {
  title: true,
  createdAt: true,
  author: {
    select: {
      firstname: true,
      lastname: true,
      email: true,
    },
  },
} satisfies Prisma.PostSelect

// Infer the resulting payload type
type MyPostPayload = Prisma.PostGetPayload<{ select: typeof postSelect }>

export default defineEventHandler(
  async (event): Promise<MyPostPayload> => {
    const { id: record } = event.context

    // The result type is equivalent to `MyPostPayload | null`
    const post = await prisma.post.findFirst({
      where: { id: record },
      select: postSelect,
    })

    if (!post) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Post not found',
      })
    }

    return post
  },
)
