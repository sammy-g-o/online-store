import Nav from "../components/nav";
import Logo from "../components/logo";
import SearchBar from "../components/searchBar";
import Icons from "../components/icons";
import LaptopProductDetails from "../components/laptopProductDetails";
import Footer from "../components/footer";
function LaptopProductDetailsPage() {
  return (
    <>
      <Nav>
        <Logo />
        <SearchBar />
        <Icons />
      </Nav>
      <LaptopProductDetails />
      <Footer />
    </>
  );
}
export default LaptopProductDetailsPage;
