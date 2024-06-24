import React from 'react'
import data_product from '../Assets/data'
import Display_Item from '../Item/Display_Item'
import './popular.css'

const Popular = () => {
  return (
    <div className='polular'>
         <h1>POPULAR IN WOMENS</h1>
         <hr className="divider"/>
         <div className="popular-item">
          {data_product.map((item,i)=>{
              return <Display_Item key={i} ID={item.ID} Name={item.Name}
              Image={item.Image} discountedPrice={item.discountedPrice}
              price={item.price} discountPersent={item.discountPersent}/>
      
          })}
         </div>    
    </div>
  )
}
export default Popular;