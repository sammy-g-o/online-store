/* eslint-disable react/prop-types */
import { deviceInfo } from "../data";
import Phones from "../components/phone";
import Nav from "../components/nav";
import DeviceList from "../components/deviceList";
import Categories from "../components/categories";
import Footer from "../components/footer";
import AddedToCartModal from "../components/addedToCartModal";
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
