/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AddToCart from "./addToCart";
function Accessories({ accessory, onAddToCart, index }) {
  return (
    <>
      <div className="deviceinfo">
      <img src={accessory.image} alt="" width="300" height="300" loading={index < 4 ? "eager" : "lazy"} />
        <Link to={`/accessories/${accessory.name}`} className="product-name">{accessory.name}</Link>
        <p>₦{accessory.price}</p>
        <AddToCart onClick={()=>onAddToCart(accessory)}/>
      </div>
    </>
  );
}
export default Accessories;
