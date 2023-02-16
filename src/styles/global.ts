import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gotham Pro';
    src: url('/fonts/GothamProRegular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham Pro';
    src: url('/fonts/GothamProBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham Pro';
    src: url('/fonts/GothamProBlack.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  html, body {
    font-size: 100%;
    text-rendering: optimizeSpeed;
    font-family: Gotham Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  *::after, *::before {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html, body, #__next  {
    height: 100%;
  }
`;
