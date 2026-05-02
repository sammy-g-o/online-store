import {Link} from 'react-router-dom'
function Icons() {
  return (
    <div className="icons ">
      <span className="dropdown">
        <img src="/user.svg" alt="" width="40" height="40" />
        <div className="dropdown-content">
          <li href="#">
            <span>
              <img src="/heart.svg" alt="" width="20" height="20" />
            </span>{" "}
            Wishlist
          </li>
          <li href="#">
            <span>
              <img src="/logout.svg" alt="" width="20" height="20" />
            </span>{" "}
            logout
          </li>
          <li href="#">
            <span>
              <img src="/settings.svg" alt="" width="20" height="20" />
            </span>
            settings
          </li>
        </div>
      </span>
      <span>
        <Link to='/cart'><img src="/Cart-Plus--Streamline-Bootstrap (1).svg" alt="" width="40" height="40" /></Link>
      </span>
    </div>
  );
}
export default Icons;
