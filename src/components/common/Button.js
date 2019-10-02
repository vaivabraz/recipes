import React from "react";
import PropTypes from "prop-types";
import "./css/button.css";

function Button(props) {
  let styles =
    props.size === "small" ? "button border small" : "button border big";
  if (props.className) {
    styles = styles + " " + props.className;
  }
  return (
    <button style={props.style} className={styles} onMouseDown={props.action}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
  style: PropTypes.object,
  size: PropTypes.string,
  className: PropTypes.string
};

export default Button;
