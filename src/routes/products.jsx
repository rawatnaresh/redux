import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
export default function Products() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  },[]);
  
  const title = products.map ((product) => 
      <div style={{display: 'flex'}}>
        <li>{product.title}</li>
      <Link to = {`/product/${product.id}`}> Show details</Link>

       </div>
      );

  return(
    <>
    <h1>Products</h1>
    <p> {title}</p>
    {/* <p>ID: {product.id}</p>
      <h2> Title: {product.title} </h2>
      <p> Description: {product.description} </p>
      <p>
        <b>Price: </b> {product.price}
      </p>
      <p>
        <img src={product.thumbnail} alt="" />
      </p> */}
    </>
  )
}