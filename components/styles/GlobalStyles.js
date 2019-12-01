import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  li,
  figure,
  figcaption {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.body.color};
    background-color: ${({ theme }) => theme.body.bg};
  }

  h1, h2, h3, h4 {
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 700;
    line-height: 1.1;
    color: inherit;
  }

  h1 { font-size: 2.25em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }
  h4 { font-size: 1.125em; }

  ul[class],
  ol[class] {
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    background-color: transparent;
    transition: ${({ theme }) => theme.transition.base};

    &:hover {
      color: ${({ theme }) => theme.body.color};
      text-decoration: none;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  svg {
    width: 1em;
    height: 1em;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
  }
`;

export default GlobalStyles;
