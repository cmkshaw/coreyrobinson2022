import DateFormatter from "./date-formatter";
import Container from "../components/container";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
};

const HeroPost = ({ title, date, slug }: Props) => {
  return (
    <section>
      <div className="bg-noise-sphere py-20 mt-12 md:mt-20">
        <Container>
          <h3 className="text-xl pb-6">Recently Published</h3>
          <div className="pb-12">
            <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
              <Link as={`/publications/${slug}`} href="/publications/[slug]">
                <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div className="pb-12">
            <Link href="/publications">
              <a className="text-3xl hover:underline">All publications</a>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroPost;
