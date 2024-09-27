import { createGlobalStyle } from "styled-components"

export const ColorSettings = {
	fontColor: "#424242",
	fontOptionalColor: "#353535",
	backgroundColor: "#E9E9E9",
	sectionColor: "#F4F4F4",
	secondaryColor: "#DEDDFF"
}

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
  }


  ul{
    margin:0;
  }

  body {
    background: ${ColorSettings.backgroundColor};
    color: ${ColorSettings.fontColor};
    font-size: 1.5rem;
    font-family: Poppins, Montserrat, -apple-system, Roboto, sans-serif, serif;
  }
`

export default GlobalStyle
