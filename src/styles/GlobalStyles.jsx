import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /*---------- CSS Variabler ----------*/
  :root {
    --color-site-background: #000E16;
    --color-light-blue: #8dbad8;
    --color-light-grey: #E3DDDD;
    --color-header-footer: #605D5D;
    --color-white: #FFFFFF;
    --color-black: #000000;
    --border: 1px solid #E3DDDD;
    --text-h1: 'Barlow Condensed', Arial, Helvetica, sans-serif;
    --text-h2: 'Barlow Condensed', Arial, Helvetica, sans-serif;
    --text-h3: 'Protest Revolution', sans-serif;
    --text-p-and-span: 'Sarabun', Arial, Helvetica, sans-serif;
  }

  /*---------- Global Reset ----------*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-site-background);
    color: var(--color-white);
    font-family: var(--text-p-and-span);
  }

  h1 {
    font-size: clamp(44px, 4vw, 58px);
    font-family: var(--text-h1);
    text-align: center;
    margin: 80px 20px;
  }

  h2 {
    font-size: clamp(30px, 4vw, 38px);
    font-family: var(--text-h2);
    color: var(--color-white);
    text-align: center;
  }

  h3 {
    font-size: clamp(20px, 3vw, 28px);
    font-family: var(--text-h2);
  }

  h4, p, span {
    font-size: clamp(16px, 2vw, 18px);
    font-family: var(--text-p-and-span);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
