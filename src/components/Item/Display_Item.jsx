import React from 'react'
import './Item.css'

const Display_Item = (props) => {
  return (
    <div className='item'>
      <img className="product-image" src={props.Image} alt={props.Name} />
      <p className="text-small"><strong>Name:</strong> {props.Name}</p>
      <div className="item-price">
        <div className="item-price-new">
          <p><strong>New Price:</strong> ${props.discountedPrice}</p>
        </div>
        <div className="item-price-new">
          <p><strong>Discount Percent:</strong> {props.discountPersent}%</p>
        </div>
        <div className="item-price-old">
          <p><strong>Old Price:</strong> ${props.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Display_Item