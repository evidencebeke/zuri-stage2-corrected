import React from "react";
import picture from "../assets/beke.jpg";
import "./About.css";

const About = () => {
  const skills = ["Critical thinking", "Creativity", "Team Work", "Resillence"];
  return (
    <div className="bg-secondary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={picture} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I am Beke Evidence, frontend web developer. After graduating
                from university and being held at home due to COVID-19, I
                decided to learn to code. At the time, it was just a move to
                populate my CV, but right now, I love coding and can
                passionately code all day long. And I have been coding for one
                year and a half I love React JS and have been using it for the
                past one year. I am sure to be a great addition to any team.
              </p>
              <h3>Skills</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul
                    style={{
                      listStyle: "none",
                    }}
                  >
                    {skills.map((skill, i) => (
                      <li key={i}>{skill} </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
