import { createGlobalStyle } from 'styled-components';

import BackgroundImage from '@assets/bg.jpg';

export default createGlobalStyle`
  :root {
    /* Variables */
    --primary: #007f56;
    --text: #868686;
    --auxiliary1: #fe9481;
    --auxiliary2: #fcda92;
    --auxiliary3: #9c8cb9;
    --commonWhite: #fff;
    --commonBlack: #000;
    --commonGrey: #efefef;
    --background: var(--commonGrey) url(${BackgroundImage}) top left;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Open Sans', Helvetica, sans-serif, arial;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 1160px;
    margin: 0 auto;
    padding: 10px 40px 20px;

    @media (max-width: 575.98px) {
      max-width: 100%;
      padding: 10px;
    }
  }
`;
