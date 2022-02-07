import React from 'react';

import { Tag } from '../../styles/components';

import EmailIcon from '../../assets/mail-outline.svg';
import LinkedInIcon from '../../assets/logo-linkedin.svg';
import GithubIcon from '../../assets/logo-octocat.svg';

import { ColorSettings } from '../../styles/globalStyles';

const { fontColor } = ColorSettings;

const IconStyles = { height: '22x', width: '22px', color: fontColor};

export const Social = ({ emailUrl, linkedInUrl, githubUrl, className }) => (
  <Tag className={className}>
      <a href={`mailto:${emailUrl}`} target='_blank' rel='noopener noreferrer'>
        <EmailIcon fill={fontColor} style={IconStyles} />
      </a>
      <a href={linkedInUrl} target='_blank' rel='noopener noreferrer'>
        <LinkedInIcon fill={fontColor} style={IconStyles} />
      </a>
      <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
        <GithubIcon fill={fontColor} style={IconStyles} />
      </a>
  </Tag>
);
