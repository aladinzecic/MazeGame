import React, { useContext } from 'react'
import "./Cube.css"
import floor from "../../assets/floor.png";
import { AppContext } from '../../Context/AppContext';
export default function Cube({ top = 0, left = 0, type,i,j }) {
  const{setXCharacter,setYCharacter}=useContext(AppContext)
    const handleRightClick = (event) => {
    event.preventDefault();

    // Koordinate u odnosu na viewport
    const x = event.clientX;
    const y = event.clientY;
    console.log("Viewport coordinates:", x, y);

    // Koordinate unutar samog Cube-a
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX;
    const relY = event.clientY;
    if(type==="down"){
      setYCharacter(relY-450+12*j)
      setXCharacter(relX-200+15*i)
    }
    console.log("Relative to cube:", relX, relY);
  };
    const floorStyle =
    type === "down"
      ? {
          backgroundImage: `url(${floor})`,
          backgroundSize: `${8 * 100}px ${8 * 100}px`,
          backgroundPosition: `-${i * 100}px -${j * 100}px`,
          zIndex:10
          
        }
      : {};
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
  cursor: type === "down" ? "pointer" : "auto"
}}
    >
        <div className="face front"
                
        >a</div>
        <div className="face back"
        style={{zIndex:11}}
        >b</div>
        <div className="face right"  
        style={{zIndex:11}}      
        >c</div>
        <div className="face left">d</div>
        <div className="face top" style={floorStyle}
        onContextMenu={handleRightClick}
        >e</div>
        <div className="face bottom"  
        style={{zIndex:11}}      
        >f</div>
    </div>
  )
}
