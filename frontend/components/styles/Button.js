import styled from 'styled-components';

const Button = styled.div`
  display: flex;

  a,
  button {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 2px;
    color: ${({ theme }) => theme.primary};
    font-family: ${({ theme }) => theme.fontFamily.mono};
    font-size: 1em;
    line-height: 1.5;
    padding: .75rem 1.5rem;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.color.white};
    }
  }
`;

export default Button;
