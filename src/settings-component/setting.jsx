import { useState } from 'react'
import './Settings.css'
import Tabsone from './TabsOne'
import Tabstwo from './TabsTwo'
import Friendsrequest from './Friendsrequest'
import Clips from './Clips'
import Conection from './Conection'
import Devices from './Devices'
import Authorized from './Authorized'
import FamilyCenter from './FamilyCenterMain'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServerBooster from './ServerBooster'
// import ServerBooster from './ServerBooster'
import Subscription from './Subscription'
// import FamilyCenterMain from './component/FamilyCenterMain'
import GiftInvintory from './GiftInvintory'
import Billing from './Billing'
   import Apperiance from './apperiance'
  import Accessibilit from './Accessibility'
    import VoiceSettings from './VoiceSettings'
       import Chat from './Chat'
        import Notification from './Notification'
         import Keybinds from './Keybinds'
        import Language from './Language'
        import StremerMode from './StremerMode'
        import Advanced from './Advanced'

import'./settings_index.css'
import ProfileSetting from './ProfileSetting'
import ActivityAnd from './ActivityAnd'
import RegisterdGame from './RegisterdGame'
import NitroSettings from './NitroSettings'
import WhatsNew from './WhatsNew'
function Settings() {
  const [activeComponentMain, setActiveComponentMain] = useState('TabsTwo');

  const handleMenuClickMain = (component) => {
    setActiveComponentMain(component);
  };
  return (
   


    <div className='conteiner'>
    <div className="tabs-one">
      
      <Tabsone handleMenuClickMain={handleMenuClickMain}/>

    </div>
    <div className="tabs-two">
      {activeComponentMain === 'TabsTwo' && <Tabstwo/>}
      {activeComponentMain === 'friend-request' && <Friendsrequest/>}
      {activeComponentMain === 'Family-Center' && <FamilyCenter/>}
      {activeComponentMain === 'Authorized' && <Authorized/>}
      {activeComponentMain === 'Devices' && <Devices/>}
      {activeComponentMain === 'Clips' && <Clips/>}
      {activeComponentMain === 'Connection' && <Conection/>}
      {activeComponentMain === 'Server-Boosts' && <ServerBooster/>}
      {activeComponentMain === 'Subscription' && <Subscription/>}
      {activeComponentMain === 'Apperiance' && <Apperiance/>}
      {activeComponentMain === 'Gift-Inventory' && <GiftInvintory/>}
      {activeComponentMain === 'Billing' && <Billing/>}
      {activeComponentMain === 'Accessebility' && <Accessibilit/>}
      {activeComponentMain === 'VoiceSettings' && <VoiceSettings/>}
      {activeComponentMain === 'Chating' && <Chat/>}
      {activeComponentMain === 'Notification' && <Notification/>}
      {activeComponentMain === 'Keybinds' && <Keybinds/>}
      {activeComponentMain === 'Language' && <Language/>}
      {activeComponentMain === 'StremerMode' && <StremerMode/>}
      {activeComponentMain === 'Advanced' && <Advanced/>}
      {activeComponentMain === 'ProfileSetting' && <ProfileSetting/>}
       {activeComponentMain === 'ActivityAnd' && <ActivityAnd/>}
      {activeComponentMain === 'RegisterdGame' &&    <RegisterdGame/>}
       {activeComponentMain === 'NitroSettings' && <NitroSettings/>}
    </div>
   </div>

  )
}

export default Settings




