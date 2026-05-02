/* eslint-disable react/prop-types */
import { deviceInfo } from "../data";
import Accessories from "../components/accessories";
import DeviceList from "../components/deviceList";
import Categories from "../components/categories";
import AddedToCartModal from "../components/addedToCartModal";
function AccessoriesPage({handleAddToCart, modal, setModal}) {
  const filteredAccessories = deviceInfo.filter(
    (accessory) => accessory.category === "accessory"
  );
  return (
    <>
      
      <DeviceList categories={<Categories />} />
      <div className="listOfDevices">
        {filteredAccessories.map((accessory, index) => (
          <Accessories
            accessory={accessory}
            key={accessory.name}
            index={index}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      {modal && <AddedToCartModal modal={modal} setModal={setModal} />}
    </>
  );
}
export default AccessoriesPage;
