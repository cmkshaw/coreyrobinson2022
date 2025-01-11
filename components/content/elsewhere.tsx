const Elsewhere = () => {
  return (
    <section className="pt-8 md:pt-12 grid sm:grid-cols-1 md:grid-cols-[400px_minmax(auto,_1fr)]">
      <div>
        <h3 className="text-xl pb-6">Elsewhere</h3>
      </div>
      <div className="text-3xl">
        <ul>
          <li className="pb-4">
            <a 
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="http://yorku.academia.edu/CoreyRobinson"
            >
              Academia profile
            </a>
          </li>
          <li className="pb-4">
            <a
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/corey-robinson-1621b0133/"
            >
              Linkedin
            </a>
          </li>
          <li className="pb-4">
            <a
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://scholar.google.ca/citations?user=LJ5DrEAAAAAJ&hl=en&oi=sra"
            >
              Google scholar
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Elsewhere;
