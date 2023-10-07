import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Carts() {
    const [carts, setCarts] = useState([]);

    const [cartId, setCartId] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/carts/`)
      .then((res) => res.json())
      .then((data) => {
        setCarts(data.carts);
        console.log(data);
      });
  }, []);
  
  const cartid = carts.map ((cart) => 
  <div style={{display: 'flex', flexWrap:'wrap'}}> 
    <li>{cart.id}</li> &emsp;
    <Link to = {`/carts/${cart.id}`}> Show cart</Link>
   </div>
  );

  const carttotal = carts.map ((cart) => 
  <div style={{display: 'flex', flexWrap:'wrap'}}> 
    <li>{cart.totalQuantity}</li> &emsp;
   </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <h3>Available Carts</h3>
          <Item>{cartid}</Item>
        </Grid>
        <Grid item xs={8}>
        <h3>Total no. of quantity inside the cart</h3>
          <Item>{carttotal}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}