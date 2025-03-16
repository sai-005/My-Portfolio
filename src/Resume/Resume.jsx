import React, { useEffect,useRef} from 'react'
import gsap from 'gsap'
import { Document, Page, pdfjs } from 'react-pdf';
import "./Resume.css";
const Resume = () => {
 const textRefs=useRef(null);
    useEffect(()=>{
        gsap.fromTo(textRefs.current,
            {y:100,opacity:0,duration:1},
            {y:0,opacity:1,duration:1}
        )
    })
  return (
    <div className='resume-whole'>
    <p ref={textRefs}>Resume | Saipranav Sapare</p>
    <div className='resume'>
    <iframe
        src="UPDATED RESUME 2.PDF"
        width="80%"
        height="1200px"
        title="Resume PDF"
      />
    </div>
    </div>
  )
}

export default Resume

