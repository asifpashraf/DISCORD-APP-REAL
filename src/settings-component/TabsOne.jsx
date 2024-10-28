import React from 'react'
// import { Link } from 'react-router-dom'

const Tabsone = ( {handleMenuClickMain} ) => {
  return (
    <div className='tabsone-item-one'>
        <input type="text" name="" id="" placeholder='Search' />
        <div className='search-icon-parent'>
        <div className='search-icon'>
         <img src="src/assets/Settings-images/search.png" alt="google" />
        </div>
        </div>
        <label htmlFor="usersetting">user setting</label>
       <br /><br />
     <ul >
      {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
        <li onClick={ () => handleMenuClickMain('TabsTwo') }>My Account</li>
      {/* </Link> */}
        <li onClick={ () => handleMenuClickMain("ProfileSetting")}>Privacy & Safety</li>
        {/* <Link to="/familycenter" style={{ textDecoration: 'none' }}>   */}

        <li onClick={ () => handleMenuClickMain('Family-Center') }>Family Center</li>
        {/* </Link> */}

        {/* <Link to="/Authorized" style={{ textDecoration: 'none' }}>   */}
        <li onClick={ () => handleMenuClickMain('Authorized') }>Authorized App</li>
        {/* </Link> */}
        {/* <Link to="/devices"style={{ textDecoration: 'none' }}> */}
        <li onClick={ () => handleMenuClickMain('Devices') }>devices</li>
        {/* </Link> */}
        {/* <Link to="/conection" style={{ textDecoration: 'none' }}> */}
        <li onClick={ () => handleMenuClickMain('Connection') }>Connections</li>
        {/* </Link> */}
        {/* <Link to="/clips"style={{ textDecoration: 'none' }}> */}
        <li onClick={ () => handleMenuClickMain('Clips') }>Clips</li>
        {/* </Link> */}
        {/* <Link to="/friends-request"style={{ textDecoration: 'none' }}>  */}
        <li onClick={ () => handleMenuClickMain('friend-request')}>Friend Requests</li>
        {/* </Link> */}
     </ul>
     <div className='hr-line'></div>
     <label htmlFor="billingsetting">billing settings</label>

     <br />
     <br />
     <ul>
      <div className='log-out-session'>
        <li onClick={() => handleMenuClickMain('NitroSettings')}>Nitro</li>
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#b649b8"><path d="M10 9.33332C10.7364 9.33332 11.3334 8.73637 11.3334 7.99999C11.3334 7.26361 10.7364 6.66666 10 6.66666C9.26364 6.66666 8.66669 7.26361 8.66669 7.99999C8.66669 8.73637 9.26364 9.33332 10 9.33332Z" fill="#b649b8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.66669 2.66666C4.2985 2.66666 4.00002 2.96513 4.00002 3.33332C4.00002 3.70151 4.2985 3.99999 4.66669 3.99999H6.66669C7.03488 3.99999 7.33335 4.29847 7.33335 4.66666C7.33335 5.03485 7.03488 5.33332 6.66669 5.33332L3.66669 5.33332C3.2985 5.33332 3.00002 5.6318 3.00002 5.99999C3.00002 6.36818 3.2985 6.66666 3.66669 6.66666L5.33335 6.66666C5.70154 6.66666 6.00002 6.96513 6.00002 7.33332C6.00002 7.70151 5.70154 7.99999 5.33335 7.99999H4.00002C3.63183 7.99999 3.33335 8.29847 3.33335 8.66666C3.33335 9.03485 3.63183 9.33332 4.00002 9.33332H4.83471C5.42677 11.6336 7.5149 13.3333 10 13.3333C12.9455 13.3333 15.3334 10.9455 15.3334 7.99999C15.3334 5.05447 12.9455 2.66666 10 2.66666H4.66669ZM10 10.6667C11.4728 10.6667 12.6667 9.47275 12.6667 7.99999C12.6667 6.52723 11.4728 5.33332 10 5.33332C8.52726 5.33332 7.33335 6.52723 7.33335 7.99999C7.33335 9.47275 8.52726 10.6667 10 10.6667Z" fill="#b649b8"></path><path d="M1.66669 6.66666C2.03488 6.66666 2.33335 6.36818 2.33335 5.99999C2.33335 5.6318 2.03488 5.33332 1.66669 5.33332H1.33335C0.965164 5.33332 0.666687 5.6318 0.666687 5.99999C0.666687 6.36818 0.965164 6.66666 1.33335 6.66666H1.66669Z" fill="#b649b8"></path><defs><linearGradient id="paint0_linear_6413_12612" x1="0.666992" y1="0.127441" x2="15.3271" y2="0.127441" gradientUnits="userSpaceOnUse"><stop stop-color="var(--premium-tier-2-purple-for-gradients)"></stop><stop offset="0.502368" stop-color="var(--premium-tier-2-purple-for-gradients-2)"></stop><stop offset="1" stop-color="var(--premium-tier-2-pink-for-gradients)"></stop></linearGradient></defs></svg>
      </div>
        <li onClick={ () => handleMenuClickMain('Server-Boosts')}>Server Boosts</li>
        <li onClick={ () => handleMenuClickMain('Subscription')}>Subscription</li>
        <li onClick={ () => handleMenuClickMain('Gift-Inventory')}>Gift Inventory</li>
        <li onClick={ () => handleMenuClickMain('Billing')}>billing</li>
     </ul>
     <div className='hr-line'></div>
     <label htmlFor="billingsetting">APP SETING</label>
     <br />
     <br />
     <ul>
        <li onClick={ () => handleMenuClickMain('Apperiance')}>Appearence</li>
        <li onClick={ () => handleMenuClickMain('Accessebility')}>Accessebility</li>
        <li onClick={ () => handleMenuClickMain('VoiceSettings')}>Voice & Video</li>
        <li onClick={ () => handleMenuClickMain('Chating')} >Chat</li>
        <li onClick={() => handleMenuClickMain('Notification')}>Notification</li>
        <li onClick={() => handleMenuClickMain('Keybinds')}>Keybinds</li>
        <li onClick={() => handleMenuClickMain('Language')}>Language</li>
        <li onClick={() => handleMenuClickMain('StremerMode')}>Streamer Mode</li>
        <li onClick={() => handleMenuClickMain('Advanced')}>Advanced</li>
       <div className='hr-line'></div>
     </ul>
     <label htmlFor="billingsetting">ACTIVITY SETTING</label>
     <br />
     <br />
     <ul>
        <li onClick={() => handleMenuClickMain('ActivityAnd')}>Activity Privacy</li>
        <li onClick={() => handleMenuClickMain('RegisterdGame')}>Registerd Games</li>
     <div className='hr-line'></div>
        <li>Whats New</li>
      <a href="https://discordmerch.com/?utm_source=shortlink&utm_lkey=0peij"  target="_blank" style={{ textDecoration: 'none', color: '#ffff' }}>
          <li>Merch</li> </a> 
        <li>Hype Squad</li>
     <div className='hr-line'></div>
     <div className='log-out-session'>
      <li>Log Out</li>
         <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M9 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z" class=""></path><path fill="#b5bac1" fill-rule="evenodd" d="M2.75 3.02A3 3 0 0 1 5 2h10a3 3 0 0 1 3 3v7.64c0 .44-.55.7-.95.55a3 3 0 0 0-3.17 4.93l.02.03a.5.5 0 0 1-.35.85h-.05a.5.5 0 0 0-.5.5 2.5 2.5 0 0 1-3.68 2.2l-5.8-3.09A3 3 0 0 1 2 16V5a3 3 0 0 1 .76-1.98Zm1.3 1.95A.04.04 0 0 0 4 5v11c0 .36.2.68.49.86l5.77 3.08a.5.5 0 0 0 .74-.44V8.02a.5.5 0 0 0-.32-.46l-6.63-2.6Z" clip-rule="evenodd" class=""></path><path fill="#b5bac1" d="M15.3 16.7a1 1 0 0 1 1.4-1.4l4.3 4.29V16a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.59l-4.3-4.3Z" class=""></path></svg>
      
     </div>
     <div className='hr-line'></div>
     <div className='logo-images'>
      <div><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#b5bac1" d="M13.86 10.47 21.15 2h-1.73l-6.33 7.35L8.04 2H2.22l7.64 11.12L2.22 22h1.72l6.68-7.77L15.96 22h5.82l-7.92-11.53Zm-2.36 2.75-.78-1.11L4.57 3.3h2.65l4.97 7.11.77 1.1 6.46 9.25h-2.65l-5.27-7.54Z" class="foreground_c44e94"></path></svg></div>
      <div><a tabindex="-1" class="anchor_af404b anchorUnderlineOnHover_af404b link_c44e94" href="https://www.instagram.com/discord/" rel="noreferrer noopener" target="_blank" title="Instagram"><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#b5bac1" fill-rule="evenodd" d="M7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd" class="foreground_#b5bac1"></path><path fill="#b5bac1" d="M17.25 8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" class="foreground_c44e94"></path><path fill="#b5bac1" fill-rule="evenodd" d="M7.86 2.07a7.3 7.3 0 0 0-2.43.47A4.9 4.9 0 0 0 3.66 3.7a4.9 4.9 0 0 0-1.15 1.77 7.35 7.35 0 0 0-.46 2.43C2.01 8.96 2 9.3 2 12.02c0 2.71.02 3.06.07 4.12.05 1.07.22 1.8.47 2.43.26.66.6 1.21 1.16 1.77.55.55 1.11.9 1.77 1.15.64.24 1.36.41 2.43.46 1.06.04 1.4.05 4.12.05 2.71 0 3.06-.02 4.12-.07a6.14 6.14 0 0 0 4.2-1.63 6.15 6.15 0 0 0 1.6-4.2c.05-1.06.06-1.4.06-4.12 0-2.71-.02-3.05-.07-4.12a6.15 6.15 0 0 0-1.63-4.2 6.14 6.14 0 0 0-4.2-1.6C15.04 2 14.7 2 11.98 2c-2.71 0-3.05.02-4.12.07Zm.1 2c-.88.04-1.39.17-1.8.33a2.9 2.9 0 0 0-1.08.7 2.9 2.9 0 0 0-.7 1.09c-.16.4-.29.92-.33 1.8A68.6 68.6 0 0 0 4 12.01c0 2.7.02 3 .07 4.03.04.87.17 1.38.33 1.79.17.42.36.73.7 1.08.35.34.67.54 1.09.7.41.16.92.29 1.8.33 1.01.04 1.32.05 4.03.05 2.7 0 3-.02 4.03-.07 1.28-.06 2.23-.4 2.87-1.04.64-.64.97-1.6 1.03-2.87.04-1.02.05-1.33.05-4.04 0-2.7-.02-3-.07-4.03-.06-1.28-.4-2.23-1.04-2.87-.64-.64-1.6-.97-2.87-1.03A69.44 69.44 0 0 0 11.98 4c-2.7 0-3 .02-4.02.07Z" clip-rule="evenodd" class="foreground_c44e94"></path></svg></a></div>
      <div><a tabindex="-1" class="anchor_af404b anchorUnderlineOnHover_af404b link_c44e94" href="https://www.facebook.com/discord/" rel="noreferrer noopener" target="_blank" title="Facebook"><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#b5bac1" d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z" class="foreground_c44e94"></path></svg></a></div>
      <div><a tabindex="-1" class="anchor_af404b anchorUnderlineOnHover_af404b link_c44e94" href="https://www.youtube.com/discord/" rel="noreferrer noopener" target="_blank" title="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3766 4.10479C22.4093 4.38257 23.2225 5.20102 23.4985 6.24038C24 8.12411 24 12.0545 24 12.0545C24 12.0545 24 15.9848 23.4985 17.8688C23.2225 18.908 22.4093 19.7265 21.3766 20.0044C19.505 20.5091 12 20.5091 12 20.5091C12 20.5091 4.49496 20.5091 2.62336 20.0044C1.59082 19.7265 0.777545 18.908 0.501545 17.8688C0 15.9848 0 12.0545 0 12.0545C0 12.0545 0 8.12411 0.501545 6.24038C0.777545 5.20102 1.59082 4.38257 2.62336 4.10479C4.49496 3.59998 12 3.59998 12 3.59998C12 3.59998 19.505 3.59998 21.3766 4.10479ZM15.8182 12.0546L9.54551 15.623V8.48596L15.8182 12.0546Z" fill="#b5bac1" class="foreground_c44e94"></path></svg></a></div>
      <div><a tabindex="-1" class="anchor_af404b anchorUnderlineOnHover_af404b link_c44e94" href="https://www.tiktok.com/@discord" rel="noreferrer noopener" target="_blank" title="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" role="img"><path class="foreground_c44e94" fill="#b5bac1" d="M17.836 6.009A4.794 4.794 0 0 1 15.658 2h-3.439l-.005 13.78a2.892 2.892 0 0 1-2.885 2.782 2.893 2.893 0 0 1-2.89-2.89 2.894 2.894 0 0 1 2.89-2.89c.298 0 .583.048.853.133v-3.51a6.308 6.308 0 0 0-.853-.062A6.336 6.336 0 0 0 3 15.672a6.324 6.324 0 0 0 2.702 5.181A6.29 6.29 0 0 0 9.329 22a6.336 6.336 0 0 0 6.329-6.329V8.683c1.348.968 3 1.539 4.784 1.539V6.783c-.96 0-1.855-.285-2.605-.775v.001Z"></path></svg></a></div>
      </div>
      <div className='click-to-copy-version'>
    <span>Stable 322113 (ef53d56)</span>
    <span>Host 0.0.376 x64</span>
    <span>MacOS 14 (23.)</span>
      </div>
     </ul>
    </div>
  )
}

export default Tabsone
