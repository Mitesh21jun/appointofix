import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import AppointofixDataService from "../services/appointofix";
import ShopsList from './ShopsList';

const Header = () => {

  const searchRef = useRef();
  const [search, setSearch] = useState('')
  
  const onSearch = () => {
    setSearch(searchRef.current.value)
  }


  // const onSearch = async () => {
  //   await AppointofixDataService.searchName(searchRef.current.value).then((response) => {
  //     let tempName = response.data.shops.map(shop => shop)
  //     console.log(tempName)
  //     setSearch(tempName)
  //   }).catch(e => {
  //     console.log(e)
  //   })
  //   return search;  
  // }


  return (

    <div className="nav-container">
      <nav>
        <div className="logo">
          <Link to='/'>
            <img src={Logo} id='logo-img' alt="logo" />
          </Link>
        </div>
        <div class="input-group search">
          <input type="text" ref={searchRef} onChange={onSearch} class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"  />
          <div class="input-group-append">
            <Link to={`/shops/${search}`}>      
            <button onClick={onSearch} class="btn btn-outline-secondary btn-search" type="button"
            ><i className='fas fa-search'></i></button>
            </Link>
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
