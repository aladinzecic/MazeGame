import React from 'react'
import "./MainGamePage.css"
import Cube from '../../components/Cube/Cube'
import CubeMatrix from '../../components/CubeMatrix/CubeMatrix'
export default function MainGamePage() {
  return (
    <div className='main-full'>
        <CubeMatrix rows={9}/>
    </div>
  )
}
