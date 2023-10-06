import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  <div style={{display: 'flex'}}> 
    <li>{cart.id}</li> &emsp;
    <Link to = {`/carts/${cart.id}`}> Show products</Link>
   </div>
  );

  return(
    <>
    <h2>Carts</h2>
    <p> <b>Cart ID:</b> {cartid}</p>
      
      
    </>
  )
}