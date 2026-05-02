import { useParams, useNavigate } from "react-router-dom";
import { deviceInfo } from "../data";
import React, { useState } from "react";
function ProductDetails() {
  const [selectedStorage, setSelectedStorage] = useState('')
  const { nameOfDevice } = useParams();
  const navigate = useNavigate();
  const product = deviceInfo.find(
    (device) => device.name === nameOfDevice
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  function goToPreviousPage() {
    navigate(-1);
  }
  function handleSelectedStorage(size) {
    setSelectedStorage(size)
  }
  return (
    <div className="product__details--wrapper">

      <div className="product__details--container">
        <span onClick={goToPreviousPage} className="go-back">&larr; Back</span>
        <div className="product__details--image">
          <img src={product.image} alt="" width="600" height="600" />
        </div>
        <div className="product__details--name">
          <p>{product.name}</p>
        </div>
        <div className="product__details--price">
          <p>₦ {product.price}</p>
        </div>
        <div className="product__details--device_specs">
          {product.category === "phone" &&
            <div className="phone__specs">
              <div className="row1">
                <div className="">Dimensions:</div>
                <div>{product.specs.dimensions}</div>
              </div>
              <div className="row2">
                <div className="">Display size:</div>
                <div>{product.specs.displaySize}</div>
              </div>
              <div className="row3">
                <div className="">Camera setup:</div>
                <div>{product.specs.cameraSetup}</div>
              </div>
            </div>
          }
        </div>
        <div className="product__details--select">
          {product.category === "phone" &&
            <div>
              <form action="">
                <div>
                  {product.specs.storageOptions.map((size) =>
                    <React.Fragment key={size}>
                      <input type="radio" name="storageOptions" id={`storage-${size}`} value={size} onChange={()=>handleSelectedStorage(size)} />
                      <label htmlFor={`storage-${size}`}>{size}</label>
                    </React.Fragment>)}
                </div>
              </form>
            </div>}
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
