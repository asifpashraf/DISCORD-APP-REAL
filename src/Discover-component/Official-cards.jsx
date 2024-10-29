import React from 'react'

function ServerCards(props) {
  return (
    <div className='cards30'>
      <img src={props.photo} alt="photo will be here" className='server-photo'/>
        <h1>{props.title}</h1>
        <h1>welcome</h1>
        active:{props.online}
        offline:{props.offline}

    </div>
  )
}

export default ServerCards