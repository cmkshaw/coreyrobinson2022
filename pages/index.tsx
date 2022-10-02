import Container from "../components/layout/container";
import HeroPost from "../components/hero-post";
import About from "../components/content/about";
import Layout from "../components/layout/layout";
import { getLatestPublication } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import { Separator } from "../components/layout/separator";
import Elsewhere from "../components/content/elsewhere";

type Props = {
  latestPost: Post;
};

export default function Index({ latestPost }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Political Science | Researcher, Consultant, Course Instructor |
            Corey Robinson
          </title>
        </Head>
        <div className="bg-sphere-right">
          <Container>
            <About />
            <Separator type="border-blue" />
            <Elsewhere />
          </Container>
        </div>
        {latestPost && (
          <HeroPost
            title={latestPost.title}
            date={latestPost.date}
            slug={latestPost.slug}
          />
        )}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const latestPost = getLatestPublication(["title", "date", "slug"]);

  return {
    props: { latestPost },
  };
};
