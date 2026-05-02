/* eslint-disable react/prop-types */
import { deviceInfo } from "../data";
import Phones from "../components/phone";
import DeviceList from "../components/deviceList";
import Categories from "../components/categories";
import AddedToCartModal from "../components/addedToCartModal";
function PhonePage({handleAddToCart, modal, setModal}) {
  const filteredPhone = deviceInfo.filter(
    (phone) => phone.category === "phone"
  );
  return (
    <>
      <DeviceList categories={<Categories />} />
      <div className="listOfDevices">
        {filteredPhone.map((phone, index) => (
          <Phones
            phone={phone}
            key={phone.name}
            index={index}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      {modal && <AddedToCartModal modal={modal} setModal={setModal} />}
    </>
  );
}
export default PhonePage;
