import React from "react";
import "./Contact.css";
import github from "../assets/github.png";
import hng from "../assets/hng.png";
import i4g from "../assets/i4g.png";

const Contact = () => {
  const contacts = [
    {
      name: "Github",
      url: "https://www.github.com/evidencebeke",
      picture: github,
    },
    { name: "HNG", url: "https://hng.tech/", picture: hng },
    { name: "Ingressive 4 Good", url: "https://ingressive.org/", picture: i4g },
  ];
  return (
    <div id="contact" className=" bg-secondary contact">
      <h3>Contact Me</h3>
      {contacts.map((contact, i) => (
        <a key={i} href={contact.url}>
          <img
            className="contact-image"
            src={contact.picture}
            alt={contact.name}
          />
        </a>
      ))}
      <img src="" alt="" />
    </div>
  );
};

export default Contact;
