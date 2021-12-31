import styled, {css} from 'styled-components';

const commonHeadingStyles = css`
    margin: 0 0 12px 0;
    font-family: 'The Next', sans-serif;
`;

export const H1 = styled.h1 `
    font-size: 36px;
    ${commonHeadingStyles}
`;

export const H2 = styled.h2 `
    font-size: 24px;
    ${commonHeadingStyles}
`;

export const Paragraph = styled.p `
    font-size: 13px;
    margin: 0;
`;

export const Small = styled.span`
    font-size:11px;
    color: #353535;
`;

export const Bold = styled.span `
    font-weight: 600;
`;