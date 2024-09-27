import React from "react"

import { H1, H2 } from "./shared/typography"
import { Section } from "./shared/components"

export const PortfolioHeader = ({ name, position, children }) => (
	<Section>
		<H1>{name}</H1>
		<H2>{position}</H2>
		{children}
	</Section>
)
