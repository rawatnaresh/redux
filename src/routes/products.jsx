import { useEffect, useState } from "react";
export default function Products() {
    const [product, setProduct] = useState([]);

    const [productId, setProductId] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [productId]);
  
  return(
    <>
    <h1>Products</h1>
    <p>ID: {product.id}</p>
      <h2> Title: {product.title} </h2>
      <p> Description: {product.description} </p>
      <p>
        <b>Price: </b> {product.price}
      </p>
      <p>
        <img src={product.thumbnail} alt="" />
      </p>
      
    </>
  )
}