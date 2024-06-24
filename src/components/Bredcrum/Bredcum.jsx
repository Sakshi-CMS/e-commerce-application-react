import React from 'react'
import './Bredcum.css'


const Bredcum = (props) => {
  const {product}=props;
  return (
    <div className='breadcrum'>
      Home<i class="bi bi-caret-right"></i> SHOP <i class="bi bi-caret-right"></i>{product.Category} <i class="bi bi-caret-right"></i>{product.Name}
    </div>
  )
}

export default Bredcum
