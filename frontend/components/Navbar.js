import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';
import { Button } from './styles';

const NavLogoStyles = styled.div`
  width: 2.5rem;
  height: auto;

  svg {
    fill: ${({ theme }) => theme.body.color};
    transition: ${({ theme }) => theme.transition.base};

    &:hover,
    &:focus {
      fill: ${({ theme }) => theme.color.gray600};
    }
  }
`;

const NavMenuStyles = styled.div`
  display: flex;
  align-items: center;
`;

const NavListStyles = styled.ul`
  display: flex;

  li {
    display: flex;
  }

  a {
    padding: .5rem .75rem;
    display: block;
    position: relative;
    font-weight: 700;
    color: ${({ theme }) => theme.nav.link.color};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.nav.link.hover.color};
    }
  }
`;

const NavButtonStyles = styled(Button)`
  margin-left: .75rem;

  a {
    padding: .75rem 1rem;
  }
`;

const NavbarStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  counter-reset: item 0;
  position: relative;
`;

const NavLogo = () => (
  <NavLogoStyles>
    <Link href="/">
      <a><Logo /></a>
    </Link>
  </NavLogoStyles>
);

const NavList = () => (
  <NavListStyles>
    <li>
      <Link href="/about">
        <a>About</a>
      </Link>
    </li>
    <li>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
    </li>
    <li>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </li>
  </NavListStyles>
);

const HireMeButton = () => (
  <NavButtonStyles>
    <Link href="/hire-me">
      <a>Hire Me</a>
    </Link>
  </NavButtonStyles>
);

const Navbar = () => (
  <NavbarStyles>
    <NavLogo />
    <NavMenuStyles>
      <NavList />
      <HireMeButton />
    </NavMenuStyles>
  </NavbarStyles>
);

export default Navbar;
