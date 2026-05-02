/* eslint-disable react/prop-types */
import Cart from '../components/cart';

function CartPage({handleDeleteFromCart, handleIncreaseQuantity, handleDecreaseQuantity, cart}) {

    return(
        <>
        <Cart
          cart={cart}
          onDeleteFromCart={handleDeleteFromCart}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
        </>
    )
}
export default  CartPage;
