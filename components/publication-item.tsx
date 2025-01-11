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
  editor?: string;
  press?: string;
};

const PublicationItem = ({ title, date, slug, publisher, editor, coauthors }: Props) => {
  return (
    <Container>
      <div className="py-12 gap-6 md:gap-12 grid md:grid-cols-[250px_minmax(auto,_1fr)]">
        <div>
          <h4 className="text-xl md:pb-4">{publisher}</h4>
          {editor && <h5>Edited by {editor}</h5>}
        </div>
        <div>
          <h3 className="text-3xl md:text-5xl mb-3 leading-tight">
            <Link as={`/publications/${slug}`} href="/publications/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          {coauthors ? <h4 className="text-xl  mb-3">{coauthors}</h4> : null}
          <DateFormatter dateString={date} />
        </div>
      </div>
      <Separator />
    </Container>
  );
};

export default PublicationItem;
