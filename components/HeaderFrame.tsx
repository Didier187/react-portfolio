export default function HeaderFrame({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <div className="header-frame">
      <h1>{name}</h1>
      <h2>{role}</h2>
    </div>
  );
}
