import React from 'react'
import Discord from '/src/assets/shop-images/discord.png'
import Darkmain from '/src/assets/shop-images/darkmain.png'

function Dark() {
    const Darkcards = [
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
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
      ];
  return (
    <div className='Dark'>
        
       
        <div className='maincard'>
        <img src={Darkmain} alt="" />
        </div>
        <div className="shop-cardbox">
      {Darkcards.map(item =>(
       
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

export default Dark