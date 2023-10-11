import * as React from 'react';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';
import { Product } from './Product';
import { removeFromCart } from '../reducers/cartSlice';


export default function Carts() {
  const carts = useSelector((state) => state.carts.carts);
  const dispatch = useDispatch();

  console.log("carts in store", carts);

  const handleRemove = (product) => {
    // console.log("remove----", product);
    dispatch(removeFromCart(product));
  };
  
  const products = carts.map ((cart)=><Product product={cart} handleOnClick={()=>{}} handleRemove={handleRemove}/>);

  return (
    <Box sx={{ flexGrow: 1 }}>
          <h3>Total no. of quantity inside the cart {carts.length}</h3>
      {products}
    </Box>
  );
}