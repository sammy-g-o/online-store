/* eslint-disable react/prop-types */
import { useState } from "react";
function CartItem({ cartItem, onDeleteFromCart }) {
    const [quantity, setQuantity] = useState(0);
    function handleIncreaseQuantity() {
        setQuantity((quantity) => quantity + 1)
    }
    function handleDecreaseQuantity() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <>
            <div className="cart-item">
                <div className="delete-item" onClick={() => onDeleteFromCart(cartItem.name)}>❌</div>
                <div><img src={cartItem.image} /></div>
                <div>{cartItem.name}</div>
                <div className="quantity">
                    <button onClick={handleDecreaseQuantity}>-</button>
                    <p className="show-quantity">{quantity}</p>
                    <button onClick={() => handleIncreaseQuantity(cartItem.name)}>+</button>
                </div>
                <div>₦{cartItem.price}</div>
            </div>
        </>
    )
}
export default CartItem;