import React from "react";
import cross_icon from "../assets/cross_icon.png"
import menu_icon from "../assets/menu_icon.png"
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    
    return (
           <div className="flex align-center justify-center mt-10 font-bold text-3xl">
              <h1>My PortFolio</h1>
           </div>
    );
}

export default Navbar;