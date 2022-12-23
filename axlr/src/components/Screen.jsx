import React from 'react';
import '../styles/Screen.css'
import { RightBox } from './RightBox/RightBox';
import { SaveBtn } from './SaveBtn';
import { LeftBox } from './LeftBox/LeftBox';
import { MidBox } from './MidBox/MidBox';


export const Screen = () => {
    
  return (
    <div>
        <SaveBtn />
      <div className='containerCss'>
      <LeftBox />
       <MidBox />
       <RightBox />
       
    </div>
    </div>
  )
}
