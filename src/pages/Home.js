import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Headline>Yumme</Headline>
      <p>Your digital recipe book</p>
    </Container>
  );
}

const Container = styled.main`
  padding: 30px;
`;

const Headline = styled.h1`
  text-align: center;
`;
