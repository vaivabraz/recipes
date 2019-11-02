import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonBox = styled.div`
  -webkit-transition-duration: 0.3s; /* Safari */
  transition-duration: 0.3s;
  min-width: 120px;
  max-width: 300px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 38px;
  ${({ size }) =>
    size === "small" &&
    `
    font-size: 16px;
    height: 30px;
`}
  &:hover {
    background-color: palevioletred;
    color: white;
  }

  &:active {
    background-color: red;
    color: white;
  }
`;

function Button(props) {
  let styles = "button border";
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
    <NavLink to={props.navigateTo}>
      <ButtonBox size={props.size} className={styles}>
        {props.text}
      </ButtonBox>
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
