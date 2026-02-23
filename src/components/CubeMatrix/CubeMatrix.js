import { useEffect, useState } from "react";
import Cube from "../Cube/Cube.js"
import "./CubeMatrix.css"
export default function CubeMatrix({ rows }) {
    const [cubes,setCubes]=useState([])
const CreateMatrix = () => {
  const cubesc = [];

  for (let i = rows; i > 0; i--) {
    for (let j = 0; j < rows; j++) {
      cubesc.push(
        <Cube
          key={`${i}-${j}`}
          top={-35 * i + 35 * j}
          left={70 * i + 70 * j}
        />
      );
    }
  }

      cubesc.push(
        <Cube
          key={`1111`}
          top={125}
          left={560}
        />
      );
            cubesc.push(
        <Cube
          key={`1111`}
          top={160}
          left={630}
        />
      );
  setCubes(cubesc)
};

useEffect(()=>{
    CreateMatrix()
},[])
  return (
    <div 
      className="cube-matrix"
    >   
        {cubes}
    </div>
  )
}
