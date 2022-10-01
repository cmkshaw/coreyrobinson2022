import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  publisher?: string
  coauthor?: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
