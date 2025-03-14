/* eslint-disable react/prop-types */
import { deviceInfo } from "../src/data";
import Phones from "../src/components/phone";
import Nav from "../src/components/nav";
import DeviceList from "../src/components/deviceList";
import Categories from "../src/components/categories";
import Footer from "../src/components/footer";
import AddedToCartModal from "../src/components/addedToCartModal";
function PhonePage({handleAddToCart, modal, setModal}) {
  const filteredPhone = deviceInfo.filter(
    (phone) => phone.category === "phone"
  );
  return (
    <>
      <Nav />
      <DeviceList categories={<Categories />} />
      <div className="listOfDevices">
        {filteredPhone.map((phone) => (
          <Phones
            phone={phone}
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
export default PhonePage;
