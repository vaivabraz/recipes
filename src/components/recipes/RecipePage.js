import React from "react";
import PropTypes from "prop-types";
import { Section, Button } from "../common";
import styled from "styled-components";
import { connect } from "react-redux";
import { navigateToRecipeForm } from "../../redux/actions/navigationActions";

const Body = styled.div`
  display: flex;
  margin: 0 40px 0 40px;
  flex-wrap: wrap;
`;

const LeftColumn = styled.div`
  flex: 3;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const RightColumn = styled.div`
  flex: 5;
  padding-left: 30px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  padding: 40px;
  align-self: center;
`;

const Image = styled.img`
  max-width: 100%;
  min-width: 250px;
  margin-bottom: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 10px 0;
  h4 {
    padding: 3px 0px;
    color: rgb(141, 141, 126);
  }
`;

const BottomContainer = styled.div`
  padding-top: 40px;
`;

const Author = styled.div`
  h5 {
    padding-left: 5px;
    display: inline-block;
  }
  p {
    display: inline-block;
  }
`;

const ButtonsBox = styled.div`
  display: flex;
  padding-top: 8px;
  width: ;
`;

const Separator = styled.div`
  margin-right: 10px;
`;

function RecipePage(props) {
  const recipe = props.location.state.recipe;
  const handleEdit = () => {
    props.navigateToRecipeForm(recipe);
  };
  const image = recipe.image && require("../../images/" + recipe.image);
  const categoriesNum = recipe.categories && recipe.categories.length;

  const productsList = recipe.ingredients
    ? recipe.ingredients.map(r => (
        <li key={r.product + r.quantity}>
          {r.quantity} {r.product}
        </li>
      ))
    : null;

  const categories =
    recipe.categories &&
    recipe.categories.map((category, index) => {
      return (
        <a key={category} href="" className="fontCourier">
          {category}
          {index + 1 !== categoriesNum ? ", " : "."}
        </a>
      );
    });

  return (
    <div className="pageFlexContainer border">
      <Title className="alignCenter">{recipe.title}</Title>
      <Body className="flexColumnSmallScreen">
        <LeftColumn className="alignCenter">
          <Image
            className="border"
            src={image}
            title={recipe.title}
            alt={recipe.title}
          />
          <Info>
            {recipe.portions && <h4>Porciju skaicius: {recipe.portions}</h4>}
            {recipe.time && <h4>Uztruks laiko: {recipe.time}</h4>}
          </Info>
        </LeftColumn>
        <RightColumn>
          {productsList && (
            <Section title="Produktai: ">{productsList}</Section>
          )}
          <Section title="Paruosimas: " text={recipe.preparation} />
          {recipe.notes && <Section title="Pastabos: " text={recipe.notes} />}
          {categories && <Section title="Kategorijos: ">{categories}</Section>}
          <BottomContainer>
            <Author>
              <p>{"Autorius: "}</p>
              <a href="">
                <h5>{recipe.author}</h5>
              </a>
            </Author>
            <ButtonsBox>
              <Button size="small" action={handleEdit} text="Redaguoti" />
              <Separator />
              <Button
                size="small"
                action={() => console.log("oaoaoaoa")}
                text="Istrinti"
              />
            </ButtonsBox>
          </BottomContainer>
        </RightColumn>
      </Body>
    </div>
  );
}

RecipePage.propTypes = {
  match: PropTypes.object
};

const mapDispatchToProps = {
  navigateToRecipeForm
};

export default connect(
  null,
  mapDispatchToProps
)(RecipePage);
