import styled, {
    css
} from 'styled-components';

const neumorphismBoxesStyles = css `
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.5), 6px 6px 12px rgba(209, 205, 199, 0.5);
    border-radius: 40px;
`;

export const Section = styled.section `
    ${({ vertical  }) => vertical ? "" : "flex-flow:column;" };
    ${({ inline }) => inline ? "display: inline;": "display:flex;"}
    ${({ size }) => size === "small" ? "padding: 5px 10px;" : "padding: 24px;"}
    ${neumorphismBoxesStyles}
`;

export const Tag = styled.span `
    padding: 7px 14px;
    ${neumorphismBoxesStyles}
`;

export const Flexbox = styled.div `
    display: flex;
    flex-flow: ${({ flow }) => flow === "column" ? "column;" : "row;"};
    gap: ${({ gap }) => !gap ? "8px" : gap };
`;