import React, { useContext } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/Misc/NotFound';
import Login from './components/Login/Login';
import Account from './components/Profile/AccountModal';
import Favorites from './pages/Profile/AccountFavorites';
import Profile from './pages/Profile/ProfilePage';
import AccountStations from './pages/Profile/AccountStations';
import AddCharger from './components/Profile/AddChargerModal';
import Register from './components/Register/Register';
import StationsMap from './pages/Map/StationsMap';
import StationPage from './pages/Station/StationPage';
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
      <Route path='charger/:id' element={<StationPage />} />
      <Route path='/login' element={user ? <Profile /> : <Login />} />
      <Route path='/register' element={user ? <Profile /> : <Register />} />
      <Route path='account' element={<Account />} />
      <Route path='/:username' element={<Profile />} />
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