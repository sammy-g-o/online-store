/* eslint-disable react/prop-types */

function AddToCart({onClick}) {
  return (
    <>
      <button onClick={onClick} className="add-to-cart">
        <span>Add to cart</span>{" "}
        <img
          src="../Cart-Plus--Streamline-Bootstrap (1).svg"
          width="20"
          height="20"
          alt=""
        />
      </button>
    </>
  );
}
export default AddToCart;
