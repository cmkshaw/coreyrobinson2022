import PublicationItem from './publication-item'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const Publications = ({ posts }: Props) => {
  return (
    <section>
      <div className="">
        {posts.map((post) => (
          <PublicationItem
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            publisher={post.publisher}
          />
        ))}
      </div>
    </section>
  )
}

export default Publications
