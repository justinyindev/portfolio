import React from "react";
import Typewriter from "typewriter-effect";
import { translations } from "../../static/translations";

const TypeWriter = () => {
  return (
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
          .start();
      }}
    />
  );
};

export default TypeWriter;
