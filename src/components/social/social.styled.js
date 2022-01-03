import styled from 'styled-components';

import {
    Social
} from './social.component';

export const SocialLinks = styled(Social) `
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 120px;
    top: 50%;
    left: 30px;

    @media (max-width:1024px){
        position: relative;
        width:120px;
        flex-direction: row;
        height:40px;
    }
`;