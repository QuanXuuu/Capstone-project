import styled from 'styled-components';

export default function RecipeView() {
  return (
    <Container>
      <Headline>Recipe View</Headline>
    </Container>
  );
}

const Container = styled.main`
  padding: 30px;
`;

const Headline = styled.h1`
  text-align: center;
`;
