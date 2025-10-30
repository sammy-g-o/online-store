/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import AddToCart from "./addToCart";
function Phones({ phone, onAddToCart}) {
  return (
    <>
      <div className="deviceinfo">
      <img src={phone.image} alt="" />
        <Link to={`/phones/${phone.name}`} className="product-name">{phone.name}</Link>
        <p>₦{phone.price}</p>
        <AddToCart onClick={()=>onAddToCart(phone)}/>
      </div>
    </>
  );
}
export default Phones;
