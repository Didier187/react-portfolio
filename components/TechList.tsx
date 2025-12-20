import Tech from "./Tech";

export default function TechList({ techStack }) {
  return (
    <>
      <h2>Tech Stack</h2>
      {Object.entries(techStack).map(([category, technologies]) => (
        <div key={category} className="tech-category">
          <h3 className="tech-category-title">{category}</h3>
          <div className="tech-list">
            {technologies.map((tech, index) => (
              <Tech key={`${category}-${index}-${tech}`} tech={tech} index={index} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
