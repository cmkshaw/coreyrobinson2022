import PublicationItem from './publication-item'
import MediaItem from './media-item'
import type Post from '../interfaces/post'
import Container from './../components/container'

type Props = {
  posts: Post[]
  media: Post[]
}

const Publications = ({ posts, media }: Props) => {
  return (
    <section>
      <div className="pb-24 bg-noise-sphere">
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
      <div className="pb-24">
      <Container>
          <div className="py-16">
              <h2 className="text-7xl">Media</h2>
          </div>
      </Container>
        {media.map((post) => (
          <MediaItem
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
