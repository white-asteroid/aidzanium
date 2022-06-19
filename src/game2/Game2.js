
import React from 'react';
import './Game2.css';
import Images from './Images';
import { Card } from 'react-bootstrap';
import {useState} from 'react';
function Kuchbhi() { 
    const [ cards , setCards ] = useState ( [...Images , ...Images ] ) ;

  return (
   <div> 
       <div className="board">
         {cards.map ( ( card ) => (
           <div className = " card - outer ">
             <div className = " card " >
              <div className = " front " >
                <img src = "./assets/img1.webp" alt = "hnu "/>
              </div>
              < div className = " back " > </div>
           </div>
        </div>
      ))}
       </div>
   </div>
  );
}

export default Kuchbhi;

/*
import React,{useState} from 'react';
import Images from "./Images"
function Kuchbhi(){
  const [ cards , setCards ] = useState ( [...Images , ...Images ] ) ;

  return(
    <div >
      {cards.map((card))}
      hello <br/>
      <img src="" alt='hy'/>
    </div>
    
  )
}

export default Kuchbhi;
*/