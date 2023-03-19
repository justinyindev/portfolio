import React from "react";
import "./Button.css";

const Button = ({ content, handleClick }) => {
  return (
    <button className="button" onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
