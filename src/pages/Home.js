import styled from 'styled-components';

import Navigation from '../components/Navigation/Navigation';
import RecipeCard from '../components/RecipeCard/RecipeCard';

export default function Home({recipes}) {
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
      <Navigation />
      <Headline>Your digital recipe book</Headline>

      <CardContainer>{recipeCards}</CardContainer>
    </Container>
  );
}

const Container = styled.main`
  padding: 40px 20px;
  margin: 0 auto;
`;

const Headline = styled.h1`
  text-align: center;
  margin: 2.5em 0 1em 0;
  font-weight: 400;
  font-size: 1.7rem;
  font-family: 'nothing you could do', sans-serif;
  color: var(--secondary-color);
`;

const CardContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
`;
