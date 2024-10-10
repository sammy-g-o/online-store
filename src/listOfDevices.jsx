/* eslint-disable react/prop-types */
import Accessories from "./accessories";
import Phones from "./phone";
import Laptops from "./laptops";
import Devices from "./device";
import { deviceInfo } from "./data";

function ListOfDevices({toggleALl, onAddToCart, toggleLappy,  togglePhone, toggleAccessory, children}) {

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
            onAddToCart={onAddToCart}
            device={device}
            key={crypto.randomUUID()}
          ></Devices>
        ))}

      {toggleLappy &&
        filteredLappy.map((lappy) => (
          <Laptops
            lappy={lappy}
            key={crypto.randomUUID()}
            onAddToCart={onAddToCart}
          />
        ))}

      {togglePhone &&
        filteredPhone.map((phone) => (
          <Phones
            phone={phone}
            key={crypto.randomUUID()}
            onAddToCart={onAddToCart}
          />
        ))}

      {toggleAccessory &&
        filteredAccessories.map((accessory) => (
          <Accessories
            accessory={accessory}
            key={crypto.randomUUID()}
            onAddToCart={onAddToCart}
          />
        ))}
        
      {children}
    </>
  );
}
export default ListOfDevices;
