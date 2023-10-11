import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import {Link} from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Product = ({product, handleOnClick, handleRemove}) => {
    return (
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
        <Button onClick= {() => handleRemove(product) } size="small"> Remove</Button> <br/><br/>

        </CardContent>
        </Card>
        </div>
    )
};