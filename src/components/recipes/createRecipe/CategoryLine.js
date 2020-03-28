import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Select from "react-select";
import { getCategories } from "../../../redux/selectors/userSelectors";

function CategoryLine({ value, onChange }) {
  const categories = useSelector(getCategories).map(c => {
    return { value: c, label: c };
  });

  const colourStyles = {
    control: base => ({
      ...base,
      minHeight: "40px",
      border: 0,
      boxShadow: "none",
      fontFamily: "Courier New",
      fontSize: "18px"
    })
  };

  return (
    <Select
      options={categories}
      value={value}
      onChange={onChange}
      isMulti
      name="categories"
      className="inputTextStyling border"
      classNamePrefix="select"
      styles={colourStyles}
      placeholder={"pasirinkti..."}
    />
  );
}

CategoryLine.propTypes = {
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  entry: PropTypes.object
};

export default CategoryLine;
