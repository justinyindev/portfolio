import React from "react";
import "./App.css";
import Cat from "./components/Cat/Cat";
import { svg } from "./svg";

function App() {
  const handleSvgClick = () => {
    const div = document.getElementById("hero-cat");
    div.classList.add("shake");
    div.addEventListener(
      "animationend",
      () => {
        div.classList.remove("shake");
      },
      { once: true }
    );
  };

  return (
    <div className="main-container">
      <div className="hero-container" onClick={handleSvgClick} id="hero-cat">
        <div className="svg-container">{svg["Hero"]}</div>
        <Cat />
      </div>
    </div>
  );
}

export default App;
