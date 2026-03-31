import { useParams, useNavigate } from "react-router-dom";
import { deviceInfo } from "../data";
function ProductDetails() {
  const { nameOfDevice } = useParams();
  const navigate = useNavigate();
  const product = deviceInfo.find(
    (device) => device.name === nameOfDevice
  );
  function goToPreviousPage() {
    navigate(-1);
  }
  return (
    <div>
      <span onClick={goToPreviousPage} className="go-back">&larr;</span>
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <p>₦{product.price}</p>
    </div>
  );
}
export default ProductDetails;
