import React from "react";
import "./App.css";
import { svg } from "./svg";

function App() {
  return (
    <div className="main-container">
      <div>{svg["Hero"]}</div>

      <div className="container">
        <div className="cat">
          <div className="ear"></div>
          <div className="eye"></div>
          <div className="mouth"></div>
          <div className="nose"></div>
          <div className="tail"></div>
          <div className="body"></div>
          <div className="bubble"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
