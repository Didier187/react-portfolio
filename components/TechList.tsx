import Tech from "./Tech";

export default function TechList({ techArr }) {
  return (
    <>
      <h2>Tools</h2>
      <div className="tech-list">
        {techArr.map((tech, index) => (
          <Tech key={`${index}-${tech}`} tech={tech} index={index} />
        ))}
      </div>
    </>
  );
}
