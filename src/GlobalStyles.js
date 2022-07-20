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
    --bgcolor: #eafaf1;
    --textcolor: #196f3d;
    --primary-color: #196f3d;
    --secondary-color: #27ae60;
    --third-color: #58d68d;
    --white: #ffffff;
    --gray: #7f8c8d;
  }

  body {
    font-size: 1.125rem;
    font-family: 'Roboto Condensed', sans-serif;
    color: var(--primary-color);
    background-color: var(--bgcolor);
    line-height: 1.2;
    height: 100vh;
  }
`;
