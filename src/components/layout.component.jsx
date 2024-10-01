import React from "react"
import styled from "styled-components"

import { Helmet } from "react-helmet"

import FontStyles from "../styles/fontStyles"
import GlobalStyle from "../styles/globalStyles"

import { COLOR_SETTINGS } from "../styles/globalStyles.js"

import { Flexbox, Tag, Section, neumorphismBoxesStyles } from "../components/shared/components.js"
import { Paragraph, Small } from "../components/shared/typography.js"

import { OptionalPortfolioSection } from "../components/portfolio-section.component.jsx"

import { PortfolioHeader } from "../components/header.component.jsx"

import { ProfilePhotoContainer } from "../components/profile-photo.component.jsx"
import { Location } from "../components/location.component.jsx"
import { EducationExperience, WorkExperience } from "../components/experience.component.jsx"
import { SocialComponent } from "../components/social.component.jsx"
import { StaticImage } from "gatsby-plugin-image"

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

export const MobileLayout = styled.div`
	display: none;
	background: ${COLOR_SETTINGS.secondaryColor};
	${neumorphismBoxesStyles};
	padding: 0px 12px;

	@media screen and (max-width: 860px) {
		display: block;
	}
`

export const MobileHeader = styled.div`
	display: flex;

	@media screen and (max-width: 520px) {
		flex-flow: column;
	}
`

export const DesktopLayout = styled.div`
	display: flex;
	gap: 24px;
	margin: 36px auto;

	@media print {
		margin: 6px auto;
	}

	@media screen and (max-width: 1080px) {
		margin: 8px auto;
	}

	@media screen and (max-width: 860px) {
		display: none;
	}
`

export const DesktopSidebar = styled.aside`
	background: ${COLOR_SETTINGS.secondaryColor};
	${neumorphismBoxesStyles};
	max-width: 320px;
	padding: 0px 12px;
`

export const PhotoSection = () => (
	<Section>
		<ProfilePhotoContainer>
			<StaticImage src="../data/portfolio-photo.jpg"></StaticImage>
		</ProfilePhotoContainer>
	</Section>
)

export const HeaderSection = ({ name, position, social, portfolioFile, portfolioFileName }) => (
	<PortfolioHeader name={name} position={position}>
		<SocialComponent social={social} portfolioFile={portfolioFile} portfolioFileName={portfolioFileName} />
	</PortfolioHeader>
)

export const LocationSection = ({ location }) => (
	<Section>
		<Location location={location} />
	</Section>
)

export const AboutMeSection = ({ summary }) => (
	<OptionalPortfolioSection title="About me" data={summary}>
		<Paragraph>{summary}</Paragraph>
	</OptionalPortfolioSection>
)

export const SkillsSection = ({ skills }) => (
	<OptionalPortfolioSection title="Skills" data={skills}>
		<Flexbox gap={8}>
			{skills.map((skill) => (
				<Tag key={skill}>{skill}</Tag>
			))}
		</Flexbox>
	</OptionalPortfolioSection>
)

export const LanguagesSection = ({ languages }) => (
	<OptionalPortfolioSection title="Languages" data={languages}>
		<Flexbox gap={8}>
			{languages.map(({ language, level }) => (
				<Tag key={language}>
					<Paragraph>{language}</Paragraph>
					<Small>{level}</Small>
				</Tag>
			))}
		</Flexbox>
	</OptionalPortfolioSection>
)

export const EducationSection = ({ education }) => (
	<OptionalPortfolioSection title="Education" data={education}>
		<Flexbox flow="column" gap={8}>
			{education.map(({ summary, ...otherProps }) => (
				<EducationExperience key={otherProps.date} {...otherProps}>
					<Small>{summary}</Small>
				</EducationExperience>
			))}
		</Flexbox>
	</OptionalPortfolioSection>
)

export const ExperienceSection = ({ experience }) => (
	<OptionalPortfolioSection title="Experience" data={experience}>
		<Flexbox flow="column" gap={24}>
			{experience.map(({ project, ...otherProps }) => (
				<WorkExperience key={otherProps.date} project={project} {...otherProps} />
			))}
		</Flexbox>
	</OptionalPortfolioSection>
)

export const ContactsSection = ({ social, portfolioFile, portfolioFileName }) => (
	<OptionalPortfolioSection title="Contacts" data={social}>
		<SocialComponent social={social} portfolioFile={portfolioFile} portfolioFileName={portfolioFileName} />
	</OptionalPortfolioSection>
)
