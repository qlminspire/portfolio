import React from 'react';

import { PortfolioExperience } from '../experience/experience.component';
import { OptionalParagraph } from '../../typography/optional-paragraph.component';

export const PortfolioWorkExperience = ({
  date,
  place,
  position,
  project: { summary, area, team, technologies, responsibilities },
}) => (
  <PortfolioExperience key={date} date={date} place={place} position={position}>
    <OptionalParagraph title='Project Summary'>{summary}</OptionalParagraph>
    <OptionalParagraph title='Area'>{area}</OptionalParagraph>
    <OptionalParagraph title='Team'>{team}</OptionalParagraph>
    <OptionalParagraph title='Technology'>
      <ul>
        {technologies
          ? technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))
          : null}
      </ul>
    </OptionalParagraph>
    <OptionalParagraph title='Responsibility'>
      <ul>
        {responsibilities
          ? responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))
          : null}
      </ul>
    </OptionalParagraph>
  </PortfolioExperience>
);
