import React from 'react'
import Switch from './Switch'
import Esc from './Esc'

const Clips = () => {
  return (
    <div>

      <div className="clips-beta">
        <div className="clips-beta-heading">
        <h2>Clips</h2>
        <div className="beta">
            <span>BETA</span>
        </div>
        </div>
      </div>
      
      <div className="allo-my-voice">
        <div className="allo-my-voice-text">
        <span>Allow My Voice To Be Recorded In a Clip</span>
        </div>
        <div className="allo-my-voice-toggle">
            <Switch/>
            <Esc/>
        </div>
      </div>
      <div className="allo-my-voice-under-text">
        <span>By turning on this setting  , your voice may be included when some onne in the same voice channel uses  clips</span>
      </div>

    </div>
  )
}

export default Clips
