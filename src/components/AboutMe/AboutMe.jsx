import React from "react";
import { translations } from "../../static/translations";
import { svg } from "../../static/svg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <div className="about-me-text-container">
          <h1 className="about-me-heading">About me</h1>
          <p className="about-me-text">{translations["AboutMe"]["intro"]}</p>
          <p className="about-me-text">
            Head on over to my{" "}
            <span className="strong-text">
              <a
                className="content-href"
                href="https://github.com/justinyindev"
              >
                Github
              </a>
            </span>{" "}
            lair to uncover the secrets of my latest projects and witness the
            magic of code in action.
          </p>
        </div>
        <div className="about-me-svg">{svg["AboutMe"]}</div>
      </div>
    </div>
  );
};

export default AboutMe;
