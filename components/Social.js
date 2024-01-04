import React from "react";
import { Twitter, Linkedin, Github } from "react-bootstrap-icons";

export default function Social() {
  return (
    <section className="social">
      <div className="social__container">
        <a
          className="social_link linkedin"
          href="https://www.linkedin.com/in/didier-h-66953a211/"
        >
          <Linkedin size={30} fill={"#0077b5"} />
        </a>
        <a className="social_link github" href="https://github.com/Didier187">
          <Github size={30} fill={"#6e5494"} />
        </a>
        <a className="social_link twitter" href="https://twitter.com/KAMANUTSID">
          <Twitter size={30} fill={"#1da1f2"} />
        </a>
      </div>
    </section>
  );
}
