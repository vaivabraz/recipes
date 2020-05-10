import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as RemoveIcon } from "../../common/icons/remove.svg";

const Line = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px;
`;

const ProductInput = styled.input`
  padding: 5px;
  flex: 1;
  font-size: 16px;
  letter-spacing: 0.15em;
`;

const QuantityInput = styled.input`
  padding: 5px;
  margin-left: 5px;
  font-size: 16px;
  letter-spacing: 0.15em;
  width: 100px;
`;

function IngredientLine(props) {
  const entry = props.entry;

  const onInputChange = (e) => {
    props.onChange(e, entry.id);
  };

  const onRemoveProduct = (e) => {
    props.onRemove(e, entry.id);
  };

  return (
    <Line>
      <ProductInput
        autoComplete="off"
        placeholder="Produktas"
        value={entry.product}
        onChange={onInputChange}
        name={"product"}
      />
      <QuantityInput
        autoComplete="off"
        placeholder="Kiekis"
        value={entry.quantity}
        onChange={onInputChange}
        name={"quantity"}
      />
      <button className="circleButton" onClick={onRemoveProduct}>
        <RemoveIcon />
      </button>
    </Line>
  );
}

IngredientLine.propTypes = {
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  entry: PropTypes.object,
};

export default IngredientLine;
