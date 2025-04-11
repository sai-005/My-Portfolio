import React, { useEffect,useRef } from 'react'
import { gsap } from 'gsap';
import './Skills.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import c from '../assets/c.png'
import ae from '../assets/ae.png'
import ap from '../assets/ap.png'
import github from '../assets/github.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import tailwind from '../assets/tailwind.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    
    
  const skillRef=useRef(null);
  useEffect(()=>{
    gsap.fromTo(
      skillRef.current.querySelectorAll('.html,.python,.css,.js,.java,.ae,.ap,.react,.github,.tailwind,.c'),
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrub: 0.1,
        stagger:0.2,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: skillRef.current,
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <div className='skills'>
        <h2>What I know</h2>
        <h1><span>Skills</span></h1>
        <div ref={skillRef} className="skills-icons">
            <div className="html">
                <img src={html} alt="" />
                <h3>HTML</h3>
            </div>
            <div className="css">
                <img src={css} alt="" />
                <h3>CSS</h3>
            </div>

            <div className="c">
                <img src={c} alt="" />
                <h3>C</h3>
            </div>
            <div className="js">
                <img src={js} alt="" />
                <h3>JS</h3>
            </div>
            <div className="ae">
                <img src={ae} alt="" />
                <h3>AfterEffects</h3>
            </div>
            <div className="react">
                <img src={react} alt="" />
                <h3>React</h3>
            </div>
            <div className="python">
                <img src={python} alt="" />
                <h3>Python</h3>
            </div>
            <div className="ap">
                <img src={ap} alt="" />
                <h3>Photoshop</h3>
            </div>
            <div className="github">
                <img src={github} alt="" />
                <h3>github</h3>
            </div>
            <div className="java">
                <img src={java} alt="" />
                <h3>Java</h3>
            </div>
            <div className="tailwind">
                <img src={tailwind} alt="" />
                <h3>Tailwindcss</h3>
            </div>
        </div>
      </div>
  )
}

export default Skills
