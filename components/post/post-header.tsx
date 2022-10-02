import PostTitle from "./post-title";

type Props = {
  title: string;
  date: string;
  publisher?: string;
  coauthor?: string;
  press?: string;
  editor?: string;
};

const PostHeader = ({ title, publisher, coauthor, press, editor }: Props) => {
  return (
    <>
      <PostTitle title={title} />
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          {publisher && (
            <h2 className="py-6 text-2xl md:text-3xl">{publisher}</h2>
          )}
          {coauthor && <h3>Co-authored with {coauthor}</h3>}
          {editor && <h3>Edited by {editor}</h3>}
          {press && <h3>{press}</h3>}
        </div>
      </div>
    </>
  );
};

export default PostHeader;
