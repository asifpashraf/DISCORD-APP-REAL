import React from 'react'
 import screen3 from '/src/assets/settings-images/screen3.png'
 import screen2 from '/src/assets/settings-images/screen2.png'
import Esc from './Esc'
function Chat() {
  return (
    <div className='chat_first'>
      <div className="chat_second">
        {/* <button>×</button>
        <h6>ESC</h6> */}
        <Esc/>
      </div>
      <div className="chat_third">
        <h3>Chat</h3>
      </div>
      <div className="displayimages">
        <h3>Display images, videos, and lolcats</h3>
      </div>
      <div className="displayimages_first">
        <h3>When posted as links to chat</h3>
        <img src={screen2} alt="" />
      </div>
      <div className="whenuploded">
        <h3>When uploaded directly to Discord</h3>
        <p>Images larger than 10 MB will not be previewed.</p>
        <img src={screen2} alt="" />
      </div>
      <div className="whenuploded">
        <h3>With image descriptions</h3>
        <p>Image descriptions are used to describe images for screenreaders.</p>
        <img id='whenscreen' src={screen3} alt="" />
      </div>
      <div className="whenuploded">
        <h3>Embeds and Link Previews</h3>
        <p>Show embeds and preview website links pasted into chat</p>
        <img src={screen2} alt="" />
      </div>
      <div className="whenuploded">
        <h3>Emoji</h3>
        <p>Show emoji reactions on messages</p>
        <img src={screen2} alt="" />
      </div>
      <div className="whenuploded">
        <h3>Automatically convert emoticons in your messages to emoji</h3>
        <p>For example , when you type :) Discord will convert it to "🙂</p>
        <img src={screen2} alt="" />
      </div>
      <div className="whenuploded">
        <h3>Stickers</h3>
        <h4 id='Sticker'>Sticker Suggestions</h4>
        <p>Allows sticker suggestions to appear when typing messages.</p>
        <img src={screen2} alt="" />
      </div>
      <div className="whenuploded">
        <h3>Stickers in Autocomplete</h3>
        <p>Allows stickers to appear in your autocomplete results.</p>
        <img src={screen2} alt="" />
      </div>
      <div className="whenuploded">
        <h3>Text box</h3>
        <p>Preview emoji, mentions, and markdown syntax as you type</p>
        <img src={screen2} alt="" />
      </div>
      <div className="whenuploded">
        <h3>Threads</h3>
        <p>Open threads in split view</p>
        <img src={screen2} alt="" />
      </div>
      <div className="showspoiler">
        <h3>Show spoiler content</h3>
        <p>This controls when spoiler content is displayed.</p>
      </div>
      <div className="onclick">
        <div className="on" id='on_first'>
        <svg aria-hidden="true" role="img" 
        width="24" height="24" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd"
             d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
             fill="currentColor"></path><circle cx="12" cy="12" r="5" class="radioIconForeground_eb92a8" fill="currentColor"></circle></svg>
             <p>On click</p>
        </div>
         <div className="on">
         <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
         fill="currentColor"></path></svg>
         <p>On servers I moderate</p>
        </div>
        <div className="on">
        <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
         fill="currentColor"></path></svg>
        <p>Always</p>
         </div>
      </div>
    </div>
  )
}

export default Chat
