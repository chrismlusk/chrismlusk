import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
  SectionStyles,
  FullGrid,
  ContentStyles,
  Button
} from './styles';

const WelcomeStyles = styled(ContentStyles)`
  max-width: 380px;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    max-width: 580px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    max-width: 700px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    max-width: 820px;
  }
`;

const MyTitle = styled.div`
  color: inherit;
  font-size: 2.25em;
  font-weight: 700;
  line-height: 1.1;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 3.75em;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 4.125em;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    font-size: 4.5em;
  }

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const MyBlurb = styled.p`
  margin-top: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-top: 2rem;
  }
`;

const MyButton = styled(Button)`
  margin-top: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-top: 3rem;
  }
`;

const Welcome = () => (
  <SectionStyles id="welcome">
    <FullGrid>
      <WelcomeStyles>
        <MyTitle>
          Hi, my name is <span>Chris Lusk</span>. I build things for people.
        </MyTitle>
        <MyBlurb>
          I'm a full-stack software developer based in Chicago who enjoys
          working at the intersection of engineering and design. I am looking
          for my next opportunity.
        </MyBlurb>
        <MyButton>
          <Link prefetch href="/hire-me">
            <a className="button">Hire Me</a>
          </Link>
        </MyButton>
      </WelcomeStyles>
    </FullGrid>
  </SectionStyles>
);

export default Welcome;
