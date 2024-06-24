import React from 'react'
import new_Collectios from '../Assets/new_Collections'
import Display_Item from '../Item/Display_Item'
import './NewCollections.css'

const NewCollection = () => {
  return (
    <div className='new-collectios'>
      <h1>NEW COLLECTIONS</h1>
      <hr className="divider"/>
      <div className="collection">
          {new_Collectios.map((item,i)=>{
              return <Display_Item key={i} ID={item.ID} Name={item.Name}
              Image={item.Image} discountedPrice={item.discountedPrice}
              price={item.price} discountPersent={item.discountPersent}/>
          })}
         </div>  
      
    </div>
  )
}

export default NewCollection
