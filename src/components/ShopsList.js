import React, { useState, useEffect } from "react";
import AppointofixDataService from "../services/appointofix";
const ShopsList = async ({ match }) => {

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

  const [search, setSearch] = useState(initialShopState)

  useEffect(() => {
    onSearch();
  }, [match.params.searchText])



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
    {(search)?search.map(shop => (<h1>{shop.name}</h1>)):''}
  </div>)
};

export default ShopsList;
