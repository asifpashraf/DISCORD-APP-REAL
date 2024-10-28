import React, { useState } from 'react'


import Lofimain from '/src/assets/shop-images/lofi/lofimain.png'
import plant from '/src/assets/shop-images/lofi/plant.png'
import chromawave from '/src/assets/shop-images/lofi/chromawave.png'
import cat from '/src/assets/shop-images/lofi/cozycat.png'
import oasis from '/src/assets/shop-images/lofi/oasis.png'
import rainy from '/src/assets/shop-images/lofi/rainy.png'
import headphone from '/src/assets/shop-images/lofi/headphone.png'
import doodling from '/src/assets/shop-images/lofi/doodling.png'
import study from '/src/assets/shop-images/lofi/study.png'
import nighter from '/src/assets/shop-images/lofi/all nighter.png'
import watercolors from '/src/assets/shop-images/lofi/watercolors.png'

import nitro from '/src/assets/shop-images/nitro.png'
import gift from '/src/assets/shop-images/gift.png'
import Modal from './Buymodal'

function Lofi() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

    const loficards = [
        {img:plant,heading:"vhxghudg",rate:"$10.99",percentage:"(-8%)",nitro:nitro,nitroprice:"$8.99",buybutton:"Buy for $10.99",gift:gift},
        {img:chromawave,heading:"vhxghudg",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:cat,heading:"vhxghudg",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:oasis,heading:"vhxghudg",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:rainy,heading:"vhxghudg",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:headphone,heading:"vhxghudg",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:doodling,heading:"vhxghudg",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:study,heading:"vhxghudg",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:nighter,heading:"vhxghudg",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
        {img:watercolors,heading:"vhxghudg",rate:"$5.99",nitro:nitro,nitroprice:"$4.99 With Nitro",buybutton:"Buy for $5.99",gift:gift},
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
    <div className='Lofi'>

         <div className='maincard'>
        <img src={Lofimain} alt="" />
      </div>
      <div className="shop-cardbox" >
     {loficards.map(item =>(
     
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

export default Lofi