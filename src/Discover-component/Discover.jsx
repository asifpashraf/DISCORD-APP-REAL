import React from 'react'
import Sidebar from '../layout-component/Sidebar'
import '../Discover-component/discover.css'
import ServerOptions from './ServerOptions'
import DiscoverNavbar from './Discover-navbar'
import ServerCards from './Official-cards'




function Discover() {

  const cardDetails =[
    {title:"dargonaballz",online:'234542',offline:243576},
    {title:"arcade",online:"123432",offline:243576},
    {title:"messiah",online:'465755',offline:243576},
  ]
  
  
  return (
    <div className='discover'>
      <Sidebar />
      <ServerOptions/>
      <div className='game-servers'>
        <DiscoverNavbar/>
        <div className="blue">
          
        </div>
         <img src="src\assets\Discover-images\communtity.png" alt="" className='community-pic'/>

         <div className="server-cards">

          {cardDetails.map((card,index)=>{ 
            return <ServerCards key={index} title={card.title} online={card.online} offline={card.offline}/>
            
            
          })}
               {/* {cardDetails.map((card, index) => {
                return <ServerCards key={index} title={card.title} />;
            })} */}
     

          
         </div>
        <h1>its loading..... Be patient</h1>
      </div>
    </div>
  )
}

export default Discover
