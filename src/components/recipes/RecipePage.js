import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Section, Button } from "../common";
import "./css/recipePage.css";
// import { getRecipeBySlug } from "../../api/recipesApi";

function RecipePage(props) {
  const [recipe, setRecipe] = useState({
    slug: props.match.params.slug,
    id: null,
    title: "",
    author: "",
    date: "",
    portions: null,
    time: null,
    ingredients: [],
    preparation: "",
    image: "",
    categories: [],
    notes: ""
  });

  useEffect(() => {
    // if (!recipe.id) getRecipeBySlug(recipe.slug);

    setRecipe({
      id: 123123,
      title: "Kazkas labai skanaus",
      preparation: `As collected deficient objection by it discovery sincerity curiosity.
      Quiet decay who round three world whole has mrs man. Built the china
      there tried jokes which gay why. Assure in adieus wicket it is. But
      spoke round point and one joy. Offending her moonlight men sweetness see
      unwilling. Often of it tears whole oh balls share an. Oh to talking
      improve produce in limited offices fifteen an. Wicket branch to answer
      do we. Place are decay men hours tiled. If or of ye throwing friendly
      required. Marianne interest in exertion as. Offering my branched
      confined oh dashwood.`,
      author: "VaivaBraz",
      date: "2019 09.22",
      portions: 2,
      time: "40min",
      ingredients: [
        { howMuch: "5 saukstai", what: "grietines" },
        { howMuch: "400g", what: "vistiena" },
        { howMuch: "2 vnt", what: "porai" },
        { howMuch: "3", what: "bulves" }
      ],
      image: "vistiena.jpg",
      categories: [
        "vakariene",
        "greitai",
        "kjskdhsbd",
        "kjshdukasydi",
        "sakhydiuasydias  ",
        "dfsdf",
        "ewhf;ohefbf efoieufe",
        "lhefuhelufhsiuf"
      ],
      notes:
        "neperkepti, labai greitai sudega, galima pagardinti cesnaku ar dar kazkuo smagiu"
    });
  }, []);

  const image = recipe.image && require("../../images/" + recipe.image);
  const categoriesNum = recipe.categories.length;

  const productsList = recipe.ingredients.map(r => (
    <li key={r.what + r.howMuch}>
      {r.howMuch} {r.what}
    </li>
  ));

  const categories = recipe.categories.map((category, index) => {
    return (
      <a key={category} href="" className="fontCourier">
        {category}
        {index + 1 !== categoriesNum ? ", " : "."}
      </a>
    );
  });

  return (
    <div className="pageFlexContainer border">
      <h1 className="title alignCenter">{recipe.title}</h1>
      <div className="recipeBody flexColumn">
        <div className="leftColumn alignCenter">
          <img
            className="image border"
            src={image}
            title={recipe.title}
            alt={recipe.title}
          />
          <div className="info">
            {recipe.portions && <h4>Porciju skaicius: {recipe.portions}</h4>}
            {recipe.time && <h4>Uztruks laiko: {recipe.time}</h4>}
          </div>
        </div>
        <div className="rightColumn">
          <Section title="Produktai: ">{productsList}</Section>
          <Section title="Paruosimas: " text={recipe.preparation} />
          {recipe.notes && <Section title="Pastabos: " text={recipe.notes} />}
          <Section title="Kategorijos: ">{categories}</Section>
          <div className="authorEdit">
            <div className="author">
              <p>{"Autorius: "}</p>
              <a href="">
                <h5>{recipe.author}</h5>
              </a>
            </div>
            <div className="buttons">
              <Button
                className="separateButtons"
                size="small"
                action={() => console.log("oaoaoaoa")}
                text="Redaguoti"
              />
              <Button
                size="small"
                action={() => console.log("oaoaoaoa")}
                text="Istrinti"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RecipePage.propTypes = {
  match: PropTypes.object
};

export default RecipePage;
