/* eslint-disable react/prop-types */
import { deviceInfo } from "../data";
import Laptops from "../components/laptops";
import Nav from "../components/nav";
import DeviceList from "../components/deviceList";
import Categories from "../components/categories";
import Footer from "../components/footer";
import AddedToCartModal from "../components/addedToCartModal";
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
