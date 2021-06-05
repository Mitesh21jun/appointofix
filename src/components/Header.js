import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import AppointofixDataService from "../services/appointofix";
const Header = (props) => {

  const searchRef = useRef('');

  const searchName = async (name) => {
    name = searchRef.current.value
    await AppointofixDataService.searchName(name).then((response) => {
      let tempName = response.data.shops.map(shop => shop)
    console.log(tempName)
    })
  }


  return (

    <div className="nav-container">
      <nav>
        <div className="logo">
          <Link to='/'>
            <img src={Logo} id='logo-img' alt="logo" />
          </Link>
        </div>
        <div class="input-group search">
          <input type="text" ref={searchRef} class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary btn-search" type="button"><i className='fas fa-search' onClick={searchName}></i></button>
          </div>
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
