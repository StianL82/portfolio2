import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.typography.text};
    background-color: ${(props) => props.theme.color.bodyBg};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
  }

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}

  *, *::before, *::after {
    box-sizing: border-box;
  }

h1 {
  text-align: center;
  margin: 0;
  padding: 20px 0;
  font-weight: 700;
  font-family: ${(props) => props.theme.typography.h1};
  font-size: clamp(40px, 6vw, 70px);
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 90%;
  margin: 0 auto;
  background: linear-gradient(90deg, ${(props) => props.theme.color.lightBlue}, ${(props) => props.theme.color.white});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}



h2 {
  text-align: center;
  margin: 0;
  padding: 10px 0;
  font-weight: 700;
  font-family: ${(props) => props.theme.typography.h2};
  font-size: clamp(40px, 6vw, 50px);
  background: linear-gradient(90deg, ${(props) => props.theme.color.lightBlue}, ${(props) => props.theme.color.white});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


  h3, h4, h5, h6 {
    margin: 0;
    padding: 10px 0;
    font-weight: 700;
    font-family: ${(props) => props.theme.typography.h3};
  }

  p {
    line-height: 1.6;
    margin: 10px 0;
    font-family: ${(props) => props.theme.typography.text};
  }
`;

export default GlobalStyles;
