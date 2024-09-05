import React from "react";

import { Flexbox, Section, Tag } from "../../../styles/components";
import { H1 } from "../../../styles/typography";

export const PortfolioHeader = ({ name, tags, children }) => (
  <Section>
    <H1>{name}</H1>
    <Flexbox>
      {tags ? tags.map((text) => <Tag key={text}>{text}</Tag>) : null}
      {children}
    </Flexbox>
  </Section>
);
