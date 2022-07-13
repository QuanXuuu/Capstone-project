import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    --bgcolor: whitesmoke;
    --textcolor: rgb(36, 113, 163);
    --lightcyan: rgb(224, 255, 255);
    --blue: rgb(70, 130, 180);
  }

  body {
    margin: 0 20px;
    font-size: 1.125rem;
    font-family: 'Roboto Condensed', sans-serif;
    color: var(--textcolor);
    background-color: var(--bgcolor);
    line-height: 1.5;
    max-width: 600px;
    height: 100vh;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
