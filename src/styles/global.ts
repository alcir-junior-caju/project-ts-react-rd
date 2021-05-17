import { createGlobalStyle } from 'styled-components';

import BackgroundImage from '@assets/bg.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${BackgroundImage}) top left #ccc;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Open Sans', Helvetica, sans-serif, arial;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
