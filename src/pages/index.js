import * as React from "react"
import styled from "styled-components"

import { Helmet } from "react-helmet"

import { ColorSettings } from "../styles/globalStyles.js"

import { Flexbox, Tag, Section, neumorphismBoxesStyles } from "../components/shared/components.js"
import { Paragraph, Small } from "../components/shared/typography.js"

import { Layout } from "../components/layout.component.jsx"
import { OptionalPortfolioSection } from "../components/portfolio-section.component.jsx"

import { PortfolioHeader } from "../components/header.component.jsx"

import { ProfilePhoto } from "../components/profile-photo.component.jsx"
import { Location } from "../components/location.component.jsx"
import { EducationExperience, WorkExperience } from "../components/experience.component.jsx"
import { EmailRoundIcon, LinkedInRoundIcon, GithubRoundIcon, DownloadRoundIcon } from "../components/social.component.jsx"

import { PORTFOLIO_METADATA as metadata } from "../data/portfolio-metadata"
import portfolioFilePath from "../assets/Uladzislau Karpovich - Full Stack Developer, Brest.pdf"

const IndexPage = () => {
	const { name, position, country, region, social, summary, skills, languages, education, experience } = metadata

	const location = `${region}, ${country}`

	return (
		<Layout>
			<Helmet>
				<title>{`${name} - ${position}`}</title>
			</Helmet>

			<DesktopLayout>
				<DesktopSidebar>
					<PhotoSection />
					<LocationSection location={location} />
					<AboutMeSection summary={summary} />
					<EducationSection education={education} />
					<SkillsSection skills={skills} />
					<LanguagesSection languages={languages} />
				</DesktopSidebar>

				<section>
					<HeaderSection name={name} position={position} social={social} />
					<ExperienceSection experience={experience} />
				</section>
			</DesktopLayout>

			<MobileLayout>
				<MobileHeader>
					<PhotoSection />
					<HeaderSection name={name} position={position} social={social} />
				</MobileHeader>

				<AboutMeSection summary={summary} />
				<SkillsSection skills={skills} />
				<LanguagesSection languages={languages} />
				<EducationSection education={education} />
				<ExperienceSection experience={experience} />
				<ContactsSection social={social} />
			</MobileLayout>
		</Layout>
	)
}

export const MobileLayout = styled.div`
	display: none;
	background: ${ColorSettings.sectionColor};
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

	@media screen and (max-width: 860px) {
		display: none;
		background-color: lavender;
	}
`

const DesktopSidebar = styled.section`
	background: ${ColorSettings.sectionColor};
	${neumorphismBoxesStyles};
	max-width: 320px;
	padding: 0px 12px;
`

const PhotoSection = () => (
	<Section>
		<ProfilePhoto />
	</Section>
)

const HeaderSection = ({ name, position, social }) => {
	const { email, linkedin, github } = social

	return (
		<PortfolioHeader name={name} position={position}>
			<Flexbox>
				<EmailRoundIcon link={`mailto:${email}`} />
				<LinkedInRoundIcon link={linkedin} />
				<GithubRoundIcon link={github} />
				<DownloadRoundIcon link={portfolioFilePath} />
			</Flexbox>
		</PortfolioHeader>
	)
}

const LocationSection = ({ location }) => (
	<Section>
		<Location location={location} />
	</Section>
)

const AboutMeSection = ({ summary }) => (
	<OptionalPortfolioSection title="About me" data={summary}>
		<Paragraph>{summary}</Paragraph>
	</OptionalPortfolioSection>
)

const SkillsSection = ({ skills }) => (
	<OptionalPortfolioSection title="Skills" data={skills}>
		<Flexbox gap={8}>
			{skills.map((skill) => (
				<Tag key={skill}>{skill}</Tag>
			))}
		</Flexbox>
	</OptionalPortfolioSection>
)

const LanguagesSection = ({ languages }) => (
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

const EducationSection = ({ education }) => (
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

const ExperienceSection = ({ experience }) => (
	<OptionalPortfolioSection title="Experience" data={experience}>
		<Flexbox flow="column" gap={24}>
			{experience.map(({ project, ...otherProps }) => (
				<WorkExperience key={otherProps.date} project={project} {...otherProps} />
			))}
		</Flexbox>
	</OptionalPortfolioSection>
)

const ContactsSection = ({ social }) => {
	const { email, linkedin, github } = social
	return (
		<OptionalPortfolioSection title="Contacts" data={social}>
			<Flexbox>
				<EmailRoundIcon link={`mailto:${email}`} />
				<LinkedInRoundIcon link={linkedin} />
				<GithubRoundIcon link={github} />
				<DownloadRoundIcon link={portfolioFilePath} />
			</Flexbox>
		</OptionalPortfolioSection>
	)
}

export default IndexPage
