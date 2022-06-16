import React, { useContext } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Main/Home';
import NotFound from './pages/Misc/NotFound';
import Login from './pages/Main/Login';
import Account from './pages/Profile/Account';
import Favorites from './pages/Profile/Favorites';
import Profile from './pages/Profile/Profile';
import AccountStations from './pages/Profile/AccountStations';
import AddCharger from './pages/Profile/AddCharger';
import Register from './pages/Main/Register';
import StationsMap from './pages/Map/StationsMap';
import StationPage from './pages/Main/StationPage';
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
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='maps' element={<StationsMap />} />
      <Route path='chargers/:id' element={<StationPage />} />
      <Route path='/login' element={user ? <Profile /> : <Login />} />
      <Route path='/register' element={user ? <Profile /> : <Register />} />
      <Route path='account' element={<Account />} />
      <Route path='user/:username' element={<Profile />} />
      <Route path='account/favorites' element={<Favorites />} />
      <Route path='account/stations' element={<AccountStations />} />
      <Route path='account/add-charger' element={<AddCharger />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App