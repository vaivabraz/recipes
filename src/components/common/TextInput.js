import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Colors from "../common/Colors";

const Label = styled.label`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  ${({ error }) => !error && `padding: 20px 0px 10px 0px;`}
`;

const Error = styled.h4`
  color: ${Colors.softRed};
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
  const { label, multiline, inline, error, ...inputProps } = props;
  const textInputInlineContainerStyle = { alignItems: "center" };
  const textInputContainerStyle = { flexDirection: "column" };
  const inputRef = useRef();
  const [activeError, setActiveError] = useState(false);

  useEffect(() => {
    if (activeError) {
      setActiveError(false);
    }
  }, [inputRef.current?.value]);

  useEffect(() => {
    if (error) {
      setActiveError(true);
      inputRef.current.focus();
    }
  }, [error]);

  return (
    <TextInputContainer
      style={inline ? textInputInlineContainerStyle : textInputContainerStyle}
    >
      <Label error={activeError}>{label}</Label>
      {activeError && <Error>Šis laukelis turi būti užpildytas!</Error>}
      {multiline ? (
        <TextArea
          className="inputTextStyling border"
          rows="10"
          ref={inputRef}
          {...inputProps}
        />
      ) : inline ? (
        <TextLineSmall
          autoComplete="off"
          className="inputTextStyling border"
          ref={inputRef}
          {...inputProps}
        />
      ) : (
        <TextLine
          autoComplete="off"
          className="inputTextStyling border"
          ref={inputRef}
          {...inputProps}
        />
      )}
    </TextInputContainer>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  multiline: PropTypes.bool,
  inline: PropTypes.bool,
  error: PropTypes.bool,
};

export default TextInput;
