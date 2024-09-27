import React from "react"
import styled from "styled-components"

import { Paragraph, Bold, H5, Small } from "./shared/typography"

import { withOptional } from "./utils/with-optional.component"

export const EducationExperience = ({ date, place, position, children }) => (
	<section>
		<ExperienceHeader>
			<H5>
				{position} / {place}
			</H5>
			<Paragraph>{date}</Paragraph>
			{children}
		</ExperienceHeader>
	</section>
)

export const WorkExperience = ({ date, place, position, project: { summary, area, team, technologies, responsibilities, challenges } }) => {
	const mergedTechnologies = technologies.reduce((x, y) => (x += `, ${y}`))
	return (
		<section>
			<ExperienceHeader>
				<H5>
					{position} / {place}
				</H5>
				<Paragraph>{date}</Paragraph>
			</ExperienceHeader>
			<ExperienceBody>
				<OptionalExperienceField title="Project Summary" data={summary} />
				<OptionalExperienceField title="Area" data={area} />
				<OptionalExperienceField title="Team" data={team} />
				<OptionalExperienceField title="Technologies" data={mergedTechnologies} />
				<OptionalExperienceList title="Responsibilities" data={responsibilities} />
				<OptionalExperienceList title="Challenges" data={challenges} />
			</ExperienceBody>
		</section>
	)
}

const ExperienceHeader = styled.div`
	H5 {
		margin: 1px;
	}

	margin-bottom: 8px;
`

const ExperienceBody = styled.div``

const ExperienceField = ({ title, data }) => (
	<Paragraph>
		<Bold>{title}: </Bold>
		<Small>{data}</Small>
	</Paragraph>
)

const OptionalExperienceField = withOptional(ExperienceField)

const ExperienceList = ({ title, data }) => (
	<section>
		<Bold>{title}: </Bold>
		<ul>
			{data && data.length
				? data.map((item) => (
						<li key={item}>
							<Small>{item}</Small>
						</li>
				  ))
				: null}
		</ul>
	</section>
)

const OptionalExperienceList = withOptional(ExperienceList)
