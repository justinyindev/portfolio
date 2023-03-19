import React from "react";
import Typewriter from "typewriter-effect";
import { translations } from "../../static/translations";
import "./IntroHeading.css";

const IntroHeading = ({ showContentAfterHeading, handleShowContent }) => {
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
      <div className="content">
        {showContentAfterHeading && (
          <div className="scroll-indicator"></div>
        )}
      </div>
    </div>
  );
};

export default IntroHeading;
