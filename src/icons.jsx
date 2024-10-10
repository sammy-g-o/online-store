/* eslint-disable react/prop-types */
function Icons({children}) {
  return (
    <div className="icons ">
      <span className="dropdown">
        <img src="/user.svg" alt="" />
        <div className="dropdown-content">
          <li href="#">
            <span>
              <img src="/heart.svg" alt="" />
            </span>{" "}
            Wishlist
          </li>
          <li href="#">
            <span>
              <img src="/logout.svg" alt="" />
            </span>{" "}
            logout
          </li>
          <li href="#">
            <span>
              <img src="/settings.svg" alt="" />
            </span>
            settings
          </li>
        </div>
      </span>
      {children}
    </div>
  );
}
export default Icons;
