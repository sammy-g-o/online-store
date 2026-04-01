/* eslint-disable react/prop-types */
function CartItem({ cartItem, onDeleteFromCart, onIncreaseQuantity, onDecreaseQuantity }) {
    return (
        <div className="cart-item">
            <div className="cart-item__image">
                <img src={cartItem.image} alt={cartItem.name} />
            </div>
            <div className="cart-item__details">
                <div className="cart-item__top">
                    <span className="cart-item__name">{cartItem.name}</span>
                    <span className="delete-item" onClick={() => onDeleteFromCart(cartItem.name)}>❌</span>
                </div>
                <div className="cart-item__price">₦{cartItem.price}</div>
                <div className="quantity">
                    <button onClick={() => onDecreaseQuantity(cartItem.name)}>-</button>
                    <p className="show-quantity">{cartItem.quantity}</p>
                    <button onClick={() => onIncreaseQuantity(cartItem.name)}>+</button>
                </div>
            </div>
        </div>
    )
}
export default CartItem;