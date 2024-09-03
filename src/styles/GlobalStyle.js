// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial, sans-serif';
  }

  body {
    background-color: #f0f0f0;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
