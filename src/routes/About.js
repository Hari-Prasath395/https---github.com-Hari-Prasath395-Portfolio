import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectImg from '../components/ProjectImg'
import AboutMe from '../components/AboutMe'


const About = () => {
  return (
    <div>
      <Navbar/>
      <ProjectImg heading={'ABOUT.'} text={'Transitioning from a software test engineer to a software developer, I am building upon my existing skills and experience while pursuing additional education to ensure a successful transition'}/>
      <AboutMe/>
      <Footer/>
      
    </div>
  )
}

export default About