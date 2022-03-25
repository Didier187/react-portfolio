import React from "react";
import { Envelope, GeoAltFill } from "react-bootstrap-icons";

export default function Hero({
  avatarUrl,
  name,
  title,
  location,
  shortDescription,
  email,
}) {
  return (
    <section className="hero">
      <div className="card">
        <img
          src={avatarUrl}
          width="150"
          height="150"
          layout="responsive"
          alt="avatar"
          className="card__avatar"
        />
        <p className="card__name">{name}</p>
        <div className="card__flex">
          <span className="card__title">{title}</span>
          <span className="location">
            {" "}
            <GeoAltFill fill={"#1E90FF"} size={13} /> {location}
          </span>
        </div>
        <p className="card__desc">{shortDescription}</p>
        <a className="card__link" href={`mailto:${email}`}>
          <Envelope size={20} /> Contact me
        </a>
      </div>
    </section>
  );
}
