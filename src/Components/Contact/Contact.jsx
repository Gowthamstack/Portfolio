import React from "react";
import "./Contact.css";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <div className="contact container">
      <div>
        <a href="">
          <h3>Twitter</h3>
        </a>
        <a href="">
          <h3>LinkedIn</h3>
        </a>
        <a href="">
          <h3>FaceBook</h3>
        </a>
        <a href="">
          <h3>Instagram</h3>
        </a>
      </div>
      <div className="copy">copyright @ gowtham {year}</div>
    </div>
  );
};

export default Contact;
