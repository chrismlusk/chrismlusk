import styled from 'styled-components';

const ContentStyles = styled.div`
  color: ${({ theme }) => theme.body.color};
  font-size: 1.075rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 1.15rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    font-size: 1.25rem;
  }

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
    margin-top: 2rem;

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

    li + li {
      margin-top: .25em;
    }
  }

  a:not(.button) {
    font-weight: 700;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.link.hover.bg};
    }

    &:active {
      color: ${({ theme }) => theme.body.color};
      background-color: ${({ theme }) => theme.link.active.bg};
    }
  }
`;

export default ContentStyles;
