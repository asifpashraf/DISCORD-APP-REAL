import React from 'react'
import Esc from './Esc'

const Tabstwo = () => {
  return (
    <div className='tabs-two-items'>
        <div className='My-account'>
            <h3>My Account</h3>
        </div>
      <div className='tabs-first-card'>
        <div className='crad-inner-first'>
        </div>
        <div className='crad-inner-second'>
       <img src="src/assets/Settings-images/discord-logo-7A1EC3216C-seeklogo.com.png" alt="discord" />
        <h2>sameeh</h2>
        </div>
        <div className='edit-profile'>
         <button>Edit User Profile</button>
        </div>
        <div className="card-inner-third">
            <div className="card-inner-third-item  one">
                <div className= 'third-inner-one'>
                    <label htmlFor="displayname">DISPLAY NAME</label>
                    <span>sameeh</span>
                     </div>
                <div className= 'third-inner-two'> Edit</div>  
            </div>
            <div className="card-inner-third-item  two">
            <div className= 'third-inner-one'>
                    <label htmlFor="displayname">USER NAME</label>
                    <span>sameeh_114_14990</span>
                     </div>
                <div className= 'third-inner-two'> Edit</div>  
            </div>
            <div className="card-inner-third-item  three">
            <div className= 'third-inner-one'>
                    <label htmlFor="displayname">EMAIL</label>
                    <span>********@gmail.com</span>
                     </div>
                <div className= 'third-inner-two'> Edit</div>  
            </div>
            <div className="card-inner-third-item  four">
            <div className= 'third-inner-one'>
                    <label htmlFor="displayname">PHONE NUMBER</label>
                    <span>********1151</span>
                     </div>
                <div className= 'third-inner-two'> Edit</div>  
            </div>
        </div>
      </div>

      <div className="password-authentication">
        <h2>Password And Authentication</h2>
        <div>
        <button>Change Password</button>
        </div>
        <h4>AUTHENTICATOR APP</h4>
        <p>
        Protect your Discord account with an extra layer of security. Once configured, you'll be required
        to enter your password and complete one additional step in order to sign in.
        </p>
        <div>
        <button>Enable Authenticator App </button>
        </div>
        <h4>SECURITY KEYS</h4>
        <p>
        Add an additional layer of protection to your account With a security Key.
        </p>
        <h4>ACCOUNT REMOVAL</h4>
        <p>
        Disabling your account means you can recover it at any time after taking this action.
        </p>
      <div className="disable-account">
        <div className='disable-account-first-butt'>
        <button >Disable Account</button>
        </div>
        <button>Delete Account</button>
      </div>
      </div>
      <div className="ship-model-image">
        <img src="src/assets/Settings-images/PHOTO-2024-09-01-13-37-28-removebg-preview.png" alt="" />
      </div>
      <Esc/>
    </div>
  )
}

export default Tabstwo
