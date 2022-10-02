import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/layout/container";
import PostBody from "../../components/post/post-body";
import PostHeader from "../../components/post/post-header";
import Layout from "../../components/layout/layout";
import {
  getPostBySlug,
  getAllPublications,
  getLatestPublication,
  publicationsDirectory,
} from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import PostHead from "../../components/post/post-head";
import HeroPost from "../../components/hero-post";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
  latestPublication: PostType;
};

export default function Post({ post, preview, latestPublication }: Props) {
  const isSameArticle = latestPublication.title === post.title;
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <div>Loading</div>
        ) : (
          <>
            <article className="mb-32">
              <PostHead title={post.title} />
              <PostHeader
                publisher={post.publisher}
                coauthor={post.coauthor}
                title={post.title}
                date={post.date}
              />
              <PostBody
                type="publication"
                content={post.content}
                url={post.url}
              />
            </article>
          </>
        )}
      </Container>
      {latestPublication && !isSameArticle && (
        <HeroPost
          title={latestPublication.title}
          date={latestPublication.date}
          slug={latestPublication.slug}
        />
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const latestPublication = getLatestPublication(["title", "date", "slug"]);

  const post = getPostBySlug(
    params.slug,
    [
      "title",
      "date",
      "slug",
      "author",
      "content",
      "coauthor",
      "publisher",
      "url",
    ],
    publicationsDirectory
  );

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      latestPublication,
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPublications(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
