import React from 'react'
import { Link } from 'react-router-dom'
const Esc = () => {
  return (
    <div>
      <Link to={'/'}>
         <div className="esc-back-btn">
      <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#b5bac1" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
      <p>Esc</p>
      </div>
      </Link>
    </div>
  )
}

export default Esc
