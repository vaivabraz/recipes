import React from "react";
import PropTypes from "prop-types";
import "./css/IngredientLine.css";

function IngredientLine(props) {
  const entry = props.entry;

  const onInputChange = e => {
    props.onChange(e, entry.id);
  };

  const onRemoveProduct = e => {
    props.onRemove(e, entry.id);
  };

  return (
    <div className="ingredientLineBody">
      <input
        className="ingredientProductInput"
        autoComplete="off"
        placeHolder="Produktas"
        value={entry.product}
        onChange={onInputChange}
        name={"product"}
      />
      <input
        className="ingredientQuantityInput"
        autoComplete="off"
        placeHolder="Kiekis"
        value={entry.quantity}
        onChange={onInputChange}
        name={"quantity"}
      />
      <button className="circleButton" onClick={onRemoveProduct}>
        X
      </button>
    </div>
  );
}

IngredientLine.propTypes = {
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  entry: PropTypes.object
};

export default IngredientLine;
