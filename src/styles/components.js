import styled, { css } from "styled-components";

export const neumorphismBoxesStyles = css`
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  box-shadow:
    -6px -6px 12px rgba(255, 255, 255, 0.5),
    6px 6px 12px rgba(209, 205, 199, 0.5);
  border-radius: 20px;
`;

export const Section = styled.section`
  ${({ vertical }) => (vertical ? "" : "flex-flow:column;")};
  ${({ inline }) => (inline ? "display: inline;" : "display:flex;")}
  ${({ size }) =>
    size === "small" ? "padding: 5px 10px;" : "padding: 24px 36px;"}
    ${neumorphismBoxesStyles}
`;

export const Tag = styled.div`
  padding: 7px 14px;
  display: inline-block;
  ${neumorphismBoxesStyles}
`;

export const Flexbox = styled.div`
  display: flex;
  flex-flow: ${({ flow }) => (flow === "column" ? "column;" : "row;")};
  flex-wrap: wrap;
  gap: ${({ gap }) => (!gap ? "8px;" : `${gap}px;`)};
`;
