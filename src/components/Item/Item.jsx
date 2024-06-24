import React from 'react';
import { Link } from 'react-router-dom'; 
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
      <Link to ={`/product/${props.ID}`}><img className="product-image" src={props.Image} alt={props.Name} /></Link> 
      <p className="text-small"><strong>Name:</strong> {props.Name}</p>
      <p className="text-small"><strong>Brand:</strong> {props.brand}</p>
      <p className="text-small"><strong>Description:</strong> {props.description}</p>
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
      <div className="available-sizes">
        <p><strong>Available Sizes:</strong></p>
        <ul className="sizes-list">
          {props.size ?
            props.size.map((s, index) => (
              <li key={index} className="size-circle">{s.name}</li>
            ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Item;
