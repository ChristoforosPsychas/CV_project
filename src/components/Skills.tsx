const Skills = () => {
  return (
    <section className="p-2">
      <h2 className="text-xl font-bold border-b-2 border-blue-800 mb-2">
        Skills
      </h2>
      <ul className="list-disc pl-5 text-sm">
        <li>
          <span className="font-bold">Languages:</span> HTML, CSS, JavaScript,
          TypeScript
        </li>
        <li>
          <span className="font-bold">Frameworks & Libraries:</span> React,
          Redux, Redux Toolkit, Context API, Tailwind CSS, Axios, jQuery
        </li>
        <li>
          <span className="font-bold">Tools & Platforms:</span> Git, GitHub,
          Docker, REST APIs
        </li>
      </ul>
    </section>
  );
};

export default Skills;
