import styled from 'styled-components';

import BackgroundImage from '../image/background.png';

export default function LandingPage() {
  return (
    <div>
      <ImageContainer>
        <Image src={BackgroundImage} alt="food" />
      </ImageContainer>
      <Text>Your digital recipe book</Text>
    </div>
  );
}

const ImageContainer = styled.div`
  width: 375px;
  height: 450px;
  margin: 7rem auto 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 8px;
`;

const Text = styled.h1`
  margin-top: -3rem;
  text-align: center;
  color: var(--bgcolor);
`;
