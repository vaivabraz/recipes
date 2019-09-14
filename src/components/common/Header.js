import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        MY RECIPES
      </NavLink>
      {" | "}
      <NavLink to="/profile" activeStyle={activeStyle}>
        PROFILE
      </NavLink>
    </nav>
  );
};

export default Header;
