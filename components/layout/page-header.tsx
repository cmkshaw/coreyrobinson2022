import Container from "./container";

type Props = {
  title: string;
};

const PageHeader = ({ title }: Props) => {
  return (
    <Container>
      <div className="py-16 md:pt-28 md:pb-12">
        <h1 className="text-6xl md:text-8xl">{title}</h1>
      </div>
    </Container>
  );
};

export default PageHeader;
