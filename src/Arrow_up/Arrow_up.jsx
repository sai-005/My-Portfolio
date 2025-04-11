import React, { useEffect,useState } from 'react'
import up_arrow from "../assets/up-arrow.png"
import './Arrow_up.css'
const Arrow_up = () => {

  const [isVisible,setIsvisible]=useState(false)

  useEffect(()=>{
    const handleScroll=()=>{
      const scrollPosiiton=window.scrollY;
      const pageHeight=document.documentElement.scrollHeight-window.innerHeight;

      setIsvisible(scrollPosiiton>pageHeight/2);

    }

    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll)
  },[])

    const scrollTop=()=>{
        window.scrollTo({
            top:0,
            behaviour:"smooth",
        })
    }
  return ( isVisible &&(
    <div onClick={scrollTop} className={`arrow_up ${isVisible ?"active" :""}`}>
        <img className="arrow_up__img" src={up_arrow} alt="" />
    </div>
  ))
}

export default Arrow_up
