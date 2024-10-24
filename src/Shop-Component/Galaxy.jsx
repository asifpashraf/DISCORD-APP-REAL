import React from 'react'
import Discord from '/src/assets/shop-images/discord.png'
import Galaxymain from '/src/assets/shop-images/galaxymain.png'

function Galaxy() {
    const galaxycards = [
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
    <div className='Galaxy'>
       
<div className='maincard'>
<img src={Galaxymain} alt="" />
        </div>
        <div className="shop-cardbox">
      {galaxycards.map(item =>(
       
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

export default Galaxy