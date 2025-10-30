import { NavLink } from "react-router-dom";


function Categories() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "categories-active" : "")}>All Products</NavLink>
        </li>
        <li>
          <NavLink to="/laptops" className={({ isActive }) => (isActive ? "categories-active" : "")}>laptops</NavLink>
        </li>
        <li>
          <NavLink to="/phones" className={({ isActive }) => (isActive ? "categories-active" : "")}>Phones</NavLink>
        </li>
        <li>
          <NavLink to="/accessories" className={({ isActive }) => (isActive ? "categories-active" : "")}>Accessories</NavLink>
        </li>
      </ul>
    </>
  );
}
export default Categories;
