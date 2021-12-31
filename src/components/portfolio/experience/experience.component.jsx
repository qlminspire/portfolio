import React from 'react';

import { Section } from '../../../styles/components';
import { Paragraph } from '../../../styles/typography';

import { ExperienceBody, ExperienceHeader } from './experience.styled';

export const PortfolioExperience = ({ date, place, position, children }) => (
  <Section>
    <ExperienceHeader>
      <Paragraph>{date}</Paragraph>
      <Paragraph>{place}</Paragraph>
      <Paragraph>{position}</Paragraph>
    </ExperienceHeader>
    <ExperienceBody>{children}</ExperienceBody>
  </Section>
);
