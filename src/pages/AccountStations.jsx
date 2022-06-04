import React from 'react'
import { Title } from '@mantine/core';
import StationsHome from '../components/StationsHome'

const AccountStations = () => {
  return (
    <>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}><Title order={1}>Your Charging Stations (0)</Title></div>
      <StationsHome />
    </>
  )
}

export default AccountStations