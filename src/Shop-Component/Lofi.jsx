import React from 'react'
import Discord from '/src/assets/shop-images/discord.png'
import Lofimain from '/src/assets/shop-images/lofimain.png'

function Lofi() {
    const loficards = [
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
    <div className='Lofi'>
            <div className='maincard'>
              <img src={Lofimain} alt="" />
      </div>
      <div className="shop-cardbox">
    {loficards.map(item =>(
     
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

export default Lofi