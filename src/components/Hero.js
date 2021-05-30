import React from 'react'
import GirlPng from "../img/girl.png";

function Hero() {
    return (
        <div>
            <div className="hero">
                <h1 className="hero-text">Fix my appointment with</h1>

                <div className="input-group">
                    <select type="text" className="input" id="segment" placeholder="Segment" />

                    <input placeholder="City"
                        id="city"
                        type="text"
                        className="input" />

                    <input id='date'
                        type="text"
                        className="input"
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
