/* eslint-disable react/prop-types */
import Accessories from "./accessories";
import Phones from "./phone";
import Laptops from "./laptops";
import Devices from "./device";
import { useState } from "react";
import { deviceInfo } from "./data";
import Cart from "./cart";

function ListOfDevices({
  toggleALl,
  toggleLappy,
  togglePhone,
  toggleAccessory,
  toggleCart,
}) {
  const [cart, setCart] = useState([]);
  function handleAddToCart(device) {
    if (!cart.includes(device)) {
      setCart([...cart, device]);
      alert(`${device.name} has been added to cart`);
    } else {
      console.log("damn, error");
    }
  }

  function handleDeleteFromCart(name) {
    setCart(cart.filter((cart) => cart.name !== name));
  }

  const filteredLappy = deviceInfo.filter(
    (laptop) => laptop.category === "laptop"
  );
  const filteredPhone = deviceInfo.filter(
    (phone) => phone.category === "phone"
  );
  const filteredAccessories = deviceInfo.filter(
    (accessory) => accessory.category === "accessory"
  );

  return (
    <>
      {toggleALl &&
        deviceInfo.map((device) => (
          <Devices
            onAddToCart={handleAddToCart}
            device={device}
            key={crypto.randomUUID()}
          ></Devices>
        ))}

      {toggleLappy &&
        filteredLappy.map((lappy) => (
          <Laptops
            lappy={lappy}
            key={crypto.randomUUID()}
            onAddToCart={handleAddToCart}
          />
        ))}

      {togglePhone &&
        filteredPhone.map((phone) => (
          <Phones
            phone={phone}
            key={crypto.randomUUID()}
            onAddToCart={handleAddToCart}
          />
        ))}

      {toggleAccessory &&
        filteredAccessories.map((accessory) => (
          <Accessories
            accessory={accessory}
            key={crypto.randomUUID()}
            onAddToCart={handleAddToCart}
          />
        ))}
      {toggleCart && (
        <Cart onDeleteFromCart={handleDeleteFromCart} cart={cart} />
      )}
    </>
  );
}
export default ListOfDevices;
