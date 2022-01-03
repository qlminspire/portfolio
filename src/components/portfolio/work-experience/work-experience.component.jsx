import React from 'react';

import { PortfolioExperience } from '../experience/experience.component';
import { OptionalParagraph } from '../../typography/optional-paragraph.component';

export const PortfolioWorkExperience = ({
  date,
  place,
  position,
  project: { summary, area, team, technologies, responsibilities, challenges },
}) => (
  <PortfolioExperience key={date} date={date} place={place} position={position}>
    <OptionalParagraph title='Project Summary'>{summary}</OptionalParagraph>
    <OptionalParagraph title='Area'>{area}</OptionalParagraph>
    <OptionalParagraph title='Team'>{team}</OptionalParagraph>
    {technologies && technologies.length ? (
      <OptionalParagraph title='Technologies'>
        <ul>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </OptionalParagraph>
    ) : null}
    {responsibilities && responsibilities.length ? (
      <OptionalParagraph title='Responsibilities'>
        <ul>
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </OptionalParagraph>
    ) : null}
    {challenges && challenges.length ? (
      <OptionalParagraph title='Challenges'>
        <ul>
          {challenges.map((challenge) => (
            <li key={challenge}>{challenge}</li>
          ))}
        </ul>
      </OptionalParagraph>
    ) : null}
  </PortfolioExperience>
);
