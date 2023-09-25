import React from "react";
import { START_YEAR } from "./data";

export default function About() {
  return (
    <section className="tab-content">
      <h2>About me</h2>
      <p>
        I am a Frontend Engineer with a passion for building intuitive and
        visually appealing user interfaces. With{" "}
        {new Date().getFullYear() - START_YEAR} years of experience in the
        industry, I have a strong foundation in{" "}
        <strong className="html-abbr"> HTML</strong>,{" "}
        <strong className="css-abbr">CSS</strong>, and{" "}
        <strong className="js-abbr">JavaScript</strong> as well as{" "}
        <strong className="ts-abbr">TypeScript</strong>, and I am skilled in
        modern frameworks such as{" "}
        <strong className="react-abbr">ReactJs</strong> and{" "}
        <strong className="solid-abbr">SolidJs</strong>.
      </p>
      <p>
        Throughout my career, I have had the opportunity to work on a wide range
        of projects, from small websites to large-scale web applications. I
        pride myself on my ability to translate designs into responsive and
        functional interfaces and my attention to detail.
      </p>
      <p>
        In addition to my technical skills, I am a strong communicator and
        collaborator. I enjoy working with cross-functional teams and have a
        track record of delivering high-quality work on time.
      </p>
      <p>
        Thank you for considering me for your frontend development needs. I
        welcome the opportunity to bring my skills and experience to your
        project and help bring your vision to life
      </p>
    </section>
  );
}
