import React, { useState } from 'react'

import Dojomain from '/src/assets/Shop-images/dojo/dojomain.png'
import Inkbundle from '/src/assets/Shop-images/dojo/inkbundle.png'
import Steelbun from '/src/assets/Shop-images/dojo/steelbun.png'
import kabuto from '/src/assets/shop-images/dojo/kabuto.png'
import Onimask from '/src/assets/shop-images/dojo/onimask.png'
import straw from '/src/assets/shop-images/dojo/straw hat.png'
import sakuraink from '/src/assets/shop-images/dojo/sakura ink.png'
import sakurawar from '/src/assets/shop-images/dojo/sakura warrior.png'
import shurikens from '/src/assets/shop-images/dojo/shurikens mark.png'
import oniscurse from '/src/assets/shop-images/dojo/onis curse.png'
import ofink from '/src/assets/shop-images/dojo/ofink.png'
import katana from '/src/assets/shop-images/dojo/katana.png'

import nitro from '/src/assets/shop-images/nitro.png'
import gift from '/src/assets/shop-images/gift.png'
import Modal from './Buymodal'


function Dojo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dojocards = [
    {img:Inkbundle  ,heading:"Etched in Ink Bundle",rate:"$10.99",percentage:"(-8%)",nitro:nitro,nitroprice:"$8.99",buybutton:"Buy for $10.99",gift:gift},
    {img:Steelbun  ,heading:"Straw and Steel Bun...",rate:"$10.99",percentage:"(-8%)",nitro:nitro,nitroprice:"$8.99",buybutton:"Buy for $10.99",gift:gift},
    {img:kabuto  ,heading:"Kabuto",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
    {img:Onimask  ,heading:"Oni mask",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
    {img:straw  ,heading:"Straw Hat",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
    {img:sakuraink  ,heading:"Sakura Ink",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
    {img:sakurawar  ,heading:"Sakura Warrior",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
    {img:shurikens  ,heading:"Shuriken's Mark",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
    {img:oniscurse  ,heading:"Oni's Curse",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
    {img:ofink  ,heading:"Of Ink and Steel",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
    {img:katana  ,heading:"Sakura katana",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
    
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (

    <div className='dojocard'>
      
      <div className='maincard'>
        <img src={Dojomain} alt="" />
      </div>
      <div className="shop-cardbox" >
     {dojocards.map(item =>(
     
      <div className='shop-card' >
        <div className='blkimg'>
        <img src={item.img} alt="" />
        </div>
        <div className='cardcont'>
        <h3>{item.heading}</h3>
        <div className='rate'>
          <p>{item.rate}</p>
          <span>{item.percentage}</span>
       
           <img src={nitro} alt="" />
            <a>{item.nitroprice}</a>
    
        </div>
       <div className='buy-button'>

        <div className='buy-btn' onClick={() => openModal(item)}>{item.buybutton}</div>
       <div className='gift-btn'><img src={item.gift} alt="" /></div>
       
       </div>
       
        </div>
      </div>
     
    ))}

    </div>
     {/* Modal implementation */}
     <Modal 
        show={isModalOpen} 
        onClose={closeModal} 
        title={selectedItem?.heading || 'Purchase Item'}
      >
      
      </Modal>
 
 
    </div>
  )
}

export default Dojo