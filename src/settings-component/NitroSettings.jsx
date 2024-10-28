import React from 'react'
import Navbar from '/src/nitro-componet/navbar'
import "/src/nitro-componet/discord-nitro.css";
import Frame from '/src/nitro-componet/frameone';
import Part2 from '/src/nitro-componet/part-two';
import Plans from '../nitro-componet/plans';
const NitroSettings = () => {
  return (
    <div>
         <div className="nitrocontainer">
     <div className="nitromain">
  
     
     <Navbar/>
     <Frame/>
     <Part2/>
     <Plans/>


     </div>
     </div>
    </div>
  )
}

export default NitroSettings
