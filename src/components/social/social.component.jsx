import React from 'react';

import EmailIcon from '../../assets/mail-outline.svg';
import LinkedInIcon from '../../assets/logo-linkedin.svg';
import GithubIcon from '../../assets/logo-octocat.svg';
import DownloadPortfolio from '../../assets/arrow-down-circle-outline.svg';

import { ColorSettings } from '../../styles/globalStyles';

const { fontColor } = ColorSettings;

const IconStyles = { height: '22x', width: '22px', color: fontColor };

export const Social = ({ emailUrl, linkedInUrl, githubUrl, portfolioUrl, className }) => (
  <ul className={className}>
    <li>
      <a href={`mailto:${emailUrl}`} target='_blank' rel='noopener noreferrer'>
        <EmailIcon fill={fontColor} style={IconStyles} />
      </a>
    </li>
    <li>
      <a href={linkedInUrl} target='_blank' rel='noopener noreferrer'>
        <LinkedInIcon fill={fontColor} style={IconStyles} />
      </a>
    </li>
    <li>
      <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
        <GithubIcon fill={fontColor} style={IconStyles} />
      </a>
    </li>
    <li>
      <a href={portfolioUrl} download>
        <DownloadPortfolio fill={fontColor} style={IconStyles} />
      </a>
    </li>
  </ul>
);