import styled from 'styled-components';

import RecipeForm from '../components/recipeForm/RecipeForm';

export default function RecipeCreate() {
  return (
    <Container>
      <Headline>New Recipe</Headline>
      <RecipeForm />
    </Container>
  );
}

const Container = styled.main`
  padding: 30px;
`;

const Headline = styled.h1`
  text-align: center;
`;
