import styled from 'styled-components';

export default function RecipeCard({id, name, prepTime, category, image}) {
  return (
    <CardWrapper>
      <CardImage src={image} alt={name} />
      <CardHeader>{name}</CardHeader>
      <p>
        {prepTime}
        <small>mins</small>
      </p>
      <p> {category}</p>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  margin: 20px 0;
  box-shadow: 1rem 0.5rem 1rem #e6e6e6;
`;

const CardHeader = styled.header`
  text-align: center;
  font-size: 1.3rem;
`;

const CardImage = styled.img`
  max-width: 270px;
  height: auto;
`;
