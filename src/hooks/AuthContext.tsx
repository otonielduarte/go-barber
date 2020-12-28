import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface SignInCredientials {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: object;
  signOut(): void;
  signin(credentials: SignInCredientials): Promise<void>;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@gobarber:token');
    const user = localStorage.getItem('@gobarber:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth', {
      email,
      password,
    });
    if (response.status === 200) {
      const { token, user } = response.data;
      localStorage.setItem('@gobarber:token', token);
      localStorage.setItem('@gobarber:user', JSON.stringify(user));
      setData({ token, user });
    }
  }, []);

  const signOut = useCallback(() => {
    setData({} as AuthState);
    localStorage.removeItem('@gobarber:token');
    localStorage.removeItem('@gobarber:user');
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signin: signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Context must be used within an ContextProvider');
  }
  return context;
}
