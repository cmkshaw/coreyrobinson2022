import DateFormatter from "./utils/date-formatter";
import Link from "next/link";
import { Separator } from "./layout/separator";
import Container from "./layout/container";

type Props = {
  title: string;
  date: string;
  excerpt?: string;
  slug: string;
  publisher: string;
  coauthors?: string;
};

const MediaItem = ({ title, date, slug, publisher, coauthors }: Props) => {
  return (
    <Container>
      <div className="py-12 gap-6 md:gap-12 grid md:grid-cols-[250px_minmax(auto,_1fr)]">
        <div>
          <h4 className="text-xl">{publisher}</h4>
        </div>
        <div>
          <h3 className="text-3xl md:text-5xl mb-3 leading-tight">
            <Link as={slug} href={slug}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          {coauthors ? <h4 className="text-xl  mb-3">{coauthors}</h4> : null}
          <DateFormatter dateString={date} />
        </div>
      </div>
      <Separator/>
    </Container>
  );
};

export default MediaItem;
