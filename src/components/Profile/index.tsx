import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <img src={user.avatar_url} alt={user.name} />
      <div>
        <span>Bem vindo,</span>
        <Link to="/profile">
          <strong>{user.name}</strong>
        </Link>
      </div>
    </Container>
  );
};

export default Profile;
