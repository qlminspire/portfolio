import * as React from 'react';

import { PortfolioHeader } from '../components/portfolio/header/header.component';
import { PortfolioSection } from '../components/portfolio/section/portfolio-section.component';
import { Layout } from '../components/layout/layout.styled';
import { PortfolioExperience } from '../components/portfolio/experience/experience.component';

import { Flexbox, Tag } from '../styles/components';
import { Paragraph, Small } from '../styles/typography';
import GlobalStyle from '../styles/globalStyles';
import FontStyles from '../styles/fontStyles';

import { PortfolioWorkExperience } from '../components/portfolio/work-experience/work-experience.component';
import {
  SocialFixedLeft,
} from '../components/social/social.styled';

const metadata = {
  name: 'Vladislav Karpovich',
  tags: ['.Net Developer', 'Brest, Belarus'],
  social: {
    email: 'vladislav.karpovich.work@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vladislav-karpovich-33b835192/',
    github: 'https://github.com/qlminspire',
  },
  summary: `Experienced Full-Stack Developer with over 4 years work in Web
  Development. Curious in developing beautifull things and tend to make
  the World Wide Web better. Interested in Productivity, Healthcare and
  Crypto areas.`,
  skills: ['.NET', 'C#', 'React', 'HTML', 'CSS', 'Javascript', 'SQL'],
  languages: [
    { language: 'Russian', level: 'Native' },
    { language: 'English', level: 'Pre-Intermediate' },
  ],
  education: [
    {
      date: 'August, 2017 - October, 2017',
      place: 'EPAM',
      position: 'Trainee (.NET)',
      summary: '',
    },
    {
      date: 'September, 2014 - June, 2018',
      place: 'Brest State Technical University',
      position: 'Bachelor (Information technologies Engineer)',
      summary: 'Automated systems of data processing',
    },
  ],
  experience: [
    {
      date: 'November, 2020 - November, 2021',
      place: 'Military Academy of Belarus',
      position: 'Software Developer',
      project: {
        summary:
          'Desing and development modules for military targeted desktop application based on WinForms.',
        area: 'Military',
        team: '3 Developers',
        technologies: ['WinForms'],
        responsibilities: [
          'Communication with customers',
          'Design',
          'Development',
          'Release',
        ],
      },
    },
    {
      date: 'March, 2019 - November, 2020',
      place: 'EPAM',
      position: 'Software Developer',
      project: {
        summary: `Part of Platform team on huge ASP.NET web-application in lawyalty.Design, migration and refactoring
        messaging system based on NServiceBus.Working with messaging, data integrity, database instructions and
        production bugs.`,
        area: 'Lawyalty',
        team: '15+ Developers, 2 QA',
        technologies: [],
        responsibilities: [],
      },
    },
    {
      date: 'October, 2017 - March, 2019',
      place: 'EPAM',
      position: 'Junior Software Developer',
      project: {
        summary: `Document management application for bank system.`,
        area: 'Bank, Finance',
        team: '3 Developers, 2 QA, BA',
        technologies: [
          '.NET API',
          'Entity Framework 6',
          'WinForms',
          'React',
          'Typescript',
        ],
        responsibilities: [
          'Design and development WinForms application',
          'Design and development React + TS application',
          'Communication with customer',
          'UI Design decisions',
        ],
      },
    },
  ],
};

const IndexPage = () => {
  const {
    name,
    tags,
    social,
    summary,
    skills,
    languages,
    education,
    experience,
  } = metadata;

  const { email, linkedin, github } = social;
  return (
    <Layout>
      <FontStyles />
      <GlobalStyle />
      <title>{`${name} - Portfolio`}</title>
      <PortfolioHeader name={name} tags={tags} />
      <SocialFixedLeft
        emailUrl={email}
        linkedInUrl={linkedin}
        githubUrl={github}
      ></SocialFixedLeft>
      {summary ? (
        <PortfolioSection title='Summary'>
          <Paragraph>{summary}</Paragraph>
        </PortfolioSection>
      ) : null}
      {skills ? (
        <PortfolioSection title='Skills'>
          <Flexbox>
            {skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </Flexbox>
        </PortfolioSection>
      ) : null}
      {languages ? (
        <PortfolioSection title='Languages'>
          <Flexbox>
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
          <Flexbox>
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
          <Flexbox flow='column'>
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
