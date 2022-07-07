import styled from 'styled-components';

export default function RecipeDetail(id, name, prepTime, category, image) {
  return (
    // <CardWrapper>
    //   <CardHeader>{name}</CardHeader>
    //   <p>
    //     PrepTime: {prepTime}
    //     <small>mins</small>
    //   </p>
    //   <p> Category: {category}</p>
    // </CardWrapper>
    <p>Test</p>
  );
}

const CardWrapper = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  margin: 20px 0;
  box-shadow: 1rem 0.5rem 1rem #e6e6e6;
  max-width: 300px;
`;

const CardHeader = styled.header`
  text-align: center;
  font-size: 1.3rem;
`;
