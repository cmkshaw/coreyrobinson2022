import Container from '../../components/container'
import Publications from '../../components/publications'
import Layout from '../../components/layout'
import Head from 'next/head'
import Post from '../../interfaces/post'
import { getAllPublications } from '../../lib/api'
import PageHeader from '../../components/page-header'
import { SITE_NAME } from '../../lib/constants'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Publications | {SITE_NAME}</title>
        </Head>
        <PageHeader title="Publications"/>
        <div className="bg-noise">
          <Container>
            {allPosts.length > 0 && <Publications posts={allPosts} />}
          </Container>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPublications([
    'title',
    'date',
    'slug',
    'publisher',
  ])

  return {
    props: { allPosts },
  }
}
