import React from 'react'
import './Hero.css'
import arrow from '../../assets/images/explore.png'

const Hero = () => {
  return (
    <div class= "hero container">
      <div class="hero-text">
        <h1>Your Gateway to Global Education</h1>
        <p>From free visa consultation to personalized university guidance, EduGlob stands with you at every step of your international education journey.</p>
        <button class="btn">Explore more <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
