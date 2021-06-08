import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppointofixDataService from "../services/appointofix";


const ShopsList = ({ match }) => {
  const [search, setSearch] = useState([])

  console.log(match)

  // const initialShopState = {
  //   id: null,
  //   name: "",
  //   address: "",
  //   street_address: "",
  //   sub_categories: "",
  //   categories: "",
  //   zipcode: "",
  //   website: "",
  //   email: "",
  //   review: "",
  //   review_count: "",
  // };


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
  
    console.log("first if")


    if (match.params.searchText) {
      await AppointofixDataService.searchName(match.params.searchText).then((response) => {
        const data = (response.data.shops.map(shop => shop))
        console.log(data);
        setSearch(data)
      }).catch(e => {
        console.log(e)
      })
      return 
    }
    if (match.params.category && match.params.city) {

      if (match.params.category === 'all category'&& match.params.city==='all city') {
        await AppointofixDataService.getAll()
        .then((response) => {
        console.log(response.data.shops)
        const data = (response.data.shops.map(shop => shop).sort((a,b)=>b.review_count - a.review_count))
        console.log(data);
        setSearch(data)
      })
      .catch(e => {
          console.log(e);
      })
        return
      }

      if (match.params.category === 'all category'&& match.params.city!=='all city') {
        await AppointofixDataService.getByCity(match.params.city)
            .then((response) => {
            console.log(response.data.shops)
            const data = (response.data.shops.map(shop => shop).sort((a,b)=>b.review_count - a.review_count))
            console.log(data);
            setSearch(data)
          })
          .catch(e => {
              console.log(e);
          })
          return
      }

      if (match.params.category !== 'all category'&& match.params.city==='all city') {
        await AppointofixDataService.getByCategory(match.params.category)
            .then((response) => {
            console.log(response.data.shops)
            const data = (response.data.shops.map(shop => shop).sort((a,b)=>b.review_count - a.review_count))
            console.log(data);
            setSearch(data)
          })
          .catch(e => {
              console.log(e);
          })
          return
      }

      if (match.params.category !== 'all category'&& match.params.city!=='all city') {
        await AppointofixDataService.getByCategoryAndCity(match.params.category,match.params.city)
            .then((response) => {
            console.log(response.data.shops)
            const data = (response.data.shops.map(shop => shop).sort((a,b)=>b.review_count - a.review_count))
            console.log(data);
            setSearch(data)
          })
          .catch(e => {
              console.log(e);
          })
          return
      }

    }

    // if (match.params.category) {

    //   if (match.params.category === 'all category') {
    //     await AppointofixDataService.getAll()
    //     .then((response) => {
    //     console.log(response.data.shops)
    //     const data = (response.data.shops.map(shop => shop).sort((a,b)=>b.review_count - a.review_count))
    //     console.log(data);
    //     setSearch(data)
    //   })
    //   .catch(e => {
    //       console.log(e);
    //   })
    //     return
    //   }

    //  if(match.params.category!=='all category')
    //   await AppointofixDataService.getByCategory(match.params.category)
    //     .then((response) => {
    //     console.log(response.data.shops)
    //     const data = (response.data.shops.map(shop => shop).sort((a,b)=>b.review_count - a.review_count))
    //     console.log(data);
    //     setSearch(data)
    //   })
    //   .catch(e => {
    //       console.log(e);
    //   })
    //   return
      
    // }
      
  }

  return (<div style={{display:"flex", flexDirection:'column', justifyContent:'center',alignContent:'center'}} >
    <h1 className='display-4 m-auto' >
      Shop-List
</h1><br/>
    {search.map(data => {
      return (
      
        <div className="col-10 m-auto">
        <div className="card p-3">
          <div className="card-body">
            <h5 className="card-title display-6">{data.name}</h5>
            <p className="card-text lead">
              <strong>Category: </strong>{data.category}<br />
              <strong>Sub Category: </strong>{data.sub_category}<br/>
                
              <strong>Address: </strong>{data.address}
            </p>
            <div className="row">
            <Link to={"/shops/"+data._id} className="btn btn-warning input-btn col-lg-5 mx-1 mb-1">
              Book Appointment
            </Link>
            <a target="_blank" href={"https://www.google.com/maps/search/"+data.name +'+'+ data.address} className="btn btn-warning input-btn col-lg-5 mx-1 mb-1">View Map</a>
            </div>
          </div>
          </div>
          <br/>
          <br/>
{/* <h4 className='display-6' name={data.name} key={data.key}>{data.name}</h4> */}
      </div>)


        
    })}
  </div>)
};

export default ShopsList;
