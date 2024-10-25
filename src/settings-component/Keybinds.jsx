import React from 'react'
import keybindsimg from '/src/assets/settings-images/keybindsimg.png'
import Esc from './Esc'
function Keybinds() {
  return (
   <div className="keybinds_first">
       <div className="keybinds_second">
         {/* <button>×</button>
         <h6>ESC</h6> */}
         <Esc/>
       </div>
       <div className="keybinds_third">
        <h3>Keybinds</h3>
       </div>
       <div className="keybinds_fourth">
        <img src={keybindsimg} alt="" />
       </div>
       <div className="defaultkeybinds">
        <h3>Default Keybinds</h3>
       </div>
       <div className="showkeybinds_first">
           <p>Show Keyboard Shortcuts List</p>
           <div className="showkeybinds_buttons">
            <button>CTRL</button>
            <button>/</button>
           </div>
       </div>
       <div className="messages">
        <h3>Messages</h3><br />
        <p>These shortcuts work when focused on a message.</p>
       </div>
       <div className="edit">
        <p>Delete Message</p>
        <div className="edit_buttons">
          <button>BACKSPACE</button>
        </div>
       </div>
       <div className="edit">
        <p>Pin Message</p>
        <div className="edit_buttons">
          <button>P</button>
        </div>
       </div>
       <div className="edit">
        <p>Add Reaction</p>
        <div className="edit_buttons">
          <button>+</button>
        </div>
       </div>
       <div className="edit">
        <p>Reply</p>
        <div className="edit_buttons">
          <button>R</button>
        </div>
       </div>
       <div className="edit">
        <p>Copy Text</p>
        <div className="edit_buttons">
          <button>CTRL</button>
          <button>C</button>
        </div>
       </div>
       <div className="edit">
        <p>Mark Unread</p>
        <div className="edit_buttons">
          <button>ALT</button>
          <button>ENTER</button>
        </div>
       </div>
       <div className="edit">
        <p>Focus text area</p>
        <div className="edit_buttons">
          <button>ESCAPE</button>
        </div>
       </div>
       <div className="edit">
        <p>Forward Message</p>
        <div className="edit_buttons">
          <button>F</button>
        </div>
       </div>
      <div className="navigation">
        <p>Navigation</p>
      </div>
      <div className="navigationbetween">
        <p>Navigate between servers</p>
      <div className="navigationbetween_buttons"id='navigation_button1'>
          <button>CTRL</button>
          <button>ALT</button>
          <button>↑</button><br />
          <button>CTRL</button>
          <button>ALT</button>
          <button>↓</button>
        </div>
      </div>
      <div className="navigationbetween">
        <p>Navigate between channels</p>
      <div className="navigationbetween_buttons"id='navigation_button2'>  
          <button>ALT</button>
          <button>↑</button><br />
          <button>ALT</button>
          <button>↓</button>
        </div>
      </div>
      <div className="navigationbetween">
        <p>Navigate forward and backward in page history</p>
      <div className="navigationbetween_buttons"id='navigation_button2'>  
          <button>ALT</button>
          <button>←</button><br />
          <button>ALT</button>
          <button>→</button>
        </div>
      </div>
      <div className="navigationbetween">
        <p>Navigate between unread channels</p>
      <div className="navigationbetween_buttons"id='navigation_button1'>
          <button>CTRL</button>
          <button>ALT</button>
          <button>↑</button><br />
          <button>CTRL</button>
          <button>ALT</button>
          <button>↓</button>
        </div>
      </div>
      <div className="navigationbetween">
        <p>Navigate between unread channels with mentions</p>
      <div className="navigationbetween_buttons"id='navigation_button3'>
          <button>CTRL</button>
          <button>SHIFT</button>
          <button>ALT</button>
          <button>↑</button><br />
          <button>CTRL</button>
          <button>SHIFT</button>
          <button>ALT</button>
          <button>↓</button>
        </div>
      </div>
      <div className="navigationbetween">
        <p>Navigate to current call</p>
      <div className="navigationbetween_buttons"id='navigation_button4'>
          <button>CTRL</button>
          <button>SHIFT</button>
          <button>ALT</button>
          <button>V</button><br />
          
        </div>
      </div>
      <div className="navigationbetween">
        <p>Toggle between last server and DMs</p>
      <div className="navigationbetween_buttons"id='navigation_button5'>  
          <button>CTRL</button>
          <button>ALT</button><br />
          <button>→</button>
          
        </div>
      </div>
      <div className="navigationbetween">
        <p>Toggle QuickSwitcher</p>
      <div className="navigationbetween_buttons"id='navigation_button6'>  
          <button>CTRL</button>
          <button>K</button><br />
         
          
        </div>
      </div>
      <div className="navigationbetween">
        <p>Toggle between last server and DMs</p>
      <div className="navigationbetween_buttons"id='navigation_button5'>  
          <button>CTRL</button>
          <button>ALT</button><br />
          <button>→</button>
          
        </div>
      </div>
      <div className="navigationbetween">
        <p>Toggle QuickSwitcher</p>
      <div className="navigationbetween_buttons"id='navigation_button6'>  
          <button>CTRL</button>
          <button>K</button><br />
         
          
        </div>
      </div>
      <div className="navigationbetween">
        <p>Create or join a server</p>
      <div className="navigationbetween_buttons"id='navigation_button5'>  
          <button>CTRL</button>
          <button>SHIFT</button><br />
          <button>N</button>
        </div>
      </div>
      <div className="draganddrop">
        <h3>Drag and Drop</h3>
        <p>These shortcuts work when focused on a draggable item</p>
      </div>
      <div className="startdrag">
         <p>Start Drag and Drop</p>
         <div className="startdrag_buttons"id='startdrag_button'>  
          <button>CTRL</button>
          <button>D</button>
        </div>
      </div>
      <div className="startdrag">
         <p>Move</p>
         <div className="startdrag_buttons"id='startdrag_button1'>  
          <button>↑</button>
          <button>↓</button>
        </div>
      </div>
      <div className="startdrag">
         <p>Drop item</p>
         <div className="startdrag_buttons"id='startdrag_button1'>  
          <button>SPACEBAR</button>
          <button>ENTER</button>
        </div>
      </div>
      <div className="startdrag">
         <p>Cancel</p>
         <div className="startdrag_buttons"id='startdrag_button1'>  
          <button>ESC</button>
        </div>
      </div>
      <div className="chat_drag" >
        <p>CHAT</p>
      </div>
      <div className="marckserve">
         <p>Mark server read</p>
         <div className="marckserve_buttons">  
          <button>SHIFT</button>
          <button>ESC</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Mark channel as read</p>
         <div className="marckserve_buttons">  
          <button>ESC</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Create a private group</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
          <button>SHIFT</button><br />
          <button>T</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Toggle pins popout</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
          <button>P</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Toggle inbox popoutt</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
          <button>I</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Mark top inbox channel read</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
         <button>SHIFT</button>
          <button>E</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Toggle channel member list or voice text chat</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
          <button>U</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Toggle pins popout</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
          <button>E</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Toggle GIF picker</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
          <button>G</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Toggle sticker picker</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
          <button>S</button>
        </div>
      </div>
      <div className="marckserve" >
         <p>Scroll chat up or down</p>
         <div className="marckserve_buttons" id='marckserve1'>  
         <button>PAGE UP</button>
          <button>PAGE DOWN</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Jump to oldest unread message</p>
         <div className="marckserve_buttons">  
         <button>shift</button>
          <button>PAGE UP</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Focus text area</p>
         <div className="marckserve_buttons">  
         <button>ANY KEY</button>
         
        </div>
      </div>
      <div className="marckserve">
         <p>Upload a file</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
         <button>SHIFT</button>
         <button>U</button>
        </div>
      </div>
      <div id="voice_vedeo_" >
        <p>Voice and Video</p>
      </div>
      <div className="marckserve">
         <p>Toggle mute</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
         <button>SHIFT</button>
         <button>M</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Toggle deafen</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
         <button>SHIFT</button>
         <button>D</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Answer incoming call</p>
         <div className="marckserve_buttons">  
         <button>ESC</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Start call in private message or group</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
         <button>'</button>
        </div>
      </div>
      <div className="marckserve">
         <p>Toggle soundboard</p>
         <div className="marckserve_buttons">  
         <button>CTRL</button>
         <button>SHIFT</button>
         <button>B</button>
        </div>
      </div>
      <div id="miscellaneous" >
        <p>Miscellaneous</p>
      </div>
      <div className="miscellaneous_first">
         <p>Get help</p>
         <div className="miscellaneous_first_buttons">  
         <button>CTRL</button>
         <button>SHIFT</button>
         <button>H</button>
        </div>
      </div>
      <div className="miscellaneous_first">
         <p>Search</p>
         <div className="miscellaneous_first_buttons">  
         <button>CTRL</button>
         <button>F</button>
        </div>
      </div>
      <div className="miscellaneous_first">
         <p>Listen to Lofi Beats with Wumpus</p>
         <div className="miscellaneous_first_buttons">  
         <button>CTRL</button>
         <button>ALT</button>
         <button>SHIFT</button>
         <button>W</button>
        </div>
      </div>
   </div>
   
  )
}

export default Keybinds
