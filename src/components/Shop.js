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
            return (<div className='card col-10 m-auto'>
                <h1 className='display-6 m-auto mt-3'>{item.name}</h1><br/>
            
                <p className="lead">
                <strong>Category: </strong>{item.category}<br/>
                <strong>Sub Category: </strong>{item.sub_category}<br/>
                <strong>Address: </strong>{item.address}<br/>
                <strong>City: </strong>{item.city}<br/>
                <strong>Email: </strong>{item.email}<br/>
                <strong>Website: </strong>{item.website}<br/>
                <strong>Review: </strong>{item.review}<br/>
                <strong>Review Count: </strong>{item.review_count}
                    
            </p>
            </div>)
        })
        )
}

export default Shop
