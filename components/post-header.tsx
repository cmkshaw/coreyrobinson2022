import PostTitle from './post-title'

type Props = {
  title: string
  date: string
  publisher?: string
  coauthor?: string
}

const PostHeader = ({ title, publisher, coauthor }: Props) => {
  return (
    <>
      <PostTitle title={title}/>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          {publisher && <h2 className="py-4 text-2xl">{publisher}</h2>}
          {coauthor && <h3>Co-authored with {coauthor}</h3>}
        </div>
      </div>
    </>
  )
}

export default PostHeader
