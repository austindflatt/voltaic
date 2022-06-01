import React from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Container } from '@mantine/core';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import Account from './pages/Account';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import AccountStations from './pages/AccountStations';
import AccountTrips from './pages/AccountTrips';
import Messages from './pages/Messages';
import HostCharger from './pages/HostCharger';

function App() {

  return (
    <>
    <BrowserRouter>
    <Helmet>
      <title>Voltaic - EV Charging Stations</title>
      <meta name='title' content='Voltaic' />
      <meta name='description' content='EV Charging Stations' />
      <meta property="og:title" content='Voltaic - EV Charging Stations' />
      <meta property="og:description" content='EV Charging Stations' />
      <meta property="og:image" content='%PUBLIC_URL%/preview.png' />
    </Helmet>
    <NavBar />
    <Container size="lg">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='account' element={<Account />} />
      <Route path='account/favorites' element={<Favorites />} />
      <Route path='account/stations' element={<AccountStations />} />
      <Route path='account/trips' element={<AccountTrips />} />
      <Route path='account/messages' element={<Messages />} />
      <Route path='user/:id' element={<Profile />} />
      <Route path='account/host-charger' element={<HostCharger />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App