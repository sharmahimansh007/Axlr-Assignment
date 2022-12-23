import React from 'react'
import {Carousel} from "./Carousel"
import "../../styles/LeftBox.css"
import { Carousel2 } from '../Common/Carousel2'
import { Box2 } from '../Common/Box2'

export const LeftBox = () => {
  return (
    <div id='left_box' >
        <Carousel />
        <Carousel2 />
        <Box2 title="Top Seller"/>
        <Box2 title="New Arrivels"/>
        <Box2 title="Tranding Now"/>
    </div>
  )
}
