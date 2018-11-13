import styled from 'styled-components';

const Label = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.mono};
  color: ${({ theme }) => theme.secondary};
`;

export default Label;
