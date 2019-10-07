import React from "react";
import PropTypes from "prop-types";
import "./css/textInput.css";

function TextInput(props) {
  const className =
    (props.inline ? "textInputFieldSmall" : "textInputField ") +
    " inputTextStyling border";

  return (
    <div
      className={
        props.inline ? "textInputInlineContainer" : "textInputContainer"
      }
    >
      <label className="textInputLabel">{props.label}</label>

      {props.multiline ? (
        <textarea
          className="textInputField inputTextStyling border"
          rows="10"
          {...props}
        />
      ) : (
        <input autoComplete="off" className={className} {...props} />
      )}
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  multiline: PropTypes.bool,
  inline: PropTypes.bool
};

export default TextInput;
