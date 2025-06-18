/* eslint-disable react/prop-types */
import AddToCart from "./addToCart";
import { Link } from "react-router-dom";

function Laptops({ lappy, onAddToCart }) {
  const { name, image, price } = lappy;
  
  return (
    <div className="deviceinfo">
      <img src={image} alt="" />
      <Link to={`/laptops/${name}`}>{name}</Link>
      <p>₦{price}</p>
      <AddToCart onClick={() => onAddToCart(lappy)} />
    </div>
  );
}

export default Laptops;
