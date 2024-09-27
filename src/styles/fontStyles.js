import { createGlobalStyle } from "styled-components"

import Poppins from "../assets/fonts/Poppins-Regular.ttf"
import TheNext from "../assets/fonts/TheNextFont.ttf"
import Montserrat from "../assets/fonts/Montserrat.ttf"

const FontStyles = createGlobalStyle`

    @font-face {
        font-family: 'TheNext';
        src: url(${TheNext}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins';
        src: url(${Poppins}) format('truetype');
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('truetype');
    }

`

export default FontStyles
