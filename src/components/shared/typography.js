import styled, { css } from "styled-components"

import { ColorSettings } from "../../styles/globalStyles"

const commonHeadingStyles = css`
	margin: 0 0 12px 0;
	font-family: TheNext, Montserrat, sans-serif;
`

export const H1 = styled.h1`
	font-size: 2.2em;
	${commonHeadingStyles};
`

export const H2 = styled.h2`
	font-size: 1.5em;
	${commonHeadingStyles}
`

export const H3 = styled.h3`
	font-size: 1.4em;
	${commonHeadingStyles}
`

export const H4 = styled.h4`
	font-size: 1.2em;
	${commonHeadingStyles}
`

export const H5 = styled.h5`
	font-size: 1em;
	${commonHeadingStyles}
`

export const Paragraph = styled.p`
	margin: 0;
`

export const Small = styled.span`
	font-size: 0.96em;
	color: ${ColorSettings.fontOptionalColor};
`

export const Bold = styled.span`
	font-weight: 600;
`
