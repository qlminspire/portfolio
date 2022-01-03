import React from 'react';
import FontStyles from '../../styles/fontStyles';
import GlobalStyle from '../../styles/globalStyles';

import { Layout as LayoutContainer } from './layout.styled';

export const Layout = ({ children, className }) => (
  <LayoutContainer className={className}>
    <FontStyles />
    <GlobalStyle />
    {children}
  </LayoutContainer>
);
