import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
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

  @-ms-viewport {
    width: device-width;
  }

  article, aside, figcaption, figure, footer, header, main, nav, section {
    display: block;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 400;
    line-height: ${({ theme }) => theme.lineHeight.normal};
    color: ${({ theme }) => theme.body.color};
    text-align: left;
    background-color: ${({ theme }) => theme.body.bg};
  }

  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.heading.marginBottom};
  }

  p,
  ol,
  ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  ol,
  ul {
    padding: 0;
    list-style: none;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  a {
    color: ${({ theme }) => theme.link.color};
    text-decoration: ${({ theme }) => theme.link.decoration};
    background-color: transparent;
    transition: ${({ theme }) => theme.transition.base};

    &:hover {
      color: ${({ theme }) => theme.link.hover.color};
      text-decoration: ${({ theme }) => theme.link.hover.decoration};
    }
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  svg {
    overflow: hidden
    vertical-align: middle;
  }
`;

export default ResetStyles;
