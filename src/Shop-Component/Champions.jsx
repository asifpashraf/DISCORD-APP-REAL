import React, { useState } from 'react'

import Champmain from '/src/assets/shop-images/champions/Championsmain.png'
import supernovabun from '/src/assets/shop-images/champions/supernova bun.png'
import yorubundle from '/src/assets/shop-images/champions/yoru bundle.png'
import acebundle from '/src/assets/shop-images/champions/ace bundle.png'
import champion from '/src/assets/shop-images/champions/champion.png'
import drift from '/src/assets/shop-images/champions/drift.png'
import poisoncloud from '/src/assets/shop-images/champions/poison cloud.png'
import neuraltheft from '/src/assets/shop-images/champions/neural theft.png'
import hintofclove from '/src/assets/shop-images/champions/hint of clove.png'
import fragout from '/src/assets/shop-images/champions/frag out.png'
import omenscowl from '/src/assets/shop-images/champions/omens cowl.png'
import reyna from '/src/assets/shop-images/champions/reyna.png'
import blade from '/src/assets/shop-images/champions/blade.png'
import yorurip from '/src/assets/shop-images/champions/yoru rip.png'
import vct from '/src/assets/shop-images/champions/vct supernova.png'
import ace from '/src/assets/shop-images/champions/ace.png'
import clovesruse from '/src/assets/shop-images/champions/cloves ruse.png'
import immortal from '/src/assets/shop-images/champions/immortal clove.png'
import nitro from '/src/assets/shop-images/nitro.png'
import gift from '/src/assets/shop-images/gift.png'
import Modal from './Buymodal'


function Champions() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const champcards = [
    {img:supernovabun  ,heading:"VCT Supernova Bun...",rate:"$28.99",percentage:"(-9%)",nitro:nitro,nitroprice:"$21.99",buybutton:"Buy for $28.99",gift:gift},
    {img:yorubundle  ,heading:"Yoru Bundle",rate:"$28.99",percentage:"(-9%)",nitro:nitro,nitroprice:"$21.99",buybutton:"Buy for $28.99",gift:gift},
    {img:acebundle  ,heading:"ACE Bundle",rate:"$28.99",percentage:"(-9%)",nitro:nitro,nitroprice:"$21.99",buybutton:"Buy for $28.99",gift:gift},
    {img:champion  ,heading:"VALORANT Champi...",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:drift  ,heading:"Yoru Dimensional Drift",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:poisoncloud  ,heading:"Viper Poison Cloud",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:neuraltheft  ,heading:"Cypher Neural Theft",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:hintofclove  ,heading:"A Hint Of Clove",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:fragout  ,heading:"FRAG OUT",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:omenscowl  ,heading:"Omen's Cowl",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:reyna  ,heading:"Reyna's Leer",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:blade  ,heading:"Blade Strom",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:yorurip  ,heading:"Yoru Dimensional Rip",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:vct  ,heading:"VCT Supernova",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:ace  ,heading:"ACE",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:clovesruse  ,heading:"Clove's Ruse",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
    {img:immortal ,heading:"The Immortal Clove",rate:"$15.99",nitro:nitro,nitroprice:"$11.99 With Nitro",buybutton:"Buy for $15.99",gift:gift},
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
  
        
    <div className='championscard'>
        
        <div className='maincard'>
          <img src={Champmain} alt="" />
      </div>
      <div className="shop-cardbox">
    {champcards.map(item =>(
     
     
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
    <Modal 
        show={isModalOpen} 
        onClose={closeModal} 
        title={selectedItem?.heading || 'Purchase Item'}
      >
      
      </Modal>
  </div>
   
  )
}

export default Champions