import React from 'react'
import { Title } from '@mantine/core';
import StationsHome from '../components/StationsHome'

const ProfileStations = () => {
  return (
    <>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}><Title order={3}>Austin's Charging Stations</Title></div>
      <StationsHome />
    </>
  )
}

export default ProfileStations