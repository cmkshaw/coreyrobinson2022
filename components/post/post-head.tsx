import Head from "next/head";
import { SITE_NAME } from "../../lib/constants";

type Props = {
  title: string;
};

const PostHead = ({ title }: Props) => {
  return (
    <Head>
      <title>
        {title} | {SITE_NAME}
      </title>
    </Head>
  );
};

export default PostHead;
