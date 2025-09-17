import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/images/4.jpg'
import gallery2 from '../../assets/images/12.jpg'
import gallery3 from '../../assets/images/20.jpg'
import gallery4 from '../../assets/images/26.jpg'
import gallery5 from '../../assets/images/27.jpg'
import gallery6 from '../../assets/images/15.jpg'
import white_arrow from '../../assets/images/white-arrow.png'

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
        <img src={gallery5} alt="" />
        <img src={gallery6} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
