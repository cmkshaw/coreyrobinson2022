import Container from "../../components/layout/container";
import Layout from "../../components/layout/layout";
import Head from "next/head";
import Post from "../../interfaces/post";
import { getAllMedia, getAllPublications } from "../../lib/api";
import PageHeader from "../../components/layout/page-header";
import { SITE_NAME } from "../../lib/constants";
import ScrollArrow from "../../components/layout/scrolltop";
import PublicationItem from "../../components/publication-item";
import MediaItem from "../../components/media-item";
import MidPageHeader from "../../components/layout/mid-page-header";

type Props = {
  allPosts: Post[];
  allMedia: Post[];
};

export default function Index({ allPosts, allMedia }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Publications &amp; Media | {SITE_NAME}</title>
        </Head>
        <PageHeader title="Publications & Media" />
        {allPosts.length > 0 && (
          <>
            <section className="bg-bottom-sphere">
              <div className="pb-24 bg-noise-sphere">
                <div className="bg-side-sphere">
                  {allPosts.map((post) => (
                    <PublicationItem
                      key={post.slug}
                      title={post.title}
                      date={post.date}
                      slug={post.slug}
                      publisher={post.publisher}
                      editor={post.editor}
                    />
                  ))}
                </div>
              </div>
              <div className="pb-36">
                <MidPageHeader title="Media" />
                {allMedia.map((post) => (
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
            {/* <section className="bg-noise-sphere">
              <div className="pb-36">
                <MidPageHeader title="Policy" />
              </div>
            </section> */}
          </>
        )}
      </Layout>
      {/* <ScrollArrow /> */}
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPublications([
    "title",
    "date",
    "slug",
    "publisher",
    "editor",
  ]);
  const allMedia = getAllMedia(["title", "date", "slug", "publisher"]);

  return {
    props: { allPosts, allMedia },
  };
};
