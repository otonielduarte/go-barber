import React from 'react';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <img src={user.avatar_url} alt={user.name} />
      <div>
        <span>Bem vindo,</span>
        <strong>{user.name}</strong>
      </div>
    </Container>
  );
};

export default Profile;
