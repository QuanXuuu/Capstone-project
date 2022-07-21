import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --bgcolor: #ffffff;
    --primary-color: #27ae60;
    --secondary-color: #007d72;
    --tertiary-color: #ffcc00;
    --white: #ffffff;
    --gray: #7f8c8d;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.125rem;
    font-family: 'Roboto Condensed', sans-serif;
    color: var(--secondary-color);
    background-color: var(--bgcolor);
    line-height: 1.2;
  }

  main {
    overflow-y: auto;
  }
`;
