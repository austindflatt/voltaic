import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { StationContextProvider } from './context/stationContext/StationContext';
import { UserContextProvider } from './context/userContext/UserContext';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { CheckinContextProvider } from './context/checkinContext/CheckinContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <UserContextProvider>
      <StationContextProvider>
        <CheckinContextProvider>
          <App />
        </CheckinContextProvider>
      </StationContextProvider>
    </UserContextProvider>
  </AuthContextProvider>
);