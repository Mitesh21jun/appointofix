import React from 'react'
import Logo from '../img/logo.png';
const Header = () => {
  return (

    <div className="nav-container">
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-item">
          <ul>
            <li><a href="#" className="Login">Login</a></li>
            <li><a href="#" className="signup">Sign Up</a></li>
          </ul>
        </div>
      </nav>
    </div>

  )
}

export default Header
