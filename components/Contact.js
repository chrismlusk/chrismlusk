import React from 'react';
import {
  SectionStyles,
  ContentStyles,
  FullGrid,
  Heading,
  LeadGraph,
  Button
} from './styles';

const Contact = () => (
  <SectionStyles id="contact">
    <FullGrid>
      <Heading>Say Hello</Heading>
    </FullGrid>
    <FullGrid>
      <ContentStyles>
        <LeadGraph>
          I'm currently looking for a full-time software developer role in
          Chicago.
        </LeadGraph>
        <p>Whether you have an opportunity you want to discuss or you
          just want to say hi, my inbox is always open.
        </p>
        <Button>
          <a
            className="button"
            href="mailto:chris.m.lusk@gmail.com?subject=Hi there 👋🏼"
          >
            Email Me
          </a>
        </Button>
      </ContentStyles>
    </FullGrid>
  </SectionStyles>
);

export default Contact;
