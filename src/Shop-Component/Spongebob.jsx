import React from 'react'
import Discord from '../assets/Shop-images/discord.png'
import Spongemain from '/src/assets/shop-images/spongemain.png'

function Spongebob(){
    const spongecards = [
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
        {img:Discord  ,heading:"vhxghudg",rate:"gqeffyugey"},
      ];
  return (
    <div className="Spongebob">
       
       <div className='maincard'>
        <img src={Spongemain} alt="" />
        </div>
        <div className="cardbox">
      {spongecards.map(item =>(
       
        <div className='card'>
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

export default Spongebob