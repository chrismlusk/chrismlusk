import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;

  li {
    display: flex;
  }

  a {
    padding: ${({ theme }) => theme.nav.link.paddingY} ${({ theme }) => theme.nav.link.paddingX};
    display: block;
    position: relative;
    font-weight: 700;
    color: ${({ theme }) => theme.nav.link.color};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.nav.link.hover.color};
    }
  }
`;

export default NavStyles;
