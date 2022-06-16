import React from 'react'
import { Title } from '@mantine/core';
import Layout from '../../components/Layout/Layout';
import UsersFavStations from '../../components/Profile/UsersFavStations';

const Favorites = () => {

  return (
    <>
    <Layout>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}><Title order={1}>Your Favorite Stations (0)</Title></div>
      <UsersFavStations />
    </Layout>
    </>
  )
}

export default Favorites