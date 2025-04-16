import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <div className="font-sans bg-dark-primary dark:bg-dark-primary dark:text-dark-text-primary">
      <Home />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Contact />
    </div>
  );
}

export default App;
