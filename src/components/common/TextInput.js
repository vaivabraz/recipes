import React from "react";
import PropTypes from "prop-types";
import "./css/textInput.css";

function TextInput(props) {
  const { label, multiline, inline, ...inputProps } = props;
  const className =
    (inline ? "textInputFieldSmall" : "textInputField ") +
    " inputTextStyling border";

  return (
    <div className={inline ? "textInputInlineContainer" : "textInputContainer"}>
      <label className="textInputLabel">{label}</label>

      {multiline ? (
        <textarea
          className="textInputField inputTextStyling border"
          rows="10"
          {...inputProps}
        />
      ) : (
        <input autoComplete="off" className={className} {...inputProps} />
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
