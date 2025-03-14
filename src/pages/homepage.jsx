/* eslint-disable react/prop-types */
import Nav from "../components/nav";
import Footer from "../components/footer";
import DeviceList from "../components/deviceList";

import Categories from "../components/categories";
import AddedToCartModal from "../components/addedToCartModal";
import { deviceInfo } from "../data";
import Devices from "../components/device";

function HomePage({ handleAddToCart, modal, setModal }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <div>
        <Nav />

        <DeviceList categories={<Categories />} />
        <div className="listOfDevices">
          {deviceInfo.map((device) => (
            <Devices
              onAddToCart={handleAddToCart}
              device={device}
              key={crypto.randomUUID()}
            ></Devices>
          ))}
        </div>

        <Footer />
      </div>
      {modal && <AddedToCartModal modal={modal} setModal={setModal} />}
    </div>
  );
}
export default HomePage;
