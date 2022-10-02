import Container from '../components/container'
import HeroPost from '../components/hero-post'
import About from '../components/about'
import Layout from '../components/layout'
import { getAllPublications } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Link from 'next/link'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  return (
    <>
      <Layout>
        <Head>
          <title>Political Science | Researcher, Consultant, Course Instructor | Corey Robinson</title>
        </Head>
        <Container>
          <About />
        </Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              date={heroPost.date}
              slug={heroPost.slug}
            />
          )}
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPublications([
    'title',
    'date',
    'slug',
  ])

  return {
    props: { allPosts },
  }
}
