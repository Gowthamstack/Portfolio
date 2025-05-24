import React from "react";
import "./About.css";
import graduate from "../../assets/graduate.png";
import pg_graduate from "../../assets/pg_graduate.png";
import School from "../../assets/School.png";

const About = () => {
  return (
    <div className="about container">
      <div className="study">
        <img src={pg_graduate} alt="" className="pg_graduate" />
        <h1>
          i am currently pursuing MCA @ priyadarshini engineering college...
        </h1>
      </div>
      <div className="study">
        <img src={graduate} alt="" className="graduate" />
        <h1>i'm a recently Completed my BCA degree @ islamiah college...</h1>
      </div>
      <div className="study">
        <img src={School} alt="" className="school" />
        <h1>i completed my schooling @ hindu higher secondary school...</h1>
      </div>
    </div>
  );
};

export default About;
