import { useParams, useNavigate } from "react-router-dom"
import { deviceInfo } from "../data";
function AccessoriesProductDetails(){
    const { nameOfDevice } = useParams();
        const navigate = useNavigate();

        const accessories = deviceInfo.find((device)=> device.category === "accessory" && device.name === nameOfDevice);
        function goToPreviousPage(){
            navigate(-1);
        }
    return(
        <div>
      <span onClick={goToPreviousPage} className="go-back">&larr;</span>
      <img src={accessories.image} alt="" />
      <p>{accessories.name}</p>
      <p>₦{accessories.price}</p>
    </div>
    )
}export default AccessoriesProductDetails;