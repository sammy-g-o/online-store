/* eslint-disable react/prop-types */
import { deviceInfo } from "../data";
import Accessories from "../components/accessories";
import Nav from "../components/nav";
import DeviceList from "../components/deviceList";
import Categories from "../components/categories";
import Footer from "../components/footer";
import AddedToCartModal from "../components/addedToCartModal";
function AccessoriesPage({handleAddToCart, modal, setModal}) {
  const filteredAccessories = deviceInfo.filter(
    (accessory) => accessory.category === "accessory"
  );
  return (
    <>
      <Nav />
      <DeviceList categories={<Categories />} />
      <div className="listOfDevices">
        {filteredAccessories.map((accessory) => (
          <Accessories
            accessory={accessory}
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
export default AccessoriesPage;
