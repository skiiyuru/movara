import type { APIRoute } from 'astro'
import { getLatestPosts } from '@/data/posts'

export const GET: APIRoute = async ({ url }) => {
  try {
    const searchParams = url.searchParams
    const limit = parseInt(searchParams.get('limit') || '3')
    
    const posts = await getLatestPosts(limit)
    
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching latest posts:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
