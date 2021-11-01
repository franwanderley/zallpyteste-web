import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Routes from './Routes';
import { GlobalStyle } from './styles/global';

function App() {
  const userStorage = JSON.parse(localStorage.getItem('zallpyteste/user'));
  return (
    <div className="App">
      <GlobalStyle/>
      <AuthProvider userStorage={userStorage}>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
