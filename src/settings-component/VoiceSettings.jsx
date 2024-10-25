import React from 'react'
import VoiceSlider from './voiceslider'
import lets from '/src/assets/settings-images/lets1.png'
import camera from '/src/assets/settings-images/camera.png'
import screen3 from '/src/assets/settings-images/screen3.png'
import screen2 from '/src/assets/settings-images/screen2.png'
import opus from '/src/assets/settings-images/opus.png'
import advancedbox from '/src/assets/settings-images/advancedbox.png'
import VoiceInputeSlider from './VoiceInputeSlider';  // Corrected the file path
import Esc from './Esc'

function VoiceSettings() {
  return (
   <div className="voice_first">
    <div className="voice_second">
    {/* <button id='voice_button'>×</button>
    <h6>ESC</h6> */}
    <Esc/>
    <h3 >Voice Settings</h3>
    </div> 
    <div className="voice_third">
      <div className="inputdevice">
        <p>Input Device</p>
      <select name="" id="">
        <option value="Default">Default</option>
        
      </select>
      </div>
      <div className="outputdevice">
      <p>Output Device</p>
      <select name="" id="">
        <option value="Default">Default</option>
        
      </select>
      </div>
    </div>
    <div className="voice_fourth">
      <div className="inputvolume">
        <div id="VoiceSlider">
          <p>Input Volume</p>
      <VoiceSlider/>
      </div>
      </div>
      <div className="outputvolume">
      <div id="VoiceSlider">
        <p>Output Volume</p>
      <VoiceSlider/>
      </div>
      </div>
      </div>
      <div className="micetest">
        <h3>Mic Test</h3>
        <p>Having mic issues? Start a test and say something fun—we'll play your voice back to you.</p>
      </div>
      <div className="lets_check">
        <button>Let's Check</button>
        <img src={lets} alt="" />
      </div>
      <div className="needhelp">
        <p>Need help with voice or video? Check out our <a >troubleshooting guide</a>.</p>
      </div>
      <div className="inputmode">
        <p>Input Mode</p>
        <div className="voiceactivity">
        <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                      <path 
                      fill-rule="evenodd" 
                      clip-rule="evenodd" 
                      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                      fill="currentColor">
                      </path>
                      <circle 
                        cx="12" 
                        cy="12" 
                        r="5" 
                        class="radioIconForeground_eb92a8" 
                        fill="currentColor">
                      </circle>
      </svg>
            <p>Voice Activity</p>
        </div>
        <div className="pushto">
        <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                     <path 
                     fill-rule="evenodd" 
                     clip-rule="evenodd" 
                     d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                     fill="currentColor">
                    </path>
       </svg>
      <p>Push to Talk (Limited)</p>
        </div>
      </div>
      <div className="inputsensivity">
        <h3>Input Sensitivity</h3>
        <div id="VoiceInputeSlide"><VoiceInputeSlider/></div> 
        <p>Push to Talk (Limited) will only work when the browser tab has focus. <a >Download</a> the
        desktop application to get system-wide Push to Talk.
  </p>
      </div>
      <div className="soundbord">
        <h3>Soundboard</h3>
        <div className="soundbordfirst">
             <h3>Soundboard</h3>
             <p>Control how loud sounds are for you personally. For more info, <a >click here</a></p>
        </div>
        <div className="soundbordsecond">
          <h4>
          Soundboard Volume
          </h4>
          <VoiceSlider/>
        </div>
      </div>
        <div className="entrancesounds">
           <h4>Entrance Sounds</h4>
           <p>Choose a Soundboard sound to automatically play whenever you join a voice channel. Right-click on a voice channel to join without playing your entrance sound. 
            <a href="">Learn More</a>.
           </p>
        </div>
        <div className="choiseserver">
          <p>Choose a Server</p>
          <select name="" id="">
            <option value="All Servers">All Servers</option>
            <option value="AatroHub">Aatro Hub</option>
          </select>
        </div>
        <div className="choise_a">
         <h4>Choose a sound </h4>
         <svg class="nitroWheel_ce3dd8" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" 
         width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" class="">
          </path><path fill="currentColor" fill-rule="evenodd" d="M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clip-rule="evenodd" class=""></path>
         <path fill="currentColor" d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z" class=""></path></svg>
        </div>
        <div className="none">
        <p>None</p>
          <div id="nonesvg"> 
         <svg class="secondaryIconDisabled_c801bb secondaryIcon_c801bb" aria-hidden="true" role="img"
           xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path
            fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z" 
            class=""></path><path fill="currentColor" d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z" class="">
              </path></svg></div>
       <div className="pen"> <svg class="secondaryIcon_c801bb" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
           width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z"
            class="" id='pen'></path></svg></div>  
        </div>
        <div id="vedeosetting">
          <h4>Video Settings</h4>
        </div>
        <div id="vedeosetting_first">
         <img src={camera} alt="" />
         <button>Test Video</button>
        </div>
        <div id="vedeosetting_second">
          <p>You must grant Discord  <a href="">access to your camera</a> in order to be able to preview.
          </p>
        </div>
        <div className="alwayspreview">
          <p>Always preview video</p>
          <img src={screen3} alt="" />
        </div>
        <div className="camera">
          <h3>Camera</h3>
        </div>
        <div className="camera_first">
          <select name="" id="">
            <option value="Default">Default</option>
          </select>
        </div>
        <div className="advanced">
       <h3>Advanced</h3> 
        </div>
     <div className="advanced_first">
      <h3>Audio Codec</h3>
     </div>
     <div className="advanced_second">
      <div className="advanced_second_box">
        <img src={opus} alt="" />
      <p>Discord uses only the best organic, locally-sourced Opus Voice codec.</p>
      </div>
     </div>
     <div className="advanced_third">
      <h3>Hardware Acceleration</h3>
      <img src={screen2} alt="" />
     </div>
     <div className="advanced_fourth">
      <p>Hardware acceleration uses your GPU for efficient video encoding and decoding, if available.</p>
     </div>
     <div className="voiceprocessing">
      <h3>Voice Processing</h3>
     </div>
     <div className="Voiceprocessing_first">
          <h3>Echo Cancellation</h3>
          <img src={screen2} alt="" />
     </div>
     <div className="noisesuppression">
      <h5>Noise Suppression</h5>
      <p>Suppress background noise from your mic.</p>
     </div>
     <div className="krisp_box">
       <div className="krisp" id='krisp_first'>
       <svg aria-hidden="true" role="img" width="24" height="24" 
       viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" 
       d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"></path><circle cx="12" cy="12" r="5" class="radioIconForeground_eb92a8" 
        fill="currentColor"></circle></svg>
        <p>Krisp</p>
       </div>
       <div className="krisp">
       <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
       fill="currentColor"></path></svg>
        <p>Standard</p>
       </div>
       <div className="krisp">
       <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
       fill="currentColor"></path></svg>
      <p>None</p>
       </div>
     </div>
     <div className="krisp_second">
     <svg enable-background="new 0 0 141.7 141.7" viewBox="17.9 46.9 105.84 47.93" xmlns="http://www.w3.org/2000/svg"><g fill="#614efa"><path d="m66.3 84.4h6.4c.3 0 .6-.2.6-.6v-24.5c0-.3-.2-.6-.6-.6h-6.4c-.3 0-.6.2-.6.6v24.5c0 .4.3.6.6.6z"/>
     <path d="m29.9 71.4 12-12c.2-.2.1-.6-.2-.6h-9.7c-.1 0-.2 0-.2.1l-6.3 6.3v-16.4c0-.2-.2-.4-.5-.3l-6.9 2.8c-.1.1-.2.2-.2.3v32.4c0 .3.2.6.6.6h6.5c.3 0 .6-.2.6-.6v-6.3l6.7 6.7c.1.1.1.1.2.1h9.7c.3 0 .4-.4.2-.6z"/><path d="m123.7 70.7c-.4-6.3-5.6-11.4-11.9-11.9-7.5-.5-13.7 5.4-13.7 12.8v22.9c0 .2.2.4.5.3l6.7-2.7c.2-.1.3-.3.3-.5v-8.3c1.6.7 3.4 1.1 5.3 1.1 7.4 0 13.4-6.2 12.8-13.7zm-12.7 6.2c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z"/>
     <path d="m86 65c1.3 0 2.4.7 3.3 2 .1.2.4.3.6.2l5.2-2.1c.3-.1.4-.4.3-.7-1.3-3.1-5.3-5.5-9.5-5.5-5.5 0-9.9 3.5-9.9 7.8 0 2.3 1.3 4.3 3.2 5.6 1.7 1.2 3.6 1.9 5.6 2.4h.2c2.6.6 3 1.3 3 2 0 .9-1.1 1.6-2.4 1.6-1.4 0-2.6-.9-3.6-2.3-.1-.2-.4-.3-.7-.2l-5.1 2.1c-.2.1-.3.4-.2.7 1.5 4 5.4 5.8 9.6 5.8 5.5 0 9.9-3.5 9.9-7.8 0-.9-.2-1.8-.6-2.7-.4-.8-1.3-2.5-3.9-3.7-1.4-.7-5.4-1.8-6.8-2.6-.5-.3-.7-.7-.7-1.1.1-.8 1.1-1.5 2.5-1.5z"/><circle cx="69.5" cy="51.6" r="4.7"/><path d="m62.8 58.8c.2 0 .4.2.3.5l-2.8 6.9c-.1.1-.2.2-.3.2h-2c-2.9 0-5.3 2.4-5.3 5.3v12.3c0 .3-.2.5-.5.5h-6.4c-.3 0-.6-.2-.6-.6v-12.3c0-7.1 5.7-12.8 12.8-12.8z"/></g></svg>
     <a >Learn More</a>
     </div>
     <div className="advanced">
      <img src={advancedbox} alt="" />
     </div>
     <div className="atomaticgain">
      <p>Automatic Gain Control</p>
      <img src={screen2} alt="" />
     </div>
     <div className="atomaticgain_first">
      <p>Automatically adjust microphone volume to keep it clear and consistent.</p>
     </div>
     <div className="streampreviews">
      <h4>Stream Previews</h4>
     </div>
     <div className="streampreviews_first">
      <h3>Hide Stream Previews</h3>
      <img src={screen3} alt="" />
     </div>
     <div className="streampreviews_second">
      <p>Users will not be able to see a preview of your stream before joining.</p>
     </div>
     <div className="debugging">
      <h3>Debugging</h3>
     </div>
     <div className="resetvoice">
      <button>Reset Voice Settings</button>
     </div>
   </div>
  )
}

export default VoiceSettings
