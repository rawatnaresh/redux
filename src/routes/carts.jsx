import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



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
    <h2>Carts</h2>
    <p> <b>ID:</b> {cart.id}</p>
      <h2> Total: {cart.total} </h2>
      <p> <b>TotalProducts:</b> {cart.totalProducts} </p>
      <p>
        <b>TotalQuantity: </b> {cart.totalQuantity}
      </p>
      <Link to = {`/carts/${cart.id}`}> Show products</Link>
    </>
  )
}