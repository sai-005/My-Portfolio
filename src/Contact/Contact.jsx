import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Contact.css";
import gmail from "../assets/gmail.png";
import location from "../assets/location.png";
import phone from "../assets/contact.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const imageRef = useRef(null);
  const textRefs=useRef([]);


useEffect(()=>{
    gsap.fromTo(textRefs.current,
        {y:100,opacity:0,duration:1},
        {y:0,opacity:1,duration:1}
    )
    gsap.fromTo(imageRef.current,
        {y:-100,opacity:0,duration:1},
        {y:100,opacity:1,duration:1}
    )})

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Valid email is required";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) errors.phone = "Valid 10-digit phone number required";
    return errors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setResult("Sending....");
    const submissionData = new FormData(event.target);
    submissionData.append("access_key", "38753715-0c1c-4ea2-a107-1f5f24cd74b3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submissionData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setFormData({ name: "", email: "", phone: "", message: "" });
      navigate("/Thanku");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div  ref={(el)=>(textRefs.current[1]=(el))} className="contact-details">
      <h1 ref={(el)=>(textRefs.current[2]=(el))}>Let's Talk</h1>
      <p ref={(el)=>(textRefs.current[3]=(el))}>If the pigeon comes with a message, know that it's me.</p>
      <div className="details">
        <a href="mailto:sapareisonline@gmail.com">
          <div className="email">
            <img ref={(el)=>(textRefs.current[4]=(el))} src={gmail} alt="" />
            <h2>Mail me:</h2>
            <p>sapareisonline@gmail.com</p>
          </div>
        </a>
        <a href="https://www.google.com/maps/place/Tirupati,+Andhra+Pradesh/" target="_blank" rel="noopener noreferrer">
          <div className="location">
            <img  ref={(el)=>(textRefs.current[5]=(el))} src={location} alt="" />
            <h2>Meet me:</h2>
            <p>Tirupati, Andhra Pradesh</p>
          </div>
        </a>
        <a href="tel:9356138301">
          <div className="phone">
            <img ref={(el)=>(textRefs.current[6]=(el))} src={phone} alt="" />
            <h2>Contact me:</h2>
            <p>+91 9356138301</p>
          </div>
        </a>
      </div>

      <div ref={(el)=>(textRefs.current[7]=(el))} className="enter-details">
        <form onSubmit={onSubmit}>
      <div className="form-container">
            <div className="left-column">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Peter Parker" />
         {errors.name && <p className="error">{errors.name}</p>}

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="spiderman@gmail.com" />
              {errors.email && <p className="error">{errors.email}</p>}

              <label htmlFor="phone">Phone.no:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="9234189019" />
              {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
            <div className="right-column">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write a message here and I'll collab..."></textarea>
            </div>
          </div>
          <div className="submit">
            <input type="submit" value="Submit" />
    </div>
        </form>
  </div>
    </div>
  );
};

export default Contact;
