import React from 'react'
  import screen3 from '/src/assets/settings-images/screen3.png'
import Esc from './Esc'
function Advanced() {
  return (
   <div className="advanced_01">
    <div className="advanced_02">
       {/* <button>×</button>
        <h6>ESC</h6> */}
        <Esc/>
    </div>
    <div className="advanced_03">
        <h2>Advanced</h2>
    </div>
    <div className="advanced_04">
        <p>Developer Mode</p>
        <img src={screen3} alt="" />
    </div>
    <div className="advanced_05">
        <p>Developer Mode exposes context menu items helpful for people writing apps using the <a href="">Discord API   </a></p>
    </div>
   </div>
  )
}

export default Advanced
