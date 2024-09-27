import React from "react"

import { RoundIcon, A } from "./shared/components"

import EmailIcon from "../assets/icons/mail-outline.svg"
import LinkedInIcon from "../assets/icons/logo-linkedin.svg"
import GithubIcon from "../assets/icons/logo-octocat.svg"
import DownloadIcon from "../assets/icons/arrow-down-circle-outline.svg"

export const EmailRoundIcon = ({ link }) => (
	<RoundIconContainer link={link}>
		<EmailIcon />
	</RoundIconContainer>
)

export const LinkedInRoundIcon = ({ link }) => (
	<RoundIconContainer link={link}>
		<LinkedInIcon />
	</RoundIconContainer>
)

export const GithubRoundIcon = ({ link }) => (
	<RoundIconContainer link={link}>
		<GithubIcon />
	</RoundIconContainer>
)

export const DownloadRoundIcon = ({ link }) => (
	<RoundIcon>
		<A href={link} download>
			<DownloadIcon />
		</A>
	</RoundIcon>
)

const RoundIconContainer = ({ link, children }) => (
	<RoundIcon>
		<A href={link} target="_blank" rel="noopener noreferrer">
			{children}
		</A>
	</RoundIcon>
)
