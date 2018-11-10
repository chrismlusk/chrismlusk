import styled from 'styled-components';

const SectionStyles = styled.section`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    grid-column: 1 / -1;
    justify-content: center;
    padding: 150px 0px;
    position: relative;

    @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
      grid-column: 2 / 10;
    }
`;

export default SectionStyles;
