import React, { useEffect,useRef} from 'react'
import profile_pic from '../assets/profile_pic.webp'
import { Link } from 'react-router-dom';
import './Home.css'
import Typed from 'typed.js';
import { gsap, Power3 } from 'gsap';
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



const Home = () => {
  const typedElement = useRef(null);
  const imageRef = useRef(null);
  const textRef=useRef([]);
  const textRef2=useRef(null)
  const textRef3=useRef(null)

  useEffect(()=>{
    const options={
      strings:['Front End Developer','UI/UX designer'],
      typeSpeed:50,
      backSpeed:50,
      loop:true,
    };
    const typed = new Typed(typedElement.current, options);

    gsap.fromTo(textRef.current,
      {y:-400,opacity:0,duration:1}
      ,{y:0,opacity:1,duration:1,ease:Power3.out});

      gsap.fromTo(textRef2.current,
        {x:-400,opacity:0,duration:1}
        ,{x:0,opacity:1,duration:1,ease:Power3.out});
  
        gsap.fromTo(textRef3.current,
          {x:-500,y:500,opacity:0,duration:1}
          ,{x:0,y:0,opacity:1,duration:1,ease:Power3.out});

      gsap.fromTo(imageRef.current,
        {x:400,opacity:0,duration:1}
        ,{x:0,opacity:1,duration:1});

        return () => {
          typed.destroy();
        };
  },[])

  return (
    <div className='about'>


      <div className='about_text'>
        <h1 ref={(el)=>(textRef.current[1]=(el))}>Hey There!</h1>
        <p ref={(el)=>(textRef.current[2]=(el))} className='myname'>I'm Saipranav Sapare</p>
        <p>
        <span  className="typed" ref={typedElement}/>
        </p>
        <p ref={textRef2}>
        <BlurText
        text="I am a Computer Engineering Undergraduate at Sri Venkateshwara University
        College of Engineering with a keen interest in the field of Full Stack
        Development, Frontend Development."
        delay={100}
        animateBy="words"
        direction="bottom"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
      </p>
      <div  ref={textRef3} className='hero'>
      <Link className='link-reach-res' to="/resume"><div className="hero-resume">See my Resume</div></Link>
      <Link  className='link-reach-res'to="/contact"><div className="hero-reach">Reach out</div></Link>
      </div>
    </div>
      <div ref={imageRef} className='about_img'>
        <img className="profile" src={profile_pic} alt="" loading="lazy" />
        {/* <div className='profile_effect'></div> */}
      </div>
    </div>
  )
}

export default Home;
