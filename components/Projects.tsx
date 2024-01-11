import Project from "./Project";

import { projects } from "./data";

export default function Projects() {
  let content = projects.map((project) => (
    <Project key={project.id} {...project} />
  ));
  return (
    <section className="tab-content">
      <h2 className="project_indicator">projects</h2>
      {/* <ul className="projects">{content}</ul> */}
      <p>{/* about things i worked on */}</p>
    </section>
  );
}
