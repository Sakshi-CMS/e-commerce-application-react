import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import Bredcum from '../components/Bredcrum/Bredcum';

const Product = () => {
  const { all_product } = useContext(ShopContext); 
  const { productId } = useSearchParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product based on productId and update state
    const foundProduct = all_product.find((e) => e.ID === Number(productId));
    setProduct(foundProduct);
  }, [productId, all_product]);

  console.log('Product component rendered with productId:', productId);

  return (
    <div>
      {product && <Bredcum product={product}/>}
    </div>
  );
} 

export default Product;
