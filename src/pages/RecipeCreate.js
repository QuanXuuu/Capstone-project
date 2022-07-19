import styled from 'styled-components';

import RecipeForm from '../components/RecipeForm/RecipeForm.js';

export default function RecipeCreate({onAddRecipe}) {
  return (
    <Container>
      <Headline>New Recipe</Headline>
      <RecipeForm onAddRecipe={onAddRecipe} />
    </Container>
  );
}

const Container = styled.main`
  padding: 1rem;
`;

const Headline = styled.h1`
  text-align: center;
  margin: 3em 0 0.5em 0;
  font-weight: 400;
  font-size: 2rem;
`;
