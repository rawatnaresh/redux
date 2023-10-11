import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../reducers/cartSlice';

export default function Products() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.carts);

    console.log(carts);

    const handleOnClick = (product) => {
      dispatch(addToCart(product));
      // setCart([...cart, product ])
    }
    
  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  },[]);

  // console.log(cart);
  
  const title = products.map ((product) => 
      <div key={product.id} style = {{width:'30%', padding:'10px'}}> 
        <Card sx={{ minWidth: 275, minHeight: 200}}>
        <CardContent>
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
        <img src={product.thumbnail} alt=""  style={{ height: '300px', width: '300px', objectFit:'cover'}}/>
        &emsp;
        <Link to = {`/product/${product.id}`} size="small"> Show details</Link> <br/><br/>
        <Button onClick= {() => handleOnClick(product) } size="small"> Add to cart</Button> <br/><br/>
        </CardContent>
        </Card>
        </div>
      );

  return(<>
        <Typography variant="h5" component="div">
          Available products
        <br />
          Available cart: {}
        </Typography>
  <div style={{display: 'flex', flexWrap: 'wrap'}}> 
    {title}
  </div>
  </>
  );
}