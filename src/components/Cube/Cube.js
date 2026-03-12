import React, { useContext } from 'react'
import "./Cube.css"
import floor from "../../assets/floor.png";
import { AppContext } from '../../Context/AppContext';
export default function Cube({ top = 0, left = 0, type,i,j }) {
  const{setXCharacter,setYCharacter}=useContext(AppContext)
    
    const floorStyle =
    type === "down"
      ? {
          backgroundImage: `url(${floor})`,
          backgroundSize: `${8 * 100}px ${8 * 100}px`,
          backgroundPosition: `-${i * 100}px -${j * 100}px`,
          zIndex:1
          
        }
      : {
        zIndex:10
      };
  return (
    <div
className={`cube ${
  type === "vertical"
    ? "vertical"
    : type === "horizontal"
    ? "horizontal"
    : type === "edge-ur"
    ? "edge-ur"
    : type === "edge-ul"
    ? "edge-ul"
    : type === "edge-dr"
    ? "edge-dr"
    : type === "edge-dl"
    ? "edge-dl"
    : type === "cross-l"
    ? "cross-l"
    : type === "cross-d"
    ? "cross-d"
    : type === "cross-r"
    ? "cross-r"
    : type === "cross-u"
    ? "cross-u"
    : ""
}`}      style={{
  top: `${top}px`,
  left: `${left}px`,
  cursor: type === "down" ? "pointer" : "auto",
  // zIndex: type === "down" ? 1 : 10,

}}
    >
        <div className="face front"
        style={{  zIndex: type === "down" ? 1 : 10,
}}
        ></div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top" style={floorStyle}></div>
        <div className="face bottom"></div>
    </div>
  )
}
