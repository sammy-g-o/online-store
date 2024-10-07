/* eslint-disable react/prop-types */
import Devices from "./device";
import { deviceInfo } from "./data";
import Laptops from "./laptops";

import Phones from "./phone";
import Accessories from "./accessories";
import Cart from "./cart";

function DeviceList({
  cart,
  onDeleteFromCart,
  onAddToCart,
  toggleCart,
  onToggleLappy,
  onTogglePhone,
  onToggleAll,
  onToggleAccessory,
  toggleALl,
  toggleLappy,
  togglePhone,
  toggleAccessory,
  filteredLappy,
  filteredPhone,
  filteredAccessories,
}) {
  return (
    <>
      <div className="categories">
        <ul>
          <li onClick={onToggleAll}>All Devices</li>
          <li onClick={onToggleLappy}>laptop</li>
          <li onClick={onTogglePhone}>Phone</li>
          <li onClick={onToggleAccessory}>Accessories</li>
        </ul>
      </div>
      <div className="listOfDevices">
        {toggleALl &&
          deviceInfo.map((device) => (
            <Devices onAddToCart={onAddToCart} device={device} key={crypto.randomUUID()}></Devices>
          ))}
        {toggleLappy &&
          filteredLappy.map((lappy) => (
            <Laptops lappy={lappy} key={crypto.randomUUID()} onAddToCart={onAddToCart} />
          ))}
        {togglePhone &&
          filteredPhone.map((phone) => (
            <Phones phone={phone} key={crypto.randomUUID()} onAddToCart={onAddToCart}/>
          ))}
        {toggleAccessory &&
          filteredAccessories.map((accessory) => (
            <Accessories accessory={accessory} key={crypto.randomUUID()} onAddToCart={onAddToCart}/>
          ))}
        {toggleCart && <Cart onDeleteFromCart={onDeleteFromCart} cart={cart}/>}
      </div>
    </>
  );
}

export default DeviceList;
