import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ul{
    margin:0;
  }

  body {
    background: #f8f9eb;
    color: #424242;
    font-size: 13px;
    font-family: Poppins, -apple-system, Roboto, sans-serif, serif;
  }
`;
 
export default GlobalStyle;