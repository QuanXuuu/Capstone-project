import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {GiCampCookingPot} from 'react-icons/gi';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

//import BackgroundImage from '../image/background.png';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/recipes`);
  };
  return (
    <PageContainer>
      <TitleContainer>
        <AppTitle>Your digital recipe book</AppTitle>
        <GiCampCookingPot id="icon-cooking" />
      </TitleContainer>

      <ButtonStart type="button" onClick={handleRedirect}>
        <span>Start cooking</span> <BsFillArrowRightCircleFill id="icon-start" />
      </ButtonStart>

      {/* <ImageContainer>
        <Image src={BackgroundImage} alt="food" />
      </ImageContainer> */}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  overflow: hidden;
`;

const AppTitle = styled.h1`
  /* text-align: center; */
  margin-top: 10rem;
  font-size: 3.8rem;
  color: var(--primary-color);
  /* border: 2px solid red; */
`;

const TitleContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;

  #icon-cooking {
    margin-top: 2rem;
    font-size: 8rem;
  }
`;
// const ImageContainer = styled.div`
//   width: 375px;
//   height: 100vh;
//   /* margin: 7rem auto 0 auto; */
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   object-fit: cover;
//   border-radius: 8px;
// `;

// const TextContainer = styled.div`
//   margin-top: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const ButtonStart = styled.button`
  /* border: 1px solid hotpink; */
  border: none;
  border-radius: 8px;
  font-size: 1.5rem;
  background-color: var(--secondary-color);
  color: var(--white);
  padding: 10px;
  /* margin: 1.5rem 0 0 9rem; */
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 30%;
  right: 2.5rem;

  #icon-start {
    margin-left: 0.5rem;
  }
`;
