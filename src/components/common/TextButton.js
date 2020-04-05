import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Colors from "./Colors";

const TextButtonBox = styled.button`
  -webkit-transition-duration: 0.3s; /* Safari */
  transition-duration: 0.3s;
  min-width: 120px;
  max-width: 300px;
  padding: 0px 12px;
  font-size: 20px;
  height: 38px;
  border: none;
  text-decoration: underline;
  &:hover {
    color: ${Colors.softRed};
  }
  &:active {
    color: ${Colors.pinkGrey};
  }
`;

function TextButton(props) {
  const handleOnClick = () => {
    props.action();
  };
  let styles = " ";
  if (props.className) {
    styles = styles + " " + props.className;
  }
  return (
    <TextButtonBox
      type="button"
      size={props.size}
      className={styles}
      onClick={handleOnClick}
    >
      <h5>{props.text}</h5>
    </TextButtonBox>
  );
}

TextButton.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
  style: PropTypes.object,
  size: PropTypes.string,
  className: PropTypes.string,
  navigateTo: PropTypes.string,
};

export default TextButton;
