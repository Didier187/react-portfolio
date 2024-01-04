"use client";
import Image from "next/image";
import Tooltip from "./Tooltip";

export default function Tech(props) {
  const tech = props.tech;
  let imageSrc =
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg` &&
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;
  function addDifferentImg(event) {
    event.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-plain.svg`;
  }
  return (
    <>
      {imageSrc && (
        <div
          className="tech-icon-container"
          style={{
            animation: `fadeIn ${0.2 * props.index}s ease-in-out`,
          }}
        >
          <Image
            onError={addDifferentImg}
            className="tech-icon"
            alt={`${tech}`}
            data-for="toolTip"
            data-tip={tech}
            src={imageSrc}
            width="50"
            height="50"
          />
          <Tooltip text={tech}/>
        </div>
      )}
    </>
  );
}
