import { getCollection } from 'astro:content'

export type PostSummary = {
  slug: string
  title: string
  date: string // ISO string
  url: string
}

export async function getLatestPosts(limit: number = 3): Promise<PostSummary[]> {
  const posts = await getCollection('posts')
  
  // Filter out drafts and sort by publication date (newest first)
  const publishedPosts = posts
    .filter(post => !post.data.isDraft)
    .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime())
    .slice(0, limit)
    .map(post => ({
      slug: post.slug,
      title: post.data.title,
      date: post.data.pubDate.toISOString(),
      url: `/blog/${post.slug}`,
    }))

  return publishedPosts
}

export function formatPostDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}


