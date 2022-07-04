import styled from 'styled-components';

import NewRecipeForm from '../components/newRecipeForm/NewRecipeForm';

export default function RecipeCreate() {
  return (
    <Container>
      <Headline>New Recipe</Headline>
      <NewRecipeForm />
    </Container>
  );
}

const Container = styled.main`
  padding: 30px;
`;

const Headline = styled.h1`
  text-align: center;
`;
