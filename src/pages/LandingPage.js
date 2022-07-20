import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import styled from 'styled-components';

// import BackgroundImage from '../image/background.png';

export default function LandingPage() {
  return (
    <PageContainer>
      {/* <TextContainer> */}
      <AppTitle>Your digital recipe book</AppTitle>
      <ButtonStart>
        <span>Start cooking</span> <BsFillArrowRightCircleFill id="icon-start" />
      </ButtonStart>
      {/* </TextContainer> */}
      {/* 
      <ImageContainer>
        <Image src={BackgroundImage} alt="food" />
      </ImageContainer> */}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin-top: 5rem;
  background-image: url('https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW4lMjB2ZWdldGFibGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60');

  width: 100%;
  height: 100vh;
`;

const AppTitle = styled.h1`
  font-size: 3rem;
  color: var(--primary-color);
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
  border: none;
  border-radius: 6px;
  font-size: 1.5rem;
  background-color: var(--secondary-color);
  color: var(--white);
  padding: 10px;
  /* margin: 1.5rem 0 0 9rem; */
  display: flex;
  align-items: center;

  #icon-start {
    margin-left: 0.5rem;
  }
`;
