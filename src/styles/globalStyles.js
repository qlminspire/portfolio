import { createGlobalStyle } from "styled-components"

export const COLOR_SETTINGS = {
	backgroundColor: "#E9E9E9",
	fontColor: "#525252",
	primaryColor: "#DEDDFF",
	secondaryColor: "#F4F4F4"
}

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
  }


  ul{
    margin: 0;
  }

  body {
    background: ${COLOR_SETTINGS.backgroundColor};
    color: ${COLOR_SETTINGS.fontColor};

    font-size: 1.5rem;
    font-family: Poppins, Montserrat, -apple-system, Roboto, sans-serif, serif;

    @media print {
      font-family: Montserrat;
    }
  }
`

export default GlobalStyle
