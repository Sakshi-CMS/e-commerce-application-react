import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter container'>
      <h1 className="text-center mt-5 clr">Get Exclusive Offers On Your Email</h1>
      <p className="text-center clr">Subscribe to our newsletter and stay updated</p>
      <div className="d-flex align-items-center justify-content-between">
        <input type='email' className="form-control flex-grow-1 me-4" placeholder='Your email id' />
        <button className="btn">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
