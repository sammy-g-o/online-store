/* eslint-disable react/prop-types */
import AddToCart from "./addToCart";
function Laptops({ lappy, onAddToCart, setDisplayDetails, setDeetsToDisplay }) {
  const { name, image, price } = lappy;
  function displayDeets() {
    setDisplayDetails(true);
    const deetsToDisplay = {
      name,
      image,
      price,
    };
    setDeetsToDisplay(deetsToDisplay);
  }
  return (
    <>
      <div className="deviceinfo">
        <img src={image} alt="" />
        <p onClick={displayDeets}>{name}</p>
        <p>₦{price}</p>
        <AddToCart onClick={() => onAddToCart(lappy)} />
      </div>
    </>
  );
}
export default Laptops;
