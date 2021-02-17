import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  loading?: boolean;
}

const Input: React.FC<ButtonProps> = ({ type, loading, children, ...rest }) => (
  <StyledButton type={type} {...rest}>
    {loading ? 'Carregando...' : children}
  </StyledButton>
);
export default Input;
