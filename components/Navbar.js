import React, { Children } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import Logo from './Logo';
import { Button } from './styles';

const NavLogoStyles = styled.div`
  a {
    display: block;
  }

  svg {
    fill: ${({ theme }) => theme.body.color};
    transition: ${({ theme }) => theme.transition.base};
    width: 2rem;
    height: 2rem;

    @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
      width: 2.5rem;
      height: 2.5rem;
    }

    &:hover,
    &:focus {
      fill: ${({ theme }) => theme.color.gray600};
    }
  }
`;

const NavListStyles = styled.ul`
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-left: auto;
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.color.gray400};

      &:hover {
        color: ${({ theme }) => theme.body.color};
      }
    }
  }

  a {
    padding: .75rem 1rem;
    display: block;
    position: relative;
    color: ${({ theme }) => theme.color.gray700};
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    text-transform: inherit;

    &.is-active {
      color: inherit;

      span::after {
        background-color: ${({ theme }) => theme.primary};
        transform: scaleX(1);
        transition: transform .2s ease-in-out;
      }
    }

    &:hover,
    &:focus {
      color: black;
    }

    span {
      position: relative;
      overflow: hidden;
      padding: 0 .25rem;
      display: block;

      &::after {
          background-color: transparent;
          content: "";
          height: 2px;
          margin-top: -2px;
          position: absolute;
            top: 50%;
            left: 0;
          transform: scale3d(0,0,0);
          transform-origin: left;
          width: 100%;
          will-change: transform;
      }
    }
  }
`;

const NavButtonStyles = styled(Button)`
  margin-left: 1.25rem;

  a {
    padding: .75rem 1rem;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    text-transform: none;
  }
`;

const NavbarStyles = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.body.bg};
  display: flex;
  counter-reset: item 0;
  font-size: .875rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    height: 100px;
  }
`;

const NavLogo = () => (
  <NavLogoStyles>
    <Link href="/">
      <a><Logo /></a>
    </Link>
  </NavLogoStyles>
);

const NavLink = withRouter(({ router, children, ...props }) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      className: router.pathname === props.href ? `is-active` : null
    })}
  </Link>
));

const NavList = () => (
  <NavListStyles>
    <li>
      <NavLink prefetch href="/">
        <a><span>Home</span></a>
      </NavLink>
    </li>
    <li>
      <NavLink prefetch href="/about">
        <a><span>About</span></a>
      </NavLink>
    </li>
    <li>
      <NavLink prefetch href="/projects">
        <a><span>Projects</span></a>
      </NavLink>
    </li>
    <li>
      <NavLink prefetch href="/contact">
        <a><span>Contact</span></a>
      </NavLink>
    </li>
  </NavListStyles>
);

const HireMeButton = () => (
  <NavButtonStyles>
    <a
      href="/static/resume.pdf"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      Resume
    </a>
  </NavButtonStyles>
);

const Navbar = () => (
  <NavbarStyles>
    <NavLogo />
    <NavList />
    <HireMeButton />
  </NavbarStyles>
);

export default Navbar;
