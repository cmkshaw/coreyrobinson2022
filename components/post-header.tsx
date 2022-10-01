import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  date: string
  publisher?: string
  "co-author"?: string
}

const PostHeader = ({ title, date, publisher }: Props) => {
  return (
    <>
      <PostTitle title={title}/>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <h2 className="py-4 text-2xl">{publisher}</h2>
          {/* <DateFormatter dateString={date} /> */}
        </div>
      </div>
    </>
  )
}

export default PostHeader
