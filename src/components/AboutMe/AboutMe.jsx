import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-content-container">
      <div className="about-me-svg"></div>
      <div className="about-me-text-container">
        <p className="about-me-text">
          I'm a music-loving, multi-instrumentalist, die-hard Portland
          Trailblazers fan with a Witcher 3 addiction. I live for music and
          basketball, and gaming is my escape from reality. The Witcher 3 is my
          all-time favorite game, and I love the way it immerses me in a world
          of adventure and excitement. I'm passionate about connecting with
          others who share my interests and values, and I'm always looking for
          opportunities to learn and grow. Whether we're talking music, sports,
          gaming, or anything else I'm passionate about. I'm here for it.
        </p>
        <p className="about-me-text">
          Head on over to my Github lair to uncover the secrets of my latest
          projects and witness the magic of code in action.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
