import { createGlobalStyle } from 'styled-components';

const GlobalStyle =createGlobalStyle`
  body {
    background-color: #e7e6ed;
    font-family: "helvetica neue", Helvetica, Arial, sans-serif;

    margin: 0;
    font-size: 16px;
  }

  h1, h2, h3, h4 {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
