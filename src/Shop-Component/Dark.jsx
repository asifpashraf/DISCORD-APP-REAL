import React, { useState } from 'react'

import Discord from '/src/assets/shop-images/discord.png'
import Darkmain from '/src/assets/shop-images/dark/darkmain.png'
import spirit from '/src/assets/shop-images/dark/spirit.png'
import arcanist from '/src/assets/shop-images/dark/arcanist.png'
import midnight from '/src/assets/shop-images/dark/midnight.png'
import malefic from '/src/assets/shop-images/dark/malefic.png'
import death from '/src/assets/shop-images/dark/death.png'
import embers from '/src/assets/shop-images/dark/embers.png'
import ring from '/src/assets/shop-images/dark/ring.png'
import sigil from '/src/assets/shop-images/dark/sigil.png'
import summons from '/src/assets/shop-images/dark/summons.png'
import vengeance from '/src/assets/shop-images/dark/vengeance.png'
import flame from '/src/assets/shop-images/dark/flame.png'

import nitro from '/src/assets/shop-images/nitro.png'
import gift from '/src/assets/shop-images/gift.png'
import Modal from './Buymodal'

function Dark() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

    const Darkcards = [
        {img:spirit,heading:"Spirit Embers Bundle",rate:"$10.99",percentage:"(-8%)",nitro:nitro,nitroprice:"$8.99",buybutton:"Buy for $10.99",gift:gift},
        {img:arcanist,heading:"Arcanist Bundle",rate:"$10.99",percentage:"(-8%)",nitro:nitro,nitroprice:"$8.99",buybutton:"Buy for $10.99",gift:gift},
        {img:midnight,heading:"Midnight Sorceress",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:malefic,heading:"Malefic Crown",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:death,heading:"Death's Edge",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:embers,heading:"Spirit Embers",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:ring,heading:"Eldritch Ring",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:sigil,heading:"Arcane Sigil",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:summons,heading:"Arcane Summons",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:vengeance,heading:"Vengeance",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:flame,heading:"Spirit Flame",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
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
    <div className='Dark'>
        
       
      <div className='maincard'>
        <img src={Darkmain} alt="" />
      </div>
      <div className="shop-cardbox" >
     {Darkcards.map(item =>(
     
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

export default Dark