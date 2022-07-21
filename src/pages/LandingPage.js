import {AiOutlineArrowRight} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import Navigation from '../components/Navigation/Navigation';
import AppImage from '../image/background.png';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/recipes`);
  };
  return (
    <PageContainer>
      <Navigation />
      <ImageContainer>
        <Image src={AppImage} alt="food" />
      </ImageContainer>

      <TextWrapper>
        <AppTitle>Your digital</AppTitle>
        <AppTitle>recipe book</AppTitle>
      </TextWrapper>

      <ButtonStart type="button" onClick={handleRedirect}>
        <span>Start cooking</span> <AiOutlineArrowRight id="icon-start" />
      </ButtonStart>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  overflow: hidden;
`;

const AppTitle = styled.h1`
  text-align: center;
  margin-top: 0.8rem;
  font-size: 2.2rem;
  font-weight: 500;
  font-family: 'nothing you could do', sans-serif;
  color: var(--secondary-color);
`;

const ImageContainer = styled.div`
  width: 375px;
  height: 380px;
  margin: 5rem auto 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  margin-top: 1.8rem;
  line-height: 1.8rem;
`;

const ButtonStart = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'nothing you could do', sans-serif;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 6%;
  right: 1.5rem;

  #icon-start {
    margin-left: 0.5rem;
    color: var(--white);
  }
`;
