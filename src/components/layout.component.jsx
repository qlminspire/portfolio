import React from "react"
import styled from "styled-components"

import { Helmet } from "react-helmet"

import FontStyles from "../styles/fontStyles"
import GlobalStyle from "../styles/globalStyles"

export const Layout = ({ children, className }) => (
	<LayoutContainer className={className}>
		<Helmet htmlAttributes={{ lang: "en" }}>
			<meta charSet="utf-8"></meta>
		</Helmet>
		<FontStyles />
		<GlobalStyle />
		{children}
	</LayoutContainer>
)

const LayoutContainer = styled.main`
	display: flex;
	justify-content: center;
	max-width: 1440px;
	margin: 0 auto;
`
