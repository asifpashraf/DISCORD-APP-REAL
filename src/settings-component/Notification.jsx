import React from 'react'
import screen3 from '/src/assets/settings-images/screen3.png'
import screen2 from '/src/assets/settings-images/screen2.png'
import Esc from './Esc'
function Notification() {
  return (
    <div className='notifiction_first'>
     <div className="notifiction_second">
      {/* <button>×</button>
      <h6>ESC</h6> */}
      <Esc/>
     </div>
     <div className="notification_third">
       <h2>Notifications</h2>
     </div>
     <div className="enabledesktop">
      <h3>Enable Desktop Notifications</h3>
     <img src={screen3} alt="" />
     <p>If you're looking for per-channel or per-server notifications, right-click the desired server icon and select  Notification Settings.</p>
     </div>
     <div className="enabledesktop">
      <h3>Enable Unread Message Badge</h3>
     <img id='enabledesktop_first' src={screen2} alt="" />
     <p>Shows a red badge on the app icon when you have unread messages.</p>
     </div>
     <div className="pushnotification">
      <h3>Push Notification Inactive Timeout</h3>
     </div>
     <div className="pushnotification_first">
        <select name="10 minutes" id="">
          <option value="10 minutes">10 minutes</option>
          <option value="">1 minutes</option>
          <option value="">2 minutes</option>
          <option value="">3 minutes</option>
          <option value="">4 minutes</option>
          <option value="">5 minutes</option>
          <option value="">6 minutes</option>
          <option value="">7 minutes</option>
          <option value="">8 minutes</option>
          <option value="">9 minutes</option>
          <option value="">10 minutes</option>
        </select>
        <p>Discord avoids sending push notifications to your mobile device when you are at your computer.
        Use this setting to control how long you need to be inactive on desktop for before you receive push notifications.</p>
     </div>
     <div className="textto">
      <h4>Text-to-Speech Notifications</h4>
      <p>Turn this on to have a high tech robot speak your notifications to you.</p>
     </div>
     <div className="forall">
      <div className="forall_first">
      <svg aria-hidden="true" role="img" width="24" height="24" 
      viewBox="0 0 24 24"><path fill-rule="evenodd"
       clip-rule="evenodd" 
       d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
       fill="currentColor"></path></svg>
      <p>For all channels</p>
      </div>
      <div className="forall_first">
        <svg aria-hidden="true" role="img"
         width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" 
         clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
         fill="currentColor"></path></svg>
         <p>For current selected channel</p>
      </div>
      <div className="forall_first id" id='forall_second'>
      <svg aria-hidden="true" role="img" width="24" height="24" 
      viewBox="0 0 24 24"><path fill-rule="evenodd" 
      clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
      fill="currentColor"></path><circle cx="12" cy="12" r="5" class="radioIconForeground_eb92a8" fill="currentColor"></circle></svg>
      <p>Never</p>
      </div>
     </div>
      <div className="communityactivity">
        <h3>Community Activity Alerts</h3>  
        <button><h3>BETA</h3></button>
      </div>
      <div className="communityactivity_first">
        <p>Receive notifications for DM or join activity that exceeds usual numbers for your server.</p>
        <h4>Choose a Server</h4>
      </div>
      <div className="communityactivity_second">
        <select name="" id="">
          <option value="">Select</option>
          <option value="">Astro Hub</option>
        </select>
      </div>
      <div className="sounds">
        <h3>Sounds</h3>
      </div>
      <div className="enablesame">
        <h3>Enable same-channel message notifications</h3>
        <img src={screen3} alt="" />
      </div>
      <div className="enablesame_first">
        <p>Play a unique sound when there's a new message in the channel you're currently reading.</p>
      </div>
      <div className="enablesame">
        <h3>Disable All Notification Sounds</h3>
        <img src={screen3} alt="" />
      </div>
      <div className="enablesame_first">
        <p>Your existing notification sound settings will be preserved.</p>
      </div>
      <div className="Pinmessage">
      <h3>Message</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Deafen</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Undeafen</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Mute</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Unmute</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Voice Disconnected</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>PTT Activate</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>User Join</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Outgoing Ring</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Incoming Ring</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Stream Started</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Viewer Join</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Viewer Leave</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Activity Start</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Activity End</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Activity User Join</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Activity User Leave</h3>
      <img src={screen2} alt="" />
      </div>
      <div className="Pinmessage">
      <h3>Invited to Speak</h3>
      <img src={screen2} alt="" />
      </div>
     <div className="emailnotification">
      <h3>Email Notifications</h3>
     </div>
     <div className="enablesame">
        <h3>Communication Emails</h3>
        <img src={screen3} alt=""  />
      </div>
      <div className="enablesame_first">
        <p>Receive emails for missed calls, messages, and message digests.</p>
      </div>
      <div className="enablesame">
        <h3>Social Emails</h3>
        <img src={screen2} alt="" id='emailnotification_first' />
      </div>
      <div className="enablesame_first">
        <p>Receive emails for friend requests, new friend suggestions, and events in your server.</p>
      </div>
      <div className="enablesame">
        <h3>Tip Emails</h3>
        <img src={screen2} alt="" id='emailnotification_first' />
      </div>
      <div className="enablesame_first">
        <p>Receive emails with helpful advice on how to use Discord and information on lesser known features.</p>
      </div>
      <div className="enablesame">
        <h3>Recommendations Emails</h3>
        <img src={screen2} alt="" id='emailnotification_first' />
      </div>
      <div className="enablesame_first">
        <p>Receive emails with recommended servers and suggested events.</p>
      </div>
     <div className="unsubscribe">
      <a >Unsubscribe from all marketing emails</a><br />
      <p>This includes any emails about product updates, new features, tips on using Discord, and recommendations on new servers, events or stage channels.</p>
     </div>
    </div>
  )
}

export default Notification
