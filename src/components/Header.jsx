import React from "react";
import "./Header.css";
import backgroundImage from "../assets/background2.jpg";
import ReactTyped from "react-typed";

const Header = () => {
  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="header-wrapper"
      >
        <div className="main-info">
          <h1>I am Beke Evidence Ijobra. I am a Web Dev</h1>
          <ReactTyped
            className="typed-text"
            strings={[
              "I write in HTML",
              "I write CSS",
              "I write in JavaScript",
              "I write in Python",
              "I use React JS",
              "I use Django",
              "I use Rest Framework"
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a href="#contact" className="btn-main-offer">
            Contact me
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
