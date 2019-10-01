import React from "react";
import PropTypes from "prop-types";
import "./css/section.css";

function Section(props) {
  return (
    <div className="paragraph" style={props.style}>
      <h3> {props.title}</h3>
      <p>{props.text}</p>
      {props.children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.array
};

export default Section;
