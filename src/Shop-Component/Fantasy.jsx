import React, { useState } from 'react'

import fantasymain from '/src/assets/shop-images/fantasy/fantasymain.png'
import fairy from '/src/assets/shop-images/fantasy/fairy.png'
import sword from '/src/assets/shop-images/fantasy/sword.png'
import potion from '/src/assets/shop-images/fantasy/potion.png'
import sprites from '/src/assets/shop-images/fantasy/sprites.png'
import wizard from '/src/assets/shop-images/fantasy/wizard.png'
import runes from '/src/assets/shop-images/fantasy/runes.png'
import shield from '/src/assets/shop-images/fantasy/shield.png'
import skull from '/src/assets/shop-images/fantasy/skull.png'
import key from '/src/assets/shop-images/fantasy/key.png'
import hydro from '/src/assets/shop-images/fantasy/hydro.png'
import dreams from '/src/assets/shop-images/fantasy/dreams.png'
import mystic from '/src/assets/shop-images/fantasy/mystic.png'
import pixie from '/src/assets/shop-images/fantasy/pixie.png'

import nitro from '/src/assets/shop-images/nitro.png'
import gift from '/src/assets/shop-images/gift.png'
import Modal from './Buymodal'

function Fantasy() {
   
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const fantasycards = [
    {img:fairy,heading:"Fairy & Pixie Bundle",rate:"$19.99",percentage:"(-9%)",nitro:nitro,nitroprice:"$13.99",buybutton:"Buy for $19.99",gift:gift},
    {img:sword,heading:"Flaming Sword",rate:"$9.99",nitro:nitro,nitroprice:"$6.99 With Nitro",buybutton:"Buy for $9.99",gift:gift},
    {img:potion,heading:"Magical Potion",rate:"$9.99",nitro:nitro,nitroprice:"$6.99 With Nitro",buybutton:"Buy for $9.99",gift:gift},
    {img:sprites,heading:"Fairy Sprites",rate:"$9.99",nitro:nitro,nitroprice:"$6.99 With Nitro",buybutton:"Buy for $9.99",gift:gift},
    {img:wizard,heading:"Wizard's Staff",rate:"$9.99",nitro:nitro,nitroprice:"$6.99 With Nitro",buybutton:"Buy for $9.99",gift:gift},
    {img:runes,heading:"Glowing runes",rate:"$9.99",nitro:nitro,nitroprice:"$6.99 With Nitro",buybutton:"Buy for $9.99",gift:gift},
    {img:shield,heading:"Defensive Shield",rate:"$9.99",nitro:nitro,nitroprice:"$6.99 With Nitro",buybutton:"Buy for $9.99",gift:gift},
    {img:skull,heading:"Skull Medallion",rate:"$9.99",nitro:nitro,nitroprice:"$6.99 With Nitro",buybutton:"Buy for $9.99",gift:gift},
    {img:key,heading:"Treasure and Key",rate:"$9.99",nitro:nitro,nitroprice:"$6.99 With Nitro",buybutton:"Buy for $9.99",gift:gift},
    {img:hydro,heading:"Hydro Blast",rate:"$11.99",nitro:nitro,nitroprice:"$8.49 With Nitro",buybutton:"Buy for $11.99",gift:gift},
    {img:dreams,heading:"Sakura Dreams",rate:"$11.99",nitro:nitro,nitroprice:"$8.49 With Nitro",buybutton:"Buy for $11.99",gift:gift},
    {img:mystic,heading:"Mystic Vines",rate:"$11.99",nitro:nitro,nitroprice:"$8.49 With Nitro",buybutton:"Buy for $11.99",gift:gift},
    {img:pixie,heading:"Pixie Dust",rate:"$11.99",nitro:nitro,nitroprice:"$8.49 With Nitro",buybutton:"Buy for $11.99",gift:gift},
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
    
    <div className='fantasy'>
      
      <div className='maincard'>
        <img src={fantasymain} alt="" />
      </div>
      <div className="shop-cardbox" >
     {fantasycards.map(item =>(
     
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

export default Fantasy