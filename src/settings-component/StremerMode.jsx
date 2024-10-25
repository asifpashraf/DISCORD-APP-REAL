import React from 'react'
import streamermodeimg from '/src/assets/settings-images/streamermodeimg.png'
  import screen3 from '/src/assets/settings-images/screen3.png'
  import screen2 from '/src/assets/settings-images/screen2.png'
import Esc from './Esc'
function StremerMode() {
  return (
    <div className='streamermode_first'>
      <div className="streamermode_second">
         {/* <button>×</button>
         <h6>ESC</h6> */}
         <Esc/>
     </div>
     <div className="streamermode_third">
        <h4>Streamer Mode</h4>
        <img src={streamermodeimg} alt="" />
     </div>
     <div className="enablestreammode">
        <p>Enable Streamer Mode</p>
        <img src={screen3} alt="" />
     </div>
    <div className="enablestreammode_first">
        <p>You can set a keybind to toggle Streamer Mode in </p>
        <a href="">Keybind Settings</a>
    </div>
    <div className="options_first">
         <h3>Options</h3>
    </div>
    <div className="hidepersnol">
        <p>Hide Personal Information</p>
        <img src={screen2} alt="" />
     </div>
    <div className="hidepersnol_first">
        <p>Hides email, connected accounts, notes, and anonymizes number tags.</p>
       
    </div><br />
    <div className="hidepersnol">
        <p>Hide Personal Information</p>
        <img src={screen2} alt="" />
     </div><br />
    <div className="hidepersnol_first">
        <p>Recommended if you don't want random people accessing your Discord servers.</p>
       
    </div><br />
    <div className="hidepersnol">
        <p>Disable Sounds</p>
        <img src={screen2} alt="" />
     </div><br />
    <div className="hidepersnol_first">
        <p>All sound effects will be disabled.</p>
       
    </div>  <br />
    <div className="hidepersnol">
        <p>Disable Notifications</p>
        <img src={screen2} alt="" />
     </div>
    <div className="hidepersnol_first">
        <p>All desktop notifications will be disabled.</p>
    </div>
  
    </div>
  )
}

export default StremerMode
