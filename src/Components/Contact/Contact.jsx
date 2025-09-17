import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
            📩 Have questions about studying abroad or need guidance with your visa application?
            We are here to help! Send us an email with your queries, and our expert team will get
            back to you with personalized advice and support. At EduGlob,
            your dream is our mission — reach out today and lets start your journey together.
        </p>
        <ul>
            <li>jeevantha76@gmail.com</li>
            <li>+94 71-609-6019</li>
            <li>40/1c, Jaya Mawatha, Gamini rd, Colombo 07 <br/> M10500, Sri Lanka</li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  )
}

export default Contact
