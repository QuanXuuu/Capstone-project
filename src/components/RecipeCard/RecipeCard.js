import {BiCategoryAlt} from 'react-icons/bi';
import {BsClockHistory} from 'react-icons/bs';
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
        <BsClockHistory /> PrepTime: {prepTime}
        <small>mins</small>
      </p>
      <p>
        <BiCategoryAlt /> Category: {category}
      </p>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  margin: 0 auto;
  box-shadow: 1rem 0.5rem 1rem #e6e6e6;
  width: 300px;
`;

const CardHeader = styled.header`
  text-align: center;
  font-size: 1.6rem;
`;

const CardImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 70%;
`;
