import React,{useEffect,useRef}from 'react';
import './Thanku.css'
import Typed from 'typed.js'
import robo from '../assets/robo.png'
import robo_back from '../assets/robo_back.png'
import {Link}from 'react-router-dom'
const Thanku = () => {
    const typedElement = useRef(null);
    useEffect(() => {
        const options = {
            strings: ["Thank You", " Please visit again"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };
        const typed = new Typed(typedElement.current, options);
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='Whole'>
            <h4><span ref={typedElement}></span></h4>
            <div className="image-container">
                <div className="robo">
                    <img src={robo} alt="Robot" />
                </div>
                <div className="robo_back">
                    <img src={robo_back} alt="Robot Background" />
                </div>
                  <div className="button">
        <Link to="/"><button className="thanku-to-home">Home</button></Link>
        </div>
        </div>
      
        </div>
    );
};

export default Thanku;