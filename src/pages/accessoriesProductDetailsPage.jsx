import Nav from "../components/nav";
import Logo from "../components/logo";
import SearchBar from "../components/searchBar";
import Icons from "../components/icons";
import AccessoriesProductDetails from "../components/accessoriesProductDetails";
import Footer from "../components/footer";
function PhoneProductDetailsPage(){
return (
    <>
      <Nav>
        <Logo />
        <SearchBar />
        <Icons />
      </Nav>
      <AccessoriesProductDetails />
      <Footer />
    </>
  );
}
export default PhoneProductDetailsPage