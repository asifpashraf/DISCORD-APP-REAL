import React from 'react'
import Esc from './Esc'
// import Underline from './Underline'

const Devices = () => {
  return (
    <div>
      <div className="devices-main">
        <h3>Devices</h3>
        <p>Here are the all devices that are currently logged in with your discount account . you can log out of each one <br />
        individualy or all other devices.
        </p>
        <span>
            if you see an entry you don't recognize,log out of that device and change your discord account password <br />
             immedietly
        </span>
      </div>
      <div className="current-devices">
        <h3>CURRENT DEVICES</h3>
        <div className="mac-svg">
        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z" class=""></path></svg>
       <div className="mac-os-inner-first">

        <p>MAC OSx | Discord Client</p>
        <span>Thrissur , Kerala , india ,3 days ago</span>
       </div>

        </div>
        </div>


        <div className="other-devices">
        <h3>OTHER DEVICES</h3>
        <div className="mac-svg-two">
        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z" class=""></path></svg>
       <div className="mac-os-inner-second">
        <p>MAC OSx | Discord Client</p>
        <span>Thrissur , Kerala , india ,3 days ago</span>
         
       </div>                                      
        </div>
        </div>
       
       {/* <Underline/> */}

       <div className="log-out-of-all-now">
        <span>LOG OUT OF ALL NOW DEVICES</span>
        <p>You'll have to log back in on all logged out devices</p>
        <button>Log Out All Know Devices</button>
       </div>
       <Esc/>
    </div>
  )
}

export default Devices
