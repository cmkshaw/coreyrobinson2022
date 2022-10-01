type Props = {
  title?: string,
}

const PostTitle = ({ title }: Props) => {
  return (
    <div className="py-16 bg-small-sphere">
     <h1 className="py-4 leading-tight text-6xl md:text-7xl">{title}</h1>
    </div>
  )
}

export default PostTitle
