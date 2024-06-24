import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import Slider_1 from '../Assets/Carousal_Img1.avif';
import Slider_2 from '../Assets/Carousal_Img2.jpeg';
import Slider_3 from '../Assets/Carousal_Img3.jpg'; 
import Slider_4 from '../Assets/Carousal_Img4.webp'; 
import Slider_5 from '../Assets/Carousal_Img5.jpg'; 
import './Carousel.css';

const MyCarousel = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-size"
          src={Slider_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-size"
          src={Slider_2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-size"
          src={Slider_3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-size"
          src={Slider_3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-size"
          src={Slider_4}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
