import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/layout/container";
import PostBody from "../../components/post/post-body";
import PostHeader from "../../components/post/post-header";
import Layout from "../../components/layout/layout";
import {
  getPostBySlug,
  getAllMedia,
  mediaDirectory,
  getLatestMedia,
} from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import PostHead from "../../components/post/post-head";
import HeroPost from "../../components/hero-post";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
  latestMedia: PostType;
};

export default function Post({ post, preview, latestMedia }: Props) {
  const router = useRouter();
  const isSameArticle = latestMedia.title === post.title;
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
                title={post.title}
                date={post.date}
              />
              <PostBody type="media" content={post.content} url={post.url} />
            </article>
          </>
        )}
      </Container>
      {latestMedia && !isSameArticle && (
        <HeroPost
          type="media"
          title={latestMedia.title}
          date={latestMedia.date}
          slug={latestMedia.slug}
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
  const latestMedia = getLatestMedia(["title", "date", "slug"]);
  const post = getPostBySlug(
    params.slug,
    ["title", "date", "slug", "author", "content", "publisher", "url"],
    mediaDirectory
  );

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      latestMedia,
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllMedia(["slug"]);

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
