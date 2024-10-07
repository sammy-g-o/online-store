import { useState } from "react";
import Nav from "./nav";
import Footer from "./footer";
import { deviceInfo } from "./data";
import DeviceList from "./deviceList";
function App() {
  const [toggleCart, setToggleCart] = useState(false);
  const filteredLappy = deviceInfo.filter(
    (laptop) => laptop.category === "laptop"
  );
  const filteredPhone = deviceInfo.filter(
    (phone) => phone.category === "phone"
  );
  const filteredAccessories = deviceInfo.filter(
    (accessory) => accessory.category === "accessory"
  );
  const [toggleLappy, setToggleLappy] = useState(false);
  const [togglePhone, setTogglePhone] = useState(false);
  const [toggleALl, setToggleAll] = useState(true);
  const [toggleAccessory, setToggleAccessory] = useState(false);
  const [cart, setCart] = useState([]);

  function handleToggleLappy() {
    setToggleLappy(true);
    setTogglePhone(false);
    setToggleAll(false);
    setToggleAccessory(false);
    setToggleCart(false);
  }
  function handleTogglePhone() {
    setTogglePhone(true);
    setToggleAll(false);
    setToggleLappy(false);
    setToggleAccessory(false);
    setToggleCart(false);
  }
  function handleToggleAll() {
    setToggleAll(true);
    setToggleLappy(false);
    setTogglePhone(false);
    setToggleAccessory(false);
    setToggleCart(false);
  }
  function handleToggleAccessory() {
    setToggleAccessory(true);
    setToggleAll(false);
    setToggleLappy(false);
    setTogglePhone(false);
    setToggleCart(false);
  }

  function handleToggleCart() {
    setToggleCart(true);
    setToggleAccessory(false);
    setToggleAll(false);
    setToggleLappy(false);
    setTogglePhone(false);
  }

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
  return (
    <>
      <Nav onToggleCart={handleToggleCart} />
      <DeviceList
        cart={cart}
        onAddToCart={handleAddToCart}
        onDeleteFromCart={handleDeleteFromCart}
        toggleALl={toggleALl}
        filteredAccessories={filteredAccessories}
        filteredLappy={filteredLappy}
        filteredPhone={filteredPhone}
        toggleAccessory={toggleAccessory}
        toggleLappy={toggleLappy}
        togglePhone={togglePhone}
        onToggleLappy={handleToggleLappy}
        onTogglePhone={handleTogglePhone}
        onToggleAll={handleToggleAll}
        onToggleAccessory={handleToggleAccessory}
        toggleCart={toggleCart}
      />
      <Footer />
    </>
  );
}

export default App;
