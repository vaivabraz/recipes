import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { navigateToRecipePage } from "../../../redux/actions/navigationActions";
import Colors from "../../common/Colors";

const Card = styled.button`
  color: ${Colors.darkBordo};
  background-color: ${Colors.lightGrey};

  display: flex;
  flex-direction: column;
  margin: 6px;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.error};
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

  const image = require("../../../images/" + "vistiena.jpg");
  // const image = require("../../../images/" + imageName);
  const title = recipe.title;
  const handleOnClick = () => {
    props.navigateToRecipePage(recipe);
  };
  return (
    <Card className="border animationTransition" onClick={handleOnClick}>
      <Image className="border" src={image} title={title} alt={title} />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </Card>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object,
};

const mapDispatchToProps = {
  navigateToRecipePage,
};

export default connect(null, mapDispatchToProps)(RecipeCard);
