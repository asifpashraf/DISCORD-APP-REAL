import React from 'react'
import box from '/src/assets/settings-images/box.png'
import Esc from './Esc'
function Subscription() {
  return (
    <div className="subfirst">
        <div className="subsecond">
            <h2>Your Subscription</h2> 
            <p>These are your current subscription.They  will belled on the same billing cycle. You can update  any subscription at any time</p>
        
         <div className="subbox"> <img src={box} alt="" /><h4>You have no active subscription</h4></div><br /><br /><br />

         <h2>Subscription Credit</h2><br /><br />
         <p>When You accept a gift while you have a running subscription, or accept a gift that differs from your current subscription,it will appear here has credit.</p>
         <div className="subbox"> <img src={box} alt="" /><h4>You have no unused credits</h4></div>
         <hr />
        </div>

        <Esc/>
    </div>
  )
}

export default Subscription
