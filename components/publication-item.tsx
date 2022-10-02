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
  editor?: string;
  press?: string;
};

const PublicationItem = ({ title, date, slug, publisher, editor }: Props) => {
  return (
    <Container>
      <div className="py-12 gap-12 grid md:grid-cols-[250px_minmax(auto,_1fr)]">
        <div>
          <h4 className="text-xl pb-4">{publisher}</h4>
          {editor && <h5>Edited by {editor}</h5>}
        </div>
        <div>
          <h3 className="text-6xl mb-3 leading-tight">
            <Link as={`/publications/${slug}`} href="/publications/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <DateFormatter dateString={date} />
        </div>
      </div>
      <Separator />
    </Container>
  );
};

export default PublicationItem;
