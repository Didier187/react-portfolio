import React from "react";

export default function Container({ title, content }) {
  return (
    <section className="stack">
      <h2>{title}</h2>
      <div className="stack__container">{content}</div>
    </section>
  );
}
