import React from "react";
import Typewriter from "typewriter-effect";
import { translations } from "../../static/translations";
import { Link } from "react-scroll";
import "./TypeWriter.css";

const TypeWriter = ({ showContentAfterHeading, handleShowContent }) => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1500)
            .typeString(translations["Intro"]["myNameIs"])
            .pauseFor(300)
            .deleteAll()
            .pauseFor(300)
            .typeString(translations["Intro"]["iStudyAt"])
            .pauseFor(700)
            .deleteAll()
            .typeString(translations["Intro"]["iWorkAs"])
            .pauseFor(700)
            .deleteAll()
            .typeString(translations["Intro"]["onThisSite"])
            .pauseFor(300)
            .callFunction(handleShowContent)
            .start();
        }}
      />
      <Link
        activeClass="active"
        to="about-me-section"
        spy={true}
        smooth={true}
        duration={500}
      >
        <div className="scroll-indicator-container">
          {true && <div className="scroll-indicator"></div>}
        </div>
      </Link>
    </div>
  );
};

export default TypeWriter;
