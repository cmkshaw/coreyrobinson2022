const About = () => {
  return (
    <section className="pt-20 pb-6 md:pt-36 md:pb-16 grid sm:grid-cols-1 md:grid-cols-[400px_minmax(auto,_1fr)]">
      <div className="bg-tiny-sphere pt-8 pb-8">
        <img
          className="portrait"
          src="/assets/corey-robinson-headshot.png"
          alt="Portrait of Dr. Corey Robinson"
        />
      </div>
      <div className="">
        <h1 className="text-5xl md:text-8xl tracking-tighter leading-tight mb-4 md:pb-6">
          Corey Robinson
        </h1>
        <h2 className="text-2xl mb-6">
          Lecturer in International Relations in the School of Government and
          International Affairs, Durham University.
        </h2>
        <p>
          Working at the intersection of international political sociology,
          refugee and migration studies and critical security studies, Corey’s
          research examines the international politics of migration governance
          and border control.
        </p>
        <p>
          Corey holds a Ph.D. in Political Science and a Graduate Diploma in
          Refugee and Migration Studies from York University. Corey’s work has
          appeared in Third World Quarterly, International Political Sociology,
          Security Dialogue, and Millennium: Journal of International Studies
          and several scholarly volumes in migration studies.
        </p>
        <p>
          Corey’s Ph.D. research was funded through the Social Sciences and
          Humanities Research Council (SSHRC) Joseph-Armand Bombardier Canada
          Graduate Scholarships Program (CGS) Doctoral Scholarships and the
          Ontario Graduate Scholarship (OGS). Before coming to Durham
          University, Corey held teaching positions at York University and
          the University of Toronto.
        </p>
        <p>
          Aside from academia, Corey enjoys playing drums and guitar, cooking,
          cycling, traveling and gardening.
        </p>
      </div>
    </section>
  );
};

export default About;
