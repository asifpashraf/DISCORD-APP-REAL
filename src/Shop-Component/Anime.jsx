import React, { useState } from 'react'


import Animemain from '/src/assets/shop-images/anime/animemain.png'
import heartthrob from '/src/assets/shop-images/anime/heartthrob.png'
import cat from '/src/assets/shop-images/anime/cat.png'
import ki from '/src/assets/shop-images/anime/ki.png'
import bloom from '/src/assets/shop-images/anime/bloom.png'
import dismay from '/src/assets/shop-images/anime/dismay.png'
import rage from '/src/assets/shop-images/anime/rage.png'
import tears from '/src/assets/shop-images/anime/tears.png'
import radiating from '/src/assets/shop-images/anime/radiating.png'
import soul from '/src/assets/shop-images/anime/soul.png'
import sweat from '/src/assets/shop-images/anime/sweat.png'
import starry from '/src/assets/shop-images/anime/starry.png'
import love from '/src/assets/shop-images/anime/love.png'
import shocked from '/src/assets/shop-images/anime/shocked.png'
import angry from '/src/assets/shop-images/anime/angry.png'
import dreamy from '/src/assets/shop-images/anime/dreamy.png'
import detonate from '/src/assets/shop-images/anime/detonate.png'
import sushi from '/src/assets/shop-images/anime/sushi.png'
import magic from '/src/assets/shop-images/anime/magic.png'
import shatter from '/src/assets/shop-images/anime/shatter.png'
import strike from '/src/assets/shop-images/anime/strike.png'
import power from '/src/assets/shop-images/anime/power.png'

import nitro from '/src/assets/shop-images/nitro.png'
import gift from '/src/assets/shop-images/gift.png'
import Modal from './Buymodal'

function Anime() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

    const animecards = [
        {img:heartthrob,heading:"Heartthrob Bundle",rate:"$10.99",percentage:"(-8%)",nitro:nitro,nitroprice:"$8.99",buybutton:"Buy for $10.99",gift:gift},
        {img:cat,heading:"Cat Ears",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:ki,heading:"Ki Energy",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:bloom,heading:"Heartbloom",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:dismay,heading:"Dismay",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:rage,heading:"Rage",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:tears,heading:"In Tears",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:radiating,heading:"Radiating Energy",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:soul,heading:"Soul Leaving Body",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:sweat,heading:"Sweat Drops",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:starry,heading:"Starry Eyed",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:love,heading:"In Love",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:shocked,heading:"Shocked",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:angry,heading:"Angry",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:dreamy,heading:"Dreamy",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:detonate,heading:"Ki Detonate",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:sushi,heading:"Sushi Mania",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:magic,heading:"Magic Hearts",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:shatter,heading:"Shatter",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:strike,heading:"Shurikien Strike",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:power,heading:"Power Surge",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
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
    <div className='Anime'>
         
      <div className='maincard'>
        <img src={Animemain} alt="" />
      </div>
      <div className="shop-cardbox" >
     {animecards.map(item =>(
     
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

export default Anime