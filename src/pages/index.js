import * as React from 'react';

import { Helmet } from 'react-helmet';

import { PortfolioHeader } from '../components/portfolio/header/header.component';
import { OptionalPortfolioSection } from '../components/portfolio/section/portfolio-section.component';
import { Layout } from '../components/layout/layout.component';
import { PortfolioExperience } from '../components/portfolio/experience/experience.component';

import { Flexbox, Tag } from '../styles/components';
import { Paragraph, Small } from '../styles/typography';

import { PortfolioWorkExperience } from '../components/portfolio/work-experience/work-experience.component';
import { SocialLinksFixed, SocialContainer } from '../components/social/social.styled';

import { PORTFOLIO_METADATA as metadata } from '../data/portfolio-metadata';

const IndexPage = () => {
  const {
    name,
    position,
    region,
    social,
    summary,
    skills,
    languages,
    education,
    experience,
  } = metadata;

  const { email, linkedin, github } = social;

  const tags = [position, region];

  return (
    <Layout>
      <Helmet>
        <title>{`${name} - ${position}`}</title>
      </Helmet>
      <PortfolioHeader name={name} tags={tags}>
        <SocialLinksFixed
          emailUrl={email}
          linkedInUrl={linkedin}
          githubUrl={github}
        ></SocialLinksFixed>
      </PortfolioHeader>
      <OptionalPortfolioSection title='Summary' data={summary}>
        <Paragraph>{summary}</Paragraph>
      </OptionalPortfolioSection>
      <OptionalPortfolioSection title='Skills' data={skills}>
        <Flexbox gap={8}>
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </Flexbox>
      </OptionalPortfolioSection>
      <OptionalPortfolioSection title='Languages' data={languages}>
        <Flexbox gap={8}>
          {languages.map(({ language, level }) => (
            <Tag key={language}>
              <Paragraph>{language}</Paragraph>
              <Small>{level}</Small>
            </Tag>
          ))}
        </Flexbox>
      </OptionalPortfolioSection>
      <OptionalPortfolioSection title='Education' data={education}>
        <Flexbox flow='column' gap={16}>
          {education.map(({ summary, ...otherProps }) => (
            <PortfolioExperience key={otherProps.date} {...otherProps}>
              {summary}
            </PortfolioExperience>
          ))}
        </Flexbox>
      </OptionalPortfolioSection>
      <OptionalPortfolioSection title='Experience' data={experience}>
        <Flexbox flow='column' gap={16}>
          {experience.map(({ project, ...otherProps }) => (
            <PortfolioWorkExperience
              key={otherProps.date}
              project={project}
              {...otherProps}
            />
          ))}
        </Flexbox>
      </OptionalPortfolioSection>
      <OptionalPortfolioSection
        title='Contact Information'
        data={social}
      >
        <SocialContainer
          emailUrl={email}
          linkedInUrl={linkedin}
          githubUrl={github}
        ></SocialContainer>
      </OptionalPortfolioSection>
    </Layout>
  );
};

export default IndexPage;
