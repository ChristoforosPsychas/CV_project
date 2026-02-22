const Education = () => {
  return (
    <section className="p-2">
      <h2 className="text-xl font-bold border-b-2 border-blue-800 mb-2">
        Education
      </h2>

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">
          Aristotle Certification Training & Assessment in Web Design
        </h4>
        <span className="font-bold">Dec 2022</span>
      </div>
      <p className="italic text-sm">Webia Academy, Patras</p>
      <p className="text-sm mb-4">
        Attended the two-month course and got strongly acquainted with HTML,
        HTML5, CSS, JavaScript, WordPress.
      </p>

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">
          Integrated Master of Engineering in Electrical and Computer
          Engineering
        </h4>
        <span className="font-bold">Mar 2022</span>
      </div>
      <p className="italic text-sm">Technical University of Crete, Chania</p>
      <p className="text-sm">
        Diploma Thesis: Design and Implementation of Autonomous Agent for a
        Variant of the Battleship Game.
      </p>
      <p className="text-sm">Diploma Grade: 7,10</p>
      <p className="text-sm mb-4">Supervisor: Prof. Michail Lagoudakis</p>

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Front-End Web Developer Nanodegree</h4>
        <span className="font-bold">Aug 2018</span>
      </div>
      <p className="italic text-sm">Udacity, Remote</p>
      <p className="text-sm">
        Received courses and practiced with projects on Web Foundations (HTML5,
        CSS3), Web Programming with JavaScript, jQuery, DOM manipulation,
        Version Control (Git & GitHub), Web Accessibility, Object-Oriented
        JavaScript, ES6, Test Suites, Google API, Ajax, Service Workers,
        Promises, React.
      </p>
      <p className="text-sm">
        Completion of this program awarded the Front-End Web Developer
        Nanodegree.
      </p>
    </section>
  );
};

export default Education;
