import React from 'react';
import Apperiancebox from '/src/assets/settings-images/apperiance box.png';
import sync from '/src/assets/settings-images/sync.png';
import colors from '/src/assets/settings-images/colors.png'
import icon1 from '/src/assets/settings-images/icon1.png'
import icon2 from '/src/assets/settings-images/icon2.png'
import icon3 from '/src/assets/settings-images/icon3.png'
import icon4 from '/src/assets/settings-images/icon4.png'
import icon5 from '/src/assets/settings-images/icon5.png'
import icon6 from '/src/assets/settings-images/icon6.png'
import icon7 from '/src/assets/settings-images/icon7.png'
import icon8 from '/src/assets/settings-images/icon8.png'
import icon9 from '/src/assets/settings-images/icon9.png'
// import icon10 from '../src/assets/icon10.png'
import icon11 from '/src/assets/settings-images/icon11.png'
import icon12 from '/src/assets/settings-images/icon12.png'
import icon13 from '/src/assets/settings-images/icon13.png'
import icon14 from '/src/assets/settings-images/icon14.png'
import icon15 from '/src/assets/settings-images/icon15.png'
import icon16 from '/src/assets/settings-images/icon16.png'
import icon17 from '/src/assets/settings-images/icon17.png'
import icon18 from '/src/assets/settings-images/icon18.png'
import icon19 from '/src/assets/settings-images/icon19.png'
import icon20 from '/src/assets/settings-images/icon20.png'
import icon21 from '/src/assets/settings-images/icon21.png'
import icon22 from '/src/assets/settings-images/icon22.png'
import icon23 from '/src/assets/settings-images/icon23.png'
import screen from '/src/assets/settings-images/screen.png'
import { useState } from 'react';
import Esc from './Esc';

function Apperiance() {
  const [theme, setTheme] = useState('light'); 

  const themeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(newTheme);
  };
  const icons  = [
    { id: 1,url:icon1},
    { id: 2,url:icon2},
    { id: 3,url:icon3},
    { id: 4,url:icon4},
    { id: 5,url:icon5},
    { id: 6,url:icon6},
    { id: 7,url:icon7},
    { id: 8,url:icon8},
    { id: 9,url:icon9},
    // { id: 10,url:icon10},
    { id: 11,url:icon11},
    { id: 12,url:icon12},
    { id: 13,url:icon13},
    { id: 14,url:icon14},
    { id: 15,url:icon15},
    { id: 16,url:icon16},
    { id: 17,url:icon17},
    { id: 18,url:icon18},
    { id: 19,url:icon19},
    { id: 20,url:icon20},
    { id: 21,url:icon21},
    { id: 22,url:icon22},
    { id: 23,url:icon23},
  ];
const [value, setValue] = useState(50);

const handleChange = (e) => {
  setValue();
};

  return (
    <div className='Apperiancefirst'>
      <div className='Apperiancesecond'>
        <h2>Appearance</h2>
        {/* <button id='apperiancebutton'>×</button>
        <h6>ESC</h6> */}
        <div className="apperiancebox">
          <img src={Apperiancebox} alt="" />
        </div>
        <div className="theme">
          <p>THEME</p>
          <button onClick={() => themeChange('light')}></button>
          <button id='button2' onClick={() => themeChange('dark')}></button>
          <button onClick={() => themeChange('light')}><img src={sync} alt="" /></button>
        </div>
        <div className='color_box'>
          <div className="color_boxfirste">
            <h3>Color</h3>
                <svg class="nitroWheel_abc655 premiumIcon_df4d02" aria-hidden="true" role="img"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox=
                "0 0 24 24"><path fill="currentColor" d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" 
                class=""></path><path fill="currentColor" fill-rule="evenodd" d="M7 4a1 1 0 0 0 
                0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 
                0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clip-rule="evenodd" class="">
               </path><path fill="currentColor" d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z" 
            class=""></path></svg>
            <p>Unlock more themes with <a href="">Nitro</a>.</p>
            </div>
           <div className='unlock_button'>
               <button id='preview'>Preview Theme</button>
               <button id='Unlock'> <svg class="nitroWheel_abc655 premiumIcon_df4d02" aria-hidden="true" role="img"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path 
                     fill="currentColor" d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" class=""></path><path fill="currentColor" 
                     fill-rule="evenodd" d="M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1
                     0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clip-rule="evenodd" class=""></path>
                   <path fill="currentColor" d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z" class=""></path></svg>
             <p>Unlock With Nitro</p>
             </button>
           </div>
           <img src={colors} alt="" />
        </div>
      <div className='icons_box'>
        <div className="icons_boxfirst">
        <h3>In-app Icon</h3>
        <svg class="nitroWheel_abc655 premiumIcon_df4d02" aria-hidden="true" role="img"
             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
             viewBox="0 0 24 24"><path fill="currentColor" d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" 
             class=""></path><path fill="currentColor" fill-rule="evenodd" d="M7 4a1 1 0 0 0 0 2h3a1 
             1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 
             12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clip-rule="evenodd" class=""></path><path fill="currentColor" 
             d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z" class=""></path></svg>
             
        </div>
        <div className='unlock_button_seconde'>
               <button id='preview'>Preview Theme</button>
               <button id='Unlock'> <svg class="nitroWheel_abc655 premiumIcon_df4d02" aria-hidden="true" role="img"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path 
                     fill="currentColor" d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" class=""></path><path fill="currentColor" 
                     fill-rule="evenodd" d="M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1
                     0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clip-rule="evenodd" class=""></path>
                   <path fill="currentColor" d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z" class=""></path></svg>
             <p>Unlock With Nitro</p>
             </button>
           </div>
             <h3 id='change_the_discode'>Change the Discord in-app icon, only with Nitro.</h3>
      </div>
      <div className="icons_box_second">
      {icons.map(item => (             
          <img  src={item.url} alt="" />  
        ))}
        </div>
        <div className="dark_box">
           <div className="dark_boxseond">
            <h3>Dark Sidebar</h3>
           </div>
           <div className='dark_boxtherd'>
           <img src={screen} alt="" />
           </div>
        </div>
           <div className="messege_display">
            <h3>Messege Display</h3>
            <button id='messege_button'><svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path><circle cx="12" cy="12" r="5" class="radioIconForeground_eb92a8" fill="currentColor"></circle></svg>
            Cozy: Modern, beautiful, and easy on your eyes.
            </button>
            <button id='messege_button_second'>
            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path></svg>
             Compact: Fit more messages on screen at one time.#IRC
            </button>
            <div className='show_box'>
               <p>Show avatars in Compact mode</p>
               <img src={screen} alt="" />
            </div>
           </div>
           <div className='chat_box'>
            
               <p>Chat font scaling</p>
  
               <input
               type="range"
               min="0"
               max="100"
               value={value}
              onChange={handleChange}
              className="slider"
               />
        </div>
        <div className="chatbox_inpusecond">
          <p>Space Between Message Groups</p>
             <input
               type="range"
               min="0"
               max="100"
               value={value}
              onChange={handleChange}
              className="slider"
              id='sliderinput_second'
               />
          </div>
          <div className="apperiance_last_p">
          <p>Can’t find what you’re looking for? Check out the <a href="">Accessibility</a> settings.</p></div>
      </div>

      <Esc/>
    </div>
  );
}

export default Apperiance;
