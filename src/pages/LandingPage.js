import styled from 'styled-components';

import ButtonStart from '../components/Buttons/ButtonStart/ButtonStart';
import AppImage from '../image/background.png';

export default function LandingPage() {
  return (
    <PageContainer>
      <ImageContainer>
        <Image src={AppImage} alt="food" />
      </ImageContainer>

      <TextWrapper>
        <AppTitle>Your digital</AppTitle>
        <AppTitle>recipe book</AppTitle>
      </TextWrapper>

      <ButtonStart />
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
