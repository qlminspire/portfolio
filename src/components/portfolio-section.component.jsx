import React from "react"
import styled from "styled-components"

import { ColorSettings } from "../styles/globalStyles"

import { H3 } from "./shared/typography"
import { Section } from "./shared/components"

import { withOptional } from "./utils/with-optional.component"

const PortfolioSection = ({ title, children }) => (
	<Section>
		<H3>{title}</H3>
		<PortfolioSectionDivider />
		{children}
	</Section>
)

export const OptionalPortfolioSection = withOptional(PortfolioSection)

const PortfolioSectionDivider = styled.div`
	background: ${ColorSettings.secondaryColor};
	max-width: 60%;
	height: 6px;
	margin-bottom: 16px;
`
