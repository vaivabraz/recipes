import React from "react";
import PropTypes from "prop-types";
import { Section, Button } from "../common";
import styled from "styled-components";
import Colors from "../common/Colors";

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
    color: ${Colors.greenGrey};
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

function RecipePageView({ recipe, onEdit, onDelete }) {
  const image = require("../../images/vistiena.jpg");
  const categoriesNum = recipe.categories?.length;
  const ingredientsNum = recipe.ingredients?.length;

  const productsList = recipe.ingredients?.map((r) => (
    <li key={r.product + r.quantity}>
      {r.quantity} {r.product}
    </li>
  ));

  const categories = recipe.categories?.map((category, index) => {
    return (
      <a key={category} href="" className="fontCourier">
        {category}
        {index + 1 !== categoriesNum ? ", " : "."}
      </a>
    );
  });

  return (
    <div>
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
          {ingredientsNum ? (
            <Section title="Produktai: ">{productsList}</Section>
          ) : null}
          <Section title="Paruosimas: " text={recipe.preparation} />
          {recipe.notes && <Section title="Pastabos: " text={recipe.notes} />}
          {categoriesNum ? (
            <Section title="Kategorijos: ">{categories}</Section>
          ) : null}
          <BottomContainer>
            <Author>
              <p>{"Autorius: "}</p>
              <a href="">
                <h5>{recipe.author}</h5>
              </a>
            </Author>
            <ButtonsBox>
              <Button size="small" action={onEdit} text="Redaguoti" />
              <Separator />
              <Button size="small" action={onDelete} text="Istrinti" />
            </ButtonsBox>
          </BottomContainer>
        </RightColumn>
      </Body>
    </div>
  );
}

RecipePageView.propTypes = {
  recipe: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default RecipePageView;
