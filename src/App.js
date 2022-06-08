import React, { useContext } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mantine/core';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Account from './pages/Account';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import AccountStations from './pages/AccountStations';
import Reviews from './pages/Reviews';
import HostCharger from './pages/HostCharger';
import AddCharger from './pages/AddCharger';
import Footer from './components/Footer';
import Register from './pages/Register';
import StationsMap from './pages/StationsMap';
import { AuthContext } from './context/authContext/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

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
      <Route path='/login' element={user ? <Profile /> : <Login />} />
      <Route path='/register' element={user ? <Profile /> : <Register />} />
      <Route path='account' element={<Account />} />
      <Route path='maps' element={<StationsMap />} />
      <Route path='account/favorites' element={<Favorites />} />
      <Route path='account/stations' element={<AccountStations />} />
      <Route path='account/reviews' element={<Reviews />} />
      <Route path='user/:id' element={<Profile />} />
      <Route path='account/host-charger' element={<HostCharger />} />
      <Route path='account/add-charger' element={<AddCharger />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    </Container>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App