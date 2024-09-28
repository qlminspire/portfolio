import * as React from "react"
import { Helmet } from "react-helmet"

import { Link } from "gatsby"

import { Layout } from "../components/layout.component"

import { Section } from "../components/shared/components"
import { H1, Paragraph } from "../components/shared/typography"

const NotFoundPage = () => (
	<Layout>
		<Helmet>
			<title>Page not found</title>
		</Helmet>
		<Section>
			<H1>Page not found</H1>
			<Paragraph>
				<Link to="/">Go back</Link>
			</Paragraph>
		</Section>
	</Layout>
)

export default NotFoundPage
