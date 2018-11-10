import React, { Fragment } from 'react';
import styled from 'styled-components';
import { SectionStyles, ContentStyles } from '../components/styles';

const LeadGraph = styled.p`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  font-size: 1.25em;
  border-bottom: 5px solid ${({ theme }) => theme.color.gray200};
`;

const HireMe = props => (
  <SectionStyles>
    <ContentStyles>
      <h1>Hi! I'm Chris Lusk</h1>
      <LeadGraph>I'm a full-stack software developer who enjoys working at the intersection of engineering and design. I'm ready for a new opportunity. Let's work together!</LeadGraph>
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
      <p>I am available in December 2018.</p>

      <h2>Where</h2>
      <p>Anywhere in Chicago, Illinois. I'm also open to remote roles.</p>

      <h2>About me</h2>
      <p>I'm a developer with experience throughout the whole stack. I value pair programming and mentoring, so collaboration with colleagues is essential to me. I have a deep understanding of design, and I care about building intuitive user experiences. I enjoy writing CSS. I believe accessibility and performance are vital because the internet should be available to everyone. I think Cool New Frameworks™️ are neat, but I only care about choosing the right tool for the job.</p>

      <p>I have experience working with JavaScript, CSS/Sass, React, Redux, Node, Express, and more.</p>
      <p>If you think I would be a good fit for your team, please email me at chrismlusk[at]gmail.com.</p>
      <p>For more details about my past work, please see my resume.</p>
    </ContentStyles>
  </SectionStyles>
);

export default HireMe;
