/* eslint-disable react/prop-types */
import Logo from "./logo";
import SearchBar from "./searchBar";
import Icons from "./icons";

function Nav({ onToggleCart }) {
  return (
    <nav>
      <Logo />
      <SearchBar />
      <Icons>
        <span onClick={onToggleCart}>
          <img src="/Cart-Plus--Streamline-Bootstrap (1).svg" alt="" />
        </span>
      </Icons>
    </nav>
  );
}
export default Nav;
