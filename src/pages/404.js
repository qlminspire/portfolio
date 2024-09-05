import * as React from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";

import { Section } from "../styles/components";
import { H1, Paragraph } from "../styles/typography";
import { Layout } from "../components/layout/layout.component";

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Page not found</title>s
    </Helmet>
    <Section>
      <H1>Page not found</H1>
      <Paragraph>
        <Link to="/">Go home</Link>
      </Paragraph>
    </Section>
  </Layout>
);

export default NotFoundPage;
