import React from 'react'

export const Box = ({title, className}) => {
  return (
    <>
    <h4 style={{marginTop : "20px"}}> {title} </h4>
    <div className={className} data-bs-interval="10000" style={{display:"flex", width : "30%", height:"120px", gap:"5px"}}>
        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="" />
        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="" />
        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="" />
    </div>
    </>
  )
}
