const Education = () => {
  return (
    <section className="p-2">
      <h2 className="text-xl font-bold border-b-2 border-blue-800 mb-2">
        Education
      </h2>
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
      <p className="text-sm">Diploma Grade: 7.10/10 (Greek grading scale)</p>
      <p className="text-sm mb-4">Supervisor: Prof. Michail Lagoudakis</p>

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Front-End Web Developer Nanodegree</h4>
        <span className="font-bold">Aug 2018</span>
      </div>
      <p className="italic text-sm">Udacity, Remote</p>
      <p className="text-sm">
        Completed coursework in JavaScript, React, ES6, and web accessibility
      </p>
    </section>
  );
};

export default Education;
