import Nav from "../components/nav";
import Logo from "../components/logo";
import SearchBar from "../components/searchBar";
import Icons from "../components/icons";
import PhoneProductDetails from "../components/phoneProductDetails"
import Footer from "../components/footer";
function PhoneProductDetailsPage(){
return (
    <>
      <Nav>
        <Logo />
        <SearchBar />
        <Icons />
      </Nav>
      <PhoneProductDetails />
      <Footer />
    </>
  );
}
export default PhoneProductDetailsPage