import React from "react"
import styled from "styled-components"

import { Flexbox, RoundIcon, A } from "./shared/components"

import EmailIcon from "../assets/icons/mail-outline.svg"
import LinkedInIcon from "../assets/icons/logo-linkedin.svg"
import GithubIcon from "../assets/icons/logo-octocat.svg"
import DownloadIcon from "../assets/icons/arrow-down-circle-outline.svg"

export const SocialComponent = ({ social, portfolioFile, portfolioFileName }) => {
	const { email, linkedin, github } = social

	return (
		<Flexbox>
			<EmailRoundIcon link={`mailto:${email}`} />
			<LinkedInRoundIcon link={linkedin} />
			<GithubRoundIcon link={github} />
			{portfolioFile && portfolioFileName && <DownloadRoundIcon link={portfolioFile} fileName={portfolioFileName} />}
		</Flexbox>
	)
}

export const EmailRoundIcon = ({ link }) => (
	<RoundLinkIcon link={link}>
		<EmailIcon />
	</RoundLinkIcon>
)

export const LinkedInRoundIcon = ({ link }) => (
	<RoundLinkIcon link={link}>
		<LinkedInIcon />
	</RoundLinkIcon>
)

export const GithubRoundIcon = ({ link }) => (
	<RoundLinkIcon link={link}>
		<GithubIcon />
	</RoundLinkIcon>
)

const RoundLinkIcon = ({ link, children }) => (
	<RoundIcon>
		<A href={link} target="_blank" rel="noopener noreferrer">
			{children}
		</A>
	</RoundIcon>
)

export const DownloadRoundIcon = ({ link, fileName }) => (
	<DownloadRoundIconContainer>
		<A href={link} download={fileName}>
			<DownloadIcon />
		</A>
	</DownloadRoundIconContainer>
)

const DownloadRoundIconContainer = styled(RoundIcon)`
	@media print {
		display: none;
	}
`
