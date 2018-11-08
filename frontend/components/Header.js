import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Navbar from './Navbar';

// Router.events.on('routeChangeStart', () => console.log('routeChangeStart'));
// Router.events.on('routeChangeComplete', () => console.log('routeChangeDone'));
// Router.events.on('routeChangeError', () => console.log('routeChangeErr'));

const HeaderStyles = styled.header`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 2rem;
  }
`;

const Header = () => (
  <HeaderStyles>
    <Navbar />
  </HeaderStyles>
);

export default Header;
