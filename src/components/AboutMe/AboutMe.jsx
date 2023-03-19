import React from "react";
import { translations } from "../../static/translations";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-content-container">
      <div className="about-me-text-container">
        <h1 className="about-me-heading">About me</h1>
        <p className="about-me-text">
          {translations["AboutMe"]["intro"]}
        </p>
        <p className="about-me-text">
          Head on over to my{" "}
          <span className="strong-text">
            <a className="content-href" href="https://github.com/justinyindev">
              Github
            </a>
          </span>{" "}
          lair to uncover the secrets of my latest projects and witness the
          magic of code in action.
        </p>
        <div className="contact-me">
          <h1 className="contact-me-heading">Contact me</h1>
          <div className="contact-me-list-container">
            <li className="list-item">
              <a className="content-href" href="mailto:zzyin@uwaterloo.ca">
                Email
              </a>
            </li>
            <li className="list-item">
              <a
                className="content-href"
                href="https://www.linkedin.com/in/zi-zhou-yin-b8836b1b6/"
              >
                LinkedIn
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="about-me-svg"></div>
    </div>
  );
};

export default AboutMe;
