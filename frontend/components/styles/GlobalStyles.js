import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ATC Overlook';
    src: url('/static/fonts/atcoverlook-bold.woff2') format('woff2'),
         url('/static/fonts/atcoverlook-bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'ATC Overlook';
    src: url('/static/fonts/atcoverlook-regular.woff2') format('woff2'),
         url('/static/fonts/atcoverlook-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'ATC Overlook';
    src: url('/static/fonts/atcoverlook-thin.woff2') format('woff2'),
         url('/static/fonts/atcoverlook-thin.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Fira Mono';
    src: url('/static/fonts/firamono-regular.woff2') format('woff2'),
         url('/static/fonts/firamono-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${({ theme }) => theme.heading.marginBottom};
    font-family: ${({ theme }) => theme.heading.fontFamily};
    font-weight: ${({ theme }) => theme.heading.fontWeight};
    line-height: ${({ theme }) => theme.heading.lineHeight};
    color: inherit;
  }

  h1 { font-size: ${({ theme }) => theme.fontSize.h1}; }
  h2 { font-size: ${({ theme }) => theme.fontSize.h2}; }
  h3 { font-size: ${({ theme }) => theme.fontSize.h3}; }
  h4 { font-size: ${({ theme }) => theme.fontSize.h4}; }
  h5 { font-size: ${({ theme }) => theme.fontSize.h5}; }
  h6 { font-size: ${({ theme }) => theme.fontSize.h6}; }

  hr {
    margin-top: ${({ theme }) => theme.spacer};
    margin-bottom: ${({ theme }) => theme.spacer};
    border: 0;
    border-top: 1px solid ${({ theme }) =>
  theme.hr.borderColor};
  }

  small {
    font-size: 80%;
    font-weight: 400;
  }

  #test {
    background-image: url("/static/images/squiggles.svg");
    background-size: .75rem;
    background-position: top left;
  }

  main {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1rem 1rem;
    margin: 0 auto;
    padding-right: 1rem;
    padding-left: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
      padding-right: 5%;
      padding-left: 5%;
    }
  }
`;

export default GlobalStyles;
