import React from "react";

import { PortfolioExperience } from "../experience/experience.component";
import { Paragraph, Bold } from "../../../styles/typography";
import { withOptional } from "../../optional/with-optional.component";

export const PortfolioWorkExperience = ({
  date,
  place,
  position,
  project: { summary, area, team, technologies, responsibilities, challenges },
}) => (
  <PortfolioExperience key={date} date={date} place={place} position={position}>
    <OptionalExperienceField title="Project Summary" data={summary} />
    <OptionalExperienceField title="Area" data={area} />
    <OptionalExperienceField title="Team" data={team} />
    <OptionalExperienceListField title="Technologies" data={technologies} />
    <OptionalExperienceListField
      title="Responsibilities"
      data={responsibilities}
    />
    <OptionalExperienceListField title="Challenges" data={challenges} />
  </PortfolioExperience>
);

const ExperienceField = ({ title, data }) => (
  <Paragraph>
    <Bold>{title}</Bold>: {data}
  </Paragraph>
);

const OptionalExperienceField = withOptional(ExperienceField);

const ExperienceListField = ({ title, data }) => (
  <section>
    <Bold>{title}</Bold>:
    <ul>
      {data && data.length
        ? data.map((item) => <li key={item}>{item}</li>)
        : null}
    </ul>
  </section>
);

const OptionalExperienceListField = withOptional(ExperienceListField);
