import React from 'react'
import './Programs.css'
import program1 from '../../assets/images/1.jpg'
import program2 from '../../assets/images/8.jpg'
import program3 from '../../assets/images/9.jpg'
import program_icon1 from '../../assets/images/pro-iconW1.png'
import program_icon2 from '../../assets/images/pro-iconW2.png'
import program_icon3 from '../../assets/images/pro-iconW3.png'

const Programs = () => {
  return (
    <div class="programs">
      <div class="program">
        <img src={program1} alt="" />
        <div className="caption">
            <img src={program_icon1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div class="program">
        <img src={program2} alt="" />
        <div className="caption">
            <img src={program_icon2} alt="" />
            <p>Master Degree</p>
        </div>
      </div>
      <div class="program">
        <img src={program3} alt="" />
        <div className="caption">
            <img src={program_icon3} alt="" />
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
