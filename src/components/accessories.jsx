/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AddToCart from "./addToCart";
function Accessories({ accessory, onAddToCart}) {
  return (
    <>
      <div className="deviceinfo">
      <img src={accessory.image} alt="" />
        <Link to={`/accessories/${accessory.name}`} className="product-name">{accessory.name}</Link>
        <p>₦{accessory.price}</p>
        <AddToCart onClick={()=>onAddToCart(accessory)}/>
      </div>
    </>
  );
}
export default Accessories;
