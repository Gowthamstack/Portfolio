import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Particles from "./Components/Particles";
import { Routes ,Route} from "react-router-dom";
import Home from "./Components/Home";

function App() {
  
  return (
  <div className="">
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/react-out' element={<Contact/>}/>
      </Routes>
  </div>
  );
}

export default App;