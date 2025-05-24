import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
        <Route path="/Projects" element={<Project />}></Route>
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
