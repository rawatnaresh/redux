import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Cart = () => {
     const {cartId} = useParams();
     const [cart, setCart] = useState({});
     useEffect(() => {
        fetch(`https://dummyjson.com/carts/${cartId}`)
          .then((res) => res.json())
          .then((data) => {
            setCart(data);
            console.log(data, "carts");
          });
      }, [cartId]);



      const carttitle = cart.products && cart.products.map ((cartt) => 
      <div> 
    <li><b>{cartt.title}</b></li> 
    <li>price: {cartt.price}</li>
    <li>quantity: {cartt.quantity}</li>&emsp;
   </div>
  );
  
      return(
        <div className="cartDetails">
        <p><b>ID:</b> {cartId}</p>
        <h2> Total: {cart.total} </h2>
        <p> <b>TotalProducts:</b> {cart.totalProducts} </p>
        <p> <b>TotalQuantity: </b> {cart.totalQuantity} </p> <br/>
        <h3><u>Cart Details</u></h3>
        <p>{carttitle}</p>
        </div>
    )
 }
 export default Cart;