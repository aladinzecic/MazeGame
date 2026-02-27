import React from 'react'
import "./MainGamePage.css"
import Cube from '../../components/Cube/Cube'
import CubeMatrix from '../../components/CubeMatrix/CubeMatrix'
import Character from '../../components/Character/Character'



export default function MainGamePage() {
  return (
    <div className='main-full'>
        <CubeMatrix rows={9}/>
        {/* <Character isMoving={1}/> */}
    </div>
  )
}
