import { useEffect, useState } from 'react'

type PostSummary = {
  slug: string
  title: string
  date: string
  url: string
}

type Props = {
  title?: string
  maxPosts?: number
  showDates?: boolean
}

export default function LatestPostsNav({ 
  title = 'The Latest', 
  maxPosts = 3,
  showDates = true 
}: Props) {
  const [posts, setPosts] = useState<PostSummary[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`/api/latest-posts?limit=${maxPosts}`)
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Failed to fetch latest posts:', error)
        // Fallback to empty array
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [maxPosts])

  function formatPostDate(iso: string): string {
    const date = new Date(iso)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="flex-[2] flex flex-col justify-end p-16 articles-wrapper h-full">
        <span className="uppercase text-gray-300 tracking-widest mb-6 text-sm font-medium">{title}</span>
        <div className="space-y-6 articles">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`border-b border-white/20 pb-4 mb-4 article-list-item ${i === 2 ? 'border-b-0' : ''}`}>
              <div className="flex items-center gap-4 sm:gap-8 animate-pulse">
                <div className="flex-1 h-6 bg-white/20 rounded"></div>
                {showDates && <div className="hidden md:block h-4 bg-white/10 rounded w-24"></div>}
                <div className="h-4 bg-white/10 rounded w-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex-[2] flex flex-col justify-end p-16 articles-wrapper h-full">
      <span className="uppercase text-gray-300 tracking-widest mb-6 text-sm font-medium">{title}</span>
      <div className="space-y-6 articles">
        {posts.map((post, index) => (
          <div key={post.slug} className={`article-list-item overlay-link ${index < posts.length - 1 ? 'border-b border-white/20 pb-4 mb-4' : ''}`}>
            <a href={post.url} className="flex items-center gap-4 sm:gap-8 group">
              <span className="flex-1 text-xl font-medium group-hover:underline transition-colors duration-200">{post.title}</span>
              {showDates && (
                <span className="hidden md:block text-sm text-gray-300 whitespace-nowrap">{formatPostDate(post.date)}</span>
              )}
              <span aria-hidden="true" className="text-gray-400 group-hover:text-white transition-colors duration-200">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
