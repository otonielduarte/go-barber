import React from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { Container, HeaderContent } from './styles';

import Profile from '../Profile';

import logoImg from '../../assets/logo.svg';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <img src={logoImg} alt="GoBarber" />

        <Profile />

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
