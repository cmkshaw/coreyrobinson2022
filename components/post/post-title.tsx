type Props = {
  title?: string;
};

const PostTitle = ({ title }: Props) => {
  return (
    <div className="pt-16 md:pt-28 md:pb-12 bg-small-sphere">
      <h1 className="leading-tight text-4xl md:text-7xl leading-tight">
        {title}
      </h1>
    </div>
  );
};

export default PostTitle;
