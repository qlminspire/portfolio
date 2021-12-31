import React from 'react';

import { Paragraph, Bold } from '../../styles/typography';

export const OptionalParagraph = ({ title, children }) =>
  children ? (
    <Paragraph>
      <Bold>{title}:</Bold> {children}
    </Paragraph>
  ) : null;
