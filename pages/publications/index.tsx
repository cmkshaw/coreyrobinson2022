import Container from '../../components/container'
import Publications from '../../components/publications'
import Layout from '../../components/layout'
import Head from 'next/head'
import Post from '../../interfaces/post'
import { getAllPublications } from '../../lib/api'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example</title>
        </Head>
        <Container>
          {allPosts.length > 0 && <Publications posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPublications([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
