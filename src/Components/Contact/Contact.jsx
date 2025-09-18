import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'
import email_icon from '../../assets/images/mail.png'
import phone_icon from '../../assets/images/phone-call.png'
import map_icon from '../../assets/images/map.png'
import white_arrow from '../../assets/images/white-arrow.png'

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b851cabf-4887-47d4-844e-9c679b61bc19");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


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
            <li><img src={email_icon} alt="" />jeevantha76@gmail.com</li>
            <li><img src={phone_icon} alt="" />+94 71-609-6019</li>
            <li><img src={map_icon} alt="" />40/1c, Jaya Mawatha, Gamini rd, Colombo 07 <br/> M10500, Sri Lanka</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required/>
          <label>Phone Number</label>
          <input type="text" name='phone' placeholder='Enter Your Mobile Number' required/>
          <label>Write Your Message Here</label>
          <textarea name="message" rows="6" placeholder='Enter Your Message........' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
