import React from 'react'
import Accessibilityimg from '/src/assets/settings-images/Accessibilityimg.png'
import accessibileimg2 from '/src/assets/settings-images/accessibileimg2.png'
import Screen3 from '/src/assets/settings-images/Screen3.png'
import Screen2 from '/src/assets/settings-images/Screen2.png'
// import AccessiBilityslider from'./Accessibility.jsx'

import Chatbox_Inpusecond_component from './Chatbox_Inpusecond_component'
import Esc from './Esc'

// import Toggle from './Toggle'


function Accessibility() {
  
  return (
   <div className="Accessibilit_First">
    <div className="Accessibilit_Second">
    {/* <button id='accessibilitbutton'>×</button>
        <h6>ESC</h6> */}
        <Esc/>
        <h1>Accessibilit</h1>
        <div className="Accessibilit_third">
            <div className="Accessibilit_third_button">
            <button>Example Button</button><img src={Accessibilityimg} alt="" />
            </div>
            <img src={accessibileimg2} alt="" id='accessimg' />
        </div>
      <div className="saturation">
        <h3>SATURATION</h3>
        <p>Reduce the saturation of colors within the application, for those with color sensitivities. This does not affect the saturation of images, videos, role colors or other user-provided content by default.</p>
      </div>
      <div className="saturation_first">
        <Chatbox_Inpusecond_component/>
      </div>
      <div className="apply">
        <h3>Apply to custom color choices</h3>
        <img src={Screen3} alt="" />
      </div>
      <div className="apply_first">
        <p>Turn on to apply this adjustment to custom color choices, like role colors</p>
      </div>
      <div className="apply">
        <h3>Always underline links</h3>
        <img src={Screen3} alt="" />
      </div>
      <div className="apply_first">
        <p>Make links to websites, help articles, and other pages stand out more by underlining them.</p>
      </div>
      <div className="role">
              <h3>Role Colors</h3>
              <p>Choose a display for role colors.</p>
              <div className="rolebutton">
              <button id='rolebutton1'>
                <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd"
                 clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172
                  4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 
                  6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path><circle cx="12" cy="12" r="5" class=
                  "radioIconForeground_eb92a8" fill="currentColor"></circle></svg>
                  #ffffff
              </button>
               <button>
                <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd"
                 clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172
                  4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 
                  6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path></svg>
                Show role colors next to names
              </button>
              <button>
                <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd"
                 clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172
                  4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 
                  6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path></svg>
                  Don't show role colors
              </button>
            </div>
         </div>
         <div className="Guild">
          <h3>GUILD TAGS</h3>
         </div>
         <div className="Guild_first">
             <p>Show guild tags next to names</p>
             <img src={Screen2} alt="" />
         </div>
         <div className="profile_">
          <h3>Profile Colors</h3>
         </div>
         <div className="profile_first">
             <p>Sync profile themes</p>
             <img src={Screen3} alt="" />
         </div>
         <div className="profile_second">
          <p>This allows Discord to use your computer's contrast theme. <a >Learn more</a> about contrast settings.</p>
         </div>
         <div className="Reduced">
          <h3>REDUCED MOTION</h3>
          <p>Reduce the amount and intensity of animations, hover effects, and other moving effects across Discord. Need help? Check our 
            <a >Help Center</a> for more info!
          </p>
         </div>
         <div className="Sync">
          <input type="checkbox" />
          <p>Sync with computer</p>
         </div>
         <div className="enable">
                  <p>Enable Reduced Motion</p>
                  <img src={Screen3} alt=""  id='Enable_Screen3'/>
         </div>
         <div className="enable">
                  <p>Automatically play GIFs when Discord is focused.</p>
                  <img src={Screen2} alt="" />
         </div>
         <div className="enable">
                  <p>Play animated emoji</p>
                  <img src={Screen2} alt="" />
         </div>
         <div className="Stickers">
        <h3>Stickers</h3>
        <p>This controls when stickers animate.</p>
      </div>
         <div className="always_animate_box">
        <div className="always">
                  
        <svg aria-hidden="true" role="img" width="24" height="24"
         viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd"
          d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 
          4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228
          22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="currentColor"></path><circle cx="12" cy="12" r="5" class="radioIconForeground_eb92a8"
          fill="currentColor"></circle></svg>
          <p>Always animate</p>
        </div>
        <div className="animate_on">
        <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path></svg>
        <div className="animate_on_p">
        <h3>Animate on interaction</h3>
        <p>On the desktop client, stickers will animate on hover or focus. On mobile clients, stickers will animate on long-press.</p>
        </div>
        </div>
        <div className="naver_animated">
        <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path></svg>
        <p>Never animated</p>
        </div>
      </div>
      <div className="chat_input_box">
        <p>Chat Input</p>
        <div className="chat_input_box_first">
            <h3>Show Send Message button</h3>
           <img src={Screen2} alt="" />
        </div>
      </div>
      <div className="use_the_legacy">
         <h3>Use the legacy chat input</h3>
         <img src={Screen3} alt="" id='Enable_Screen3' />
      </div>
      <div className="use_the_legacy_first">
       <p>Disables most chat features but may work better with screen readers</p>
      </div>
      <div className="Text-to-Speech">
        <h3>TEXT-TO-SPEECH</h3>
      </div>
      <div className="Text-to-Speech_first">
        <p>Allow playback and usage of /tts command</p>
        <img src={Screen2} alt="" />
      </div>
      <div className="Text_to_Speech_rate_box">
          <p>Text-to-Speech rate</p>
        </div>
        <div className="Text_to_Speech_rate_box_first">
        <button id='text_button'>
        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z" class=""></path></svg>
        <p>Preview</p>
        </button>
        </div>
        <div className="text_button_first">
        <Chatbox_Inpusecond_component/>
        </div>
        <div className="cant">
        <p >Can’t find what you’re looking for? Check out the <a >Appearance </a> settings.</p>
        </div>
    </div>
   </div>
  )
}

export default Accessibility

