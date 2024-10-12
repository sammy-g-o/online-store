import { useState } from "react";
import Nav from "./nav";
import Footer from "./footer";
import DeviceList from "./deviceList";
import Logo from "./logo";
import SearchBar from "./searchBar";
import Icons from "./icons";
import Categories from "./categories";
import ListOfDevices from "./listOfDevices";
import AddedToCartModal from "./addedToCartModal";

function App() {
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleLappy, setToggleLappy] = useState(false);
  const [togglePhone, setTogglePhone] = useState(false);
  const [toggleALl, setToggleAll] = useState(true);
  const [toggleAccessory, setToggleAccessory] = useState(false);
  const [modal, setModal] = useState(null);
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

  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <div>
        <Nav>
          <Logo />
          <SearchBar />
          <Icons onToggleCart={handleToggleCart} />
        </Nav>

        <DeviceList
          categories={
            <Categories
              onToggleLappy={handleToggleLappy}
              onTogglePhone={handleTogglePhone}
              onToggleAll={handleToggleAll}
              onToggleAccessory={handleToggleAccessory}
            />
          }
          listOfDevices={
            <ListOfDevices
              setModal={setModal}
              toggleCart={toggleCart}
              toggleALl={toggleALl}
              toggleLappy={toggleLappy}
              toggleAccessory={toggleAccessory}
              togglePhone={togglePhone}
            ></ListOfDevices>
          }
        />

        <Footer />
      </div>
      {modal && <AddedToCartModal modal={modal} setModal={setModal} />}
    </div>
  );
}

export default App;
