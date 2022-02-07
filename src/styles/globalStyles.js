import { createGlobalStyle } from 'styled-components';

export const ColorSettings = {
  fontColor: "#424242",
  fontOptionalColor: "#353535",
  backgroundColor:"#f8f9eb"
};

const GlobalStyle = createGlobalStyle`
  ul{
    margin:0;
  }

  body {
    background: ${ColorSettings.backgroundColor};
    color: ${ColorSettings.fontColor};
    font-size: 13px;
    font-family: Poppins, -apple-system, Roboto, sans-serif, serif;
  }
`;
 
export default GlobalStyle;