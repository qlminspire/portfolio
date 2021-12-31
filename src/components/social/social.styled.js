import styled from 'styled-components';

import {
    Social
} from './social.component';

export const SocialFixed = styled(Social) `
    position: fixed;
    display: flex;
    justify-content: space-evenly;
`;

export const SocialFixedLeft = styled(SocialFixed) `
    flex-direction: column;
    top: 50%;
    left: 30px;
    height: 120px;
`;