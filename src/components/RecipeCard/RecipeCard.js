import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function RecipeCard({id, name, prepTime, category, image}) {
  return (
    <CardWrapper>
      <CardImage src={image} alt={`Picture of a ${name}`} />
      <CardHeader>
        <Link key={id} to={`/recipes/${id}`}>
          {name}
        </Link>
      </CardHeader>
      <p>
        PrepTime: {prepTime}
        <small>mins</small>
      </p>
      <p> Category: {category}</p>
    </CardWrapper>
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

const CardImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;
