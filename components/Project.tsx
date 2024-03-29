const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-box-arrow-up-right"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
    />
    <path
      fill-rule="evenodd"
      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
    />
  </svg>
);
interface ProjectProps {
  id: number;
  title: string;
  description: string;
  source: string;
  live?: string;
}
export default function Project(props: ProjectProps) {
  const { title, description, source, live } = props;
  return (
    <li className="project">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div className="links">
        <a href={source} target="_blank" rel="external" type="text/html">
          source <ExternalLinkIcon />
        </a>
        {live && (
          <a href={live} target="_blank" rel="external" type="text/html">
            live <ExternalLinkIcon />
          </a>
        )}
      </div>
    </li>
  );
}
