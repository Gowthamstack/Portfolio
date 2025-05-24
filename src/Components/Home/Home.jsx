import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home container">
      <div className="home-text">
        <h1>hi! i'm gowtham</h1>
        <p>i have a passion for software development and web development.</p>
        <p>
          i am computer sciene student and i have to take on a new challenges
          and problem solver like leetcode and data structure algorithm(DSA).
        </p>
        <NavLink to="About">
          <button className="btn">Explore Me</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
