import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <h3 className="cool">
          <NavLink to={"/"} exact activeClassName="active-class">
            COOL FASHION STORE
          </NavLink>
        </h3>
        <ul className="items">
          <li>
            <NavLink to={"/Men"} activeClassName="active-class">
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Women"} activeClassName="active-class">
              Women
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Login"} activeClassName="active-class">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
