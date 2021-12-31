import React from 'react';

import { Section } from '../../../styles/components';
import { H2 } from '../../../styles/typography';

export const PortfolioSection = ({ title, children }) => (
  <Section>
    <H2>{title}</H2>
    {children}
  </Section>
);
