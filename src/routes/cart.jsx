import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Cart = () => {
     const {cartId} = useParams();
     const [carts, setCarts] = useState([]);
     useEffect(() => {
        fetch(`https://dummyjson.com/carts/`)
          .then((res) => res.json())
          .then((data) => {
            setCarts(data.carts);
            console.log(data);
          });
      }, []);
      
      const Product = ({title, price}) => {
        return (
          <div>
          <li>{title}</li>
          <li>{price}</li>
          </div>
        )
      }

      const DataComponent = ({ carts }) => {
        return (
          <div>
            {carts.map(product => (
              <Product title={product.title} />
            ))}
          </div>
        );
      };

      return(
        <>
        <DataComponent data={carts} />
        <p><b>ID:</b> {cartId}</p>
        </>
    )
 }
 export default Cart;