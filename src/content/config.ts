import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      thumbnail: image(),
      pubDate: z.date(),
      isDraft: z.boolean().optional(),
      category: z.string(),
      author: z.string(),
      avatar: image(),
    }),
})

export const collections = {
  posts,
}
