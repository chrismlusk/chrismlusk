import styled from 'styled-components';

const SectionStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  margin: 0 auto;
  padding: 50px 0;
  max-width: 1080px;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    &:first-child {
      padding-top: 1rem;
    }

    &:last-child {
      padding-bottom: 1rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    gap: 2rem;
    padding: 150px 0;
  }
`;

export default SectionStyles;
