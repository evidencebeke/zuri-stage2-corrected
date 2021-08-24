import React from "react";
import amazon from "../assets/amazon.png";
import netflix from "../assets/netflix.png";
import "./Works.css";
import search from "../assets/search.png";

const Works = () => {
  const myWorks = [
    {
      title: "Amazon Clone",
      link: "https://amazoncloned.netlify.app",
      shot: amazon,
      des: "I built a partially functional Amazon Clone from scratch",
    },
    {
      title: "Netflix Clone",
      link: "https://myowflix.netlify.app",
      shot: netflix,
      des: "I built a beautiful imitation of the netflix homepage",
    },
    {
      title: "Movie search",
      link: "https://elated-colden-9b8546.netlify.app",
      shot: search,
      des: "I built a movie search page",
    },
  ];
  return (
    <div id="works" className="works">
      <h2>Past Works</h2>
      <div className="works-images">
        {myWorks.map((work, i) => {
          return (
            <figure>
              <a href={work.link}>
                {" "}
                <img
                  className="works-img img-responsive"
                  src={work.shot}
                  alt={work.title}
                />
              </a>
              <figcaption>{work.title}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
