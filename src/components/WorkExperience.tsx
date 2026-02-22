const WorkExperience = () => {
  return (
    <section className="p-2">
      <h2 className="text-xl font-bold border-b-2 border-blue-800 mb-2">
        Work Experience
      </h2>

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Junior Front-End Developer</h4>
        <span className="font-bold">Sept 2023 - Present</span>
      </div>
      <p className="italic text-sm mb-1">Certh, Thessaloniki</p>
      <ul className="list-disc pl-5 mb-4 text-sm">
        <li>
          Develop responsive, user-friendly interfaces for security and
          cybersecurity research projects using React, JavaScript, and Tailwind
          CSS.
        </li>
        <li>
          Build front-end components for the TESSERA project, focusing on user
          management and data access features for the EU Security Data Space.
        </li>
        <li>
          Write clean, readable, and well-structured code following modern
          front-end best practices.
        </li>
      </ul>

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Freelancer</h4>
        <span className="font-bold">Jun 2022 - Present</span>
      </div>
      <p className="italic text-sm mb-1">PCsteps, Remote</p>
      <ul className="list-disc pl-5 mb-4 text-sm">
        <li>
          Customer Support, answering questions about YouTube videos, articles,
          and tech in general.
        </li>
        <li>
          Script Writing for PCsteps YouTube videos, explaining tech topics.
        </li>
        <li>Writing monthly PC guides and presenting custom PCsteps builds.</li>
      </ul>

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Proofreader</h4>
        <span className="font-bold">Sep 2018 - Present</span>
      </div>
      <p className="italic text-sm mb-1">PCsteps, Remote</p>
      <ul className="list-disc pl-5 mb-4 text-sm">
        <li>
          Reviewed articles for grammar, spelling, punctuation, syntax, accuracy
          and compliance with quality standards.
        </li>
        <li>
          Determined readiness of written pieces, made changes and approved
          final versions for publication.
        </li>
        <li>
          Verified facts, dates, and statistics, using standard reference
          sources and links.
        </li>
      </ul>

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">E-shop Manager</h4>
        <span className="font-bold">Oct 2019 - Jan 2022</span>
      </div>
      <p className="italic text-sm mb-1">PCsteps, Remote</p>
      <ul className="list-disc pl-5 text-sm">
        <li>Evaluated website design and discussed plans for improvements.</li>
        <li>
          Inserted new products on a daily basis or renewed existing ones.
        </li>
        <li>
          Presented all products properly with working links and updated images.
        </li>
        <li>Reviewed stock levels and prices.</li>
        <li>Provided customer and tech support via phone calls & emails.</li>
      </ul>
    </section>
  );
};

export default WorkExperience;
