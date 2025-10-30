import { useParams, useNavigate } from "react-router-dom";
import { deviceInfo } from "../data";
function PhoneProductDetails() {
  const { nameOfDevice } = useParams();
  const navigate = useNavigate();
  const phone = deviceInfo.find(
    (device) => device.category === "phone" && device.name === nameOfDevice
  );
  function goToPreviousPage() {
    navigate(-1);
  }
  return (
    <div>
      <span onClick={goToPreviousPage} className="go-back">&larr;</span>
      <img src={phone.image} alt="" />
      <p>{phone.name}</p>
      <p>₦{phone.price}</p>
    </div>
  );
}
export default PhoneProductDetails;
