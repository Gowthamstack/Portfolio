import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

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