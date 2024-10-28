import React from 'react'
import './chatContent.css'
import discord from '/src/assets/help-images/discordPro.png'
import astrobyte from '/src/assets/help-images/astrobyteLogo.jpg'
import chatgif from '/src/assets/help-images/chatgif.gif'
import addicon from '/src/assets/help-images/add_icon.png'
import gift from '/src/assets/help-images/gift_icon.png'
import gif from '/src/assets/help-images/gif_icon.png'
import happygif from '/src/assets/help-images/happyGif_icon.png'
import happyicon from '/src/assets/help-images/happy_icon.png'
import groupicon from '/src/assets/help-images/appsCommands.png'


function ChatContent() {
    return (
        <div className='chat'>
            <div className='contents'>
                <div className='topcontent'>
                    <div className='chatProfile-div'>
                        <img className='chatprofile' src={discord} alt="" />
                    </div>
                    <h1 className='chatname'>Aparna</h1>
                    <h3 className='chatid'>aparna_136</h3>
                    <p className='chatP'>This is the beginning of your direct message history with Aparna.</p>
                    <div className='chatflex'>
                        <img className='astroLogo' src={astrobyte} alt="" />
                        <h4 className='mutual'>1 Mutual Server</h4>
                        <span className='dot'></span>
                        <button className='removeButton'>Remove Friend</button>
                        <button className='blockButton'>Block</button>
                    </div>
                </div>
                <div className='bottomcontent'>
                    <img className='gif' src={chatgif} alt="" />
                    <button className='waveButton'>Wave to Aparna</button>
                    <div className='chatingroup'>
                        <div className='chatinputDiv'>
                            <img src={addicon} alt="" />
                            <input className='chatinput' type="text" placeholder='Message @Aparna' />
                            <img className='gift-img' src={gift} alt="" />
                            <img className='gif-img' src={gif} alt="" />
                            <img className='happygif-img' src={happygif} alt="" />
                            <img className='happyicon-img' src={happyicon} alt="" />
                        </div>
                        <div className='groupiconsDiv'>
                            <img className='groupicon' src={groupicon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='scroll'></div>
        </div>
    )
}

export default ChatContent