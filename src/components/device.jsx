/* eslint-disable react/prop-types */
import AddToCart from "./addToCart";
import { Link } from "react-router-dom";

function Devices({ device, onAddToCart }) {

  return (
    <div className="deviceinfo">
      <img src={device.image} alt="" />
      <Link to={`/${device.category === 'accessory' ? 'accessories' : device.category + 's'}/${device.name}`} className="product-name">{device.name}</Link>
      <p>₦{device.price}</p>
      <AddToCart onClick={() => onAddToCart(device)} />
    </div>
  );
}

export default Devices;
