import "./App.css";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 border border-gray-300 shadow-md p-6">
      <Header />
      <main className="mt-4">
        <Skills />
        <WorkExperience />
        <Education />
      </main>
    </div>
  );
};

export default App;
