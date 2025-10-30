import { useParams, useNavigate } from "react-router-dom";
import { deviceInfo } from "../data";


function LaptopProductDetails() {
  const { nameOfDevice } = useParams();
  const navigate = useNavigate();

  // Find the laptop with the matching name
  const lappy = deviceInfo.find(device => 
    device.category === "laptop" && device.name === nameOfDevice
  );
  
  if (!lappy) return <div>Laptop not found</div>;
  
function goToPreviousPage(){
  navigate(-1);
}

  return (
    <div>
      <span onClick={goToPreviousPage} className="go-back">&larr;</span>
      <img src={lappy.image} alt="" />
      <p>{lappy.name}</p>
      <p>₦{lappy.price}</p>
    </div>
  );
}

export default LaptopProductDetails;
