import Navigation from "./navigation";
import Meta from "./meta";
import Analytics from "./analytics";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Analytics />
      <div className="min-h-screen">
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
