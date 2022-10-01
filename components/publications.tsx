import PublicationItem from './publication-item'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const Publications = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Publications
      </h2>
      <div className="">
        {posts.map((post) => (
          <PublicationItem
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default Publications