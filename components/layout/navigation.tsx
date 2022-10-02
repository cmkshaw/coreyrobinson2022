import Container from "./container";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const isHomepage = router.route === "/";
  return (
    <nav className="pt-8">
      <Container>
        <div className="md:flex gap-3 justify-between text-xl md:text-2xl">
          {isHomepage ? (
            <span></span>
          ) : (
            <div className="sm:flex gap-16">
              <Link href="/">
                <a className="hidden lg:flex">
                  <img src="/assets/icons/icon-nav.svg" alt="Arrow icon" />
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="font-bold sm:font-normal">Corey Robinson</a>
              </Link>
            </div>
          )}
          <div className="flex gap-8 justify-self-end pt-2 sm:pt-0">
            <a href="/publications">Publications</a>
            <a href="/cv">CV</a>
            <a href="mailto:corey.j.r.robinson@gmail.com">Contact</a>
            <a href="https://twitter.com/bordersorders">
              <img src="/assets/icons/icon-twitter.svg" alt="Twitter icon" />
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
