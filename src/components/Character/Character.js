import React, { useEffect, useState } from 'react'
import "./Character.css"
import w1 from "../../assets/char1/char1run1.png";
import w2 from "../../assets/char1/char1run2.png";
import w3 from "../../assets/char1/char1run3.png";
import w4 from "../../assets/char1/char1run4.png";
export default function Character({isMoving}) {
      const frames = [w3,w1,w4];
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!isMoving) return;

    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 120);

    return () => clearInterval(interval);
  }, [isMoving]);

return <img className='character' src={frames[frame]} width={250} />
}
