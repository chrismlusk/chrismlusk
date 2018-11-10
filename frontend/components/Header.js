import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Navbar from './Navbar';

// Router.events.on('routeChangeStart', () => console.log('routeChangeStart'));
// Router.events.on('routeChangeComplete', () => console.log('routeChangeDone'));
// Router.events.on('routeChangeError', () => console.log('routeChangeErr'));

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 9;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    height: 100px;
  }
`;

const Header = () => (
  <HeaderStyles>
    <Navbar />
  </HeaderStyles>
);

export default Header;
