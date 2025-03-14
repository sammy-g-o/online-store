/* eslint-disable react/prop-types */
import Nav from "../src/components/nav";
import Footer from "../src/components/footer";
import DeviceList from "../src/components/deviceList";

import Categories from "../src/components/categories";
import AddedToCartModal from "../src/components/addedToCartModal";
import { deviceInfo } from "../src/data";
import Devices from "../src/components/device";

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
