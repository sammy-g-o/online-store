import Nav from "../components/nav";
import Logo from "../components/logo";
import SearchBar from "../components/searchBar";
import Icons from "../components/icons";
import ProductDetails from "../components/productDetails";
import Footer from "../components/footer";
function ProductDetailsPage(){
return (
    <>
      <Nav>
        <Logo />
        <SearchBar />
        <Icons />
      </Nav>
      <ProductDetails key={crypto.randomUUID()}/>
      <Footer />
    </>
  );
}
export default ProductDetailsPage