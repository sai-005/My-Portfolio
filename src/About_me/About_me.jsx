import React, { useEffect,useRef} from 'react'
import "./About_me.css"
import education from "../assets/education.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {inView, motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
gsap.registerPlugin(ScrollTrigger);

const About_me = () => {
    const sliderLeft=useRef([])
    const sliderRight=useRef([])
     const textReff=useRef([]);

    const EducationImage=()=>{
        const{ref,inView}=useInView({threshold:0.2,triggerOnce:true})
    }

    useEffect(() => {

        gsap.fromTo(textReff.current,
            {y:100,opacity:0,duration:2,stagger:0.4},
            {y:0,opacity:1,duration:1,stagger:0.4}
        )

        sliderLeft.current.forEach((el, index) => {
            gsap.fromTo(el,
                { x: -100, opacity: 0 }, 
                {
                    x: 0, opacity: 1, 
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: el, 
                        start: "top 80%",
                        end: "top 20%",
                        toggleActions: "play none none none", 
                    }
                }
            );
        });

        sliderRight.current.forEach((el, index) => {
            gsap.fromTo(el,
                { x: 100, opacity: 0 }, // Initial state
                {
                    x: 0, opacity: 1, // Final state
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: el, // Element to trigger the animation
                        start: "top 80%", // Animation starts when the top of the element hits 80% of the viewport
                        end: "top 20%", // Animation ends when the top of the element hits 20% of the viewport
                        toggleActions: "play none none none", // Play animation on enter, no action on leave, reset, or restart
                    }
                }
            );
        });
    }, []); 
    
  return (
    <div className='About'>
        <h1 ref={(el)=>(textReff.current[1]=el)}>About Me</h1>
        <h6 ref={(el)=>(textReff.current[2]=el)}>Iam Saipranav Sapare a Computer Science Undergraduate Studying in Sri Venkateswara University College of engineering.
            <h6>Iam keenly interested in developing software's that will lead to the betterment of future,also I'am in the field of Web-development and UI/UX designing.</h6>
        </h6>
       <h6 ref={(el)=>(textReff.current[3]=el)}>A fast-paced learner with deep interest in understanding fundamentals or basics.Skilled at writing codes which are very well functional and can be implemented easily. 
        
       </h6>
        <h1 ref={(el)=>(textReff.current[4]=el)}>Education</h1>
        <h6 ref={(el)=>(textReff.current[5]=el)}>This is the section where I describe my Education where i have studied from. </h6>

    <div className='timeline'>
        
      
        <motion.img 
        className='container-img1'
         src={education}
          alt="" 
          initial={{scale:0,opacity:0}}
          animate={inView?{scale:[0,1.2,1],opacity:1}:{}}
          transition={{duration:0.5,ease:"easeOut"}}
          style={{width:"30px"}}/>
        <div ref={(el)=>(sliderLeft.current[1]=el)} className="container left-cotainer">
        <h5>2022-2026</h5>
            <div className="text-box">
                <h2>S.V.U College of Engineering,Tirupathi</h2>
                <p>B.Tech - Computer Science Engineering</p>
                <small>CGPA : 8.17</small>
                <span className="left-container-arrow"></span>
            </div>
        </div>

        <motion.img 
        className='container-img2'
         src={education}
          alt="" 
          initial={{scale:0,opacity:0}}
          animate={inView?{scale:[0,1.2,1],opacity:1}:{}}
          transition={{duration:0.5,ease:"easeOut"}}
          style={{width:"30px"}}/>
        <div  ref={(el)=>(sliderRight.current[1]=el)}className="container right-cotainer">
            <h5>2020-2022</h5>
            <div className="text-box">
                <h2>Narayana Junior College,Anantapur</h2>
                <p>11th & 12th class</p>
                <small>Percentage : 85%</small>
                <span className="right-container-arrow"></span>
            </div>
        </div>

        <motion.img 
        className='container-img3'
         src={education}
          alt="" 
          initial={{scale:0,opacity:0}}
          animate={inView?{scale:[0,1.2,1],opacity:1}:{}}
          transition={{duration:0.5,ease:"easeOut"}}
          style={{width:"30px"}}/>
        <div  ref={(el)=>(sliderLeft.current[2]=el)} className="container left-cotainer">
        <h5 className='april'> APRIL 2020</h5>
            <div className="text-box">
                <h2>Sant Janardhan Swami Maharshi School, Kopargaon</h2>
                <p>10th class</p>
                <small>Percentage : 91.7%</small>
                <span className="left-container-arrow"></span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About_me
