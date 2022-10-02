import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
  url?: string
  type?: string
}

const PostBody = ({ content, url, type = "article" }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {url && 
        <h4 className="text-2xl">
          <a className="hover:underline flex" href={url} target="_blank" rel="noopener noreferrer">
            View {type}
            <img className="flip" src="/assets/icons/icon-nav.svg" alt="Arrow icon"/>
          </a>
        </h4>
      }
    </div>
  )
}

export default PostBody
