/* eslint-disable react/prop-types */
import Nav from '../src/components/nav'
import Footer from "../src/components/footer";
import Logo from "../src/components/logo";
import SearchBar from "../src/components/searchBar";
import Icons from "../src/components/icons";
import Cart from '../src/components/cart';

function CartPage({handleDeleteFromCart, cart}) {

    return(
        <>
        <Nav>
          <Logo />
          <SearchBar />
          <Icons/>
        </Nav>
        <Cart cart={cart} onDeleteFromCart= {handleDeleteFromCart}/>
        <Footer />
        </>
    )
}
export default  CartPage;
