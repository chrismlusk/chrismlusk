import styled from 'styled-components';

const Heading = styled.h2`
  align-items: center;
  display: flex;
  font-size: 2rem;
  margin: 0;
  position: relative;
  white-space: nowrap;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 2.5rem;
  }

  &::before {
    counter-increment: section 1;
    content: '0' counter(section) '.';
    color: ${({ theme }) => theme.color.gray500};
    font-family: ${({ theme }) => theme.fontFamily.mono};
    font-size: 0.75em;
    font-weight: 400;
    margin-right: 0.75rem;
    position: relative;
    bottom: -1px;

    display: none;
    content: '';
  }

  &::after {
    background-color: ${({ theme }) => theme.color.gray300};
    content: '';
    display: block;
    margin-left: 1.5rem;
    position: relative;
    top: 1px;
    width: 6rem;
    height: 1px;
  }
`;

export default Heading;
