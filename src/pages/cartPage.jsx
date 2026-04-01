/* eslint-disable react/prop-types */
import Nav from '../components/nav'
import Footer from "../components/footer";
import Logo from "../components/logo";
import SearchBar from "../components/searchBar";
import Icons from "../components/icons";
import Cart from '../components/cart';

function CartPage({handleDeleteFromCart, handleIncreaseQuantity, handleDecreaseQuantity, cart}) {

    return(
        <>
        <Nav>
          <Logo />
          <SearchBar />
          <Icons/>
        </Nav>
        <Cart
          cart={cart}
          onDeleteFromCart={handleDeleteFromCart}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
        <Footer />
        </>
    )
}
export default  CartPage;
