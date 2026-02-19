import React from 'react'
import "./Cube.css"
export default function Cube({ top = 0, left = 0 }) {
  return (
    <div
      className="cube"
      style={{
        top: `${top}px`,
        left: `${left}px`
      }}
    >
        <div className="face front">F</div>
        <div className="face back">B</div>
        <div className="face right">R</div>
        <div className="face left">L</div>
        <div className="face top">T</div>
        <div className="face bottom">D</div>
    </div>
  )
}
