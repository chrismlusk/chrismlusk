import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  article, aside, figcaption, figure, footer, header, main, nav, section {
    display: block;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    min-height: 100vh;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.body.color};
    text-align: left;
    background-color: ${({ theme }) => theme.body.bg};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
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
  h5 { font-size: 1em; }
  h6 { font-size: 1em; }

  p,
  ol,
  ul {
    margin: 0;
  }

  ol,
  ul {
    padding: 0;
    list-style: none;
  }

  b,
  strong {
    font-weight: bolder;
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

  figure {
    margin: 0;
  }

  img {
    border-style: none;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
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
