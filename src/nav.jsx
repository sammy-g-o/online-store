/* eslint-disable react/prop-types */

function Nav({onToggleCart}) {
  return (
    <nav>
      <div className="brand-name">Tech Depot</div>
      <div>
        <input type="text" id="" placeholder="Search" />
      </div>
      <div className="icons ">
        <span className="dropdown">
          <img src="/user.svg" alt="" />
          <div className="dropdown-content">
            <li href="#"><span><img src="/heart.svg" alt="" /></span> Wishlist</li>
            <li href="#"><span><img src="/logout.svg" alt="" /></span> logout</li>
            <li href="#"><span><img src="/settings.svg" alt="" /></span>settings</li>
          </div>
        </span>
        <span onClick={onToggleCart}>
          <img src="/Cart-Plus--Streamline-Bootstrap (1).svg" alt="" />
        </span>
      </div>
    </nav>
  );
}
export default Nav;
