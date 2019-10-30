import React from "react";
import PropTypes from "prop-types";
import "./css/button.css";
import { NavLink } from "react-router-dom";

function Button(props) {
  //
  let styles =
    props.size === "small" ? "button border small" : "button border big";
  if (props.className) {
    styles = styles + " " + props.className;
  }
  return (
    // <button
    //   className={styles}
    //   onMouseDown={props.action}
    //   onClick={"location.href=" + props.navigateTo}
    // >
    //   {props.text}
    // </button>
    <NavLink to={props.navigateTo} className={styles}>
      {props.text}
    </NavLink>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
  style: PropTypes.object,
  size: PropTypes.string,
  className: PropTypes.string,
  navigateTo: PropTypes.string
};

export default Button;
