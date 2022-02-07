import styled from 'styled-components';

import {
    Social
} from './social.component';

import { neumorphismBoxesStyles } from '../../styles/components';

export const SocialContainer = styled(Social)`
    display: flex;
    justify-content: space-evenly;
    width:120px;
    padding:2px;

    li{
        list-style:none;

        display: inline-flex;
        align-items: center;

        a{
            display: inline-flex;
            align-items: center;
        }
    }
`;

export const SocialLinksFixed = styled(SocialContainer) `
    ${neumorphismBoxesStyles}
    position: fixed;
    flex-direction: column;
    align-items:center;
    height: 120px;
    width: 42px;
    top: 50%;
    left: 30px;

    @media (max-width:1024px){
        position: relative;
        width:120px;
        flex-direction: row;
        height:auto;
        left:0;
        top:0;
    }
`;