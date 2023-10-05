import { useEffect, useState } from "react";
export default function Products() {
    const [products, setProducts] = useState([]);

    // const [productId, setProductId] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  },[]);
  
  const title = products.map ((products) => 
      <li>{products.title}</li>
      );
  const handleClick = (id) =>{
    setProducts(id);
  }
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
      <button onClick={() => handleClick(1)}> Show details</button>
    </>
  )
}