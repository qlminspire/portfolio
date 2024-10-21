import * as React from "react"

import { Helmet } from "react-helmet"

import {
	Layout,
	DesktopLayout,
	DesktopSidebar,
	MobileLayout,
	MobileHeader,
	PhotoSection,
	LocationSection,
	HeaderSection,
	AboutSection,
	SkillsSection,
	LanguagesSection,
	EducationSection,
	ExperienceSection,
	ContactsSection
} from "../components/layout.component.jsx"

import { PORTFOLIO_METADATA } from "../data/portfolio-metadata"
import portfolioPdf from "../data/portfolio.pdf"

const CV_POSITION = "DOTNET"

const IndexPage = () => {
	const { name, position, country, region, social, summary, skills, languages, education, experience } = PORTFOLIO_METADATA

	const location = `${region}, ${country}`

	const portfolioFileName = `${name} - ${CV_POSITION}, ${region}`

	return (
		<Layout>
			<Helmet>
				<title>{`${name} - ${position}`}</title>
			</Helmet>

			<DesktopLayout>
				<DesktopSidebar>
					<PhotoSection />
					<LocationSection location={location} />
					<AboutSection summary={summary} />
					<EducationSection education={education} />
					<SkillsSection skills={skills} />
					<LanguagesSection languages={languages} />
				</DesktopSidebar>

				<section>
					<HeaderSection
						name={name}
						position={position}
						social={social}
						portfolioFile={portfolioPdf}
						portfolioFileName={portfolioFileName}
					/>
					<ExperienceSection experience={experience} />
				</section>
			</DesktopLayout>

			<MobileLayout>
				<MobileHeader>
					<PhotoSection />
					<HeaderSection
						name={name}
						position={position}
						social={social}
						portfolioFile={portfolioPdf}
						portfolioFileName={portfolioFileName}
					/>
				</MobileHeader>

				<AboutSection summary={summary} />
				<SkillsSection skills={skills} />
				<LanguagesSection languages={languages} />
				<EducationSection education={education} />
				<ExperienceSection experience={experience} />
				<ContactsSection social={social} portfolioFile={portfolioPdf} portfolioFileName={portfolioFileName} />
			</MobileLayout>
		</Layout>
	)
}

export default IndexPage
