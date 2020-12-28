import React from 'react';
import SignIn from './pages/SignIin';
/* import SignUp from './pages/SignUp'; */
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/globals';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      {/*  <SignUp /> */}
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
