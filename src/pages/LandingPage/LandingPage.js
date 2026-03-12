import React, { useEffect, useState, useRef } from "react";
import "./LandingPage.css";
import btn from "../../assets/dugme.png";
import kec from "../../assets/char1/char1.png";
import dva from "../../assets/dva.png";
import tri from "../../assets/tri.png";
import cetri from "../../assets/cetri.png";
import arrow from "../../assets/arrow.png";

export default function LandingPage() {
  const arrowRef = useRef(null);
  const titleRef = useRef(null);
  const char1Ref = useRef(null);
  const char2Ref = useRef(null);
  const char3Ref = useRef(null);
  const char4Ref = useRef(null);
  const charRefs=[char1Ref,char2Ref,char3Ref,char4Ref]
  const [zoomed, setZoomed] = useState(0);
  const [character,setCharacter]=useState(-1)
const SetCharacter=(char)=>{
  if(charRefs[char-1].current){
   charRefs[char-1].current.style.filter = "brightness(80%)"
    for(let i=0;i<4;i++){
      if(i!=char-1){
           charRefs[i].current.style.filter = "brightness(40%)"
      }
    }
  }
}

  useEffect(()=>{
  if(character===-1&&arrowRef.current){
      arrowRef.current.style.display = "none";
    }
    else if (character === 0 && arrowRef.current && char1Ref.current) {
    arrowRef.current.style.display = "block";
    const rect = char1Ref.current.getBoundingClientRect();
    arrowRef.current.style.left = rect.left + rect.width / 2 -10 + "px";
    arrowRef.current.style.top = rect.top +200 + "px";
    SetCharacter(1)
  }
  else if (character === 1 && arrowRef.current && char2Ref.current) {
    arrowRef.current.style.display = "block";
    const rect = char2Ref.current.getBoundingClientRect();
    arrowRef.current.style.left = rect.left + rect.width / 2 -20 + "px";
    arrowRef.current.style.top = rect.top + 200 + "px";
    SetCharacter(2)
  }
  else if (character === 2 && arrowRef.current && char3Ref.current) {
    arrowRef.current.style.display = "block";
    const rect = char3Ref.current.getBoundingClientRect();
    arrowRef.current.style.left = rect.left + rect.width / 2 -45 + "px";
    arrowRef.current.style.top = rect.top + 20 + "px";
    SetCharacter(3)
  }
  else if (character === 3 && arrowRef.current && char3Ref.current) {
    arrowRef.current.style.display = "block";
    const rect = char4Ref.current.getBoundingClientRect();
    arrowRef.current.style.left = rect.left + rect.width / 2 -65 + "px";
    arrowRef.current.style.top = rect.top + 20 + "px";
    SetCharacter(4)
    }
  },[character])

  useEffect(()=>{
  if (!zoomed) return;

  const timer = setTimeout(() => {
    titleRef.current.style.visibility= "visible"

  }, 1300);

  return () => clearTimeout(timer);
  },[zoomed])
  return (
    <div className={`full ${zoomed==1 ? "zoomed" :zoomed==2?"zoomed2": ""}`}>
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
          onClick={() => setZoomed(1)}
        >
          PLAY
        </h1>
      </div>
      <h1 className="title" ref={titleRef}>CHOOSE YOUR CHARACTER</h1>
      <img className="arrow" ref={arrowRef} src={arrow} />
      {character>-1&&<div className="btn-div">
        <img className="" src={btn} />
        <h1 className=""
          onClick={() => setZoomed(2)}
        >CONTINUE</h1>
      </div>}
      <div className="characters">
        <img className="" alt="" ref={char1Ref} src={kec} onClick={()=>setCharacter(0)} />
        <img className="" alt="" ref={char2Ref} src={dva} onClick={()=>setCharacter(1)}/>
        <img className="" alt="" ref={char3Ref} src={tri} onClick={()=>setCharacter(2)}/>
        <img className="" alt="" ref={char4Ref} src={cetri} onClick={()=>setCharacter(3)}/>
      </div>

    </div>
  );
}
