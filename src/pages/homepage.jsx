/* eslint-disable react/prop-types */
import DeviceList from "../components/deviceList";

import Categories from "../components/categories";
import AddedToCartModal from "../components/addedToCartModal";
import { deviceInfo } from "../data";
import Devices from "../components/device";

function HomePage({ handleAddToCart, modal, setModal }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <div>
        <DeviceList categories={<Categories />} />
        <div className="listOfDevices">
          {deviceInfo.map((device, index) => (
            <Devices
              onAddToCart={handleAddToCart}
              device={device}
              index={index}
              key={device.name}
            ></Devices>
          ))}
        </div>
      </div>
      {modal && <AddedToCartModal modal={modal} setModal={setModal} />}
    </div>
  );
}
export default HomePage;
