import styled from 'styled-components';

const ContainerStyles = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 2rem;
  }
`;

export default ContainerStyles;
