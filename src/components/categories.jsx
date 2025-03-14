import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">All Devices</Link>
        </li>
        <li>
          <Link to="/laptops">laptops</Link>
        </li>
        <li>
          <Link to="/phones">Phone</Link>
        </li>
        <li>
          <Link to="/accessories">Accessories</Link>
        </li>
      </ul>
    </>
  );
}
export default Categories;
