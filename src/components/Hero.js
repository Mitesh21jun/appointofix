import React, { useState, useEffect } from 'react'
import GirlPng from "../img/girl.png";
import AppointofixDataService from "../services/appointofix";
const Hero = props => {
    const [category, setCategories] = useState(["All Categories"]);
    const [city, setCity] = useState(["All City"]);
    const [name, setName] = useState(["Select Destination"]);


    useEffect(() => {
        retrieveCategories();
        retrieveCity();
        retrieveName();
    }, []);

    const retrieveCategories = () => {
        AppointofixDataService.getCategories()
            .then(response => {
                console.log(response.data);
                setCategories(["All Categories"].concat(response.data));

            })
            .catch(e => {
                console.log(e);
            });
    };


    const retrieveCity = () => {
        AppointofixDataService.getCity()
            .then(response => {
                console.log(response.data);
                setCity(["All City"].concat(response.data));

            })
            .catch(e => {
                console.log(e);
            });
    };

    const retrieveName= () => {
        AppointofixDataService.getName()
            .then(response => {
                console.log(response.data);
                setName(["Select Destination"].concat(response.data));

            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <div className="hero">
                <h1 className="hero-text">Fix your appointment</h1>

                <div className="input-group">
                    <select type="text" className="input" id="segment">
                        {category.map(category => {
                            return (
                                <option value={category}> {category.substr(0, 20)} </option>
                            )
                        })}
                    </select>
                    <select type="text" className="input mdb-select md-form" id="segment">
                        {city.map(city => {
                            return (
                                <option value={city}> {city.substr(0, 20)} </option>
                            )
                        })}
                    </select>

                    <select type="text" className="input" id="name">
                        {name.map(name => {
                            return (
                                <option value={name}> {name.substr(0, 20)} </option>
                            )
                        })}
                    </select>

                    <input id='date'
                        type="date"
                        className="input date"
                        placeholder="Date"
                    />

                    <button className="btn btn-dark input-btn">Fix it</button>

                </div>
            </div>
            <div className='hero-bottom'>
                <div className="hero-bottom-text">  <h1 className='display-4'>Free appointment scheduling software that makes life easier for Health, beauty, fitness, and all your needs.</h1>
                </div>
                <div className="hero-bottom-img">
                    <img src={GirlPng}></img>
                </div>
            </div>
        </div>


    )
}

export default Hero
