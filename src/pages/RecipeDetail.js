import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import {getFromLocal} from '../lib/localStorage';

export default function RecipeDetail() {
  let params = useParams();
  const local = getFromLocal('recipes');

  const recipeData = local.filter(singleRecipe => singleRecipe.id === params.id);

  const ingredientItems = recipeData[0].ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>);

  return (
    <DetailCard>
      <DetailHeader>{recipeData[0].name}</DetailHeader>
      <DetailImage src={recipeData[0].imgURL} alt={`Picture of a ${recipeData[0].name}`} />
      <p>
        PrepTime: {recipeData[0].prepTime}
        <small>mins</small>
      </p>
      <p> Category: {recipeData[0].category}</p>
      <DetailIngredientsList> Ingredients:</DetailIngredientsList>
      <ul>{ingredientItems}</ul>
    </DetailCard>
  );
}

const DetailCard = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  margin: 30px;
  box-shadow: 1rem 0.5rem 1rem #e6e6e6;
  max-width: 300px;
`;

const DetailHeader = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
`;

const DetailIngredientsList = styled.h2`
  font-weight: lighter;
  font-size: 1.2rem;
`;

const DetailImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  margin-top: 20px;
`;
