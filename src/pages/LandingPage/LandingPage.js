import React, { useState } from "react";
import "./LandingPage.css";
import btn from "../../assets/dugme.png";
import kec from "../../assets/kec.png";
import dva from "../../assets/dva.png";
import tri from "../../assets/tri.png";
import cetri from "../../assets/cetri.png";

export default function LandingPage() {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className={`full ${zoomed ? "zoomed" : ""}`}>
      <svg className={`curve-text ${zoomed ? "hidden" : ""}`}  width="600" height="400" viewBox="0 0 600 1">
        <path
          id="arc"
          d="M 80 150 A 320 320 0 0 1 520 150"
          fill="transparent"
        />
        <text>
          <textPath href="#arc" startOffset="50%" textAnchor="middle" >
            Escape the jungle
          </textPath>
        </text>
      </svg>

      <div className={`btn-full ${zoomed ? "hidden" : ""}`}>
        <img className="btn-img" src={btn} alt="Play button" />
        <h1
          className="btn-text"
          onClick={() => setZoomed(true)}
        >
          PLAY
        </h1>
      </div>
      <div className="characters">
        <img className="" src={kec} />
        <img className="" src={dva} />
        <img className="" src={tri} />
        <img className="" src={cetri} />
      </div>
    </div>
  );
}
