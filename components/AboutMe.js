import React from 'react';
import styled from 'styled-components';
import {
  SectionStyles,
  ContentStyles,
  FullGrid,
  HalfGrid,
  Heading,
  LeadGraph
} from './styles';

const HalfGridOne = styled(HalfGrid)``;

const HalfGridTwo = styled(HalfGrid)``;

const AboutMe = props => (
  <SectionStyles id="about">
    <FullGrid>
      <Heading>About Me</Heading>
    </FullGrid>
    <HalfGridOne>
      <ContentStyles>
        <LeadGraph>
          I'm a software developer with a background in design and journalism.
        </LeadGraph>

        <p>My first job after college was as a news designer for the <a href="https://www.ocregister.com" target="_blank" rel="nofollow noopener noreferrer">Orange County Register</a>, where I was fortunate to have supportive bosses who let me join the digital team as a web designer. That experience got me hooked on HTML and CSS, and I decided to change careers.</p>

        <p>After honing my front-end skills at <a href="https://www.accuraty.com" target="_blank" rel="nofollow noopener noreferrer">Accuraty Solutions</a>, I attended <a href="https://www.fullstackacademy.com" target="_blank" rel="nofollow noopener noreferrer">Fullstack Academy</a> in Chicago to better learn full-stack development. I work there now as a teaching fellow helping bootcamp students learn JavaScript.</p>

        <p>When I'm not coding or messing around with new CSS features, I'm usually reading, listening to podcasts, playing music, or catching up on TV I forgot to watch.</p>
      </ContentStyles>
    </HalfGridOne>
    <HalfGridTwo>
      <img src="/static/images/me_2018_bw.jpg" alt="Chris Lusk" />
    </HalfGridTwo>
  </SectionStyles>
);

export default AboutMe;
