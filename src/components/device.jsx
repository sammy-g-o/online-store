/* eslint-disable react/prop-types */
import AddToCart from "./addToCart";

function Devices({device, onAddToCart}) {

  return (
    <div className="deviceinfo">
        <img src={device.image} alt="" />
        <p>{device.name}</p>
        <p>₦{device.price}</p>
        <AddToCart onClick={()=>onAddToCart(device)}/>
    </div>
  );
}

export default Devices;
