import {AiOutlineArrowRight} from 'react-icons/ai';
import {BiCategoryAlt} from 'react-icons/bi';
import {BsClockHistory} from 'react-icons/bs';
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
        <TimeContainer>
          <BsClockHistory id="icon-time" />
          <TimeSpan>{prepTime}mins</TimeSpan>
        </TimeContainer>

        <CategoryContainer>
          <BiCategoryAlt id="icon-category" /> <CategorySpan>{category}</CategorySpan>
        </CategoryContainer>
      </CardDetailContainer>

      <ButtonWrapper>
        <ButtonRight type="button" onClick={handleRedirect}>
          <span>More</span>
          <AiOutlineArrowRight id="icon-arrow-right" />
        </ButtonRight>
      </ButtonWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  margin: 0.8rem auto;
  border-radius: 1rem;
  box-shadow: 2px 3px 9px 3px #b9b9b9;
  width: 280px;
  position: relative;
  color: var(--secondary-color);
`;

const CardHeader = styled.header`
  font-size: 1.5rem;
  margin: 2rem 0 1.2rem 0;
  text-align: center;
`;

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--secondary-color)',
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
  justify-content: space-evenly;
  padding-bottom: 3rem;

  #icon-time,
  #icon-category {
    font-size: 1.5rem;
    color: var(--secondary-color);
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TimeSpan = styled.span`
  margin: 0.15rem 0 0 0.5rem;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CategorySpan = styled.div`
  margin: 0.15rem 0 0 0.5rem;
`;

const ButtonWrapper = styled.div`
  margin: 1.2rem 0;
`;

const ButtonRight = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'nothing you could do', sans-serif;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 5px 12px;
  cursor: pointer;
  position: absolute;
  bottom: 4%;
  right: 8%;
  display: flex;
  align-items: center;

  #icon-arrow-right {
    margin-left: 0.5rem;
    color: var(--white);
  }
`;
