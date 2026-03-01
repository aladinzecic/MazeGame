import React, { useContext, useEffect, useState } from 'react'
import "./Character.css"
import ul1 from "../../assets/char1/char1run1-ul.png";
import ul3 from "../../assets/char1/char1run3-ul.png";
import ul4 from "../../assets/char1/char1run4-ul.png";
import ur1 from "../../assets/char1/char1run1-ur.png";
import ur3 from "../../assets/char1/char1run3-ur.png";
import ur4 from "../../assets/char1/char1run4-ur.png";
import dr1 from "../../assets/char1/char1run1-dr.png";
import dr4 from "../../assets/char1/char1run3-dr.png";
import dr3 from "../../assets/char1/char1run2-dr.png";
import dl1 from "../../assets/char1/char1run1-dl.png";
import dl4 from "../../assets/char1/char1run3-dl.png";
import dl3 from "../../assets/char1/char1run2-dl.png";
import { motion, transform } from "framer-motion";
import { AppContext } from '../../Context/AppContext';

export default function Character({ isMoving}) {
  const framesUL = [ul3, ul1, ul4];
  const framesUR = [ur3, ur1, ur4];
  const framesDR = [dr3, dr1, dr4];
  const framesDL = [dl3, dl1, dl4];
  const [frame, setFrame] = useState(0);
  const {xCharacter,yCharacter,charMove}=useContext(AppContext)
  useEffect(() => {
    if (!isMoving) return;

    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % framesUL.length);
    }, 120);
    console.log(charMove)
    return () => clearInterval(interval);
  }, [isMoving]);

  return (
    <motion.img
      className="character"
      src={
        charMove=="ur"?framesUR[frame]:
        charMove=="ul"?framesUL[frame]:
        charMove=="dr"?framesDR[frame]:
        charMove=="dl"?framesDL[frame]:""
      }
      width={50}
        animate={{
          x: xCharacter,
          y: yCharacter,
  }}
  transition={{ duration: 0.2 }}
    />
  );
}