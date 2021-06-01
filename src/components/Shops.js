import React, { useState, useEffect } from 'react'
import AppointofixDataService from "../services/appointofix";
const Shops = () => {

    const initialShopState = {
        id: null,
        name: "",
        address: "",
        street_address: "",
        sub_categories: "",
        categories: "",
        zipcode: "",
        website: "",
        email: "",
        review: "",
        review_count: "",

    };

    const [shop, setShop] = useState(initialShopState);

    const getShop = id => {
        AppointofixDataService.get(id)
          .then(response => {
            setShop(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    };
    
    return (
        <div>

        </div>
    )
}

export default Shops;