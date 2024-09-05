import React from "react";
import FontStyles from "../../styles/fontStyles";
import GlobalStyle from "../../styles/globalStyles";
import { Helmet } from "react-helmet";

import { Layout as LayoutContainer } from "./layout.styled";

export const Layout = ({ children, className }) => (
  <LayoutContainer className={className}>
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8"></meta>
    </Helmet>
    <FontStyles />
    <GlobalStyle />
    {children}
  </LayoutContainer>
);
