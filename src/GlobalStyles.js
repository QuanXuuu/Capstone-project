import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1.125rem;
    font-family: 'Roboto Condensed', sans-serif;
    color: rgb(36, 113, 163);
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
