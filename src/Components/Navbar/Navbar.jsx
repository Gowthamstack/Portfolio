import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menu from "../../assets/menu.png";
import gowtham from "../../assets/gowtham.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-left">
          <h1>my portfolio</h1>
        </div>
        <div className="nav-center">
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="About">
              <li>About</li>
            </NavLink>
            <NavLink to="Skills">
              <li>Skills</li>
            </NavLink>
            <NavLink to="Projects">
              <li>Projects</li>
            </NavLink>
          </ul>
        </div>
        <div className="nav-right">
          <img src={gowtham} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
