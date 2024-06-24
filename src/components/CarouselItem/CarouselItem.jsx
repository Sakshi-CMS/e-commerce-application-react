import React from 'react'

const CarouselItem = (props) => {
  return (
    <div>
      <div className='item'>
        <img className="Caroproduct-image" src= {props.image}/>
        <p>{props.name}</p>
        <div className="item-price"></div>
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
        ${props.old_price}
        </div>
    </div>
    </div>
  )
}

export default CarouselItem
