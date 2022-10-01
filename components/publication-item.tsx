import DateFormatter from './date-formatter'
import Link from 'next/link'
import { Separator } from './separator'

type Props = {
  title: string
  date: string
  excerpt?: string
  slug: string
  publisher: string
}

const PublicationItem = ({
  title,
  date,
  excerpt,
  slug,
  publisher,
}: Props) => {
  return (
    <>
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
    <Separator/>
    </>
  )
}

export default PublicationItem
