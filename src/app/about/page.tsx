const AboutPage: React.FC = () => {
  return (
    <section className="space-y-8">
      <h3 className="opacity-75">
        I am a seasoned Full Stack Developer and Cloud Server Administrator with
        a rich background in Computer Science Engineering, a field I have
        dedicated myself to since graduating in 2020. Over the past 7 years, my
        career has been a journey of continuous growth and learning, allowing me
        to master a wide array of programming languages and technologies. My
        most recent two years have been spent at the forefront of cryptocurrency
        and educational technology, where I have further refined my skills in
        TypeScript, React, Rust, and Golang. My expertise lies in navigating
        complex projects from inception to deployment, ensuring they are robust,
        scalable, and efficient. I am committed to leveraging my diverse skill
        set to drive innovation and excellence in the ever-evolving tech
        landscape.
      </h3>
      <section>
        <h1 className="pb-2 text-2xl font-bold">Education</h1>
        <p className="opacity-75">
          Graduated with a degree in Computer Science Engineering, completed
          between 2016-2020.
        </p>
      </section>
      <section>
        <h1 className="pb-2 text-2xl font-bold">Work Experience</h1>
        <ul className="space-y-2 opacity-75">
          <li>Duration: 7 years total in development.</li>
          <li>
            Recent Roles: For the past two years, you have been working in a
            company involved in cryptocurrency and educational technology
            (edtech).
          </li>
        </ul>
      </section>
      <section>
        <h1 className="pb-2 text-2xl font-bold">Specialization</h1>
        <ul className="space-y-2 opacity-75">
          <li>
            Primary Role: Full Stack Developer and Cloud Server Administrator.
          </li>
          <li>
            Coding Expertise: Proficient in TypeScript, React, Rust, and GoLang.
          </li>
        </ul>
      </section>
      <section>
        <h1 className="pb-2 text-2xl font-bold">Strengths</h1>
        <ul className="space-y-2 opacity-75">
          <li>Expertise in managing complex projects from start to finish.</li>
          <li>Ensuring solutions are robust, scalable, and efficient.</li>
          <li>Committed to driving innovation and excellence in technology.</li>
        </ul>
      </section>
      <h3>Thank you!</h3>
    </section>
  );
};

export default AboutPage;
