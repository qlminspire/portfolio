import { createGlobalStyle } from 'styled-components';

import Poppins from "../fonts/Poppins/Poppins-Regular.ttf";
import TheNext from "../fonts/TheNextFont.ttf";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url(${Poppins}) format('truetype');
    }

    @font-face {
        font-family: 'The Next';
        src: url(${TheNext}) format('truetype');
    }
`;
 
export default FontStyles;