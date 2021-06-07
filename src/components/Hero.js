import React, { useState, useEffect, useRef } from 'react'
import GirlPng from "../img/girl.png";
import AppointofixDataService from "../services/appointofix";
import { Link } from 'react-router-dom';

const Hero = props => {
    const [category, setCategories] = useState(['All Categories']);
    // const [city, setCity] = useState(["All City"]);
    const [name, setName] = useState(["Select Destination"]);
    const [searchCategory, setSearchCategory] = useState('all');
    const [subCategory, setSubCategory] = useState([]);
    const [searchSubCategory, setSearchSubCategory] = useState([]);

    //ref
    const categoryRef = useRef('')
    const subCategoryRef = useRef()

    useEffect(() => {
        
    onChangeSubCategory()
        
    },[searchCategory])


    let emptySubCategory = (subCategory.length === 0)
    // let emptySearchCategory = (searchCategory.length === 0)

    useEffect(() => {
        retrieveCategories();
        // retrieveCity();
        // retrieveName();

    }, []);




    const onChangeSubCategory = async () => {

        // searchSubCategory = e.target.value;
        // console.log(e.target.value);
        
        // await AppointofixDataService.getAll().then((response) => {

        //     let tempName = (response.data.shops.map(shop => ((shop.category === searchCategory) && (shop.sub_category === subCategoryRef.current.value)) ? shop.name : '').filter(val => val !== ''))
        //     setName(tempName)
        //     setSearchSubCategory(subCategoryRef.current.value);
        //     // console.log(onChangeSubCategory(subCategoryRef.current))
            
        // }).catch(e => {
        //     console.log(e);
        // });

    };

    const onChangeSearchCategory = async e => {
        
        // const searchCategory = e.target.value;
        // console.log(searchCategory);
        
        await AppointofixDataService.getAll().then((response) => {
            setSubCategory(response.data.shops.map(shop => (shop.category === e.target.value) ? shop.sub_category : '').filter((value, index, self) => self.indexOf(value) === index).filter(val => val !== ''))
            // setSubCategory(changeCategory)
            setSearchCategory(e.target.value);
            
        }).catch(e => {
            console.log(e);
        });
    };

    const retrieveCategories = async () => {

        await AppointofixDataService.getCategories()
            .then(response => {
                console.log(response.data);
                setCategories(["All Categories"].concat(response.data));

            })
            .catch(e => {
                console.log(e);
            });
    };


    // const retrieveCity = () => {
    //     AppointofixDataService.getCity()
    //         .then(response => {
    //             console.log(response.data);
    //             setCity(["All City"].concat(response.data));

    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    // const retrieveName = async () => {

    //     await AppointofixDataService.getName()
    //         .then(response => {
    //             console.log(response.data);
    //             setName(["Select Name"].concat(response.data));

    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    return (
        <div>
            <div className="hero">
                <h1 className="hero-text">Fix your appointment</h1>

                <div className="input-group">
                    <select type="text" className="input" ref={categoryRef} id="category" onChange={onChangeSearchCategory}>
                        {category.map(category => {
                            return (
                                <option value={category}> {category.substr(0, 20)} </option>
                            )
                        })}
                    </select>


                    <select type="text" hidden='true' ref={subCategoryRef} className="input" onChange={onChangeSubCategory} placeholder="abc" id="subcategory" disabled={emptySubCategory}>
                        {/* <option value="" 
                            hidden={!emptySubCategory}
                            disabled={!emptySubCategory} selected={emptySubCategory}>Select a category first</option> */}
                        {/* {subCategory ? (subCategory.map(subCategory => {
                            return (
                                <option value={subCategory}> {subCategory.substr(0, 20)} </option>
                            )
                        })) : subCategory} */}
                    </select>
                    {/* 
                    <select type="text" className="input mdb-select md-form" id="segment">
                        {city.map(city => {
                            return (
                                <option value={city}> {city.substr(0, 20)} </option>
                            )
                        })}
                    </select> */}

                    <select type="text" hidden='true' disabled={emptySubCategory} className="input" id="name">
                        <option value=""
                            
                            hidden={!emptySubCategory}
                            disabled={!emptySubCategory} selected={emptySubCategory}>Select Category and Sub-Category</option>
                        {/* {name.map(name => {
                            return (
                                <option value={name}> {name.substr(0, 20)} </option>
                            )
                        })} */}
                    </select>

                    {/* <input id='date'
                        type="date"
                        className="input date"
                        placeholder="Date"
                    />
                     */}
                    <button className="btn btn-dark input-btn"><Link style={{color:'white'}} to={`shops/category=${searchCategory}`}>Search</Link></button>
                    
                </div>

            </div>
            <div className='hero-bottom'>
                <div className="hero-bottom-text">  <h1 className='display-4'>Free appointment scheduling software that makes life easier for Health, beauty, fitness, and all your needs.</h1>
                </div>
                <div className="hero-bottom-img">
                <img src={GirlPng} alt='Appointofix-girl' ></img>
                </div>
            </div>
        </div>


    )
}

export default Hero
