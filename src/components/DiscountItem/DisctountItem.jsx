import React from 'react'
import './Item.css'

const DiscountItem = (props) => {
  return (
    <div className='item'>
        <img className="dis_product-image" src= {props.image}/>
        <p>{props.name}</p>
        <div className="item-price"></div>
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
        ${props.old_price}
        </div>
      
    </div>
  )
}

export default DiscountItem