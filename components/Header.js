import styled from 'styled-components';
import Navbar from './Navbar';
import { ContainerStyles } from './styles';

const HeaderStyles = styled.header`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.96);
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 9;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    height: 100px;
  }
`;

const Header = () => (
  <HeaderStyles>
    <ContainerStyles>
      <Navbar />
    </ContainerStyles>
  </HeaderStyles>
);

export default Header;
