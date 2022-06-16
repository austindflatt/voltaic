import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { StationContextProvider } from './context/stationContext/StationContext';
import { UserContextProvider } from './context/userContext/UserContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <UserContextProvider>
      <StationContextProvider>
        <App />
      </StationContextProvider>
    </UserContextProvider>
  </AuthContextProvider>
);