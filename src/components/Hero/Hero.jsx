import React from 'react';
import hand_icon from "../Assets/hello_image.jpg";
import hero_img from "../Assets/hero_img_3.png";
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero container-fluid'>
            <div className="row">
                <div className="col-lg-6 hero-left">
                    <h6 className='mb-8 fw-bold new-arriwal'>NEW ARRIVALS ONLY</h6>
                    <div>
                        <div>
                            <p className='new-coll-text'>New <img className='hello-image' width='60' height='60' src={hand_icon} alt=""></img></p>
                            
                        </div>
                        <p className='new-coll-text'>Collections</p>
                        <p className='new-coll-text'>for everyone</p>
                    </div>
                    <div className="hero-latest-button">
                        <p className='new-coll-btn btnds'>Latest Collection<i className="bi bi-arrow-right arw"></i></p>
                        
                    </div>
                </div>
                <div className="col-lg-6 hero-right">
                    <img width='660' height='520' src={hero_img} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Hero;
