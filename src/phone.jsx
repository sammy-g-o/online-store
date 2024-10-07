/* eslint-disable react/prop-types */
import AddToCart from "./addToCart";
function Phones({ phone, onAddToCart}) {
  return (
    <>
      <div className="deviceinfo">
      <img src={phone.image} alt="" />
        <p>{phone.name}</p>
        <p>₦{phone.price}</p>
        <AddToCart onClick={()=>onAddToCart(phone)}/>
      </div>
    </>
  );
}
export default Phones;
