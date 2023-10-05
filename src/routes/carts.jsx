import { useEffect, useState } from "react";
export default function Carts() {
    const [cart, setCart] = useState([]);

    const [cartId, setCartId] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/carts/${cartId}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        console.log(data);
      });
  }, [cartId]);
  
  return(
    <>
    <h1>Carts</h1>
    <p> ID: {cart.id}</p>
      <h2> Total: {cart.total} </h2>
      <p> TotalProducts: {cart.totalProducts} </p>
      <p>
        <b>TotalQuantity: </b> {cart.totalQuantity}
      </p>
      {/* <p>
        <b>TotalQuantity: </b> {products.title}
      </p> */}
      <p>
        <img src={cart.thumbnail} alt="" />
      </p>
    </>
  )
}