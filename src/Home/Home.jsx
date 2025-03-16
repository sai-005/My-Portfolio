import React, { useEffect,useRef} from 'react'
import profile_pic from '../assets/profile_pic.webp'
import { Link } from 'react-router-dom';
import './Home.css'
import Typed from 'typed.js';
import { gsap } from 'gsap';



const Home = () => {
  const typedElement = useRef(null);
  const imageRef = useRef(null);
  const textRef=useRef(null);

  useEffect(()=>{
    const options={
      strings:['Front End Developer','UI/UX designer'],
      typeSpeed:50,
      backSpeed:50,
      loop:true,
    };
    const typed = new Typed(typedElement.current, options);

    gsap.fromTo(textRef.current,
      {x:-400,opacity:0,duration:1}
      ,{x:0,opacity:1,duration:1});

      gsap.fromTo(imageRef.current,
        {x:400,opacity:0,duration:1}
        ,{x:0,opacity:1,duration:1});

        return () => {
          typed.destroy();
        };
  },[])

  return (
    <div className='about'>

      <div ref={textRef} className='about_text'>
        <h1>Hey There!</h1>
        <p className='myname'>I'm Saipranav Sapare</p>
        <p>
        <span className="typed" ref={typedElement}/>
        </p>
        <p>
        I am a Computer Engineering Undergraduate at Sri Venkateshwara University
        College of Engineering with a keen interest in the field of Full Stack
        Development, Frontend Development.
      </p>
      <div className='hero'>
      <Link className='link-reach-res' to="/resume"><div className="hero-resume">See my Resume</div></Link>
      <Link  className='link-reach-res'to="/contact"><div className="hero-reach">Reach out</div></Link>
      </div>
    </div>
      <div ref={imageRef} className='about_img'>
        <img className="profile" src={profile_pic} alt="" />
        {/* <div className='profile_effect'></div> */}
      </div>
    </div>
  )
}

export default Home;
