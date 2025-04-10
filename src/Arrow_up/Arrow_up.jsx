import React from 'react'
import up_arrow from "../assets/up-arrow.png"
import './Arrow_up.css'
const Arrow_up = () => {
    const scrollTop=()=>{
        window.scrollTo({
            top:0,
            behaviour:"smooth",
        })
    }
  return (
    <div onClick={scrollTop} className='arrow_up'>
        <img className="arrow_up__img" src={up_arrow} alt="" />
    </div>
  )
}

export default Arrow_up
