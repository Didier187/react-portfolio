import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Container from "./Container";
import Tech from "./Tech";
import Social from "./Social";
import Projects from "./Projects";
import avatar from "./images/avatar.jpg";

export default function App() {
  const techArr = [
    "mongodb",
    "express",
    "react",
    "nodejs",
    "javascript",
    "html5",
    "css3",
    "sass",
    "markdown",
    "heroku",
    "github",
    "vscode",
    "google",
    "jest",
  ];
  const techContent = techArr.map((tech, index) => (
    <Tech key={index} techTitle={tech} toolTip={tech} />
  ));

  return (
    <>
      <Header />
      <main>
        <div className="flex-row">
          <Hero
            avatarUrl={avatar}
            title="full stack developer"
            location="Sydney"
            name="Didier Hategeka"
            shortDescription="G'day,nice to meet you, I am a fullstack web developer who loves Javascript. I love building websites with next technologies and current ones and I also like reading about new and old web technologies. I am always keen to learn new exciting technologies!, contact me, let's get to know each other better ⬇️"
            email="kdondidier@gmail.com"
          />
          <Container title={"my stack"} content={techContent} />
        </div>

        <Projects />
      </main>
      <Social />
    </>
  );
}
