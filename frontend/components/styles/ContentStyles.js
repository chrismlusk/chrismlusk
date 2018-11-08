import styled from 'styled-components';

const ContentStyles = styled.div`
  color: ${({ theme }) => theme.body.color};
  font-size: 1.1rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 1.175rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    font-size: 1.25rem;
  }

  blockquote,
  p,
  ol,
  ul {
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    margin-top: ${({ theme }) => parseFloat(theme.spacer) * 2}rem;

    &:first-child {
      margin-top: 0;
    }
  }

  h2 + h3,
  h3 + h4 {
    margin-top: 0;
  }

  ul {
    margin-top: 1em;
    margin-right: 2em;
    margin-left: 2em;
    list-style: disc outside;
  }

  ul {
    li + li {
      margin-top: .25em;
    }
  }

  a {
    font-weight: 700;
    border-bottom: 1px solid
      ${({ theme }) => theme.link.borderColor};

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.link.hover.bg};
      border-bottom-color: ${({ theme }) => theme.link.hover.borderColor};
    }

    &:active {
      color: ${({ theme }) => theme.link.active.color};
      background-color: ${({ theme }) => theme.link.active.bg};
      border-bottom-color: ${({ theme }) => theme.link.active.borderColor};
    }
  }
`;

export default ContentStyles;
