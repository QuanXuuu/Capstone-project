import {BiCategoryAlt} from 'react-icons/bi';
import {BsClockHistory} from 'react-icons/bs';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function RecipeCard({id, name, prepTime, category, image}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/recipes/${id}`);
  };

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

      <IconButtonRight type="button" onClick={handleRedirect}>
        <BsFillArrowRightCircleFill id="icon-arrow-right" onClick={handleRedirect} />
      </IconButtonRight>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  margin: 0.8rem auto;
  border-radius: 1rem;
  box-shadow: 2px 3px 9px 3px #b9b9b9;
  width: 280px;
  position: relative;
`;

const CardHeader = styled.header`
  font-size: 1.5rem;
  margin: 2rem 0 1.2rem 0;
  text-align: center;
`;

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--primary-color)',
};

const CardImageContainer = styled.div`
  width: 280px;
  height: 220px;
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
  padding-bottom: 3rem;
`;

const IconButtonRight = styled.button`
  background-color: var(--bgcolor);
  border: none;
  font-size: 1.8rem;
  color: var(--secondary-color);
  position: absolute;
  left: 230px;
  bottom: 0;
  cursor: pointer;
`;
