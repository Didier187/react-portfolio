import React, { useRef, useEffect } from "react";
import Project from "./Project";

import { projects } from "./data";

export default function Projects() {
  let content = projects.map((project) => (
    <Project
      key={project.id}
      title={project.title}
      description={project.description}
      source={project.source}
      live={project.live}
    />
  ));
  return (
    <section className="tab-content">
      <h2 className="project_indicator">projects</h2>
      {/* <ul className="projects">{content}</ul> */}
      <p>
        I specialize in React TypeScript development and have a wealth of
        experience working on large enterprise projects. My expertise lies in
        designing and implementing scalable, efficient solutions while ensuring
        a seamless user experience. I am committed to staying updated with the
        latest developments in these technologies, making me well-prepared to
        contribute to your projects and drive success.
      </p>
    </section>
  );
}
