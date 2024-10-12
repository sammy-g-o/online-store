import { useState } from "react";

/* eslint-disable react/prop-types */
function Cart({cart, onDeleteFromCart}) {
  
  const [quantity, setQuantity]=useState(1);
  function handleIncreaseQuantity() {
    setQuantity(quantity+1)
  }
  function handleDecreaseQuantity() {
    if(quantity<1)return;
    setQuantity(quantity-1);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h2 style={{color:'#081142'}}>Shopping Cart</h2>
        {cart.length === 0 && (
          <><div className="empty-cart-message">
                      <img src="/Cart-Plus--Streamline-Bootstrap (1).svg" alt="" />
                  </div><h2>Your Cart Is Empty</h2></>
        )}
        {cart.length > 0 && (
            <div className="cart">
            <div></div>
            {cart.map((cartItem)=><div className="cart-item" key={crypto.randomUUID()}>
                <div className="delete-item" onClick={()=>onDeleteFromCart(cartItem.name)}>❌</div>
                <div><img src={cartItem.image}/></div>
                <div>{cartItem.name}</div>
                <div className="quantity">
                  <button onClick={handleDecreaseQuantity}>-</button>
                  <p className="show-quantity">{quantity}</p>
                  <button onClick={handleIncreaseQuantity}>+</button>
                </div>
                <div>₦{cartItem.price}</div>
            </div>)}
            </div>
        )}
      </div>
    </>
  );
}
export default Cart;
