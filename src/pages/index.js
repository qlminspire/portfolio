import * as React from 'react';

import { Helmet } from 'react-helmet';

import { PortfolioHeader } from '../components/portfolio/header/header.component';
import { PortfolioSection } from '../components/portfolio/section/portfolio-section.component';
import { Layout } from '../components/layout/layout.component';
import { PortfolioExperience } from '../components/portfolio/experience/experience.component';

import { Flexbox, Tag } from '../styles/components';
import { Paragraph, Small } from '../styles/typography';

import { PortfolioWorkExperience } from '../components/portfolio/work-experience/work-experience.component';
import { SocialLinks } from '../components/social/social.styled';

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

  const tags = [ position, region ];

  return (
    <Layout>
      <Helmet>
        <title>{`${name} - ${position}`}</title>s
      </Helmet>
      <PortfolioHeader name={name} tags={tags}>
        <SocialLinks
          emailUrl={email}
          linkedInUrl={linkedin}
          githubUrl={github}
        ></SocialLinks>
      </PortfolioHeader>

      {summary ? (
        <PortfolioSection title='Summary'>
          <Paragraph>{summary}</Paragraph>
        </PortfolioSection>
      ) : null}
      {skills ? (
        <PortfolioSection title='Skills'>
          <Flexbox gap={8}>
            {skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </Flexbox>
        </PortfolioSection>
      ) : null}
      {languages ? (
        <PortfolioSection title='Languages'>
          <Flexbox gap={8}>
            {languages.map(({ language, level }) => (
              <Tag key={language}>
                <Paragraph>{language}</Paragraph>
                <Small>{level}</Small>
              </Tag>
            ))}
          </Flexbox>
        </PortfolioSection>
      ) : null}
      {education ? (
        <PortfolioSection title='Education'>
          <Flexbox flow='column' gap={16}>
            {education.map(({ summary, ...otherProps }) => (
              <PortfolioExperience key={otherProps.date} {...otherProps}>
                {summary}
              </PortfolioExperience>
            ))}
          </Flexbox>
        </PortfolioSection>
      ) : null}
      {experience ? (
        <PortfolioSection title='Experience'>
          <Flexbox flow='column' gap={16}>
            {experience.map(({ project, ...otherProps }) => (
              <PortfolioWorkExperience
                key={otherProps.date}
                project={project}
                {...otherProps}
              />
            ))}
          </Flexbox>
        </PortfolioSection>
      ) : null}
    </Layout>
  );
};

export default IndexPage;
