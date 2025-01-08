import styled from 'styled-components';

export const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  background-color: ${(props) =>
    props.variant === 'primary' ? '#007bff' : '#6c757d'};
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;
