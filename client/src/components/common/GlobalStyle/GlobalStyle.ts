import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0; 
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p, h1, h2, h3, h4, h5, h6, ul {
    margin: 0
  }

  * {  
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
