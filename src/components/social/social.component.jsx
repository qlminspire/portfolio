import React from 'react';

import { Tag } from '../../styles/components';

import EmailIcon from '../../assets/mail-outline.svg';
import LinkedInIcon from '../../assets/logo-linkedin.svg';
import GithubIcon from '../../assets/logo-octocat.svg';

const IconSize = { height: '22x', width: '22px' };

export const Social = ({ emailUrl, linkedInUrl, githubUrl, className }) => (
  <Tag className={className}>
      <a href={`mailto:${emailUrl}`} target='_blank' rel='noopener noreferrer'>
        <EmailIcon style={IconSize} />
      </a>
      <a href={linkedInUrl} target='_blank' rel='noopener noreferrer'>
        <LinkedInIcon style={IconSize} />
      </a>
      <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
        <GithubIcon style={IconSize} />
      </a>
  </Tag>
);
