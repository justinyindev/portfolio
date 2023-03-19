import React from "react";
import "./Cat.css";

const Cat = ({ awake }) => {
  return (
    <div className="cat-container">
      <div className="cat">
        <div className="ear"></div>
        <div className={!awake ? "eye" : "awake-eyes"}></div>
        <div className="mouth"></div>
        <div className="nose"></div>
        <div className="tail"></div>
        <div className="body"></div>
        {!awake ? <div className="bubble"></div> : null}
      </div>
    </div>
  );
};

export default Cat;
