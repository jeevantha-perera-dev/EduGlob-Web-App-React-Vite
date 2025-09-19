import React from 'react'
import './About.css'
import about_img from '../../assets/images/15.jpg'
import play_icon from '../../assets/images/playW.png'

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick = {()=> {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT EDUGLOB</h3>
        <h2>Shaping Your Future Beyond Borders</h2>
        <p>At EduGlob, we believe every student deserves the chance to achieve their global
            education dream. With expert visa consultation and step-by-step guidance, we
            make studying abroad simple and stress-free.</p>
        <p>Our experienced consultants stand by your side, helping you choose the right country,
            university, and program that perfectly align with your career goals.</p>
        <p>From application to approval, EduGlob is more than just a service—we are your trusted
            partner in building a brighter future overseas.</p>
      </div>
    </div>
  )
}

export default About
