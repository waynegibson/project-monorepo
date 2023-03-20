import type { Prisma } from '@project/prisma-orm'
import { prisma } from '@project/prisma-orm'

// Create a strongly typed `PostSelect` object with `satisfies`
const postAuthorSelect = {
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
type PostAuthorPayload = Prisma.PostGetPayload<{ select: typeof postAuthorSelect }>

export default defineEventHandler(
  async (event): Promise<PostAuthorPayload> => {
    const { id: record } = event.context

    // The result type is equivalent to `PostAuthorPayload | null`
    const post = await prisma.post.findFirst({
      where: { id: record },
      select: postAuthorSelect,
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
