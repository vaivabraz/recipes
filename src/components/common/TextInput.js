import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.label`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  padding: 20px 0px 10px 0px;
`;

const TextInputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const TextArea = styled.textarea`
  padding: 5px;
  flex: 1;
  resize: none;
`;

const TextLine = styled.input`
  padding: 5px;
  flex: 1;
  resize: none;
`;

const TextLineSmall = styled.input`
  padding: 5px;
  height: 40px;
  width: 100px;
  margin: 5px 0px 5px 10px;
`;

function TextInput(props) {
  const { label, multiline, inline, ...inputProps } = props;
  const textInputInlineContainerStyle = { alignItems: "center" };
  const textInputContainerStyle = { flexDirection: "column" };
  return (
    <TextInputContainer
      style={inline ? textInputInlineContainerStyle : textInputContainerStyle}
    >
      <Label>{label}</Label>
      {multiline ? (
        <TextArea
          className="inputTextStyling border"
          rows="10"
          {...inputProps}
        />
      ) : inline ? (
        <TextLineSmall
          {...inputProps}
          autoComplete="off"
          className="inputTextStyling border"
        />
      ) : (
        <TextLine
          {...inputProps}
          autoComplete="off"
          className="inputTextStyling border"
        />
      )}
    </TextInputContainer>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  multiline: PropTypes.bool,
  inline: PropTypes.bool
};

export default TextInput;
