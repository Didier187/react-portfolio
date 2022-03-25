import React from "react";
import ReactTooltip from "react-tooltip";

export default function Tech({ techTitle, toolTip }) {
  let imageSrc =
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${techTitle}/${techTitle}-original.svg` &&
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${techTitle}/${techTitle}-original.svg`;
  function addDifferentImg(event) {
    event.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${techTitle}/${techTitle}-plain.svg`;
  }

  return (
    <>
      {imageSrc && (
        <>
          <img
            className="tech-icon"
            alt={`${techTitle}`}
            data-for="toolTip"
            data-tip={toolTip}
            onError={addDifferentImg}
            src={imageSrc}
          />
          <ReactTooltip id="toolTip" getContent={(dataTip) => `${dataTip}`} />
        </>
      )}
    </>
  );
}
