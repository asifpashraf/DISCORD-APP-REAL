import React, { useState } from 'react'

const WhatsNew = () => {
  const[What,setWhat] = useState(false)
  const Whatsnewfunc = () =>{
    setWhat(true)
  }

  return (
    <div>
      <div className="Whats-New-Modal-ctnr">
        <img className='Whats-New-Modal-ctnr-pic' src="src/assets/Settings-images/ WhatsNewModal.png" alt="WhatsNewModal" />
      </div>
    </div>
  )
}

export default WhatsNew
