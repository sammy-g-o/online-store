/* eslint-disable react/prop-types */
import { deviceInfo } from "../src/data";
import Laptops from "../src/components/laptops";
import Nav from "../src/components/nav";
import DeviceList from "../src/components/deviceList";
import Categories from "../src/components/categories";
import Footer from "../src/components/footer";
import AddedToCartModal from "../src/components/addedToCartModal";
function LaptopPage({handleAddToCart, modal, setModal}) {
  const filteredLappy = deviceInfo.filter(
    (laptop) => laptop.category === "laptop"
  );
  return (
    <>
      <Nav />
      <DeviceList categories={<Categories />} />
      <div className="listOfDevices">
        {filteredLappy.map((lappy) => (
          <Laptops
            lappy={lappy}
            key={crypto.randomUUID()}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Footer />
      {modal && <AddedToCartModal modal={modal} setModal={setModal} />}
    </>
  );
}
export default LaptopPage;
