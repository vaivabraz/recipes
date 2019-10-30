import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#842727" };
  // const activeStyle = { color: "#F15B2A" };

  return (
    <nav style={styles.container}>
      <NavLink
        className="border"
        to="/"
        activeStyle={activeStyle}
        exact
        style={styles.navLink}
      >
        <h5>RECEPTAI</h5>
      </NavLink>

      <NavLink to="/profile" activeStyle={activeStyle} style={styles.navLink}>
        <h5>Vaiva</h5>
      </NavLink>
      <NavLink
        to="/createRecipe"
        activeStyle={activeStyle}
        style={styles.navLink}
      >
        <h5>Atsijungti</h5>
      </NavLink>
    </nav>
  );
};

export default Header;

const styles = {
  container: {
    padding: "18px 30px",
    display: "flex",
    justifyContent: "flex-end",
    borderTop: "10px #4d1515 solid"
  },
  navLink: {
    padding: "3px 10px",
    fontSize: "16px",
    color: "#281708"
  }
};
