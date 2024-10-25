import React from 'react'
import giftbox from '/src/assets/settings-images/giftboximg.jpg'
import giftbox2 from '/src/assets/settings-images/giftbox2.png'
import Esc from './Esc'
function GiftInvintory() {
  return (
   <div className="giftfirst">
    <div className="giftsecond">
     <h3>Redeem Codes</h3><br />
     <p>RACEIVED A CODE FOR NITRO OR A GAME? THAT'S EXCITING! IT BELOW: </p>
     {/* <button>×</button>   
     <h6>ESC</h6> */}
          <input type="text"  placeholder='WUMP-AAAAA-CCCCC'/>  
     <button id='giftbutton'>Redeem</button>
     <div className='giftbox'>
     <h2>Quests have moved!</h2>
    
     <p>
      Quoests are now in discovery at the b0ttom of <br />
      your server list. start new adventures follow your <br />
     progress and see rewards all in one placee
     </p>
     <button id='giftbutton1'>View Quests</button>
       <img src={giftbox} alt="" />     
       <h4>Gifts Your Purchased</h4>
       <hr />
       <div className='giftbox2'>
       <img id='giftbox2' src={giftbox2} alt="" />
       <h2>There are no gifts.</h2>
       <p>Feeling genarous? Give someone the gift of <span id='Nitro'>Nitro</span>and make their day!</p>
       </div>
     </div>
    </div>
    <Esc/>
   </div>

  )
}

export default GiftInvintory
