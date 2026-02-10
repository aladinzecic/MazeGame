import React from 'react'
import "./LandingPage.css"
import btn from "../../assets/dugme.png"
export default function LandingPage() {
  return (
    <div className="full">
      <svg
        className="curve-text"
        width="600"
        height="400"
        viewBox="0 0 600 1"
      >
        <path
          id="arc"
          d="M 80 150 A 320 320 0 0 1 520 150"
          fill="transparent"
        />
        <text>
          <textPath href="#arc" startOffset="50%" textAnchor="middle">
            Escape the jungle
          </textPath>
        </text>
      </svg>
      <div className="btn-full">
      <img className="btn-img" src={btn} />
      <h1 className="btn-text">PLAY</h1>
      </div>
    </div>
  );
}
