import styled from 'styled-components';

const HalfGrid = styled.div`
  grid-column: 1 / -1;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-column: span 6;
  }
`;

export default HalfGrid;
