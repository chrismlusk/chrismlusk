import styled from 'styled-components';

const LeadGraph = styled.p`
  font-size: 1.5em;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 1.375em;
  }
`;

export default LeadGraph;
