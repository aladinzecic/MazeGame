import { createContext, useEffect, useState } from "react";


const AppContext=createContext()

function ContextProvider({children}){

    const [xCharacter,setXCharacter]=useState(170)
    const [yCharacter,setYCharacter]=useState(-215)
    const [matrix,setMatrix]=useState([])
    const [charI,setCharI]=useState(1)
    const [charJ,setCharJ]=useState(0)
    const [charMove,setCharMove]=useState("ur")

    // const [xCharacter,setXCharacter]=useState(250)
    // const [yCharacter,setYCharacter]=useState(-150)
const handleKeyDown = (e) => {
  e.preventDefault();
  
  if(!matrix.length)return;
  setXCharacter(prevX => {
    let newX = prevX;
    console.log(matrix)
    // dodaj optional chaining da ne baca erro
    if(matrix[charI][charJ+1]===0&&e.key === "d"){
      newX += 70;
      setCharJ(charJ + 1);
      setCharMove("dr")

    }
    if(matrix[charI][charJ-1]===0&&e.key === "a"){
      newX -= 70;
      setCharJ(charJ - 1);
      setCharMove("ul")

    }
    if(matrix[charI+1][charJ]===0&&e.key === "w"){
      newX += 70
      setCharI(charI + 1);
      setCharMove("ur")

    }
    if(matrix[charI-1][charJ]===0&&e.key === "s"){
      newX -= 70
      setCharI(charI - 1);
      setCharMove("dl")

    }

    return newX;
  });

  setYCharacter(prevY => {
    let newY = prevY;
    if(matrix[charI][charJ+1]===0&&e.key === "d"){
      newY += 54;
    }
    if(matrix[charI][charJ-1]===0&&e.key === "a"){
      newY -= 54;
    }
    if(matrix[charI+1][charJ]===0&&e.key === "w"){
      newY -= 54;
    }
    if(matrix[charI-1][charJ]===0&&e.key === "s"){
      newY += 54;
    }
    return newY;

  });
};

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [matrix, charI, charJ]);

      const values={
        xCharacter,
        yCharacter,
        setXCharacter,
        setYCharacter,
        matrix,
        setMatrix,
        charMove
      }

      return <AppContext.Provider value={values}>{children}</AppContext.Provider>;

}

export {AppContext,ContextProvider};