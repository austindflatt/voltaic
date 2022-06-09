import React from 'react'
import { Title } from '@mantine/core';
import StationsHome from '../components/StationsHome'
import Layout from '../components/Layout';

const AccountStations = () => {
  return (
    <>
    <Layout>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}><Title order={1}>Your Charging Stations (0)</Title></div>
      <StationsHome />
    </Layout>
    </>
  )
}

export default AccountStations