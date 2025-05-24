import React from "react";
import js from "../../assets/js.png";
import html from "../../assets/html_5.png";
import css from "../../assets/css_3.png";
import tailwind from "../../assets/tailwind.jpg";
import database from "../../assets/database.png";
import nodejs from "../../assets/node_js.png";
import github from "../../assets/github.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import mongo from "../../assets/mongo.jpg";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skill container">
      <div className="language">
        <img src={html} alt="" />
        <div>html</div>
      </div>
      <div className="language">
        <img src={css} alt="" />
        <div>css</div>
      </div>
      <div className="language">
        <img src={js} alt="" />
        <div>JavaScript</div>
      </div>
      <div className="language">
        <img src={react} alt="" />
        <div>react</div>
      </div>
      <div className="language">
        <img src={nodejs} alt="" />
        <div>node js</div>
      </div>
      <div className="language">
        <img src={github} alt="" />
        <div>github</div>
      </div>
      <div className="language">
        <img src={database} alt="" />
        <div>database</div>
      </div>
      <div className="language">
        <img src={tailwind} alt="" />
        <div>tailwind css</div>
      </div>
      <div className="language">
        <img src={git} alt="" />
        <div>git</div>
      </div>
      <div className="language">
        <img src={mongo} alt="" />
        <div>mongo db</div>
      </div>
    </div>
  );
};

export default Skills;
