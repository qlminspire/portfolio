import styled, { css } from "styled-components"

import { ColorSettings } from "../../styles/globalStyles"

export const neumorphismBoxesStyles = css`
	border: 1px solid rgba(255, 255, 255, 0.2);
	box-sizing: border-box;
	border-radius: 20px;
	box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.5), 6px 6px 12px rgba(209, 205, 199, 0.5);

	@media print {
		box-shadow: none;
	}
`

export const Section = styled.section`
	display: flex;
	flex-flow: column;
	justify-content: center;
	padding: 8px;
	margin: 8px;
`

export const A = styled.a`
	padding: 0;
	margin: 0;
	display: flex;
	color: ${ColorSettings.fontColor};
`

export const Tag = styled.div`
	font-size: 0.95em;
	padding: 7px 14px;
	display: inline-block;
	${neumorphismBoxesStyles}

	:hover {
		cursor: default;
	}

	@media print {
		background: ${ColorSettings.backgroundColor};
	}
`

export const Flexbox = styled.div`
	display: flex;
	flex-flow: ${({ flow }) => (flow === "column" ? "column;" : "row;")};
	flex-wrap: wrap;
	gap: ${({ gap }) => (!gap ? "8px;" : `${gap}px;`)};
`

export const RoundIcon = styled.div`
	padding: 8px;
	border-radius: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: ${ColorSettings.primaryColor};

	${neumorphismBoxesStyles};

	svg {
		fill: ${ColorSettings.fontColor};
		width: 28px;
		height: 28px;
	}

	:hover {
		background: ${ColorSettings.secondaryColor};
	}
`
