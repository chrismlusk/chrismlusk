import styled from 'styled-components';

const SectionStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  margin: 0 auto;
  padding: 50px 0;
  max-width: 1080px;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 100px 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 150px 0;
  }
`;

export default SectionStyles;
