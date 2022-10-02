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
};

const PublicationItem = ({ title, date, slug, publisher }: Props) => {
  return (
    <Container>
      <div className="py-12 gap-12 grid md:grid-cols-[250px_minmax(auto,_1fr)]">
        <div>
          <h4 className="text-xl">{publisher}</h4>
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
