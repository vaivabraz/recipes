import React from "react";
import PropTypes from "prop-types";
import "./css/styles.css";

function Button(props) {
  return (
    <button
      style={props.style}
      className="button border"
      onMouseDown={props.action}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
  style: PropTypes.object
};

export default Button;
