import Container from '../../components/container'
import Publications from '../../components/publications'
import Layout from '../../components/layout'
import Head from 'next/head'
import Post from '../../interfaces/post'
import { getAllMedia, getAllPublications } from '../../lib/api'
import PageHeader from '../../components/page-header'
import { SITE_NAME } from '../../lib/constants'

type Props = {
  allPosts: Post[]
  allMedia: Post[]
}

export default function Index({ allPosts, allMedia }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Publications &amp; Media | {SITE_NAME}</title>
        </Head>
        <PageHeader title="Publications"/>
          {allPosts.length > 0 && <Publications posts={allPosts} media={allMedia} />}
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

  const allMedia = getAllMedia([
    'title',
    'date',
    'slug',
    'publisher',
  ])

  return {
    props: { allPosts, allMedia },
  }
}
