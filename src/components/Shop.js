import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AppointofixDataService from '../services/appointofix'
function Shop({match}) {

    console.log(match)

    const [shop, setShop] = useState([])
useEffect(() => {
getShop()
}, [])


  const getShop = () => {
    AppointofixDataService.getByID(match.params.id)
      .then((response) => {
        setShop(response.data.shops);
        console.log(response.data.shops);
      })
      .catch((e) => {
        console.log(e);
      });
  };
    
    return (
        shop.map(item => {
            return (<div className='card'>
                <h1 className='display-6'>{item.name}</h1>
            
                <p className="lead">
                <strong>Category: {item.category}</strong><br/>
                <strong>Sub Category: {item.sub_category}</strong><br/>
                <strong>Address: {item.address}</strong><br/>
                <strong>City: {item.city}</strong><br/>
                <strong>Email: {item.email}</strong><br/>
                <strong>Website: {item.website}</strong><br/>
                <strong>Review: {item.review}</strong><br/>
                <strong>Review Count: {item.review_count}</strong>
                    
            </p>
            </div>)
        })
        )
}

export default Shop
