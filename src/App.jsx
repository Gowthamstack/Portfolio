import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="bg-black flex items-center flex-col text-white">
      <Navbar />
      <Hero/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;