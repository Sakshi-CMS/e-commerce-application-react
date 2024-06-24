import React from 'react'
import OfferImage from '../Assets/Hero_Img_2.png'
import './Offers.css'

const Offers = () => {
  return (
    <div className='Offers container-fluid'>
      <div className="row">
        <div className="col Offore-left d-flex flex-column justify-content-center">
          <h1 className="display-1 fs-1 colour_fs">Exclusive Offers for You</h1>
          <p className="fs-5 colour_fs">ONLY ON BEST SELLER PRODUCTS</p>
          <button className="btn button btn-lg">Check Now</button>
        </div>
        <div className="col offer-right d-flex flex-column justify-content-centre">
          <img className="img-fluid offer-img" src={OfferImage} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Offers
