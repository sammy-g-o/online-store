import { Link } from "react-router-dom";
function Logo() {
  return (
    <div className="brand-name">
      <Link to="/" style={{textDecoration:"none", color:"white"}}>Tech Depot</Link>
    </div>
  );
}
export default Logo;
