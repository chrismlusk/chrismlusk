import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  SectionStyles,
  FullGrid,
  ContentStyles,
  LeadGraph,
  Highlight
} from '../components/styles';

const LeadBlurb = styled(LeadGraph)`
  padding-bottom: 1em;
  border-bottom: 5px solid ${({ theme }) => theme.color.gray200};
`;

const HireMe = props => (
  <SectionStyles>
    <FullGrid>
      <ContentStyles>
        <h1>Hi! I'm <Highlight>Chris Lusk</Highlight>.</h1>
        <LeadBlurb>I'm a full-stack software developer who enjoys working at the intersection of engineering and design. I'm ready for a new opportunity. Let's work together!</LeadBlurb>
        <h2>What</h2>
        <p>I'm looking for a front-end focused engineering role.</p>
        <p>Ideally you:</p>
        <ul>
          <li>Have a diverse team with diverse leadership</li>
          <li>Pay your staff fairly with no wage discrimination</li>
          <li>Have product, design, and engineering teams that collaborate</li>
          <li>Offer professional development opportunities</li>
          <li>Have great work/life balance</li>
          <li>Provide vacation, parental leave, and 401k matching</li>
        </ul>

        <h2>When</h2>
        <p>I am available December 2018.</p>

        <h2>Where</h2>
        <p>Chicago, Illinois. I'm also open to remote roles.</p>

        <h2>Why</h2>
        <p>I'm a developer with experience throughout the whole stack. I value pair programming and mentoring, so collaboration with colleagues is essential to me. I have a deep understanding of design, and I care about building intuitive user experiences. I enjoy writing CSS. I believe accessibility and performance are vital because the internet should be available to everyone. I love learning new technologies, but we should be more concerned with choosing the right tool for the job.</p>

        <p>I have experience working with JavaScript, CSS/Sass, React, Redux, Node, Express, and more.</p>
        <p>If you think I would be a good fit for your team, please email me at chrismlusk[at]gmail.com.</p>
        <p>For more details about my past work, please see my <a href="/static/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">resume</a>.</p>
      </ContentStyles>
    </FullGrid>
  </SectionStyles>
);

export default HireMe;
