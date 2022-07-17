import {BiCategoryAlt} from 'react-icons/bi';
import {BsClockHistory} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function RecipeCard({id, name, prepTime, category, image}) {
  return (
    <CardWrapper>
      <CardImageContainer>
        <CardImage src={image} alt={`Picture of a ${name}`} />
      </CardImageContainer>

      <CardHeader>
        <Link key={id} to={`/recipes/${id}`} style={linkStyle}>
          {name}
        </Link>
      </CardHeader>
      <CardDetailContainer>
        <p>
          <BsClockHistory /> {prepTime}
          <small>mins</small>
        </p>
        <p>
          <BiCategoryAlt /> {category}
        </p>
      </CardDetailContainer>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  margin: 0.8rem auto;
  border-radius: 1rem;
  box-shadow: 2px 3px 9px 3px #b9b9b9;
  width: 280px;
`;

const CardHeader = styled.header`
  font-size: 1.5rem;
  margin-top: 2rem;
  text-align: center;
`;

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--textcolor)',
};

const CardImageContainer = styled.div`
  width: 280px;
  height: 250px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
`;

const CardDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 1.5rem;
`;
