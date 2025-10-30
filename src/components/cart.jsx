import CartItem from "./cartItem";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
function Cart({ cart, onDeleteFromCart }) {
  const navigate = useNavigate()
  function goToPreviousPage() {
    navigate(-1);
  }
  return (
    <>
      <div onClick={goToPreviousPage} className="go-back" style={{ marginLeft: "20%" }}>&larr;</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h2 style={{ color: '#081142' }}>Shopping Cart</h2>
        {cart.length === 0 && (
          <><div className="empty-cart-message">
            <img src="/Cart-Plus--Streamline-Bootstrap (1).svg" alt="" />
          </div><h2>Your Cart Is Empty</h2></>
        )}
        {cart.length > 0 && (
          <div className="cart">
            <div></div>
            {cart.map((cartItem) => <CartItem cartItem={cartItem} onDeleteFromCart={onDeleteFromCart} key={crypto.randomUUID()} />)}
          </div>
        )}
      </div>
    </>
  );
}
export default Cart;
