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
    --bgcolor: white;
    --textcolor: rgb(36, 113, 163);
    --lightcyan: rgb(224, 255, 255);
    --blue: rgb(70, 130, 180);
    --lightblue: rgb(176, 196, 222);
    --skyblue: rgb(135, 206, 235);
  }

  body {
    font-size: 1.125rem;
    font-family: 'Roboto Condensed', sans-serif;
    color: var(--textcolor);
    background-color: var(--bgcolor);
    line-height: 1.2;
    height: 100vh;
  }
`;
