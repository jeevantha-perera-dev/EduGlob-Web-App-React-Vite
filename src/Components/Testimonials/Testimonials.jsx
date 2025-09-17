import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.jpg'
import user_2 from '../../assets/images/user-2.jpg'
import user_3 from '../../assets/images/user-3.jpg'
import user_4 from '../../assets/images/user-4.jpg'

const Testimonials = () => {


    const slider = useRef();
    let tx = 0;

const slideForward = ()=> {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=> {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className="testimonials">
      <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" className="slide-img"/>
                        <div>
                            <h3>Sanduni Perera</h3>
                            <span>Student, Australia</span>
                        </div>
                    </div>
                    <p>EduGlob guided me step by step with my student visa process.
                       I was worried about financial documents, but they explained 
                       everything clearly and made the whole journey stress-free.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" className="slide-img"/>
                        <div>
                            <h3>Dilshi Fernando</h3>
                            <span>Student, UK</span>
                        </div>
                    </div>
                    <p>The consultants at EduGlob are like mentors. They genuinely
                        care about your future. I felt so confident knowing they 
                        were handling my application.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" className="slide-img"/>
                        <div>
                            <h3>Nipun Jayawardena</h3>
                            <span>Student, Canada</span>
                        </div>
                    </div>
                    <p>I always dreamed of studying in Canada, but I didn’t know
                       where to start. Thanks to EduGlob, I not only got my visa,
                        but also found the right university for my field of study.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" className="slide-img"/>
                        <div>
                            <h3>Ravindu Silva</h3>
                            <span>Student, New Zealand</span>
                        </div>
                    </div>
                    <p>I thought studying abroad was too complicated for me, but
                       EduGlob made it simple. Their free consultation helped me
                       understand all my options without pressure.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
