import React from 'react'
import Discord from '../assets/Shop-images/discord.png'
import Palmain from '/src/assets/shop-images/palmain.png'

function Palworld() {
    const palworldcards = [
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
      ];
  return (
    <div className='Palworld'>
      
      <div className='maincard'>
        <img src={Palmain} alt="" />
        </div>
        <div className="shop-cardbox">
      {palworldcards.map(item =>(
       
        <div className='shop-card'>
          <div className='blkimg'>
          <img src={item.img} alt="" />
          </div>
          <h4>{item.heading}</h4>
          <p>{item.rate}</p>
        </div>
       
      ))}
  
      </div>

    </div>
  )
}

export default Palworld