
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import "./App.css"
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Thanku from './Thanku/Thanku';
import Resume from './Resume/Resume';
import Project from './Project/Project';
import About_me from './About_me/About_me';
import Aurora from './Aurora/Aurora';
function App() {
  return (
    <div>
 
 <Router>
 <Navbar/>
 <Aurora/>
  <Routes>
    <Route path='/' element={<HomewithSkillsandFooter/>}/>
    <Route path="/contact" element={<ContactwithFooter/>}/>
    <Route path='/Thanku' element={<Thanku/>}/>
    <Route path='/Resume' element={<ResumewithFooter/>}/>
    <Route path='/Project' element={<ProjectwithFooter/>}/>
    <Route path="/about-me" element={<About_mewithFooter />} />
    </Routes>
 </Router>
  </div>
  );
}

const HomewithSkillsandFooter=()=>{
  return (
    <div>
    <Home/>
    <Skills/>
    <Footer/>
    </div>
  )
}
const ContactwithFooter=()=>{
  return(
    <div>
      <Contact/>
      <Footer/>
    </div>
  )
}
const ResumewithFooter=()=>{
  return(
    <div>
      <Resume/>
      <Footer/>
    </div>
  )
}
const ProjectwithFooter=()=>{
  return(
    <div>
      <Project/>
      <Footer/>
    </div>
  )
}
const About_mewithFooter=()=>{
  return(
    <div>
      <About_me/>
      <Footer/>
    </div>
  )
}

export default App;
