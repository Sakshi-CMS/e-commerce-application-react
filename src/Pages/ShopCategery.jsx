import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategery.css';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/Item/Item';

const ShopCategery = (props) => {
  const { all_product } = useContext(ShopContext); 

  return (
    <div className='shop-category mt-3 shadow'>
      <img src={props.banner} className='banner_size' alt="Banner" />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12 </span>Out of 36 Products
        </p>
        <div className='shopcategory-Sort'> 
          <button type="button" style={{ fontSize: '15px' }}>
            Sort By
          </button>
          <ul>
            {/* Add dropdown items here */}
          </ul>
        </div>
      </div>
      <div className='shopcategory-product'>
        {all_product.map((item, i) => {
          if (props.category === item.Category) {
            return (
              <div key={i} className='product-item'>
                <ProductItem
                 ID={item.ID}
                 Name={item.Name}
                 brand={item.brand}
                 Image={item.Image}
                 color={item.color}
                 size={item.size}
                 discountedPrice={item.discountedPrice}
                 discountPersent={item.discountPersent}
                 price={item.price}
                 description={item.description}
               />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategery;
