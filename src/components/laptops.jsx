/* eslint-disable react/prop-types */
import AddToCart from "./addToCart";
function Laptops({ lappy, onAddToCart}) {
  return (
    <>
      <div className="deviceinfo">
      <img src={lappy.image} alt="" />
        <p>{lappy.name}</p>
        <p>₦{lappy.price}</p>
        <AddToCart onClick={()=>onAddToCart(lappy)}/>
      </div>
    </>
  );
}
export default Laptops;
