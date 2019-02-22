import styled from 'styled-components';
import { ContainerStyles } from './styles';

const MainStyles = styled.main`
  min-height: calc(100vh - 6rem);

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    min-height: calc(100vh - 4rem);
  }
`;

const MainContainer = styled(ContainerStyles)`
  padding-top: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 100px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: 0 100px;
  }
`;

const Main = props => (
  <MainStyles>
    <MainContainer>{props.children}</MainContainer>
  </MainStyles>
);

export default Main;
