import React from 'react'
import { Title } from '@mantine/core';
import UsersStations from '../../components/Profile/UsersStations'
import Layout from '../../components/Layout/Layout';

const AccountStations = () => {
  return (
    <>
    <Layout>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}><Title order={1}>Your Charging Stations (0)</Title></div>
      <UsersStations />
    </Layout>
    </>
  )
}

export default AccountStations