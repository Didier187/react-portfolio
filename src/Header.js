import React from "react";
import { Link } from "react-router-dom";
import { Download } from "react-bootstrap-icons";
import resume from "./images/resume.pdf";

export default function Header() {
  return (
    <header>
      <p className="logo">SnapShot</p>
      {/* download resume link */}
      <Link to={resume} target="_blank" download="Didier's resume" className="download"><Download color="white"/> Resume</Link>
    </header>
  );
}
