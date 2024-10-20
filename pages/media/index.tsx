import Layout from "../../components/layout/layout";
import Head from "next/head";
import PageHeader from "../../components/layout/page-header";
import { SITE_NAME } from "../../lib/constants";
import MediaItem from "../../components/media-item";

const allMedia = [
  {
    "title": "Building whose capacity? Investigating Canada’s extraterritorial campaign against human smuggling",
    "publisher": "Border Criminologies",
    "date": "2024-09-20",
    "url": "https://blogs.law.ox.ac.uk/border-criminologies-blog/blog-post/2024/09/building-whose-capacity-investigating-canadas"
  },
  {
    "title": "Setting the record straight on refugee claims by international students",
    "publisher": "The Conversation",
    "coauthors": "With Yvonne Su and Sean Rehaag",
    "date": "2024-05-05",
    "url": "https://theconversation.com/setting-the-record-straight-on-refugee-claims-by-international-students-228603"
  },  
  {
    "title": "Fearmongering about people fleeing disasters is a dangerous and faulty narrative",
    "publisher": "The Conversation",
    "coauthors": "With Yvonne Su",
    "date": "2023-03-12",
    "url": "https://theconversation.com/fearmongering-about-people-fleeing-disasters-is-a-dangerous-and-faulty-narrative-200894"
  },
  {
    "title": "Debunking the myth of the ‘evil people smuggler’",
    "publisher": "The Conversation",
    "coauthors": "With Yvonne Su",
    "date": "2022-07-22",
    "url": "https://theconversation.com/debunking-the-myth-of-the-evil-people-smuggler-187059"
  },
  {
    "title": "How LGBTQI+ to LGBTQI+ support is helping Ukrainian refugees find safety in the EU",
    "publisher": "The New Humanitarian",
    "date": "2022-06-10",
    "coauthors": "With Yvonne Su, Tyler Valiquettea and Aydan Greatrick",
    "url": "https://www.thenewhumanitarian.org/news-feature/2022/06/08/How-LGBTQI-to-LGBTQI-support-is-helping-Ukrainian-refugees-find-safety-in-the-EU"
  },
  {
    "title": "Suspension of foreign workers puts them at risk of deportation",
    "publisher": "Toronto Star",
    "date": "2014-05-04",
    "url": "http://www.pressreader.com/canada/toronto-star/20140505/281840051680642"
  },
  {
    "title": "Ann Tickner on Feminist Philosophy of Science, Engaging the Mainstream, and (still) Remaining Critical in/of IR",
    "publisher": "Theory Talks",
    "date": "2013-04-22",
    "url": "./assets/pdfs/theory-talk-tickner.pdf"
  }
]

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Media | {SITE_NAME}</title>
        </Head>
        <PageHeader title="Media" />
            <section className="bg-bottom-sphere">
              <div className="pb-24 bg-noise-sphere">
                <div className="bg-side-sphere">
                  {allMedia.map((post) => (
                    <MediaItem
                      key={post.url}
                      title={post.title}
                      date={post.date}
                      slug={post.url}
                      coauthors={post.coauthors}
                      publisher={post.publisher}
                    />
                  ))}
                </div>
              </div>             
            </section>
      </Layout>
    </>
  );
}
