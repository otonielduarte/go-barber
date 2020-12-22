import React, {
  ComponentType,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, ErrorContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
      {Icon && <Icon size="1.5em" />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        name={name}
        {...rest}
        ref={inputRef}
      />
      {error && (
        <ErrorContainer title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </ErrorContainer>
      )}
    </Container>
  );
};
export default Input;
