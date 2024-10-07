/* eslint-disable react/prop-types */
import AddToCart from "./addToCart";
function Accessories({ accessory, onAddToCart}) {
  return (
    <>
      <div className="deviceinfo">
      <img src={accessory.image} alt="" />
        <p>{accessory.name}</p>
        <p>₦{accessory.price}</p>
        <AddToCart onClick={()=>onAddToCart(accessory)}/>
      </div>
    </>
  );
}
export default Accessories;
