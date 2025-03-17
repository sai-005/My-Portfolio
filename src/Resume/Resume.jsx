import React, { useEffect,useRef} from 'react'
import gsap from 'gsap'
import { Document, Page, pdfjs } from 'react-pdf';
import "./Resume.css";
const Resume = () => {
 const resumeRefs=useRef([]);
    useEffect(()=>{
        gsap.fromTo(resumeRefs.current,
            {y:100,opacity:0,duration:1},
            {y:0,opacity:1,duration:1}
        )
    })
  return (
    <div  ref={(el)=>(resumeRefs.current[1]=(el))} className='resume-whole'>
    <p >Resume | Saipranav Sapare</p>
    <div className='download'><a href="updated_resume.pdf"  target="_blank" rel='noopener noreferrer'>Download</a></div>
    <div className='resume'>
    <iframe
        src="updated_resume.PDF"
        width="80%"
        height="1200px"
        title="Resume PDF"
      />
    </div>
    </div>
  )
}

export default Resume

