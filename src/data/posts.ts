export type PostSummary = {
  slug: string
  title: string
  date: string // ISO string
  url: string
}

export const latestPosts: PostSummary[] = [
  {
    slug: 'sitting-down-with-nadeem-sheikh',
    title: 'Sitting Down with Nadeem Sheikh',
    date: '2024-04-18',
    url: '/blog/sitting-down-with-nadeem-sheikh',
  },
  {
    slug: 'pvg-kicks-off-2024-growth-announcement',
    title:
      "PVG Kicks-Off 2024’s year of growth by announcing Nadeem Sheikh as Partner and several firm promotions",
    date: '2024-03-19',
    url: '/blog/pvg-kicks-off-2024-growth-announcement',
  },
  {
    slug: 'former-ideo-partner-amplify-executive-experience',
    title:
      'Former IDEO Partner and Amplify executive brings breadth and depth of experience in scaling innovative ventures',
    date: '2023-01-10',
    url: '/blog/former-ideo-partner-amplify-executive-experience',
  },
  {
    slug: 'welcoming-augusta-and-ankita-to-pvg',
    title: 'Welcoming Augusta and Ankita to PVG',
    date: '2022-10-18',
    url: '/blog/welcoming-augusta-and-ankita-to-pvg',
  },
]

export function formatPostDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}


