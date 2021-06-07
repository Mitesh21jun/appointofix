import React, { useState, useEffect } from "react";
import AppointofixDataService from "../services/appointofix";

const ShopsList = ({ match }) => {
  const [search, setSearch] = useState([])

  console.log(match)

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


  useEffect(() => {
    onSearch();
  },[match])



  // const [shop, setShop] = useState('');

  // const getShop = (id) => {
  //   AppointofixDataService.get(id)
  //     .then((response) => {
  //       setShop(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };



  const onSearch = async () => {

    await AppointofixDataService.searchName(match.params.searchText).then((response) => {

      const data = (response.data.shops.map(shop => shop))
      console.log(data);
      setSearch(data)



    }).catch(e => {
      console.log(e)
    })

  }

  return (<div>
    {search.map(data => {
      return (<h1 name={data.name} key={data.key}>{data.name}</h1>)
    })}
  </div>)
};

export default ShopsList;
