import React from 'react';
import styled from 'styled-components';
import { Label } from './styles';

const WelcomeStyles = styled.section`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  margin: 0px auto;
  padding: 150px 0px;
`;

const MyName = styled.h1`
  margin: 0;
  font-size: 3rem;
  text-shadow: 3px -2px 0 rgba(0, 0, 0, .08);

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 5rem;
  }
`;

const MyTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.gray500};

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 1.75rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 2.5rem;
  }
`;

const MyBlurb = styled.p`
  margin-top: 2rem;
  font-size: 1.125rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    max-width: 50%;
  }
`;

const Welcome = props => (
  <WelcomeStyles>
    <Label>Hi! My name is</Label>
    <MyName>Chris Lusk</MyName>
    <MyTitle>I build things for the web</MyTitle>
    <MyBlurb>I'm a full-stack software developer based in Chicago who enjoys working at the intersection of engineering and design. I am currently looking for my next opportunity.</MyBlurb>
  </WelcomeStyles>
);

export default Welcome;
