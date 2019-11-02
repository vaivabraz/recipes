import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  color: #281708;
  background-color: #f4f4f4;

  display: flex;
  flex-direction: column;
  margin: 6px;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    background-color: white;
    color: #a53e3e;
  }
`;

const Image = styled.img`
  max-width: 92%;
  margin: 18px 6px;
`;

const TitleContainer = styled.div`
  height: 70px;
  padding: 3px 3px 16px 3px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Title = styled.h3`
  text-align: center;
`;

function RecipeCard(props) {
  const { recipe } = props;
  const imageName = recipe.get("image");
  const image = require("../../../images/" + "vistiena.jpg");
  // const image = require("../../../images/" + imageName);
  const title = recipe.get("title");
  return (
    <Link to={"/recipes/" + recipe.get("slug")}>
      <Card className="border animationTransition">
        <Image className="border" src={image} title={title} alt={title} />
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </Card>
    </Link>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object
};

export default RecipeCard;
