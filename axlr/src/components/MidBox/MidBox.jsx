import React from 'react'
import Navbar from "./Navbar"
import "../../styles/MidBox.css"
import { Carousel } from '../LeftBox/Carousel'
import { Carousel2 } from '../Common/Carousel2'
import { Box } from '../Common/Box'
import { Banner } from '../Common/Banner'
import { Footer } from '../Footer'

export const MidBox = () => {
  return (
    <div id='mid_box'>
        <Navbar />
        <Carousel />
        <Carousel2 />
        <Box title="Top Seller"/>
        <Box title="New Arrivels"/>
        <Box title="Tranding Now"/>
        <Banner />
        <Box title="You May Also Like" />
        <Box />
        <Box title="Insta Feed"/>
        <Banner />
        <Footer />
    </div>
  )
}
