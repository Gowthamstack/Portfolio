import React from "react";
import "./Project.css";
import food from "../../assets/header_img.png";
import ecommerce from "../../assets/E-commerce.png";
import chat from "../../assets/chat.jpg";
import blog from "../../assets/blog_pic_1.png";

const Project = () => {
  return (
    <div className="project container">
      <div className="projects">
        <h1>Wedding Cards</h1>
        <h3>Vetrivel Cards</h3>
        <ul>
          <li>React js</li>
          <li>Node js</li>
          <li>Express js</li>
          <li>Mongo db</li>
        </ul>
        <img src={ecommerce} alt="" />
      </div>
      <div className="projects">
        <h1>milk shop</h1>
        <h3>Aavin Junction</h3>
        <ul>
          <li>React js</li>
          <li>Node js</li>
          <li>Express js</li>
          <li>Mongo db</li>
        </ul>
        <img src={ecommerce} alt="" />
      </div>
    </div>
  );
};

export default Project;
