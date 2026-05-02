/* eslint-disable react/prop-types */
import AddToCart from "./addToCart";
import { Link } from "react-router-dom";

function Laptops({ lappy, onAddToCart, index }) {
  const { name, image, price } = lappy;

  return (
    <div className="deviceinfo">
      <img src={image} alt="" width="300" height="300" loading={index < 4 ? "eager" : "lazy"} />
      <Link to={`/laptops/${name}`} className="product-name">{name}</Link>
      <p>₦{price}</p>
      <AddToCart onClick={() => onAddToCart(lappy)} />
    </div>
  );
}

export default Laptops;
