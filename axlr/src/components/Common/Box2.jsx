import React from 'react'

export const Box2 = ({title, className}) => {
  return (
    <>
    <h4 style={{marginTop : "20px"}}> {title} </h4>
    <div className={className} data-bs-interval="10000" style={{display:"flex",  height:"100px", gap:"5px"}}>
        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="" />
        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="" />
        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="" />
    </div>
    </>
  )
}
