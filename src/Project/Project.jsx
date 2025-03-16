import React, { useEffect,useRef } from 'react'
import { gsap } from 'gsap';
import "./Project.css"
import diabetes from "../assets/diabetes.jpg"
import  morsecode from "../assets/morsecode.jpg"
import otp from "../assets/otp.jpg"

const Project = () => {
  const textrefs=useRef([]);

  useEffect(()=>{
    gsap.fromTo(textrefs.current,
      {y:200,opacity:0,duration:1},
      {y:0,opacity:1,duration:1}
    )
  })
  return (
    <div ref={(el)=>(textrefs.current[0]=el)} className='project'>
      <p>See</p>
      <h3>My Projects</h3>
      <div className="card">
        
      <a href="">
      <div className="project1">
        <img ref={(el)=>(textrefs.current[1]=el)} src={diabetes} alt="" />
        <div className="des1">
        <h3>Diabetes detection</h3>
          <p>This predictive model detects your diabetes chance, by taking some factors as input.</p>
          <h4>Techstack</h4>
          <p>Python Libraries</p>
          <p> Deep learning models-SVMs,CNNs</p>
          </div>
      </div>
      </a>

      <a href="https://github.com/sai-005/Morsecode-generator"  target='_blank'>
      <div className="project2">
        <img ref={(el)=>(textrefs.current[2]=el)} src={morsecode} alt="" />
        <div className="des2">
        <h3>Morsecode Generator</h3>
          <p>This is a day to day useful application which can be used preserve the art which youre working on by using morse code.</p>
          <h4>Techstack</h4>
          <p>Python,flask,HTML,CSS</p>
          </div>
      </div>
      </a>

      <a href="https://github.com/sai-005/OTP-generator"  target='_blank'>
      <div className="project3">
        <img ref={(el)=>(textrefs.current[3]=el)} src={otp} alt="" />
        <div className="des3">
        <h3>OTP Generator</h3>
        <p>Generates OTP.Just for fun</p>
        <h4>Techstack</h4>
          <p>Java,HTML,CSS,JS</p>
          </div>
      </div>
      </a>


      </div>
    </div>
  )
}

export default Project
