import "./App.css";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Awards from "./components/Awards";
import Interests from "./components/Interests";

const App = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 border border-gray-300 shadow-md p-6">
      <Header />
      <main className="mt-4">
        <Skills />
        <WorkExperience />
        <Education />
        <div className="flex gap-4">
          <div className="flex-1">
            <Languages />
          </div>
          <div className="flex-1">
            <Awards />
          </div>
          <div className="flex-1">
            <Interests />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
