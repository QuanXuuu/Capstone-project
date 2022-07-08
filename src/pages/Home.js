import styled from 'styled-components';

import RecipeCard from '../components/RecipeCard/RecipeCard';
import {getFromLocal} from '../lib/localStorage';

export default function Home() {
  const recipes = getFromLocal('recipes');

  const recipeCards = recipes.map(recipe => (
    <RecipeCard
      key={recipe.id}
      id={recipe.id}
      image={recipe.imgURL}
      name={recipe.name}
      prepTime={recipe.prepTime}
      category={recipe.category}
    />
  ));

  return (
    <Container>
      <Headline>Yumme</Headline>
      <SubHeadline>Your digital recipe book</SubHeadline>

      <CardContainer>{recipeCards}</CardContainer>
    </Container>
  );
}

const Container = styled.main`
  padding: 30px;
`;

const Headline = styled.h1`
  text-align: center;
`;

const SubHeadline = styled.h2`
  margin-top: -20px;
  text-align: center;
  font-weight: 300;
`;

const CardContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 20px;
`;
