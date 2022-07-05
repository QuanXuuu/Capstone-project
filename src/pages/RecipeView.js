import styled from 'styled-components';

export default function RecipeView() {
  return (
    <PageContainer>
      <PageHeadline>Recipe View</PageHeadline>
      <CardContainder>
        <CardHeader>Name:</CardHeader>
        <p>Preptime:</p>
        <p>Category:</p>
        <p>Ingredients:</p>
        <ul>
          <li>ingredient 1</li>
          <li>ingredient 2</li>
        </ul>
      </CardContainder>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  padding: 30px;
`;

const PageHeadline = styled.h1`
  text-align: center;
`;

const CardContainder = styled.div`
  background-color: whitesmoke;
  border: 1px solid gray;
  border-radius: 5%;
  padding: 10px;
`;

const CardHeader = styled.h2`
  text-align: center;
`;
