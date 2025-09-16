import React from "react";
import cross_icon from "../assets/cross_icon.png"
import menu_icon from "../assets/menu_icon.png"
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    
    return (
            <nav className='flex items-center justify-center mx-auto px-4 py-4'>
               <h1 className="text-2xl font-medium md:text-3xl lg:text-4xl">My Portfolio</h1>
            </nav>
    );
}

export default Navbar;