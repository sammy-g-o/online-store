/* eslint-disable react/prop-types */
import { deviceInfo } from "../src/data";
import Accessories from "../src/components/accessories";
import Nav from "../src/components/nav";
import DeviceList from "../src/components/deviceList";
import Categories from "../src/components/categories";
import Footer from "../src/components/footer";
import AddedToCartModal from "../src/components/addedToCartModal";
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
