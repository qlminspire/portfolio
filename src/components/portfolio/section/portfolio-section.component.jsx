import React from 'react';

import { Section } from '../../../styles/components';
import { H2 } from '../../../styles/typography';
import { withOptional } from '../../optional/with-optional.component';

export const PortfolioSection = ({ title, children }) => (
  <Section>
    <H2>{title}</H2>
    {children}
  </Section>
);

export const OptionalPortfolioSection = withOptional(PortfolioSection);
