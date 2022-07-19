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
    --textcolor: #196f3d;
    --primary-color: #196f3d;
    --secondary-color: #27ae60;

    --third-color: #58d68d;

    --gray: #7f8c8d;

    /* --lightcyan: rgb(224, 255, 255);
    --blue: rgb(70, 130, 180);
    --lightblue: rgb(176, 196, 222);
    --skyblue: rgb(135, 206, 235);  */
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
