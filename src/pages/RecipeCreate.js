import styled from 'styled-components';

import RecipeForm from '../components/RecipeForm/RecipeForm.js';

export default function RecipeCreate({addRecipe}) {
  return (
    <Container>
      <Headline>New Recipe</Headline>
      <RecipeForm addRecipe={addRecipe} />
    </Container>
  );
}

const Container = styled.main`
  padding: 1rem;
`;

const Headline = styled.h1`
  text-align: center;
`;
