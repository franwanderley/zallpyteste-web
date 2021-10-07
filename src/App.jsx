import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Routes from './Routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
