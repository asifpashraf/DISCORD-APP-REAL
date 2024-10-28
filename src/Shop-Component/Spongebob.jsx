import React, { useState } from 'react'

import Spongemain from '/src/assets/shop-images/spongebob/spongemain.png'
import Sponge from '/src/assets/Shop-images/spongebob/spongebob.png'
import imagination from '/src/assets/Shop-images/spongebob/imagination.png'
import patrick from '/src/assets/Shop-images/spongebob/patrick.png'
import flower from '/src/assets/Shop-images/spongebob/flower.png'
import gray from '/src/assets/Shop-images/spongebob/gray.png'
import sandy from '/src/assets/Shop-images/spongebob/sandy.png'
import muscle from '/src/assets/Shop-images/spongebob/musclebob.png'
import nice from '/src/assets/Shop-images/spongebob/nice.png'
import handsome from '/src/assets/Shop-images/spongebob/handsome.png'
import doodle from '/src/assets/Shop-images/spongebob/doodlebob.png'
import plankton from '/src/assets/Shop-images/spongebob/plankton.png'
import ocean from '/src/assets/Shop-images/spongebob/ocean.png'

import gift from '/src/assets/shop-images/gift.png'
import nitro from '/src/assets/shop-images/nitro.png'
import Modal from './Buymodal'

function Spongebob(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

    const spongecards = [
        {img:Sponge  ,heading:"SpongeBob",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
        {img:imagination  ,heading:"Imagination",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
        {img:patrick  ,heading:"Patrick Star",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
        {img:flower  ,heading:"Flower Clouds",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
        {img:gray  ,heading:"Gray The Snail",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
        {img:sandy  ,heading:"Sandy Cheeks",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
        {img:muscle  ,heading:"MuscleBob",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
        {img:nice  ,heading:"NiCe pRoFiLE",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
        {img:handsome  ,heading:"Handsome Squidward",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
        {img:doodle  ,heading:"DoodleBob Takeover",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
        {img:plankton  ,heading:"Plankton Splat",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
        {img:ocean  ,heading:"Ocean Flowers",rate:"$12.99",nitro:nitro,nitroprice:"$9.99 With Nitro",buybutton:"Buy for $12.99",gift:gift},
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
    <div className="Spongebob">
       
       <div className='maincard'>
        <img src={Spongemain} alt="" />
      </div>
      <div className="shop-cardbox" >
     {spongecards.map(item =>(
     
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

export default Spongebob