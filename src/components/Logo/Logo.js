import React from 'react';
import Tilt from 'react-parallax-tilt';
import "./Logo.css";
import bulb from "./Logo.png"
const Logo=()=>{
    return (
        <div>
        <Tilt className="Tilt pa3 ma3 shadow-3" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner"> <img src={bulb} alt="logo"/> </div>
        </Tilt>
        </div>
    )
}

export default Logo;