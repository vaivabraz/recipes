import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Paragraph = styled.div`
  padding-bottom: 20px;
`;

const Title = styled.h3`
  padding-bottom: 5px;
`;

function Section(props) {
  return (
    <Paragraph style={props.style}>
      <Title>{props.title}</Title>
      <p>{props.text}</p>
      {props.children}
    </Paragraph>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.array
};

export default Section;
