import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
}

const Input: React.FC<ButtonProps> = ({ type, ...rest }) => (
  <StyledButton type={type} {...rest} />
);
export default Input;
