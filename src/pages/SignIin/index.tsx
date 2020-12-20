import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu login</h1>

          <div className="input-container">
            <input placeholder="E-mail" />
            <FiMail
              style={{ left: '1.5rem', top: '1.5rem', position: 'absolute' }}
              size="1.5em"
              color="#666360"
            />
          </div>

          <div className="input-container">
            <FiLock
              style={{
                left: '1.5rem',
                top: '1.5rem',
                position: 'absolute',
              }}
              color="#666360"
              size="1.5em"
            />
            <input type="password" placeholder="Senha" />
          </div>

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="signup">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
