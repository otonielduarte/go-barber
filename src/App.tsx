import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
/* import SignUp from './pages/SignUp'; */
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/globals';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
