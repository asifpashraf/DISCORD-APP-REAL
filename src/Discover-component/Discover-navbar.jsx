import React from 'react'

function DiscoverNavbar() {
  return (
    <div className="server-items">
        <div className="navbar-buttons">
                <buttons className='b1'>home</buttons>
                <buttons className='b1'>gaming</buttons>
                <buttons className='b1'>music</buttons>
                <buttons className='b1'>entertainment</buttons>
                <buttons className='b1'>science</buttons>
                <buttons className='b1'>education</buttons>
                <buttons className='b1'>student</buttons>
        </div>
        <input type="text" placeholder='Search' className="input-field" />

    </div>
  )
}

export default DiscoverNavbar