import React, { FormHTMLAttributes, useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationsErrors';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // eslint-disable-next-line @typescript-eslint/ban-types
  const onSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome is required'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is not valid'),
        password: Yup.string().min(6, 'Password must be 6 characters'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      formRef.current?.setErrors(getValidationErrors(err));
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={onSubmit} ref={formRef}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" placeholder="Nome" type="text" icon={FiUser} />

          <Input name="email" placeholder="E-mail" type="email" icon={FiMail} />

          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para login
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
