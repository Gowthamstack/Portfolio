import React from "react";
import cross_icon from "../assets/cross_icon.png"
import menu_icon from "../assets/menu_icon.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    
    return (
            <nav className={`fixed top-0 left-0 bg-[#4a4a4a] w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

               <h1 className="text-2xl font-medium md:text-3xl lg:text-4xl">My Portfolio</h1>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    <NavLink to="/"  className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Home</NavLink>
                    <NavLink to="/About"  className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>About</NavLink>
                    <NavLink to="/Projects"  className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Projects</NavLink>
                    <NavLink to="/Skills"  className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Skills</NavLink>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <img src="" alt="Gowtham" />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <img src={menu_icon} alt="" onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-10 h-10"/>
                    
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                       <img src={cross_icon} alt="cross_icon" className="w-10 h-10" />
                    </button>
               <div className="flex flex-col items-center justify-center gap-8">
                    <NavLink onClick={() => setIsMenuOpen(false)} to="/">Home</NavLink>
                    <NavLink onClick={() => setIsMenuOpen(false)} to="/About">About</NavLink>
                    <NavLink onClick={() => setIsMenuOpen(false)} to="/Projects">Projects</NavLink>
                    <NavLink onClick={() => setIsMenuOpen(false)} to="/Skills">Skills</NavLink>
                </div>
                </div>
            </nav>
    );
}

export default Navbar;