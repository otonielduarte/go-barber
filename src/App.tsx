import React from 'react';
import SignIn from './pages/SignIin';

import GlobalStyle from './styles/globals';

const App: React.FC = () => (
  <div className="GoBarber">
    <SignIn />
    <GlobalStyle />
  </div>
);

export default App;
