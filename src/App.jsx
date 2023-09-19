import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import SideNav from "./components/SideNav";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="">
      <SideNav />
      <Main />
      <Skills />
      <Projects />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
