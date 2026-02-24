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
          Built responsive React and TypeScript interfaces for 5+ cybersecurity
          research projects, using Tailwind CSS for styling and reducing UI
          inconsistencies by resolving bugs and standardizing Ant Design
          component usage across modules.
        </li>
        <li>
          Integrated REST APIs to connect frontend with backend services,
          enabling dynamic dashboards for security data visualization.
        </li>
        <li>
          Managed version control with Git/GitLab and deployed full-stack
          applications using Docker containers.
        </li>
        <li>
          Collaborated with backend developers to understand API specifications
          and integrate services, participating in requirements meetings to
          align frontend development with project goals.
        </li>
      </ul>

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Freelancer</h4>
        <span className="font-bold">Jun 2022 - Present</span>
      </div>
      <p className="italic text-sm mb-1">PCsteps, Remote</p>
      <ul className="list-disc pl-5 mb-4 text-sm">
        <li>
          Provide customer support, write scripts for YouTube videos, and author
          monthly PC build guides.
        </li>
      </ul>

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Proofreader</h4>
        <span className="font-bold">Sep 2018 - Present</span>
      </div>
      <p className="italic text-sm mb-1">PCsteps, Remote</p>
      <ul className="list-disc pl-5 mb-4 text-sm">
        <li>
          Review and edit tech articles for grammar, accuracy, and publication
          readiness.
        </li>
      </ul>

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">E-shop Manager</h4>
        <span className="font-bold">Oct 2019 - Jan 2022</span>
      </div>
      <p className="italic text-sm mb-1">PCsteps, Remote</p>
      <ul className="list-disc pl-5 text-sm">
        <li>
          Managed product listings, inventory, website improvements, and
          customer support.
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;
