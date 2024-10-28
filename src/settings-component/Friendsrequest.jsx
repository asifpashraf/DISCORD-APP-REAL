import React from 'react'
import Switch from './Switch'
import Esc from './Esc'

const Friendsrequest = () => {
  return (
    <>
      <div className="friendrequest">
        <h2>Friend Request</h2>
        <span>WHO CAN SEND YOU A FRIEND REQUEST</span>
        <div className="section everyone">
            <div className="section-everyone-inner-one">
                Everyone
            </div>
            <div className="section-everyone-inner-two">
            <Switch/>
            </div>
        </div>
        <div className=" section friendoffriends">
        <div className="section-everyone-inner-one">
                Friend for Friends
            </div>
            <div className="section-everyone-inner-two">
            <Switch/>
            </div>
        </div>
        <div className="section servermember">
        <div className="section-everyone-inner-one">
                Server
            </div>
            <div className="section-everyone-inner-two">
            <Switch/>
            </div>
        </div>
      </div>
      <div className="esc-back-btn">
      <Esc/>
      </div>
    </>
  )
}

export default Friendsrequest
