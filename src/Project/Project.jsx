import React, { useEffect,useRef } from 'react'
import { gsap } from 'gsap';
import "./Project.css"
import diabetes from "../assets/diabetes.jpg"
import  morsecode from "../assets/morsecode.jpg"
import appointment from "../assets/appointment.jpg"

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
        <img ref={(el)=>(textrefs.current[1]=el)} src={diabetes} alt="Diabetes" loading="lazy" />
        <div className="des1">
        <h3>Diabetes detection</h3>
          <p>This predictive model detects your diabetes chance, by taking some factors as input.</p>
          <h4>Techstack</h4>
          <p>Python Libraries</p>
          <p> Deep learning models-SVMs & CNNs</p>
          </div>
      </div>
      </a>

      <a href="https://github.com/sai-005/Morsecode-generator"  target='_blank'>
      <div className="project2">
        <img ref={(el)=>(textrefs.current[2]=el)} src={morsecode} alt="Morsecode"  loading="lazy"/>
        <div className="des2">
        <h3>Morsecode Generator</h3>
          <p>This is a day to day useful application which can be used preserve the art which youre working on by using morse code.</p>
          <h4>Techstack</h4>
          <p>Python-flask-HTML-CSS</p>
          </div>
      </div>
      </a>

      <a href="https://github.com/sai-005/Hospitalis"  target='_blank'>
      <div className="project3">
        <img ref={(el)=>(textrefs.current[3]=el)} src={appointment} alt="Appointment" loading="lazy" />
        <div className="des3">
        <h3>Hospitalis</h3>
        <p>Schedule doctor appointments seamlessly through an intuitive platform. View available time slots and book consultations with ease, all in a smooth and responsive interface.</p>
        <h4>Techstack</h4>
          <p>React-Tailwind-Node  js</p>
          </div>
      </div>
      </a>


      </div>
    </div>
  )
}

export default Project
