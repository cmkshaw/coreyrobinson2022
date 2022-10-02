import Container from "./container";

type Props = {
  title: string;
};

const PageHeader = ({ title }: Props) => {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-6xl md:text-7xl">{title}</h1>
      </div>
    </Container>
  );
};

export default PageHeader;
