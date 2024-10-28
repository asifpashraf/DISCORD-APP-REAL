import React from 'react'

function ServerCards(props) {
  return (
    <div className='cards30'>
        <h1>{props.title}</h1>
        <h1>welcome</h1>
        active:{props.online}
        offline:{props.offline}

    </div>
  )
}

export default ServerCards