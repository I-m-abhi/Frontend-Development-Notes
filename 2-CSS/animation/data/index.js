import React from 'react';
import image1 from '../constants/Images/Projects/project-1.jpg';
import image2 from '../constants/Images/Projects/project-2.jpg';
import image3 from '../constants/Images/Projects/project-4.jpg';
import image4 from '../constants/Images/Projects/project-5.jpg';
import image5 from '../constants/Images/Projects/project-6.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='owl'>
      <Slider {...settings}>
      <div className="owl-item">
        <img className='owl-image' src={image1} alt="Project Details" />
        <div className="owl-text">
        <h3>Lorem ipsum dolor</h3>
        <p>Interior</p>
        </div>
      </div> 
      <div className="owl-item">
        <img className='owl-image' src={image2} alt="Project Details" />
        <div className="owl-text">
        <h3>Lorem ipsum dolor</h3>
        <p>Exterior</p>
        </div>
      </div>
      <div className="owl-item">
        <img className='owl-image' src={image3} alt="Project Details" />
        <div className="owl-text">
        <h3>Lorem ipsum dolor</h3>
        <p>Construction</p>
        </div>
      </div>
      <div className="owl-item">
        <img className='owl-image' src={image4} alt="Project Details" />
        <div className="owl-text">
        <h3>Lorem ipsum dolor</h3>
        <p>Construction</p>
        </div>
      </div> 
      <div className="owl-item">
        <img className='owl-image' src={image5} alt="Project Details" />
        <div className="owl-text">
        <h3>Lorem ipsum dolor</h3>
        <p>Construction</p>
        </div>
      </div>
      </Slider>
    </div>
  )
}

export default Project;
