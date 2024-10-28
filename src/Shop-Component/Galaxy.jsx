
import React, { useState } from 'react'
import Galaxymain from '/src/assets/Shop-images/galaxy/galaxymain.png'
import stargazing from '/src/assets/shop-images/galaxy/stargazing.png'
import stardust from '/src/assets/shop-images/galaxy/stardust.png'
import blackhole from '/src/assets/shop-images/galaxy/blackhole.png'
import constellations from '/src/assets/shop-images/galaxy/constellations.png'
import solar from '/src/assets/shop-images/galaxy/solar.png'
import ufo from '/src/assets/shop-images/galaxy/ufo.png'
import helmet from '/src/assets/shop-images/galaxy/helmet.png'
import shooting from '/src/assets/shop-images/galaxy/shooting.png'
import supernova from '/src/assets/shop-images/galaxy/supernova.png'
import twilight from '/src/assets/shop-images/galaxy/twilight.png'

import nitro from '/src/assets/shop-images/nitro.png'
import gift from '/src/assets/shop-images/gift.png'
import Modal from './Buymodal'



function Galaxy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

    const galaxycards = [
        {img:stargazing,heading:"Stargazing Bundle",rate:"$10.99",percentage:"(-8%)",nitro:nitro,nitroprice:"$8.99",buybutton:"Buy for $10.99",gift:gift},
        {img:stardust,heading:"Stardust",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:blackhole,heading:"Black Hole",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:constellations ,heading:"Constellations",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:solar,heading:"Solar Orbit",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:ufo,heading:"UFO",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:helmet,heading:"Astronaut Helmet",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:shooting,heading:"Shooting Stars",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:supernova,heading:"Supernova",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:twilight,heading:"Twilight",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
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
    <div className='Galaxy'>
       
      <div className='maincard'>
        <img src={Galaxymain} alt="" />
      </div>
      <div className="shop-cardbox" >
     {galaxycards.map(item =>(
     
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

export default Galaxy