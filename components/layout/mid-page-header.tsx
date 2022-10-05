import Container from "./container";

type Props = {
  title: string;
};

const MidPageHeader = ({ title }: Props) => {
  return (
    <Container>
      <div className="pt-16 pb-4">
        <h2 className="text-6xl md:text-8xl">{title}</h2>
      </div>
    </Container>
  );
};

export default MidPageHeader;
